FROM node:18-bookworm-slim

# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends python3 python3-pip python3-venv g++ build-essential  && \
    yarn config set python /usr/bin/python3

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN pip3 install mkdocs-techdocs-core

# Remove existing Yarn and install Yarn 4.x manually
# Enable Corepack and set correct Yarn version
RUN corepack enable && corepack prepare yarn@4.4.1 --activate

# From here on we use the least-privileged `node` user to run the backend.
USER node

WORKDIR /app

ENV NODE_ENV production

COPY --chown=node:node . .

COPY --chown=node:node node_modules/@headlamp-k8s/backstage-plugin-headlamp /app/node_modules/@headlamp-k8s/
COPY --chown=node:node node_modules/@headlamp-k8s/backstage-plugin-headlamp-backend /app/node_modules/@headlamp-k8s/

COPY --chown=node:node yarn.lock package.json packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz

# Set the correct permissions for the cache directory
RUN mkdir -p /home/node/.cache/node && \
    chown -R node:node /home/node/.cache

RUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \
    yarn workspaces focus --all --production

# Then copy the rest of the backend bundle, along with any other files we might want.
COPY --chown=node:node packages/backend/dist/bundle.tar.gz app-config*.yaml ./
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

COPY --chown=node:node ./catalog .

CMD ["node", "packages/backend", "--config", "app-config.yaml"]
