"use strict";exports.id=5842,exports.ids=[5842],exports.modules={394:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Yb:()=>n,e2:()=>c,fb:()=>m,l0:()=>d,n5:()=>l,te:()=>u});var s=t(1467),i=t(4115),o=e([s,i]);[s,i]=o.then?(await o)():o;let n=(0,i.default)(s.K)`
    width: 100%;
    min-height: calc(100vh - 6rem);
    flex-direction: column;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        min-height: 60vh;
    }
`,l=(0,i.default)(s.K)`
    position: relative;
    padding: 5.5rem 7.5rem;
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 0 0.5rem ${({theme:e})=>e.shadow};
`,d=i.default.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 27.5rem;
    max-width: 27.5rem;
`,c=(0,i.default)(s.K)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`,m=(0,i.default)(s.K)`
    min-width: 32rem;
    max-width: 40rem;
`,u=(0,i.default)(s.K)`
    min-height: calc(100vh - 10rem);
    padding: 2rem 0;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        flex-direction: column;
    }
`;a()}catch(e){a(e)}})},5837:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{A:()=>p});var s=t(997),i=t(1467),o=t(8081),n=t(6689),l=t(1377),d=t(4632),c=t(1691),m=t(9310),u=t(6197),h=e([i,o,d,c,m,u]);[i,o,d,c,m,u]=h.then?(await h)():h;let p=({initialCustomer:e})=>{let{t:r}=(0,l.useTranslation)("customer"),[t,a]=(0,n.useState)("details"),h=e=>a(e);return(0,s.jsxs)(i.K,{w100:!0,gap:"3.5rem",column:!0,children:[(0,s.jsxs)(i.K,{w100:!0,column:!0,gap:"1.5rem",children:[s.jsx(o.TP,{size:"2.5rem",weight:600,children:r("accountPage.title")}),(0,s.jsxs)(i.K,{gap:"0.5rem",children:[s.jsx(m.Sn,{active:"details"===t,onClick:()=>h("details"),children:r("accountPage.detailsForm.title")}),s.jsx(m.Sn,{active:"password"===t,onClick:()=>h("password"),children:r("accountPage.passwordForm.title")})]})]}),s.jsx(u.AnimatePresence,{children:"details"===t?s.jsx(c.y,{initialCustomer:e}):s.jsx(d.r,{})})]})};a()}catch(e){a(e)}})},4639:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{O:()=>x});var s=t(997),i=t(8297),o=t(1467),n=t(8081),l=t(9689),d=t(9556),c=t(7354),m=t(6062),u=t(4115),h=t(6197),p=t(1377),g=t(1163);t(6689);var w=e([o,n,l,c,u,h]);[o,n,l,c,u,h]=w.then?(await w)():w;let f=[{href:"/customer/manage",sub:[""],label:"navigation.manageAccount"},{href:"/customer/manage/addresses",sub:[""],label:"navigation.manageAddresses"},{href:"/customer/manage/orders",sub:["/customer/manage/orders/[code]"],label:"navigation.manageOrders"}],x=()=>{let e=(0,m.v)(),{t:r}=(0,p.useTranslation)("customer"),{pathname:t}=(0,g.useRouter)(),a=(0,c.E4)(),i=async()=>{await (0,d.Zs)(e)({logout:{success:!0}}),a("/")},u=t.replace("/[channel]","");return s.jsx(y,{w100:!0,children:(0,s.jsxs)(o.K,{children:[f.map(e=>s.jsx(o.K,{column:!0,children:(0,s.jsxs)(j,{href:e.href,children:[s.jsx(n.TP,{children:r(e.label)}),s.jsx(b,{initial:{width:0},animate:{width:u===e.href||e.sub.includes(u)?"100%":"0%"},exit:{width:0},transition:{duration:.3}})]})},e.href)),s.jsx(l.zx,{onClick:i,children:s.jsx(n.TP,{upperCase:!0,color:"contrast",children:r("navigation.logout")})})]})})},b=(0,u.default)(h.motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${e=>e.theme.button.back};
`,y=(0,u.default)(o.K)`
    width: fit-content;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
        margin-top: 0;
    }
`,j=(0,u.default)(i.r)`
    position: relative;
    border: 1px solid ${e=>e.theme.gray(100)};
    padding: 1.6rem 2.4rem;
    height: 100%;
    &:hover {
        & > p {
            opacity: 0.7;
        }
    }
    transition: opacity 0.3s ease-in;
`;a()}catch(e){a(e)}})},9310:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Sn:()=>c,XR:()=>l,l0:()=>d});var s=t(6197),i=t(9689),o=t(4115),n=e([s,i,o]);[s,i,o]=n.then?(await n)():n;let l=(0,o.default)(s.motion.div)`
    align-items: flex-start;
    display: flex;
    width: 100%;
    gap: 3.5rem;
    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
        flex-direction: column;
    }
`,d=o.default.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,c=(0,o.default)(i.zx)`
    background: ${e=>e.active&&e.theme.gray(700)};
    font-size: 1.2rem;
`;a()}catch(e){a(e)}})},1691:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{y:()=>f});var s=t(997),i=t(1467),o=t(9774),n=t(9556),l=t(4979),d=t(1656),c=t(6689),m=t(5641),u=t(1377),h=t(9926),p=t(9310),g=t(6062),w=e([i,o,d,m,h,p]);[i,o,d,m,h,p]=w.then?(await w)():w;let f=({initialCustomer:e})=>{let r=(0,g.v)(),{t}=(0,u.useTranslation)("customer"),{t:a}=(0,u.useTranslation)("common"),[w,f]=(0,c.useState)(e),[x,b]=(0,c.useState)(),y=h.object({firstName:h.string().min(1,{message:a("errors.firstName.required")}),lastName:h.string().min(1,{message:a("errors.lastName.required")}),phoneNumber:h.string().min(1,{message:a("errors.phoneNumber.required")}).optional()}),{register:j,handleSubmit:P,setError:v,formState:{errors:N,isSubmitting:C}}=(0,m.useForm)({values:{addressEmail:w?.emailAddress,firstName:w?.firstName||"",lastName:w?.lastName||"",phoneNumber:w?.phoneNumber},resolver:(0,d.zodResolver)(y)}),E=async e=>{let{firstName:s,lastName:i,phoneNumber:o}=e,d=Object.entries(e).every(([e,r])=>r===w[e]);if(!d)try{let{updateCustomer:e}=await (0,n.Zs)(r)({updateCustomer:[{input:{firstName:s,lastName:i,phoneNumber:o}},l.iH]});if(!e){v("root",{message:a("errors.backend.UNKNOWN_ERROR")});return}f(r=>({...r,...e})),b(t("accountPage.detailsForm.successMessage"))}catch{v("root",{message:a("errors.backend.UNKNOWN_ERROR")})}};return(0,c.useEffect)(()=>{if(x){let e=setTimeout(()=>{b(void 0)},5e3);return()=>clearTimeout(e)}},[x]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(o.jL,{clearErrors:()=>b(void 0),success:{message:x}}),s.jsx(p.XR,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",stiffness:380,damping:30},children:(0,s.jsxs)(p.l0,{onSubmit:P(E),noValidate:!0,children:[(0,s.jsxs)(i.K,{gap:"2rem",column:!0,itemsCenter:!0,children:[s.jsx(o.II,{...j("addressEmail"),label:t("accountPage.detailsForm.addressEmail"),disabled:!0}),(0,s.jsxs)(i.K,{w100:!0,gap:"1.25rem",children:[s.jsx(o.II,{label:t("accountPage.detailsForm.firstName"),...j("firstName"),error:N.firstName}),s.jsx(o.II,{label:t("accountPage.detailsForm.lastName"),...j("lastName"),error:N.lastName})]}),s.jsx(o.II,{label:t("accountPage.detailsForm.phoneNumber"),...j("phoneNumber"),error:N.phoneNumber})]}),s.jsx(p.Sn,{loading:C,type:"submit",children:t("accountPage.detailsForm.changeDetails")})]})})]})};a()}catch(e){a(e)}})},4632:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{r:()=>w});var s=t(997),i=t(1377);t(6689);var o=t(9926),n=t(1656),l=t(5641),d=t(9556),c=t(1467),m=t(9774),u=t(7354),h=t(9310),p=t(6062),g=e([o,n,l,c,m,u,h]);[o,n,l,c,m,u,h]=g.then?(await g)():g;let w=()=>{let e=(0,p.v)(),r=(0,u.E4)(),{t}=(0,i.useTranslation)("customer"),{t:a}=(0,i.useTranslation)("common"),g=o.object({oldPassword:o.string().min(8,a("errors.password.minLength")).max(25,a("errors.password.maxLength")),newPassword:o.string().min(8,a("errors.password.minLength")).max(25,a("errors.password.maxLength")),newPasswordConfirmation:o.string().min(8,a("errors.password.minLength")).max(25,a("errors.password.maxLength"))}).refine(e=>e.newPassword===e.newPasswordConfirmation,{message:a("errors.confirmPassword.mustMatch"),path:["newPasswordConfirmation"]}).refine(e=>e.oldPassword!==e.newPassword,{message:a("errors.password.mustDifferent"),path:["newPassword"]}),{register:w,handleSubmit:f,setError:x,clearErrors:b,formState:{errors:y,isSubmitting:j}}=(0,l.useForm)({values:{oldPassword:"",newPassword:"",newPasswordConfirmation:""},resolver:(0,n.zodResolver)(g)}),P=async t=>{try{let{updateCustomerPassword:s}=await (0,d.Zs)(e)({updateCustomerPassword:[{currentPassword:t.oldPassword,newPassword:t.newPassword},{__typename:!0,"...on InvalidCredentialsError":{message:!0,errorCode:!0,authenticationError:!0},"...on NativeAuthStrategyError":{errorCode:!0,message:!0},"...on PasswordValidationError":{errorCode:!0,message:!0,validationErrorMessage:!0},"...on Success":{success:!0}}]});if("Success"!==s.__typename){x("root",{message:a(`errors.backend.${s.errorCode}`)});return}let{logout:i}=await (0,d.Zs)(e)({logout:{success:!0}});i.success&&r("/customer/sign-in/")}catch(e){x("root",{message:a("errors.backend.UNKNOWN_ERROR")})}};return s.jsx(h.XR,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",stiffness:380,damping:30},children:(0,s.jsxs)(h.l0,{onSubmit:f(P),noValidate:!0,children:[s.jsx(m.jL,{error:{message:y.newPasswordConfirmation?.message||y.root?.message||y.newPassword?.message},clearErrors:()=>b(["newPasswordConfirmation","newPassword"])}),(0,s.jsxs)(c.K,{gap:"2rem",column:!0,itemsCenter:!0,children:[s.jsx(m.II,{label:t("accountPage.passwordForm.oldPassword"),type:"password",...w("oldPassword")}),(0,s.jsxs)(c.K,{gap:"1.25rem",children:[s.jsx(m.II,{label:t("accountPage.passwordForm.newPassword"),type:"password",...w("newPassword")}),s.jsx(m.II,{label:t("accountPage.passwordForm.confirmPassword"),type:"password",...w("newPasswordConfirmation")})]})]}),s.jsx(h.Sn,{loading:j,type:"submit",children:t("accountPage.passwordForm.confirmPassword")})]})})};a()}catch(e){a(e)}})},6092:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{o:()=>h});var s=t(997),i=t(4411);t(6689);var o=t(4639),n=t(5837),l=t(2520),d=t(1377),c=t(394),m=t(6263),u=e([i,o,n,l,c,m]);[i,o,n,l,c,m]=u.then?(await u)():u;let h=e=>{let{t:r}=(0,d.useTranslation)("customer");return s.jsx(i.Ar,{categories:e.collections,navigation:e.navigation,pageTitle:r("accountPage.title"),children:(0,s.jsxs)(l.O,{children:[s.jsx(m.Kq,{w100:!0,justifyEnd:!0,children:s.jsx(o.O,{})}),s.jsx(c.te,{itemsStart:!0,w100:!0,gap:"3rem",children:s.jsx(n.A,{initialCustomer:e.activeCustomer})})]})})};a()}catch(e){a(e)}})},3879:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{N:()=>u});var s=t(9556),i=t(4979),o=t(4039),n=t(4378),l=t(7354),d=t(2254),c=t(575),m=e([l]);l=(m.then?(await m)():m)[0];let u=async e=>{let r=await (0,n.S9)(["common","customer"])(e),t=(0,l.wb)(e);if(t)return t;let a=await (0,o.b)(r.context),m=(0,d.w)(a),u=(0,l.Pf)("/")(e);try{let{activeCustomer:t}=await (0,s.bw)(e)({activeCustomer:{...i.iH,orders:[{options:{take:1,sort:{updatedAt:c.As.DESC},filter:{active:{eq:!1}}}},{items:i.bQ}]}});if(!t)throw Error("No active customer");let{orders:o,...n}=t,l={...r.props,...r.context,collections:a,activeCustomer:n,lastOrder:o.items&&o.items.length>0?o.items[0]:null,navigation:m};return{props:l}}catch(e){return u}};a()}catch(e){a(e)}})},4039:(e,r,t)=>{t.d(r,{b:()=>o});var a=t(9556),s=t(4979),i=t(575);let o=async e=>{let r=await (0,a.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:s.u0}]}),t=[];try{t=await Promise.all(r.collections.items.map(async r=>{let t=await (0,a.af)(e)({collection:[{slug:r.slug},{productVariants:[{options:{take:4,sort:{createdAt:i.As.ASC}}},{totalItems:!0,items:s.$b}]}]});return{...r,productVariants:t.collection?.productVariants}}))}catch(e){t=[]}let o=r.collections.items.map(e=>{let r=t.length?t.find(r=>r.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:r?.productVariants}});return o}},2254:(e,r,t)=>{t.d(r,{w:()=>a});function a(e){let r={},t=[];for(let t of e)r[t.id]={...t,children:[]};for(let a of e){let e=r[a.id],s=a.parentId;if(null===s)t.push(e);else{let a=r[s];a?a.children.push(e):t.push(e)}}let a=t.length?t[0].parentId:null;return{children:t,id:a}}}};