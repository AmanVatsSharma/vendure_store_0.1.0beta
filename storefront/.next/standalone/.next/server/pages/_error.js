"use strict";(()=>{var e={};e.id=4820,e.ids=[4820,2888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2660:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>p,getServerSideProps:()=>m,getStaticPaths:()=>f,getStaticProps:()=>c,reportWebVitals:()=>g,routeModule:()=>v,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var a=r(7093),o=r(5244),l=r(1323),i=r(4844),d=r(3877),u=r(6908),s=e([d]);d=(s.then?(await s)():s)[0];let p=(0,l.l)(u,"default"),c=(0,l.l)(u,"getStaticProps"),f=(0,l.l)(u,"getStaticPaths"),m=(0,l.l)(u,"getServerSideProps"),h=(0,l.l)(u,"config"),g=(0,l.l)(u,"reportWebVitals"),y=(0,l.l)(u,"unstable_getStaticProps"),b=(0,l.l)(u,"unstable_getStaticPaths"),x=(0,l.l)(u,"unstable_getStaticParams"),_=(0,l.l)(u,"unstable_getServerProps"),P=(0,l.l)(u,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:d.default,Document:i.default},userland:u});n()}catch(e){n(e)}})},6908:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let n=r(167),a=n._(r(6689)),o=n._(r(9201)),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e,n=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:n}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||l[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:d.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:d.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:d.h1},e):null,a.default.createElement("div",{style:d.wrap},a.default.createElement("h2",{style:d.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=i,Error.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7543:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9201:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return s},default:function(){return m}});let n=r(167),a=r(8760),o=a._(r(6689)),l=n._(r(8955)),i=r(8039),d=r(1988),u=r(7543);function s(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1905);let c=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(s(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,l=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){l=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(d.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8955:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(6689),a=()=>{},o=()=>{};function l(e){var t;let{headManager:r,reduceComponentsToState:l}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(l(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1905:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4844:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(997),a=r(6859),o=r.n(a);class l extends o(){render(){let e=this?.props?.__NEXT_DATA__?.props?.pageProps?._nextI18Next?.initialLocale||"en";return(0,n.jsxs)(a.Html,{lang:e,children:[n.jsx(a.Head,{children:n.jsx("meta",{name:"robots",content:"noindex"})}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{e.exports=r(7093).vendored.contexts.AmpContext},1377:e=>{e.exports=require("next-i18next")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7441:e=>{e.exports=require("unstated-next")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[8428,6838,6859,3877],()=>r(2660));module.exports=n})();