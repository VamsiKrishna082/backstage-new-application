(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1472,3402],{13660:(Pt,z,r)=>{"use strict";var a,m=r(4293),w=r(78920);a={value:!0},z.A=void 0;var I=w(r(14041)),k=m(r(74044)),V=(0,k.default)(I.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");z.A=V},33402:(Pt,z,r)=>{"use strict";r.d(z,{b:()=>Se,W:()=>Xe});var a=r(31085),m=r(14041),w=r(18690),I=r(82326),k=r(11618),V=r(66839),K=r(39781),ot=r(93285),B=r(42899),bt=r(4387),P=r(13660),A=r(15246),it=r(91072),pt=r(699),Dt=r(37281),Tt=r(14158),lt=r(97214),Mt=r(78560),xt=r(64398),jt=r(79182),St=r(18139),ct=r(54195),Ut=r(72814),ft=r(56005),Ht=r.n(ft),Gt=r(17749);const ye=(0,a.jsx)(bt.A,{animation:"wave",variant:"text",height:40}),ze=dt=>{const{children:X}=dt,gt=(0,k.YR)(),It=(0,St.gf)(ct.U),vt=(0,St.gf)(it.n),{"*":b=""}=(0,w.g)(),{title:yt,setTitle:mt,subtitle:At,setSubtitle:Z,entityRef:Q,metadata:{value:N,loading:J},entityMetadata:{value:wt,loading:_}}=(0,V.V)();(0,m.useEffect)(()=>{N&&(mt(N.site_name),Z(()=>{let{site_description:L}=N;return(!L||L==="None")&&(L=""),L}))},[N,mt,Z]);const at=It.getOptional("app.title")||"Backstage",{locationMetadata:Bt,spec:ie}=wt||{},Xt=ie?.lifecycle,_t=wt?(0,pt.t)(wt,lt.vv):[],Ze=(0,Ut.S)(Gt.rQ)(),we=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(xt.S,{label:Ht()(wt?.kind||"entity"),value:(0,a.jsx)(Dt.z,{color:"inherit",entityRef:Q,title:wt?.metadata.title,defaultKind:"Component"})}),_t.length>0&&(0,a.jsx)(xt.S,{label:"Owner",value:(0,a.jsx)(Tt.i,{color:"inherit",entityRefs:_t,defaultKind:"group"})}),Xt?(0,a.jsx)(xt.S,{label:"Lifecycle",value:String(Xt)}):null,Bt&&Bt.type!=="dir"&&Bt.type!=="file"?(0,a.jsx)(xt.S,{label:"",value:(0,a.jsxs)(B.A,{container:!0,direction:"column",alignItems:"center",children:[(0,a.jsx)(B.A,{style:{padding:0},item:!0,children:(0,a.jsx)(P.A,{style:{marginTop:"-25px"}})}),(0,a.jsx)(B.A,{style:{padding:0},item:!0,children:"Source"})]}),url:Bt.target}):null]});if(!_&&wt===void 0||!J&&N===void 0)return null;const Qt=(0,Mt.U2)(Q),le=vt.forEntity(Qt).snapshot.primaryTitle,Le=L=>L.replace(/\/$/,""),Ft=L=>L.replace(/-/g," ").split(" ").map(Ht()).join(" ");let Re=[];b!==""&&(Re=Le(b).split("/").slice(0,3).map(Ft));const ut=[at,le,...Re].join(" | ");return(0,a.jsxs)(jt.Y,{type:"Documentation",typeLink:Ze,title:yt||ye,subtitle:At===""?void 0:At||ye,children:[(0,a.jsx)(ot.A,{titleTemplate:"%s",children:(0,a.jsx)("title",{children:ut})}),we,X,gt.renderComponentsByLocation(A.e.Header)]})};var re=r(84893),zt=r(76888),Ee=r(85408),Be=r(12554),Te=r(95208),_e=r(64947),Fe=r(95159),$e=r(61617),Ae=r(91042),We=r(76842),Yt=r(71834);const Ot="/.backstage/auth/v1/cookie",Kt=365*24*36e5;function be(dt){const{pluginId:X}=dt??{},gt=(0,St.gf)(Fe.a),It=(0,St.gf)($e.I),vt=(0,m.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${X}-auth-cookie-expires-at`):null,[X]),[b,yt]=(0,Ae.Y)(async()=>{const Q=`${await It.getBaseUrl(X)}${Ot}`,N=await gt.fetch(`${Q}`,{credentials:"include"});if(!N.ok){if(N.status===404)return{expiresAt:new Date(Date.now()+Kt)};throw await Yt.o.fromResponse(N)}const J=await N.json();if(!J.expiresAt)throw new Error("No expiration date found in response");return J});(0,We.u)(yt.execute);const mt=(0,m.useCallback)(()=>{yt.execute()},[yt]),At=(0,m.useCallback)(Z=>{const Q=(1+3*Math.random())*6e4,N=Date.parse(Z.expiresAt)-Date.now()-Q,J=setTimeout(mt,N);return()=>clearTimeout(J)},[mt]);return(0,m.useEffect)(()=>{if(b.status!=="success"||!b.result)return()=>{};vt?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:b.result});let Z=At(b.result);const Q=N=>{const{action:J,payload:wt}=N.data;J==="COOKIE_REFRESH_SUCCESS"&&(Z(),Z=At(wt))};return vt?.addEventListener("message",Q),()=>{Z(),vt?.removeEventListener("message",Q)}},[b,At,vt]),b.status==="not-executed"?{status:"loading"}:b.status==="loading"&&!b.result?{status:"loading"}:b.status==="loading"&&b.error?{status:"loading"}:b.status==="error"&&b.error?{status:"error",error:b.error,retry:mt}:{status:"success",data:b.result}}function xe(dt){const{children:X,...gt}=dt,It=(0,Te.n)(),{Progress:vt}=It.getComponents(),b=be(gt);return b.status==="loading"?(0,a.jsx)(vt,{}):b.status==="error"?(0,a.jsx)(Be.b,{error:b.error,children:(0,a.jsx)(_e.A,{variant:"outlined",onClick:b.retry,children:"Retry"})}):(0,a.jsx)(a.Fragment,{children:X})}var Ve=r(60882),Ge=r(54917),Ye=r(98392),se=r(50868);const Se=dt=>{const{withSearch:X,withHeader:gt=!0}=dt;return(0,a.jsxs)(I.Y,{themeId:"documentation",children:[gt&&(0,a.jsx)(ze,{}),(0,a.jsx)(re.Z,{}),(0,a.jsx)(K.p,{withSearch:X})]})},Ke=(0,Ve.A)(I.Y)({height:"inherit",overflowY:"visible"}),Xe=dt=>{const X=(0,Ge.A)(),gt=(0,Ye.A)({...X,...dt.overrideThemeOptions||{}}),{kind:It,name:vt,namespace:b}=(0,zt.K)(Gt.Oc),{children:yt,entityRef:mt={kind:It,name:vt,namespace:b}}=dt,At=(0,w.P1)();if(!yt){const N=(At?m.Children.toArray(At.props.children):[]).flatMap(J=>J?.props?.children??[]).find(J=>!(0,Ee.E)(J,k.AF)&&!(0,Ee.E)(J,k.Wm));return(0,a.jsx)(se.A,{theme:gt,children:(0,a.jsx)(xe,{pluginId:"techdocs",children:(0,a.jsx)(V.R,{entityRef:mt,children:N||(0,a.jsx)(Se,{})})})})}return(0,a.jsx)(se.A,{theme:gt,children:(0,a.jsx)(xe,{pluginId:"techdocs",children:(0,a.jsx)(V.R,{entityRef:mt,children:({metadata:Z,entityMetadata:Q,onReady:N})=>(0,a.jsx)(Ke,{themeId:"documentation",className:"techdocs-reader-page",children:yt instanceof Function?yt({entityRef:mt,techdocsMetadataValue:Z.value,entityMetadataValue:Q.value,onReady:N}):yt})})})})}},39781:(Pt,z,r)=>{"use strict";r.d(z,{p:()=>wa});var a=r(31085),m=r(14041),w=r(42899),I=r(58837),k=r(66839),V=r(9394),K=r(91360),ot=r(22856);const B="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",bt=t=>{(0,m.useEffect)(()=>{if(!t)return()=>{};const e=t.querySelectorAll('head > link[rel="stylesheet"]');let o=e?.length??0;const s=new CustomEvent(B);if(!o)return t.dispatchEvent(s),()=>{};const i=()=>{--o===0&&t.dispatchEvent(s)};return e?.forEach(l=>{l.addEventListener("load",i)}),()=>{e?.forEach(l=>{l.removeEventListener("load",i)})}},[t])},P=t=>{const[e,o]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{if(!t)return()=>{};o(!0);const s=t.style;s.setProperty("opacity","0");const i=()=>{o(!1),s.setProperty("opacity","1")};return t.addEventListener(B,i),()=>{t.removeEventListener(B,i)}},[t]),e},A=t=>{const{element:e,onAppend:o,children:s}=t,[i,l]=(0,m.useState)((0,V.vt)({...(0,ot.A)(),insertionPoint:void 0}));bt(e);const d=(0,m.useCallback)(p=>{if(!e||!p)return;l((0,V.vt)({...(0,ot.A)(),insertionPoint:e.querySelector("head")||void 0}));let f=p.shadowRoot;f||(f=p.attachShadow({mode:"open"})),f.replaceChildren(e),typeof o=="function"&&o(f)},[e,o]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(K.Ay,{jss:i,sheetsManager:new Map,children:[(0,a.jsx)("div",{ref:d,"data-testid":"techdocs-native-shadowroot"}),s]})})};var it=r(85639),pt=r(16454),Dt=r(96872),Tt=r(87437),lt=r(78467),Mt=r(61783),xt=r(33986);const jt=(0,I.A)(t=>({loading:{right:t.spacing(1),position:"absolute"}})),St=t=>e=>(0,a.jsx)(Tt.Lt,{inheritParentContextIfAvailable:!0,children:(0,a.jsx)(t,{...e})}),ct=()=>{const t=jt();return(0,a.jsx)(lt.A,{className:t.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},Ut=St(function(e){const{loading:o,value:s,onChange:i=()=>{},options:l=[],getOptionLabel:d=S=>String(S),inputPlaceholder:p,inputDebounceTime:f,freeSolo:y=!0,fullWidth:v=!0,clearOnBlur:E=!1,"data-testid":F="search-autocomplete",...tt}=e,{setTerm:T}=(0,Tt.SQ)(),ht=(0,m.useCallback)(S=>S?typeof S=="string"?S:d(S):"",[d]),Et=(0,m.useMemo)(()=>ht(s),[s,ht]),et=(0,m.useCallback)((S,x,C,M)=>{T(ht(x)),i(S,x,C,M)},[ht,T,i]),D=(0,m.useCallback)(({InputProps:{ref:S,className:x,endAdornment:C},InputLabelProps:M,...G})=>(0,a.jsx)(xt.I,{...G,ref:S,clearButton:!1,value:Et,placeholder:p,debounceTime:f,endAdornment:o?(0,a.jsx)(ct,{}):C,InputProps:{className:x}}),[o,Et,p,f]);return(0,a.jsx)(Mt.Ay,{...tt,"data-testid":F,value:s,onChange:et,options:l,getOptionLabel:d,renderInput:D,freeSolo:y,fullWidth:v,clearOnBlur:E})});var ft=r(18690),Ht=r(41472);const Gt=t=>t?.document,ye=t=>{const{entityId:e,entityTitle:o,debounceTime:s=150,searchResultUrlMapper:i}=t,[l,d]=(0,m.useState)(!1),p=(0,ft.Zp)(),{setFilters:f,term:y,result:{loading:v,value:E}}=(0,Tt.SQ)(),[F,tt]=(0,m.useState)([]);(0,m.useEffect)(()=>{let D=!0;if(D&&E){const S=E.results.slice(0,10);tt(S)}return()=>{D=!1}},[v,E]);const{kind:T,name:ht,namespace:Et}=e;(0,m.useEffect)(()=>{f(D=>({...D,kind:T,namespace:Et,name:ht}))},[T,Et,ht,f]);const et=(D,S)=>{if(Gt(S)){const{location:x}=S.document;p(i?i(x):x)}};return(0,a.jsx)(Ut,{"data-testid":"techdocs-search-bar",size:"small",open:l&&!!y,getOptionLabel:()=>"",filterOptions:D=>D,onClose:()=>{d(!1)},onOpen:()=>{d(!0)},onChange:et,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:F,renderOption:({document:D,highlight:S})=>(0,a.jsx)(Ht.TechDocsSearchResultListItem,{result:D,lineClamp:3,asListItem:!1,asLink:!1,title:D.title,highlight:S}),loading:v,inputDebounceTime:s,inputPlaceholder:`Search ${o||e.name} docs`,freeSolo:!1})},ze=t=>{const e={term:"",types:["techdocs"],pageCursor:"",filters:t.entityId};return(0,a.jsx)(Tt.Lt,{initialState:e,children:(0,a.jsx)(ye,{...t})})};var re=r(64947),zt=r(74219),Ee=r(67296),Be=r(73845),Te=r(29365),_e=r(72501),Fe=r(99703),$e=r(32881);const Ae=(0,I.A)(t=>(0,Fe.A)({paper:{width:"100%",[t.breakpoints.up("sm")]:{width:"75%"},[t.breakpoints.up("md")]:{width:"50%"},padding:t.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:t.palette.background.default}})),We=({buildLog:t,onClose:e})=>{const o=Ae(),s=t.length===0?"Waiting for logs...":t.join(`
`);return(0,a.jsxs)(w.A,{container:!0,direction:"column",className:o.root,spacing:0,wrap:"nowrap",children:[(0,a.jsxs)(w.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap",children:[(0,a.jsx)(_e.A,{variant:"h5",children:"Build Details"}),(0,a.jsx)(Te.A,{title:"Close the drawer",onClick:e,color:"inherit",children:(0,a.jsx)($e.A,{})},"dismiss")]}),(0,a.jsx)(w.A,{item:!0,xs:!0,children:(0,a.jsx)(Ee.r,{text:s,classes:{root:o.logs}})})]})},Yt=({buildLog:t})=>{const e=Ae(),[o,s]=(0,m.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(re.A,{color:"inherit",onClick:()=>s(!0),children:"Show Build Logs"}),(0,a.jsx)(Be.Ay,{classes:{paper:e.paper},anchor:"right",open:o,onClose:()=>s(!1),children:(0,a.jsx)(We,{buildLog:t,onClose:()=>s(!1)})})]})};var Ot=r(18139),Kt=r(54195),be=r(52262),xe=r(41544);const Ve=({errorMessage:t})=>{const e=(0,Ot.gf)(Kt.U).getOptionalString("techdocs.builder"),o=(0,be.s)(),{entityRef:s}=(0,k.V)(),i=(0,ft.zy)();(0,m.useEffect)(()=>{const{pathname:d,search:p,hash:f}=i;o.captureEvent("not-found",`${d}${p}${f}`,{attributes:s})},[o,s,i]);let l="";return[void 0,"local"].includes(e)||(l="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),(0,a.jsx)(xe.M,{status:"404",statusMessage:t||"Documentation not found",additionalInfo:l})};var Ge=r(73466),Ye=r(28966),se=r(49707);function Se({contentLoading:t,content:e,activeSyncState:o}){return t||o==="BUILD_READY_RELOAD"||!e&&o==="CHECKING"?"CHECKING":!e&&o==="BUILDING"?"INITIAL_BUILD":e?o==="BUILDING"?"CONTENT_STALE_REFRESHING":o==="BUILD_READY"?"CONTENT_STALE_READY":o==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function Ke(t,e){const o={...t};switch(e.type){case"sync":e.state==="CHECKING"&&(o.buildLog=[]),o.activeSyncState=e.state,o.syncError=e.syncError;break;case"contentLoading":o.contentLoading=!0,o.contentError=void 0;break;case"content":typeof e.path=="string"&&(o.path=e.path),o.contentLoading=!1,o.content=e.content,o.contentError=e.contentError;break;case"buildLog":o.buildLog=o.buildLog.concat(e.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(o.activeSyncState)&&["contentLoading","content"].includes(e.type)&&(o.activeSyncState="UP_TO_DATE",o.buildLog=[]),o}function Xe(t,e,o,s){const[i,l]=(0,m.useReducer)(Ke,{activeSyncState:"CHECKING",path:s,contentLoading:!0,buildLog:[]}),d=(0,Ot.gf)(se.s),{retry:p}=(0,Ye.A)(async()=>{l({type:"contentLoading"});try{const v=await d.getEntityDocs({kind:t,namespace:e,name:o},s);return l({type:"content",content:v,path:s}),v}catch(v){l({type:"content",contentError:v,path:s})}},[d,t,e,o,s]),f=(0,m.useRef)({content:void 0,reload:()=>{}});f.current={content:i.content,reload:p},(0,Ge.A)(async()=>{l({type:"sync",state:"CHECKING"});const v=setTimeout(()=>{l({type:"sync",state:"BUILDING"})},1e3);try{switch(await d.syncEntityDocs({kind:t,namespace:e,name:o},F=>{l({type:"buildLog",log:F})})){case"updated":f.current.content?l({type:"sync",state:"BUILD_READY"}):(f.current.reload(),l({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":l({type:"sync",state:"UP_TO_DATE"});break;default:l({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(E){l({type:"sync",state:"ERROR",syncError:E})}finally{clearTimeout(v)}},[t,o,e,d,l,f]);const y=(0,m.useMemo)(()=>Se({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]);return(0,m.useMemo)(()=>({state:y,contentReload:p,path:i.path,content:i.content,contentErrorMessage:i.contentError?.toString(),syncErrorMessage:i.syncError?.toString(),buildLog:i.buildLog}),[y,p,i.path,i.content,i.contentError,i.syncError,i.buildLog])}const dt=(0,m.createContext)({}),X=()=>(0,m.useContext)(dt),gt=t=>{const{children:e}=t,{"*":o=""}=(0,ft.g)(),{entityRef:s}=(0,k.V)(),{kind:i,namespace:l,name:d}=s,p=Xe(i,l,d,o);return(0,a.jsx)(dt.Provider,{value:p,children:e instanceof Function?e(p):e})},It=t=>e=>(0,a.jsx)(gt,{children:(0,a.jsx)(t,{...e})}),vt=(0,I.A)(t=>({root:{marginBottom:t.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),b=()=>{let t=null;const e=vt(),{state:o,contentReload:s,contentErrorMessage:i,syncErrorMessage:l,buildLog:d}=X();return o==="INITIAL_BUILD"&&(t=(0,a.jsx)(zt.A,{classes:{root:e.root},variant:"outlined",severity:"info",icon:(0,a.jsx)(lt.A,{size:"24px"}),action:(0,a.jsx)(Yt,{buildLog:d}),children:"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster."})),o==="CONTENT_STALE_REFRESHING"&&(t=(0,a.jsx)(zt.A,{variant:"outlined",severity:"info",icon:(0,a.jsx)(lt.A,{size:"24px"}),action:(0,a.jsx)(Yt,{buildLog:d}),classes:{root:e.root},children:"A newer version of this documentation is being prepared and will be available shortly."})),o==="CONTENT_STALE_READY"&&(t=(0,a.jsx)(zt.A,{variant:"outlined",severity:"success",action:(0,a.jsx)(re.A,{color:"inherit",onClick:()=>s(),children:"Refresh"}),classes:{root:e.root},children:"A newer version of this documentation is now available, please refresh to view."})),o==="CONTENT_STALE_ERROR"&&(t=(0,a.jsxs)(zt.A,{variant:"outlined",severity:"error",action:(0,a.jsx)(Yt,{buildLog:d}),classes:{root:e.root,message:e.message},children:["Building a newer version of this documentation failed."," ",l]})),o==="CONTENT_NOT_FOUND"&&(t=(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsxs)(zt.A,{variant:"outlined",severity:"error",action:(0,a.jsx)(Yt,{buildLog:d}),classes:{root:e.root,message:e.message},children:["Building a newer version of this documentation failed."," ",l]}),(0,a.jsx)(Ve,{errorMessage:i})]})),t};var yt=r(5893),mt=r(54917),At=r(56004);/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:Z,setPrototypeOf:Q,isFrozen:N,getPrototypeOf:J,getOwnPropertyDescriptor:wt}=Object;let{freeze:_,seal:at,create:Bt}=Object,{apply:ie,construct:Xt}=typeof Reflect<"u"&&Reflect;_||(_=function(e){return e}),at||(at=function(e){return e}),ie||(ie=function(e,o,s){return e.apply(o,s)}),Xt||(Xt=function(e,o){return new e(...o)});const _t=q(Array.prototype.forEach),Ze=q(Array.prototype.lastIndexOf),we=q(Array.prototype.pop),Zt=q(Array.prototype.push),fn=q(Array.prototype.splice),Qt=q(String.prototype.toLowerCase),le=q(String.prototype.toString),Le=q(String.prototype.match),Ft=q(String.prototype.replace),Re=q(String.prototype.indexOf),gn=q(String.prototype.trim),ut=q(Object.prototype.hasOwnProperty),L=q(RegExp.prototype.test),ce=oo(TypeError);function q(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return ie(t,e,s)}}function oo(t){return function(){for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return Xt(t,o)}}function g(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Qt;Q&&Q(t,null);let s=e.length;for(;s--;){let i=e[s];if(typeof i=="string"){const l=o(i);l!==i&&(N(e)||(e[s]=l),i=l)}t[i]=!0}return t}function ao(t){for(let e=0;e<t.length;e++)ut(t,e)||(t[e]=null);return t}function $t(t){const e=Bt(null);for(const[o,s]of Z(t))ut(t,o)&&(Array.isArray(s)?e[o]=ao(s):s&&typeof s=="object"&&s.constructor===Object?e[o]=$t(s):e[o]=s);return e}function de(t,e){for(;t!==null;){const s=wt(t,e);if(s){if(s.get)return q(s.get);if(typeof s.value=="function")return q(s.value)}t=J(t)}function o(){return null}return o}const vn=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qe=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Je=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ro=_(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),qe=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),so=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),yn=_(["#text"]),En=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),tn=_(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Tn=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ce=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),io=at(/\{\{[\w\W]*|[\w\W]*\}\}/gm),lo=at(/<%[\w\W]*|[\w\W]*%>/gm),co=at(/\$\{[\w\W]*/gm),mo=at(/^data-[\-\w.\u00B7-\uFFFF]+$/),uo=at(/^aria-[\-\w]+$/),An=at(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ho=at(/^(?:\w+script|data):/i),po=at(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),bn=at(/^html$/i),fo=at(/^[a-z][.\w]*(-[.\w]+)+$/i);var xn=Object.freeze({__proto__:null,ARIA_ATTR:uo,ATTR_WHITESPACE:po,CUSTOM_ELEMENT:fo,DATA_ATTR:mo,DOCTYPE_NAME:bn,ERB_EXPR:lo,IS_ALLOWED_URI:An,IS_SCRIPT_OR_DATA:ho,MUSTACHE_EXPR:io,TMPLIT_EXPR:co});const me={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},go=function(){return typeof window>"u"?null:window},vo=function(e,o){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";o&&o.hasAttribute(i)&&(s=o.getAttribute(i));const l="dompurify"+(s?"#"+s:"");try{return e.createPolicy(l,{createHTML(d){return d},createScriptURL(d){return d}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}},Sn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function wn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:go();const e=h=>wn(h);if(e.version="3.2.5",e.removed=[],!t||!t.document||t.document.nodeType!==me.document||!t.Element)return e.isSupported=!1,e;let{document:o}=t;const s=o,i=s.currentScript,{DocumentFragment:l,HTMLTemplateElement:d,Node:p,Element:f,NodeFilter:y,NamedNodeMap:v=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:E,DOMParser:F,trustedTypes:tt}=t,T=f.prototype,ht=de(T,"cloneNode"),Et=de(T,"remove"),et=de(T,"nextSibling"),D=de(T,"childNodes"),S=de(T,"parentNode");if(typeof d=="function"){const h=o.createElement("template");h.content&&h.content.ownerDocument&&(o=h.content.ownerDocument)}let x,C="";const{implementation:M,createNodeIterator:G,createDocumentFragment:Wt,getElementsByTagName:Lt}=o,{importNode:Me}=s;let U=Sn();e.isSupported=typeof Z=="function"&&typeof S=="function"&&M&&M.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Jt,ERB_EXPR:Oe,TMPLIT_EXPR:he,DATA_ATTR:La,ARIA_ATTR:Ra,IS_SCRIPT_OR_DATA:Ca,ATTR_WHITESPACE:In,CUSTOM_ELEMENT:Da}=xn;let{IS_ALLOWED_URI:Nn}=xn,H=null;const kn=g({},[...vn,...Qe,...Je,...qe,...yn]);let $=null;const Pn=g({},[...En,...tn,...Tn,...Ce]);let O=Object.seal(Bt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),pe=null,on=null,Un=!0,an=!0,Hn=!1,jn=!0,qt=!1,rn=!0,Vt=!1,sn=!1,ln=!1,te=!1,Ie=!1,Ne=!1,zn=!0,Bn=!1;const Ma="user-content-";let cn=!0,fe=!1,ee={},ne=null;const _n=g({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Fn=null;const $n=g({},["audio","video","img","source","image","track"]);let dn=null;const Wn=g({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ke="http://www.w3.org/1998/Math/MathML",Pe="http://www.w3.org/2000/svg",Nt="http://www.w3.org/1999/xhtml";let oe=Nt,mn=!1,un=null;const Oa=g({},[ke,Pe,Nt],le);let Ue=g({},["mi","mo","mn","ms","mtext"]),He=g({},["annotation-xml"]);const Ia=g({},["title","style","font","a","script"]);let ge=null;const Na=["application/xhtml+xml","text/html"],ka="text/html";let j=null,ae=null;const Pa=o.createElement("form"),Vn=function(n){return n instanceof RegExp||n instanceof Function},hn=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ae&&ae===n)){if((!n||typeof n!="object")&&(n={}),n=$t(n),ge=Na.indexOf(n.PARSER_MEDIA_TYPE)===-1?ka:n.PARSER_MEDIA_TYPE,j=ge==="application/xhtml+xml"?le:Qt,H=ut(n,"ALLOWED_TAGS")?g({},n.ALLOWED_TAGS,j):kn,$=ut(n,"ALLOWED_ATTR")?g({},n.ALLOWED_ATTR,j):Pn,un=ut(n,"ALLOWED_NAMESPACES")?g({},n.ALLOWED_NAMESPACES,le):Oa,dn=ut(n,"ADD_URI_SAFE_ATTR")?g($t(Wn),n.ADD_URI_SAFE_ATTR,j):Wn,Fn=ut(n,"ADD_DATA_URI_TAGS")?g($t($n),n.ADD_DATA_URI_TAGS,j):$n,ne=ut(n,"FORBID_CONTENTS")?g({},n.FORBID_CONTENTS,j):_n,pe=ut(n,"FORBID_TAGS")?g({},n.FORBID_TAGS,j):{},on=ut(n,"FORBID_ATTR")?g({},n.FORBID_ATTR,j):{},ee=ut(n,"USE_PROFILES")?n.USE_PROFILES:!1,Un=n.ALLOW_ARIA_ATTR!==!1,an=n.ALLOW_DATA_ATTR!==!1,Hn=n.ALLOW_UNKNOWN_PROTOCOLS||!1,jn=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,qt=n.SAFE_FOR_TEMPLATES||!1,rn=n.SAFE_FOR_XML!==!1,Vt=n.WHOLE_DOCUMENT||!1,te=n.RETURN_DOM||!1,Ie=n.RETURN_DOM_FRAGMENT||!1,Ne=n.RETURN_TRUSTED_TYPE||!1,ln=n.FORCE_BODY||!1,zn=n.SANITIZE_DOM!==!1,Bn=n.SANITIZE_NAMED_PROPS||!1,cn=n.KEEP_CONTENT!==!1,fe=n.IN_PLACE||!1,Nn=n.ALLOWED_URI_REGEXP||An,oe=n.NAMESPACE||Nt,Ue=n.MATHML_TEXT_INTEGRATION_POINTS||Ue,He=n.HTML_INTEGRATION_POINTS||He,O=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&Vn(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&Vn(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),qt&&(an=!1),Ie&&(te=!0),ee&&(H=g({},yn),$=[],ee.html===!0&&(g(H,vn),g($,En)),ee.svg===!0&&(g(H,Qe),g($,tn),g($,Ce)),ee.svgFilters===!0&&(g(H,Je),g($,tn),g($,Ce)),ee.mathMl===!0&&(g(H,qe),g($,Tn),g($,Ce))),n.ADD_TAGS&&(H===kn&&(H=$t(H)),g(H,n.ADD_TAGS,j)),n.ADD_ATTR&&($===Pn&&($=$t($)),g($,n.ADD_ATTR,j)),n.ADD_URI_SAFE_ATTR&&g(dn,n.ADD_URI_SAFE_ATTR,j),n.FORBID_CONTENTS&&(ne===_n&&(ne=$t(ne)),g(ne,n.FORBID_CONTENTS,j)),cn&&(H["#text"]=!0),Vt&&g(H,["html","head","body"]),H.table&&(g(H,["tbody"]),delete pe.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=n.TRUSTED_TYPES_POLICY,C=x.createHTML("")}else x===void 0&&(x=vo(tt,i)),x!==null&&typeof C=="string"&&(C=x.createHTML(""));_&&_(n),ae=n}},Gn=g({},[...Qe,...Je,...ro]),Yn=g({},[...qe,...so]),Ua=function(n){let c=S(n);(!c||!c.tagName)&&(c={namespaceURI:oe,tagName:"template"});const u=Qt(n.tagName),R=Qt(c.tagName);return un[n.namespaceURI]?n.namespaceURI===Pe?c.namespaceURI===Nt?u==="svg":c.namespaceURI===ke?u==="svg"&&(R==="annotation-xml"||Ue[R]):!!Gn[u]:n.namespaceURI===ke?c.namespaceURI===Nt?u==="math":c.namespaceURI===Pe?u==="math"&&He[R]:!!Yn[u]:n.namespaceURI===Nt?c.namespaceURI===Pe&&!He[R]||c.namespaceURI===ke&&!Ue[R]?!1:!Yn[u]&&(Ia[u]||!Gn[u]):!!(ge==="application/xhtml+xml"&&un[n.namespaceURI]):!1},Rt=function(n){Zt(e.removed,{element:n});try{S(n).removeChild(n)}catch{Et(n)}},je=function(n,c){try{Zt(e.removed,{attribute:c.getAttributeNode(n),from:c})}catch{Zt(e.removed,{attribute:null,from:c})}if(c.removeAttribute(n),n==="is")if(te||Ie)try{Rt(c)}catch{}else try{c.setAttribute(n,"")}catch{}},Kn=function(n){let c=null,u=null;if(ln)n="<remove></remove>"+n;else{const W=Le(n,/^[\r\n\t ]+/);u=W&&W[0]}ge==="application/xhtml+xml"&&oe===Nt&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const R=x?x.createHTML(n):n;if(oe===Nt)try{c=new F().parseFromString(R,ge)}catch{}if(!c||!c.documentElement){c=M.createDocument(oe,"template",null);try{c.documentElement.innerHTML=mn?C:R}catch{}}const Y=c.body||c.documentElement;return n&&u&&Y.insertBefore(o.createTextNode(u),Y.childNodes[0]||null),oe===Nt?Lt.call(c,Vt?"html":"body")[0]:Vt?c.documentElement:Y},Xn=function(n){return G.call(n.ownerDocument||n,n,y.SHOW_ELEMENT|y.SHOW_COMMENT|y.SHOW_TEXT|y.SHOW_PROCESSING_INSTRUCTION|y.SHOW_CDATA_SECTION,null)},pn=function(n){return n instanceof E&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof v)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},Zn=function(n){return typeof p=="function"&&n instanceof p};function kt(h,n,c){_t(h,u=>{u.call(e,n,c,ae)})}const Qn=function(n){let c=null;if(kt(U.beforeSanitizeElements,n,null),pn(n))return Rt(n),!0;const u=j(n.nodeName);if(kt(U.uponSanitizeElement,n,{tagName:u,allowedTags:H}),n.hasChildNodes()&&!Zn(n.firstElementChild)&&L(/<[/\w!]/g,n.innerHTML)&&L(/<[/\w!]/g,n.textContent)||n.nodeType===me.progressingInstruction||rn&&n.nodeType===me.comment&&L(/<[/\w]/g,n.data))return Rt(n),!0;if(!H[u]||pe[u]){if(!pe[u]&&qn(u)&&(O.tagNameCheck instanceof RegExp&&L(O.tagNameCheck,u)||O.tagNameCheck instanceof Function&&O.tagNameCheck(u)))return!1;if(cn&&!ne[u]){const R=S(n)||n.parentNode,Y=D(n)||n.childNodes;if(Y&&R){const W=Y.length;for(let st=W-1;st>=0;--st){const Ct=ht(Y[st],!0);Ct.__removalCount=(n.__removalCount||0)+1,R.insertBefore(Ct,et(n))}}}return Rt(n),!0}return n instanceof f&&!Ua(n)||(u==="noscript"||u==="noembed"||u==="noframes")&&L(/<\/no(script|embed|frames)/i,n.innerHTML)?(Rt(n),!0):(qt&&n.nodeType===me.text&&(c=n.textContent,_t([Jt,Oe,he],R=>{c=Ft(c,R," ")}),n.textContent!==c&&(Zt(e.removed,{element:n.cloneNode()}),n.textContent=c)),kt(U.afterSanitizeElements,n,null),!1)},Jn=function(n,c,u){if(zn&&(c==="id"||c==="name")&&(u in o||u in Pa))return!1;if(!(an&&!on[c]&&L(La,c))){if(!(Un&&L(Ra,c))){if(!$[c]||on[c]){if(!(qn(n)&&(O.tagNameCheck instanceof RegExp&&L(O.tagNameCheck,n)||O.tagNameCheck instanceof Function&&O.tagNameCheck(n))&&(O.attributeNameCheck instanceof RegExp&&L(O.attributeNameCheck,c)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(c))||c==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&L(O.tagNameCheck,u)||O.tagNameCheck instanceof Function&&O.tagNameCheck(u))))return!1}else if(!dn[c]){if(!L(Nn,Ft(u,In,""))){if(!((c==="src"||c==="xlink:href"||c==="href")&&n!=="script"&&Re(u,"data:")===0&&Fn[n])){if(!(Hn&&!L(Ca,Ft(u,In,"")))){if(u)return!1}}}}}}return!0},qn=function(n){return n!=="annotation-xml"&&Le(n,Da)},to=function(n){kt(U.beforeSanitizeAttributes,n,null);const{attributes:c}=n;if(!c||pn(n))return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:$,forceKeepAttr:void 0};let R=c.length;for(;R--;){const Y=c[R],{name:W,namespaceURI:st,value:Ct}=Y,ve=j(W);let nt=W==="value"?Ct:gn(Ct);if(u.attrName=ve,u.attrValue=nt,u.keepAttr=!0,u.forceKeepAttr=void 0,kt(U.uponSanitizeAttribute,n,u),nt=u.attrValue,Bn&&(ve==="id"||ve==="name")&&(je(W,n),nt=Ma+nt),rn&&L(/((--!?|])>)|<\/(style|title)/i,nt)){je(W,n);continue}if(u.forceKeepAttr||(je(W,n),!u.keepAttr))continue;if(!jn&&L(/\/>/i,nt)){je(W,n);continue}qt&&_t([Jt,Oe,he],no=>{nt=Ft(nt,no," ")});const eo=j(n.nodeName);if(Jn(eo,ve,nt)){if(x&&typeof tt=="object"&&typeof tt.getAttributeType=="function"&&!st)switch(tt.getAttributeType(eo,ve)){case"TrustedHTML":{nt=x.createHTML(nt);break}case"TrustedScriptURL":{nt=x.createScriptURL(nt);break}}try{st?n.setAttributeNS(st,W,nt):n.setAttribute(W,nt),pn(n)?Rt(n):we(e.removed)}catch{}}}kt(U.afterSanitizeAttributes,n,null)},Ha=function h(n){let c=null;const u=Xn(n);for(kt(U.beforeSanitizeShadowDOM,n,null);c=u.nextNode();)kt(U.uponSanitizeShadowNode,c,null),Qn(c),to(c),c.content instanceof l&&h(c.content);kt(U.afterSanitizeShadowDOM,n,null)};return e.sanitize=function(h){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null,u=null,R=null,Y=null;if(mn=!h,mn&&(h="<!-->"),typeof h!="string"&&!Zn(h))if(typeof h.toString=="function"){if(h=h.toString(),typeof h!="string")throw ce("dirty is not a string, aborting")}else throw ce("toString is not a function");if(!e.isSupported)return h;if(sn||hn(n),e.removed=[],typeof h=="string"&&(fe=!1),fe){if(h.nodeName){const Ct=j(h.nodeName);if(!H[Ct]||pe[Ct])throw ce("root node is forbidden and cannot be sanitized in-place")}}else if(h instanceof p)c=Kn("<!---->"),u=c.ownerDocument.importNode(h,!0),u.nodeType===me.element&&u.nodeName==="BODY"||u.nodeName==="HTML"?c=u:c.appendChild(u);else{if(!te&&!qt&&!Vt&&h.indexOf("<")===-1)return x&&Ne?x.createHTML(h):h;if(c=Kn(h),!c)return te?null:Ne?C:""}c&&ln&&Rt(c.firstChild);const W=Xn(fe?h:c);for(;R=W.nextNode();)Qn(R),to(R),R.content instanceof l&&Ha(R.content);if(fe)return h;if(te){if(Ie)for(Y=Wt.call(c.ownerDocument);c.firstChild;)Y.appendChild(c.firstChild);else Y=c;return($.shadowroot||$.shadowrootmode)&&(Y=Me.call(s,Y,!0)),Y}let st=Vt?c.outerHTML:c.innerHTML;return Vt&&H["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&L(bn,c.ownerDocument.doctype.name)&&(st="<!DOCTYPE "+c.ownerDocument.doctype.name+`>
`+st),qt&&_t([Jt,Oe,he],Ct=>{st=Ft(st,Ct," ")}),x&&Ne?x.createHTML(st):st},e.setConfig=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};hn(h),sn=!0},e.clearConfig=function(){ae=null,sn=!1},e.isValidAttribute=function(h,n,c){ae||hn({});const u=j(h),R=j(n);return Jn(u,R,c)},e.addHook=function(h,n){typeof n=="function"&&Zt(U[h],n)},e.removeHook=function(h,n){if(n!==void 0){const c=Ze(U[h],n);return c===-1?void 0:fn(U[h],c,1)[0]}return we(U[h])},e.removeHooks=function(h){U[h]=[]},e.removeAllHooks=function(){U=Sn()},e}var ue=wn();const yo=/main\.[A-Fa-f0-9]{8}\.min\.css$/,Eo=/^https:\/\/fonts\.googleapis\.com/,To=/^https:\/\/fonts\.gstatic\.com/,Ao=t=>t.nodeName==="LINK",bo=t=>{const e=t?.getAttribute("href")||"",o=e.match(yo),s=e.match(Eo),i=e.match(To);return o||s||i},xo=t=>(Ao(t)&&!bo(t)&&t.remove(),t),So=t=>t.nodeName==="IFRAME",wo=(t,e)=>{const o=t.getAttribute("src")||"";try{const{host:s}=new URL(o);return e.includes(s)}catch{return!1}},Lo=t=>e=>(So(e)&&!wo(e,t)&&e.remove(),e),Ro=()=>{const t=(0,Ot.gf)(Kt.U);return(0,m.useMemo)(()=>t.getOptionalConfig("techdocs.sanitizer"),[t])},Co=()=>{const t=Ro();return(0,m.useCallback)(async e=>{const o=t?.getOptionalStringArray("allowedIframeHosts");ue.addHook("beforeSanitizeElements",xo);const s=["link","meta"];o&&(s.push("iframe"),ue.addHook("beforeSanitizeElements",Lo(o))),ue.addHook("uponSanitizeElement",(d,p)=>{p.tagName==="meta"&&(d.getAttribute("http-equiv")==="refresh"&&d.getAttribute("content")?.includes("url=")||d.parentNode?.removeChild(d))}),ue.addHook("uponSanitizeAttribute",(d,p)=>{d.tagName!=="meta"&&(p.attrName==="http-equiv"||p.attrName==="content")&&d.removeAttribute(p.attrName)});const i=t?.getOptionalString("allowedCustomElementTagNameRegExp"),l=t?.getOptionalString("allowedCustomElementAttributeNameRegExp");return ue.sanitize(e.outerHTML,{ADD_TAGS:s,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content","dominant-baseline"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0,CUSTOM_ELEMENT_HANDLING:{tagNameCheck:i?new RegExp(i):void 0,attributeNameCheck:l?new RegExp(l):void 0}})},[t])};var Do=r(65901),rt=r(268),Mo=({theme:t})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${t.palette.text.primary};
  --md-default-fg-color--light: ${t.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,rt.a)(t.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,rt.a)(t.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${t.palette.background.default};
  --md-default-bg-color--light: ${t.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,rt.a)(t.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,rt.a)(t.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${t.palette.primary.main};
  --md-primary-fg-color--light: ${t.palette.primary.light};
  --md-primary-fg-color--dark: ${t.palette.primary.dark};
  --md-primary-bg-color: ${t.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,rt.a)(t.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,rt.X4)(t.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${t.shadows[1]};
  --md-shadow-z2: ${t.shadows[2]};
  --md-shadow-z3: ${t.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${t.palette.text.primary};
  --md-code-bg-color: ${t.palette.code?.background??t.palette.background.paper};
  --md-code-hl-color: ${(0,rt.X4)(t.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${t.palette.type==="dark"?t.palette.primary.light:t.palette.primary.dark};
  --md-code-hl-function-color: ${t.palette.type==="dark"?t.palette.secondary.light:t.palette.secondary.dark};
  --md-code-hl-string-color: ${t.palette.type==="dark"?t.palette.success.light:t.palette.success.dark};
  --md-code-hl-number-color: ${t.palette.type==="dark"?t.palette.error.light:t.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${t.palette.link};
  --md-typeset-table-color: ${t.palette.text.primary};
  --md-typeset-table-color--light: ${(0,rt.X4)(t.palette.text.primary,.05)};
  --md-typeset-del-color: ${t.palette.type==="dark"?(0,rt.X4)(t.palette.error.dark,.5):(0,rt.X4)(t.palette.error.light,.5)};
  --md-typeset-ins-color: ${t.palette.type==="dark"?(0,rt.X4)(t.palette.success.dark,.5):(0,rt.X4)(t.palette.success.light,.5)};
  --md-typeset-mark-color: ${t.palette.type==="dark"?(0,rt.X4)(t.palette.warning.dark,.5):(0,rt.X4)(t.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,Oo=({theme:t})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${t.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const Io="224px";var No=({theme:t,sidebar:e})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${t.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  overflow-y: hidden;
}
@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${t.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${e.isPinned?`calc(-16rem + ${Io})`:"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const ko=["h1","h2","h3","h4","h5","h6"],Ln=/(em)|(rem)/gi,Rn=/var\(|\)/gi;var Po=({theme:t})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${ko.reduce((e,o)=>{const s=t.typography.htmlFontSize??16,i=t.typography[o],{lineHeight:l,fontFamily:d,fontWeight:p,fontSize:f}=i,y=v=>{if(typeof v=="number")return y(`${v/s*.6}rem`);if(typeof v=="string"){if(v.match(Rn)){const E=window.getComputedStyle(document.body).getPropertyValue(v.replaceAll(Rn,""));if(E!=="")return y(E)}else if(v.match(Ln))return`calc(${v.replace(Ln,"")} * var(--md-typeset-font-size))`}return v};return e.concat(`
    .md-typeset ${o} {
      color: var(--md-default-fg-color);
      line-height: ${l};
      font-family: ${d};
      font-weight: ${p};
      font-size: ${y(f)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${t.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${t.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,Uo=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,Ho=({theme:t})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${t.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${t.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${t.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${t.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${t.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const jo={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]};var zo=({theme:t})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${jo[t.palette.type].map(e=>`img[src$="${e}"]`).join(", ")} {
  display: none;
}
`;const Bo=[Mo,Oo,No,Po,Uo,Ho,zo],_o=()=>(0,Do.Ut)(),Fo=()=>{const t=_o(),e=(0,mt.A)();return(0,m.useMemo)(()=>{const o={theme:e,sidebar:t};return Bo.reduce((s,i)=>s+i(o),"")},[e,t])},$o=()=>{const t=Fo();return(0,m.useCallback)(e=>(e.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${t}</style>`),e),[t])},Wo=(t,e,o)=>{const s=new URL(e,"https://ignored.com").pathname,i=t==="src"&&s.endsWith(".svg"),l=!e.match(/^([a-z]*:)?\/\//i),d=e.startsWith(o);return i&&(l||d)},Vo=({techdocsStorageApi:t,entityId:e,path:o})=>async s=>{const i=await t.getApiOrigin(),l=async(d,p)=>{for(const f of d)if(f.hasAttribute(p)){const y=f.getAttribute(p);if(!y)return;const v=await t.getBaseUrl(y,e,o);if(Wo(p,y,i))try{const F=await(await fetch(v,{credentials:"include"})).text();f.setAttribute(p,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(F)))}`)}catch{f.setAttribute("alt",`Error: ${y}`)}else f.setAttribute(p,v)}};return await Promise.all([l(s.querySelectorAll("img"),"src"),l(s.querySelectorAll("script"),"src"),l(s.querySelectorAll("source"),"src"),l(s.querySelectorAll("link"),"href"),l(s.querySelectorAll("a[download]"),"href")]),s};var Go=r(78264),Yo=r(90292),Ko=r(52536),Xo=r.n(Ko);let Cn;Cn=Promise.resolve().then(r.t.bind(r,25873,19));function De(t,e){Cn.then(o=>{"createRoot"in o?o.createRoot(e).render(t):o.render(t,e)})}const Zo=t=>e=>{const o=e.querySelector('[title="Edit this page"]');if(!o||!o.href)return e;const s=new URL(o.href),i=t.byUrl(s);if(i?.type!=="github"&&i?.type!=="gitlab")return e;const l=e.querySelector("article>h1")?.childNodes[0].textContent||"",d=encodeURIComponent(`Documentation Feedback: ${l}`),p=encodeURIComponent(`Page source:
${o.href}

Feedback:`),f=i?.type==="github"?(0,Go.F)(s.href,"blob"):s.href,y=Xo()(f),v=`/${y.organization}/${y.name}`,E=o.cloneNode();switch(i?.type){case"gitlab":E.href=`${s.origin}${v}/issues/new?issue[title]=${d}&issue[description]=${p}`;break;case"github":E.href=`${s.origin}${v}/issues/new?title=${d}&body=${p}`;break;default:return e}return De((0,m.createElement)(Yo.A),E),E.style.paddingLeft="5px",E.title="Leave feedback for this page",E.id="git-feedback-link",o?.insertAdjacentElement("beforebegin",E),e};var Qo=r(27326);const Jo=()=>t=>{const e=t.querySelector('.md-header label[for="__drawer"]'),o=t.querySelector("article");if(!e||!o)return t;const s=e.cloneNode();return De((0,m.createElement)(Qo.A),s),s.id="toggle-sidebar",s.title="Toggle Sidebar",s.classList.add("md-content__button"),s.style.setProperty("padding","0 0 0 5px"),s.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),o?.prepend(s),t},qo=()=>t=>(((o,s)=>{Array.from(o).filter(i=>i.hasAttribute(s)).forEach(i=>{const l=i.getAttribute(s);if(l){l.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const d=Dn(window.location.href);i.setAttribute(s,new URL(l,d).toString())}catch{i.replaceWith(i.textContent||l)}}})})(Array.from(t.getElementsByTagName("a")),"href"),t);function Dn(t){const e=new URL(t);return!e.pathname.endsWith("/")&&!e.pathname.endsWith(".html")&&(e.pathname+="/"),e.toString()}const ta=({baseUrl:t,onClick:e})=>o=>(Array.from(o.getElementsByTagName("a")).forEach(s=>{s.addEventListener("click",i=>{const d=s.getAttribute("href");d&&d.startsWith(t)&&!s.hasAttribute("download")&&(i.preventDefault(),e(i,d))})}),o);var ea=r(7031),na=r(50868),oa=r(10437),aa=r(71677),ra=r(36338);const sa=(0,ea.A)(t=>({tooltip:{fontSize:"inherit",color:t.palette.text.primary,margin:0,padding:t.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(aa.Ay),ia=()=>(0,a.jsx)(oa.A,{children:(0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})}),la=({text:t})=>{const[e,o]=(0,m.useState)(!1),[,s]=(0,ra.A)(),i=(0,m.useCallback)(()=>{s(t),o(!0)},[t,s]),l=(0,m.useCallback)(()=>{o(!1)},[o]);return(0,a.jsx)(sa,{title:"Copied to clipboard",placement:"left",open:e,onClose:l,leaveDelay:1e3,children:(0,a.jsx)(Te.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i,children:(0,a.jsx)(ia,{})})})},ca=t=>e=>{const o=e.querySelectorAll("pre > code");for(const s of o){const i=s.textContent||"",l=document.createElement("div");s?.parentElement?.prepend(l),De((0,a.jsx)(na.A,{theme:t,children:(0,a.jsx)(la,{text:i})}),l)}return e},da=()=>t=>(t.querySelector(".md-header")?.remove(),t),ma=()=>t=>(t.querySelector(".md-footer .md-copyright")?.remove(),t.querySelector(".md-footer-copyright")?.remove(),t),Mn=({onLoading:t,onLoaded:e})=>o=>(t(),o.addEventListener(B,function s(){e(),o.removeEventListener(B,s)}),o),ua=()=>t=>(setTimeout(()=>{const e=t?.querySelectorAll("li.md-nav__item--active");e.length!==0&&(e.forEach(s=>{const i=s?.querySelector("input");i?.checked||i?.click()}),e[e.length-1].scrollIntoView())},200),t),On=async(t,e)=>{let o;if(typeof t=="string")o=new DOMParser().parseFromString(t,"text/html").documentElement;else if(t instanceof Element)o=t;else throw new Error("dom is not a recognized type");for(const s of e)o=await s(o);return o};var ha=r(38097);const pa=(0,I.A)(t=>({button:{color:t.palette.primary.light,textDecoration:"underline"}})),fa=({message:t,handleButtonClick:e,autoHideDuration:o})=>{const s=pa(),[i,l]=(0,m.useState)(!0),d=()=>l(!1);return(0,a.jsx)(ha.A,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:o,color:"primary",onClose:d,message:t,action:(0,a.jsx)(re.A,{classes:{root:s.button},size:"small",onClick:()=>{d(),e()},children:"Redirect now"})})},ga=(t,e)=>{const s=i=>{const l=Dn(window.location.href),d=new URL(i,l);if(d.hostname!==window.location.hostname){const f=window.location.pathname,y=f.indexOf(e),v=f.slice(0,y+e.length);return new URL(v,l).href}return d.href};return i=>{for(const l of Array.from(i.querySelectorAll("meta")))if(l.getAttribute("http-equiv")==="refresh"){const d=l.getAttribute("content")?.split("url=");if(!d||d.length<2)return i;const p=d[1],f=s(p);if(window.location.href===f)return i;const y=document.createElement("div");return De((0,a.jsx)(fa,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>t(f),autoHideDuration:3e3}),y),document.body.appendChild(y),setTimeout(()=>{t(f)},3e3),i}return i}};function va(t,e){const o=new URL(e),s=`${o.origin}${o.pathname.replace(/\/$/,"")}`,i=t.replace(s,"").replace(/^\/+/,""),l=new URL(`http://localhost/${i}`);return`${l.pathname}${l.search}${l.hash}`}function ya(){const t=(0,m.useRef)((0,ft.Zp)()),o=(0,Ot.gf)(Kt.U).getOptionalString("app.baseUrl");return(0,m.useCallback)(i=>{let l=i;if(o)try{l=va(i,o)}catch{}t.current(l)},[o])}const Ea="screen and (max-width: 76.1875em)",Ta=t=>{const e=ya(),o=(0,mt.A)(),s=(0,yt.A)(Ea),i=Co(),l=$o(),d=(0,be.s)(),p=(0,Ot.gf)(se.s),f=(0,Ot.gf)(At.Y),y=(0,Ot.gf)(Kt.U),{state:v,path:E,content:F}=X(),{"*":tt=""}=(0,ft.g)(),[T,ht]=(0,m.useState)(null),Et=P(T),et=(0,m.useCallback)(()=>{if(!T)return;T.querySelectorAll(".md-sidebar").forEach(M=>{if(s)M.style.top="0px";else{const Wt=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let Lt=T.getBoundingClientRect().top??0;const U=T.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;Lt<Wt&&(Lt=Wt);const Jt=Math.max(Lt,0)+U;M.style.top=`${Jt}px`;const he=T.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;M.style.height=`${he-Jt}px`}M.style.setProperty("opacity","1")})},[T,s]);(0,m.useEffect)(()=>(window.addEventListener("resize",et),window.addEventListener("scroll",et,!0),()=>{window.removeEventListener("resize",et),window.removeEventListener("scroll",et,!0)}),[T,et]);const D=(0,m.useCallback)(()=>{if(!T)return;const C=T.querySelector(".md-footer");C&&(C.style.width=`${T.getBoundingClientRect().width}px`)},[T]);(0,m.useEffect)(()=>(window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D)}),[T,D]),(0,m.useEffect)(()=>{Et||(D(),et())},[v,Et,D,et]);const S=(0,m.useCallback)((C,M)=>On(C,[i,Vo({techdocsStorageApi:p,entityId:t,path:M}),qo(),Jo(),da(),ma(),Zo(f),l]),[t,f,p,i,l]),x=(0,m.useCallback)(async C=>On(C,[ga(e,t.name),ua(),ca(o),ta({baseUrl:y.getOptionalString("app.baseUrl")||window.location.origin,onClick:(M,G)=>{const Wt=M.ctrlKey||M.metaKey,Lt=new URL(G),Me=M.target?.innerText||G,U=G.replace(window.location.origin,"");d.captureEvent("click",Me,{attributes:{to:U}}),Lt.hash?Wt?window.open(G,"_blank"):(window.location.pathname!==Lt.pathname?e(G):window.history.pushState(null,document.title,Lt.hash),C?.querySelector(`[id="${Lt.hash.slice(1)}"]`)?.scrollIntoView()):Wt?window.open(G,"_blank"):e(G)}}),Mn({onLoading:()=>{},onLoaded:()=>{C.querySelector(".md-nav__title")?.removeAttribute("for")}}),Mn({onLoading:()=>{Array.from(C.querySelectorAll(".md-sidebar")).forEach(G=>{G.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[o,e,d,t.name,y]);return(0,m.useEffect)(()=>{if(!F)return()=>{};let C=!0;return S(F,E).then(async M=>{if(!M?.innerHTML||!C||tt!==E)return;window.scroll({top:0});const G=await x(M);ht(G)}),()=>{C=!1}},[F,tt,E,S,x]),T};var en=r(41883),Aa=r(11618),nn=r(15246);const ba=()=>{const t=(0,Aa.YR)(),{shadowRoot:e}=(0,k.V)(),o=e?.querySelector('[data-md-component="content"]'),s=e?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=s?.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),s?.prepend(i));const l=e?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let d=l?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return d||(d=document.createElement("div"),d.setAttribute("data-techdocs-addons-location","secondary sidebar"),l?.prepend(d)),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(en.A,{container:i,children:t.renderComponentsByLocation(nn.e.PrimarySidebar)}),(0,a.jsx)(en.A,{container:o,children:t.renderComponentsByLocation(nn.e.Content)}),(0,a.jsx)(en.A,{container:d,children:t.renderComponentsByLocation(nn.e.SecondarySidebar)})]})};var xa=r(95208);const Sa=(0,I.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),wa=It(t=>{const{withSearch:e=!0,searchResultUrlMapper:o,onReady:s}=t,i=Sa(),{entityMetadata:{value:l,loading:d},entityRef:p,setShadowRoot:f}=(0,k.V)(),{state:y}=X(),v=Ta(p),E=window.location.pathname,F=window.location.hash,tt=P(v),[T]=(0,it.$r)([`[id="${F.slice(1)}"]`]),ht=(0,xa.n)(),{NotFoundErrorPage:Et}=ht.getComponents();(0,m.useEffect)(()=>{tt||(F?T&&T.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[E,F,T,tt]);const et=(0,m.useCallback)(D=>{f(D),s instanceof Function&&s()},[f,s]);return d===!1&&!l?(0,a.jsx)(Et,{}):v?(0,a.jsx)(pt.U,{children:(0,a.jsxs)(w.A,{container:!0,children:[(0,a.jsx)(w.A,{xs:12,item:!0,children:(0,a.jsx)(b,{})}),e&&(0,a.jsx)(w.A,{className:i.search,xs:"auto",item:!0,children:(0,a.jsx)(ze,{entityId:p,entityTitle:l?.metadata?.title,searchResultUrlMapper:o})}),(0,a.jsxs)(w.A,{xs:12,item:!0,children:[(y==="CHECKING"||tt)&&(0,a.jsx)(Dt.k,{}),(0,a.jsx)(A,{element:v,onAppend:et,children:(0,a.jsx)(ba,{})})]})]})}):(0,a.jsx)(pt.U,{children:(0,a.jsx)(w.A,{container:!0,children:(0,a.jsx)(w.A,{xs:12,item:!0,children:(0,a.jsx)(b,{})})})})}),ja=null},41472:(Pt,z,r)=>{"use strict";r.r(z),r.d(z,{TechDocsSearchResultListItem:()=>B});var a=r(31085),m=r(46423),w=r(5951),I=r(58837),k=r(72501),V=r(75202),K=r(51470);const ot=(0,I.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),B=bt=>{const{result:P,highlight:A,lineClamp:it=5,asListItem:pt=!0,asLink:Dt=!0,title:Tt,icon:lt}=bt,Mt=ot(),xt=({children:ct})=>Dt?(0,a.jsx)(V.N_,{noTrack:!0,to:P.location,children:ct}):(0,a.jsx)(a.Fragment,{children:ct}),jt=()=>{const ct=A?.fields.title?(0,a.jsx)(K.e,{text:A.fields.title,preTag:A.preTag,postTag:A.postTag}):P.title,Ut=A?.fields.entityTitle?(0,a.jsx)(K.e,{text:A.fields.entityTitle,preTag:A.preTag,postTag:A.postTag}):P.entityTitle,ft=A?.fields.name?(0,a.jsx)(K.e,{text:A.fields.name,preTag:A.preTag,postTag:A.postTag}):P.name;return P?(0,a.jsx)(w.A,{className:Mt.itemText,primaryTypographyProps:{variant:"h6"},primary:(0,a.jsx)(xt,{children:Tt||(0,a.jsxs)(a.Fragment,{children:[ct," | ",Ut??ft," docs"]})}),secondary:(0,a.jsx)(k.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:it,overflow:"hidden"},color:"textSecondary",variant:"body2",children:A?.fields.text?(0,a.jsx)(K.e,{text:A.fields.text,preTag:A.preTag,postTag:A.postTag}):P.text})}):null},St=({children:ct})=>pt?(0,a.jsxs)(a.Fragment,{children:[lt&&(0,a.jsx)(m.A,{children:typeof lt=="function"?lt(P):lt}),(0,a.jsx)("div",{className:Mt.flexContainer,children:ct})]}):(0,a.jsx)(a.Fragment,{children:ct});return(0,a.jsx)(St,{children:(0,a.jsx)(jt,{})})}},56005:(Pt,z,r)=>{var a=r(95243),m=r(5485);function w(I){return m(a(I).toLowerCase())}Pt.exports=w},84893:(Pt,z,r)=>{"use strict";r.d(z,{Z:()=>pt});var a=r(31085),m=r(14041),w=r(58837),I=r(29365),k=r(75173),V=r(71677),K=r(37757),ot=r(77125),B=r(9684),bt=r(66839),P=r(11618),A=r(15246);const it=(0,w.A)(Dt=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:Dt.spacing(3,3,0),"@media print":{display:"none"}}})),pt=Dt=>{const Tt=it(),[lt,Mt]=(0,m.useState)(null),xt=(0,m.useCallback)(Gt=>{Mt(Gt.currentTarget)},[]),jt=(0,m.useCallback)(()=>{Mt(null)},[]),{entityMetadata:{value:St,loading:ct}}=(0,bt.V)(),Ut=(0,P.YR)(),ft=Ut.renderComponentsByLocation(A.e.Subheader),Ht=Ut.renderComponentsByLocation(A.e.Settings);return!ft&&!Ht||ct===!1&&!St?null:(0,a.jsx)(k.A,{classes:Tt,...Dt.toolbarProps,children:(0,a.jsxs)(ot.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap",children:[ft,Ht?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(V.Ay,{title:"Settings",children:(0,a.jsx)(I.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:xt,children:(0,a.jsx)(B.A,{})})}),(0,a.jsx)(K.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:lt,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!lt,onClose:jt,keepMounted:!0,children:(0,a.jsx)("div",{children:Ht})})]}):null]})})}},90292:(Pt,z,r)=>{"use strict";var a,m=r(4293),w=r(78920);a={value:!0},z.A=void 0;var I=w(r(14041)),k=m(r(74044)),V=(0,k.default)(I.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");z.A=V},91042:(Pt,z,r)=>{"use strict";r.d(z,{Y:()=>w});var a=r(14041),m=r(16261);function w(I,k){const[V,K]=(0,a.useState)({status:"not-executed",error:void 0,result:k}),ot=(0,a.useRef)(),B=(0,a.useRef)(),bt=(0,m.J)({execute(...P){B.current=P;const A=I(...P);return ot.current=A,K(it=>({...it,status:"loading"})),A.then(it=>{A===ot.current&&K(pt=>({...pt,status:"success",error:void 0,result:it}))},it=>{A===ot.current&&K(pt=>({...pt,status:"error",error:it}))}),A},reset(){K({status:"not-executed",error:void 0,result:k}),ot.current=void 0,B.current=void 0}});return[V,(0,a.useMemo)(()=>({reset(){bt.current.reset()},execute:(...P)=>bt.current.execute(...P)}),[]),{promise:ot.current,lastArgs:B.current}]}}}]);})();

//# sourceMappingURL=3402.f660cdfc.chunk.js.map