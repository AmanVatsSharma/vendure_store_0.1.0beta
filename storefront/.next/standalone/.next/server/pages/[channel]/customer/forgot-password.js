"use strict";(()=>{var e={};e.id=9653,e.ids=[9653,2888],e.modules={815:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>m,getServerSideProps:()=>g,getStaticPaths:()=>p,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>P,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>f});var a=r(7093),o=r(5244),i=r(1323),n=r(4844),l=r(3877),c=r(5363),d=e([l,c]);[l,c]=d.then?(await d)():d;let m=(0,i.l)(c,"default"),u=(0,i.l)(c,"getStaticProps"),p=(0,i.l)(c,"getStaticPaths"),g=(0,i.l)(c,"getServerSideProps"),x=(0,i.l)(c,"config"),h=(0,i.l)(c,"reportWebVitals"),f=(0,i.l)(c,"unstable_getStaticProps"),b=(0,i.l)(c,"unstable_getStaticPaths"),v=(0,i.l)(c,"unstable_getStaticParams"),w=(0,i.l)(c,"unstable_getServerProps"),S=(0,i.l)(c,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/[channel]/customer/forgot-password",pathname:"/[channel]/customer/forgot-password",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:c});s()}catch(e){s(e)}})},394:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Yb:()=>n,e2:()=>d,fb:()=>m,l0:()=>c,n5:()=>l,te:()=>u});var a=r(1467),o=r(4115),i=e([a,o]);[a,o]=i.then?(await i)():i;let n=(0,o.default)(a.K)`
    width: 100%;
    min-height: calc(100vh - 6rem);
    flex-direction: column;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        min-height: 60vh;
    }
`,l=(0,o.default)(a.K)`
    position: relative;
    padding: 5.5rem 7.5rem;
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 0 0.5rem ${({theme:e})=>e.shadow};
`,c=o.default.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 27.5rem;
    max-width: 27.5rem;
`,d=(0,o.default)(a.K)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`,m=(0,o.default)(a.K)`
    min-width: 32rem;
    max-width: 40rem;
`,u=(0,o.default)(a.K)`
    min-height: calc(100vh - 10rem);
    padding: 2rem 0;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        flex-direction: column;
    }
`;s()}catch(e){s(e)}})},2347:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{A:()=>P});var a=r(997),o=r(4411),i=r(6689),n=r(1467),l=r(8297),c=r(5641),d=r(9774),m=r(9689),u=r(1377),p=r(2520),g=r(9556),x=r(394),h=r(9926),f=r(1656),b=r(8081),v=r(6062),w=r(4115),S=e([o,n,c,d,m,p,x,h,f,b,w]);[o,n,c,d,m,p,x,h,f,b,w]=S.then?(await S)():S;let P=e=>{let t=(0,v.v)(),{t:r}=(0,u.useTranslation)("customer"),{t:s}=(0,u.useTranslation)("common"),[l,w]=(0,i.useState)(),S=h.z.object({emailAddress:h.z.string().email(s("errors.email.invalid")).min(1,s("errors.email.required"))}),{register:P,handleSubmit:j,setError:q,formState:{errors:_,isSubmitting:k}}=(0,c.useForm)({resolver:(0,f.zodResolver)(S)}),A=async e=>{let{emailAddress:a}=e;try{let{requestPasswordReset:e}=await (0,g.Zs)(t)({requestPasswordReset:[{emailAddress:a},{__typename:!0,"...on Success":{success:!0},"...on NativeAuthStrategyError":{errorCode:!0,message:!0}}]});if(!e){q("root",{message:s("errors.backend.UNKNOWN_ERROR")});return}if(e?.__typename==="Success"){w(r("forgotPasswordSuccess"));return}q("root",{message:s(`errors.backend.${e.errorCode}`)})}catch{q("root",{message:s("errors.backend.UNKNOWN_ERROR")})}};return a.jsx(o.Ar,{categories:e.collections,navigation:e.navigation,pageTitle:r("forgotPasswordTitle"),children:a.jsx(p.O,{children:a.jsx(x.Yb,{children:(0,a.jsxs)(x.n5,{column:!0,itemsCenter:!0,gap:"3.5rem",children:[a.jsx(x.e2,{w100:!0,children:a.jsx(d.jL,{error:_.root,success:l?{message:l}:void 0,clearErrors:()=>{q("root",{message:void 0}),w(void 0)}})}),a.jsx(b.TP,{weight:600,children:r("forgotPasswordTitle")}),(0,a.jsxs)(x.fb,{w100:!0,column:!0,itemsCenter:!0,gap:"1.75rem",children:[(0,a.jsxs)(x.l0,{onSubmit:j(A),children:[a.jsx(d.II,{error:_.emailAddress,label:r("email"),type:"text",...P("emailAddress")}),a.jsx(m.zx,{loading:k,type:"submit",children:r("newPassword")})]}),(0,a.jsxs)(n.K,{column:!0,itemsCenter:!0,gap:"0.5rem",children:[a.jsx(y,{href:"/customer/sign-in",children:r("signIn")}),a.jsx(y,{href:"/customer/sign-up",children:r("signUp")})]})]})]})})})})},y=(0,w.default)(l.r)`
    position: relative;
    color: ${({theme:e})=>e.text.main};
    display: block;
    transition: text-decoration 0.3s ease;

    &:hover {
        text-decoration: underline;
    }
`;s()}catch(e){s(e)}})},8196:(e,t,r)=>{r.d(t,{N:()=>i});var s=r(4039),a=r(4378),o=r(2254);let i=async e=>{let t=await (0,a.S9)(["common","customer"])(e),r=await (0,s.b)(t.context),i=(0,o.w)(r),n={...t.props,...t.context,collections:r,navigation:i};return{props:n}}},4039:(e,t,r)=>{r.d(t,{b:()=>i});var s=r(9556),a=r(4979),o=r(575);let i=async e=>{let t=await (0,s.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:a.u0}]}),r=[];try{r=await Promise.all(t.collections.items.map(async t=>{let r=await (0,s.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:o.As.ASC}}},{totalItems:!0,items:a.$b}]}]});return{...t,productVariants:r.collection?.productVariants}}))}catch(e){r=[]}let i=t.collections.items.map(e=>{let t=r.length?r.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return i}},5363:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>l,getServerSideProps:()=>i.N});var a=r(997);r(6689);var o=r(2347),i=r(8196),n=e([o]);o=(n.then?(await n)():n)[0];let l=e=>a.jsx(o.A,{...e});s()}catch(e){s(e)}})},2254:(e,t,r)=>{r.d(t,{w:()=>s});function s(e){let t={},r=[];for(let r of e)t[r.id]={...r,children:[]};for(let s of e){let e=t[s.id],a=s.parentId;if(null===a)r.push(e);else{let s=t[a];s?s.children.push(e):r.push(e)}}let s=r.length?r[0].parentId:null;return{children:r,id:s}}},1161:e=>{e.exports=require("keen-slider/react")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7441:e=>{e.exports=require("unstated-next")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},1656:e=>{e.exports=import("@hookform/resolvers/zod")},5158:e=>{e.exports=import("country-flag-icons/react/3x2")},6197:e=>{e.exports=import("framer-motion")},3707:e=>{e.exports=import("next-language-detector")},5641:e=>{e.exports=import("react-hook-form")},7987:e=>{e.exports=import("react-i18next")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8428,6838,6859,4672,3877,6215],()=>r(815));module.exports=s})();