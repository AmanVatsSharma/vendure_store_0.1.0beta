"use strict";(()=>{var e={};e.id=2524,e.ids=[2524,2888],e.modules={7926:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>g,default:()=>m,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>p,reportWebVitals:()=>x,routeModule:()=>S,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>w});var o=t(7093),a=t(5244),i=t(1323),n=t(4844),l=t(3877),d=t(7859),c=e([l,d]);[l,d]=c.then?(await c)():c;let m=(0,i.l)(d,"default"),p=(0,i.l)(d,"getStaticProps"),u=(0,i.l)(d,"getStaticPaths"),h=(0,i.l)(d,"getServerSideProps"),g=(0,i.l)(d,"config"),x=(0,i.l)(d,"reportWebVitals"),w=(0,i.l)(d,"unstable_getStaticProps"),f=(0,i.l)(d,"unstable_getStaticPaths"),P=(0,i.l)(d,"unstable_getStaticParams"),b=(0,i.l)(d,"unstable_getServerProps"),v=(0,i.l)(d,"unstable_getServerSideProps"),S=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/[channel]/[locale]/customer/reset-password",pathname:"/[channel]/[locale]/customer/reset-password",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:d});s()}catch(e){s(e)}})},394:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Yb:()=>n,e2:()=>c,fb:()=>m,l0:()=>d,n5:()=>l,te:()=>p});var o=t(1467),a=t(4115),i=e([o,a]);[o,a]=i.then?(await i)():i;let n=(0,a.default)(o.K)`
    width: 100%;
    min-height: calc(100vh - 6rem);
    flex-direction: column;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        min-height: 60vh;
    }
`,l=(0,a.default)(o.K)`
    position: relative;
    padding: 5.5rem 7.5rem;
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 0 0.5rem ${({theme:e})=>e.shadow};
`,d=a.default.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 27.5rem;
    max-width: 27.5rem;
`,c=(0,a.default)(o.K)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`,m=(0,a.default)(o.K)`
    min-width: 32rem;
    max-width: 40rem;
`,p=(0,a.default)(o.K)`
    min-height: calc(100vh - 10rem);
    padding: 2rem 0;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        flex-direction: column;
    }
`;s()}catch(e){s(e)}})},6002:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{d:()=>P});var o=t(997),a=t(4411);t(6689);var i=t(2520),n=t(5641),l=t(9556),d=t(9774),c=t(9689),m=t(7354),p=t(394),u=t(1377),h=t(9926),g=t(1656),x=t(8081),w=t(6062),f=e([a,i,n,d,c,m,p,h,g,x]);[a,i,n,d,c,m,p,h,g,x]=f.then?(await f)():f;let P=e=>{let r=(0,w.v)(),{t}=(0,u.useTranslation)("customer"),{t:s}=(0,u.useTranslation)("common"),f=h.z.object({password:h.z.string().min(8,s("errors.password.minLength")).max(25,s("errors.password.maxLength")),confirmPassword:h.z.string().min(8,s("errors.password.minLength")).max(25,s("errors.password.maxLength"))}).refine(e=>e.password===e.confirmPassword,{message:s("errors.confirmPassword.mustMatch"),path:["confirmPassword"]}),{register:P,handleSubmit:b,formState:{errors:v,isSubmitting:S},setError:y}=(0,n.useForm)({resolver:(0,g.zodResolver)(f)}),j=(0,m.E4)(),q=async t=>{try{let{resetPassword:o}=await (0,l.Zs)(r)({resetPassword:[{password:t.password,token:e.token},{__typename:!0,"...on CurrentUser":{id:!0},"...on NativeAuthStrategyError":{errorCode:!0,message:!0},"...on NotVerifiedError":{errorCode:!0,message:!0},"...on PasswordResetTokenExpiredError":{errorCode:!0,message:!0},"...on PasswordResetTokenInvalidError":{errorCode:!0,message:!0},"...on PasswordValidationError":{errorCode:!0,message:!0,validationErrorMessage:!0}}]});if("CurrentUser"===o.__typename){j("/customer/sign-in");return}y("root",{message:s(`errors.backend.${o.errorCode}`)})}catch{y("root",{message:s("errors.backend.UNKNOWN_ERROR")})}};return o.jsx(a.Ar,{categories:e.collections,navigation:e.navigation,pageTitle:t("resetPasswordTitle"),children:o.jsx(i.O,{children:(0,o.jsxs)(p.Yb,{children:[o.jsx(p.e2,{w100:!0,children:o.jsx(d.jL,{error:v.root,clearErrors:()=>y("root",{message:void 0})})}),o.jsx(x.TP,{weight:600,children:t("resetPasswordTitle")}),o.jsx(p.n5,{column:!0,itemsCenter:!0,gap:"1.75rem",children:o.jsx(p.fb,{w100:!0,column:!0,itemsCenter:!0,gap:"1.75rem",children:(0,o.jsxs)(p.l0,{onSubmit:b(q),children:[o.jsx(d.II,{error:v.password,label:t("newPassword"),type:"password",...P("password")}),o.jsx(d.II,{error:v.confirmPassword,label:t("confirmNewPassword"),type:"password",...P("confirmPassword")}),o.jsx(c.zx,{loading:S,type:"submit",children:t("resetPassword")})]})})})]})})})};s()}catch(e){s(e)}})},2545:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{N:()=>d});var o=t(4039),a=t(4378),i=t(7354),n=t(2254),l=e([i]);i=(l.then?(await l)():l)[0];let d=async e=>{let r=await (0,a.S9)(["common","customer"])(e),t=(0,i.wb)(e);if(t)return t;let s=await (0,o.b)(r.context),l=(0,n.w)(s),d=e.query.token,c=(0,i.Pf)("/")(e);if(!d)return c;let m={...r.props,...r.context,collections:s,token:d,navigation:l};return{props:m}};s()}catch(e){s(e)}})},4039:(e,r,t)=>{t.d(r,{b:()=>i});var s=t(9556),o=t(4979),a=t(575);let i=async e=>{let r=await (0,s.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:o.u0}]}),t=[];try{t=await Promise.all(r.collections.items.map(async r=>{let t=await (0,s.af)(e)({collection:[{slug:r.slug},{productVariants:[{options:{take:4,sort:{createdAt:a.As.ASC}}},{totalItems:!0,items:o.$b}]}]});return{...r,productVariants:t.collection?.productVariants}}))}catch(e){t=[]}let i=r.collections.items.map(e=>{let r=t.length?t.find(r=>r.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:r?.productVariants}});return i}},7859:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>l,getServerSideProps:()=>i.N});var o=t(997);t(6689);var a=t(6002),i=t(2545),n=e([a,i]);[a,i]=n.then?(await n)():n;let l=e=>o.jsx(a.d,{...e});s()}catch(e){s(e)}})},2254:(e,r,t)=>{t.d(r,{w:()=>s});function s(e){let r={},t=[];for(let t of e)r[t.id]={...t,children:[]};for(let s of e){let e=r[s.id],o=s.parentId;if(null===o)t.push(e);else{let s=r[o];s?s.children.push(e):t.push(e)}}let s=t.length?t[0].parentId:null;return{children:t,id:s}}},1161:e=>{e.exports=require("keen-slider/react")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7441:e=>{e.exports=require("unstated-next")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},1656:e=>{e.exports=import("@hookform/resolvers/zod")},5158:e=>{e.exports=import("country-flag-icons/react/3x2")},6197:e=>{e.exports=import("framer-motion")},3707:e=>{e.exports=import("next-language-detector")},5641:e=>{e.exports=import("react-hook-form")},7987:e=>{e.exports=import("react-i18next")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[8428,6838,6859,4672,3877,6215],()=>t(7926));module.exports=s})();