"use strict";(()=>{var e={};e.id=7277,e.ids=[7277,2888],e.modules={6775:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>p,getStaticProps:()=>m,reportWebVitals:()=>x,routeModule:()=>P,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>f});var i=r(7093),s=r(5244),o=r(1323),n=r(4844),l=r(3877),c=r(5059),d=e([l,c]);[l,c]=d.then?(await d)():d;let u=(0,o.l)(c,"default"),m=(0,o.l)(c,"getStaticProps"),p=(0,o.l)(c,"getStaticPaths"),h=(0,o.l)(c,"getServerSideProps"),g=(0,o.l)(c,"config"),x=(0,o.l)(c,"reportWebVitals"),f=(0,o.l)(c,"unstable_getStaticProps"),v=(0,o.l)(c,"unstable_getStaticPaths"),y=(0,o.l)(c,"unstable_getStaticParams"),b=(0,o.l)(c,"unstable_getServerProps"),w=(0,o.l)(c,"unstable_getServerSideProps"),P=new i.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/[channel]/[locale]/customer/verify",pathname:"/[channel]/[locale]/customer/verify",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:c});a()}catch(e){a(e)}})},394:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Yb:()=>n,e2:()=>d,fb:()=>u,l0:()=>c,n5:()=>l,te:()=>m});var i=r(1467),s=r(4115),o=e([i,s]);[i,s]=o.then?(await o)():o;let n=(0,s.default)(i.K)`
    width: 100%;
    min-height: calc(100vh - 6rem);
    flex-direction: column;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        min-height: 60vh;
    }
`,l=(0,s.default)(i.K)`
    position: relative;
    padding: 5.5rem 7.5rem;
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 0 0.5rem ${({theme:e})=>e.shadow};
`,c=s.default.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 27.5rem;
    max-width: 27.5rem;
`,d=(0,s.default)(i.K)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`,u=(0,s.default)(i.K)`
    min-width: 32rem;
    max-width: 40rem;
`,m=(0,s.default)(i.K)`
    min-height: calc(100vh - 10rem);
    padding: 2rem 0;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        flex-direction: column;
    }
`;a()}catch(e){a(e)}})},6066:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{I:()=>h});var i=r(997),s=r(4411);r(6689);var o=r(8297),n=r(1377),l=r(2520),c=r(1467),d=r(9774),u=r(8081),m=r(394),p=e([s,l,c,d,u,m]);[s,l,c,d,u,m]=p.then?(await p)():p;let h=e=>{let{t}=(0,n.useTranslation)("customer"),{t:r}=(0,n.useTranslation)("common");return i.jsx(s.Ar,{categories:e.collections,navigation:e.navigation,pageTitle:t("verify.title"),children:i.jsx(l.O,{children:i.jsx(m.Yb,{children:i.jsx(m.n5,{column:!0,itemsCenter:!0,gap:"3.5rem",children:"CurrentUser"!==e.status.verifyCustomerAccount.__typename?(0,i.jsxs)(i.Fragment,{children:[i.jsx(m.e2,{w100:!0,children:i.jsx(d.jL,{initial:{opacity:1},error:{message:r(`errors.backend.${e.status.verifyCustomerAccount.errorCode}`)}})}),(0,i.jsxs)(c.K,{justifyCenter:!0,itemsCenter:!0,column:!0,gap:"2rem",children:[i.jsx(u.TP,{children:t("verify.fail")}),i.jsx(o.r,{href:"/",children:t("home")})]})]}):(0,i.jsxs)(c.K,{justifyCenter:!0,itemsCenter:!0,column:!0,gap:"2rem",children:[i.jsx(u.TP,{children:t("verify.success")}),i.jsx(o.r,{href:"/customer/sign-in",children:t("signIn")})]})})})})})};a()}catch(e){a(e)}})},8731:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{N:()=>d});var i=r(9556),s=r(4039),o=r(4378),n=r(7354),l=r(2254),c=e([n]);n=(c.then?(await c)():c)[0];let d=async e=>{let t=await (0,o.S9)(["common","customer"])(e),r=(0,n.wb)(e);if(r)return r;let a=await (0,s.b)(t.context),c=(0,l.w)(a),d=e.query.token,u=(0,n.Pf)("/")(e);if(!d)return u;try{let{verifyCustomerAccount:r}=await (0,i.TP)(e)({verifyCustomerAccount:[{token:d},{__typename:!0,"...on CurrentUser":{id:!0},"...on MissingPasswordError":{message:!0,errorCode:!0},"...on NativeAuthStrategyError":{errorCode:!0,message:!0},"...on PasswordAlreadySetError":{message:!0,errorCode:!0},"...on VerificationTokenInvalidError":{message:!0,errorCode:!0},"...on PasswordValidationError":{errorCode:!0,message:!0,validationErrorMessage:!0},"...on VerificationTokenExpiredError":{message:!0,errorCode:!0}}]});return{props:{...t.props,...t.context,collections:a,status:{verifyCustomerAccount:r},navigation:c}}}catch(e){return u}};a()}catch(e){a(e)}})},4039:(e,t,r)=>{r.d(t,{b:()=>o});var a=r(9556),i=r(4979),s=r(575);let o=async e=>{let t=await (0,a.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:i.u0}]}),r=[];try{r=await Promise.all(t.collections.items.map(async t=>{let r=await (0,a.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:s.As.ASC}}},{totalItems:!0,items:i.$b}]}]});return{...t,productVariants:r.collection?.productVariants}}))}catch(e){r=[]}let o=t.collections.items.map(e=>{let t=r.length?r.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return o}},5059:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>l,getServerSideProps:()=>o.N});var i=r(997);r(6689);var s=r(6066),o=r(8731),n=e([s,o]);[s,o]=n.then?(await n)():n;let l=e=>i.jsx(s.I,{...e});a()}catch(e){a(e)}})},2254:(e,t,r)=>{r.d(t,{w:()=>a});function a(e){let t={},r=[];for(let r of e)t[r.id]={...r,children:[]};for(let a of e){let e=t[a.id],i=a.parentId;if(null===i)r.push(e);else{let a=t[i];a?a.children.push(e):r.push(e)}}let a=r.length?r[0].parentId:null;return{children:r,id:a}}},1161:e=>{e.exports=require("keen-slider/react")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7441:e=>{e.exports=require("unstated-next")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},5158:e=>{e.exports=import("country-flag-icons/react/3x2")},6197:e=>{e.exports=import("framer-motion")},3707:e=>{e.exports=import("next-language-detector")},5641:e=>{e.exports=import("react-hook-form")},7987:e=>{e.exports=import("react-i18next")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8428,6838,6859,4672,3877,6215],()=>r(6775));module.exports=a})();