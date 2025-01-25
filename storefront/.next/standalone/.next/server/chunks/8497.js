"use strict";exports.id=8497,exports.ids=[8497],exports.modules={8621:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(4297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,a.Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},8761:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(4297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,a.Z)("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]])},1452:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{K:()=>c});var i=r(997);r(6689);var s=r(1377),n=r(1962),l=r(6263),d=r(4115),o=e([l,d]);[l,d]=o.then?(await o)():o;let c=({state:e,size:t="small",column:r,withoutText:a,itemsCenter:d,itemsEnd:o=!0})=>{let{t:c}=(0,s.useTranslation)("common");return(0,i.jsxs)(l.Kq,{w100:!0,itemsEnd:o,itemsCenter:d,gap:"0.5rem",column:r,children:[i.jsx(l.Kq,{justifyCenter:!0,itemsCenter:!0,children:(0,n.a)(e,"small"===t?20:"medium"===t?30:40)}),!a&&i.jsx(h,{v:t,weight:500,children:c(`orderStates.${e}`)})]})},h=(0,d.default)(l.TP)`
    font-size: ${e=>"small"===e.v?"1rem":"medium"===e.v?"1.25rem":"1.5rem"};
    font-weight: 500;
`;a()}catch(e){a(e)}})},394:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Yb:()=>l,e2:()=>c,fb:()=>h,l0:()=>o,n5:()=>d,te:()=>m});var i=r(1467),s=r(4115),n=e([i,s]);[i,s]=n.then?(await n)():n;let l=(0,s.default)(i.K)`
    width: 100%;
    min-height: calc(100vh - 6rem);
    flex-direction: column;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        min-height: 60vh;
    }
`,d=(0,s.default)(i.K)`
    position: relative;
    padding: 5.5rem 7.5rem;
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 0 0.5rem ${({theme:e})=>e.shadow};
`,o=s.default.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 27.5rem;
    max-width: 27.5rem;
`,c=(0,s.default)(i.K)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`,h=(0,s.default)(i.K)`
    min-width: 32rem;
    max-width: 40rem;
`,m=(0,s.default)(i.K)`
    min-height: calc(100vh - 10rem);
    padding: 2rem 0;

    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        flex-direction: column;
    }
`;a()}catch(e){a(e)}})},4639:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{O:()=>w});var i=r(997),s=r(8297),n=r(1467),l=r(8081),d=r(9689),o=r(9556),c=r(7354),h=r(6062),m=r(4115),u=r(6197),p=r(1377),g=r(1163);r(6689);var x=e([n,l,d,c,m,u]);[n,l,d,c,m,u]=x.then?(await x)():x;let y=[{href:"/customer/manage",sub:[""],label:"navigation.manageAccount"},{href:"/customer/manage/addresses",sub:[""],label:"navigation.manageAddresses"},{href:"/customer/manage/orders",sub:["/customer/manage/orders/[code]"],label:"navigation.manageOrders"}],w=()=>{let e=(0,h.v)(),{t}=(0,p.useTranslation)("customer"),{pathname:r}=(0,g.useRouter)(),a=(0,c.E4)(),s=async()=>{await (0,o.Zs)(e)({logout:{success:!0}}),a("/")},m=r.replace("/[channel]","");return i.jsx(v,{w100:!0,children:(0,i.jsxs)(n.K,{children:[y.map(e=>i.jsx(n.K,{column:!0,children:(0,i.jsxs)(j,{href:e.href,children:[i.jsx(l.TP,{children:t(e.label)}),i.jsx(f,{initial:{width:0},animate:{width:m===e.href||e.sub.includes(m)?"100%":"0%"},exit:{width:0},transition:{duration:.3}})]})},e.href)),i.jsx(d.zx,{onClick:s,children:i.jsx(l.TP,{upperCase:!0,color:"contrast",children:t("navigation.logout")})})]})})},f=(0,m.default)(u.motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${e=>e.theme.button.back};
`,v=(0,m.default)(n.K)`
    width: fit-content;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
        margin-top: 0;
    }
`,j=(0,m.default)(s.r)`
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
`;a()}catch(e){a(e)}})},6479:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{v:()=>x});var i=r(997),s=r(8297),n=r(3798),l=r(3345),d=r(1467),o=r(8081),c=r(1452),h=r(4512),m=r(4115),u=r(6197),p=r(1377);r(6689);var g=e([n,l,d,o,c,m,u]);[n,l,d,o,c,m,u]=g.then?(await g)():g;let x=({order:e})=>{let{t}=(0,p.useTranslation)("customer");return i.jsx(f,{children:(0,i.jsxs)(w,{w100:!0,itemsStart:!0,gap:"1.75rem",children:[i.jsx(d.K,{justifyBetween:!0,w100:!0,children:(0,i.jsxs)(d.K,{column:!0,w100:!0,gap:"0.75rem",children:[(0,i.jsxs)(d.K,{gap:"1.75rem",itemsStart:!0,children:[i.jsx(l.qN,{size:"thumbnail",src:e.lines[0].featuredAsset?.preview,alt:e.lines[0].productVariant.product.name,title:e.lines[0].productVariant.product.name}),(0,i.jsxs)(d.K,{column:!0,gap:"0.5rem",children:[(0,i.jsxs)(d.K,{w100:!0,column:!0,children:[(0,i.jsxs)(o.TP,{size:"1.5rem",weight:500,children:[t("ordersPage.orderDate"),":\xa0"]}),i.jsx(o.TP,{children:(0,h.v)(e.createdAt)})]}),(0,i.jsxs)(d.K,{w100:!0,column:!0,children:[(0,i.jsxs)(o.TP,{size:"1.5rem",weight:500,children:[t("ordersPage.orderCode"),":\xa0"]}),i.jsx(o.TP,{children:e.code})]})]})]}),(0,i.jsxs)(d.K,{column:!0,w100:!0,gap:"0.5rem",children:[(0,i.jsxs)(d.K,{w100:!0,itemsCenter:!0,children:[(0,i.jsxs)(o.TP,{size:"1.5rem",weight:500,children:[t("ordersPage.totalQuantity"),":\xa0"]}),i.jsx(o.TP,{children:e.totalQuantity})]}),(0,i.jsxs)(d.K,{w100:!0,itemsCenter:!0,children:[(0,i.jsxs)(o.TP,{size:"1.5rem",weight:500,children:[t("ordersPage.totalItems"),":\xa0"]}),i.jsx(o.TP,{children:e.lines.length})]}),(0,i.jsxs)(d.K,{w100:!0,itemsCenter:!0,children:[(0,i.jsxs)(o.TP,{size:"1.5rem",weight:500,children:[t("ordersPage.totalPrice"),":\xa0"]}),i.jsx(n.t,{currencyCode:e.currencyCode,price:e.totalWithTax})]})]})]})}),(0,i.jsxs)(d.K,{w100:!0,column:!0,justifyBetween:!0,itemsEnd:!0,style:{height:"100%"},children:[i.jsx(c.K,{state:e.state,column:!0}),i.jsx(s.r,{href:`/customer/manage/orders/${e.code}`,children:i.jsx(y,{whileHover:{scale:1.02},whileTap:{scale:.98},children:i.jsx(o.TP,{size:"1.5rem",weight:500,children:t("ordersPage.viewOrder")})})})]})]})},e.id)},y=(0,m.default)(u.motion.div)`
    position: relative;
    color: ${e=>e.theme.gray(900)};
`,w=(0,m.default)(d.K)`
    padding: 1.75rem 1rem;
    border: 1px solid ${({theme:e})=>e.gray(100)};
    box-shadow: 0 0 0.75rem ${({theme:e})=>e.shadow};
`,f=(0,m.default)(d.K)`
    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
        width: 100%;
    }
    width: 50%;
    padding: 1rem 0;
    position: relative;
`;a()}catch(e){a(e)}})},8300:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{n:()=>b});var i=r(997),s=r(4411),n=r(6689),l=r(4639),d=r(9556),o=r(4979),c=r(1467),h=r(2520),m=r(8081),u=r(575),p=r(4115),g=r(9689),x=r(9774),y=r(1377),w=r(6479),f=r(394),v=r(6062),j=e([s,l,c,h,m,p,g,x,w,f]);[s,l,c,h,m,p,g,x,w,f]=j.then?(await j)():j;let b=e=>{let t=(0,v.v)(),{t:r}=(0,y.useTranslation)("customer"),[a,p]=(0,n.useState)(""),[g,j]=(0,n.useState)(!1),[b,T]=(0,n.useState)(!1),[C,S]=(0,n.useState)(1),Z=(0,n.useRef)(null),[M,A]=(0,n.useState)(e.activeCustomer?.orders.items),$=async e=>{let{activeCustomer:r}=await (0,d.e4)(t)({activeCustomer:{...o.iH,orders:[{options:{take:4*C,skip:4*C-4,filter:{code:{contains:e}}}},{items:o.bQ}]}});if(!r){A([]),T(!1);return}A(r.orders.items),T(!1)};(0,n.useEffect)(()=>{if(""===a){A(e.activeCustomer?.orders.items),T(!1);return}T(!0);let t=setTimeout(()=>{$(a)},500);return()=>clearTimeout(t)},[a]);let I=async()=>{j(!0);let{activeCustomer:e}=await (0,d.e4)(t)({activeCustomer:{...o.iH,orders:[{options:{take:4,skip:M?.length,sort:{createdAt:u.As.DESC}}},{items:o.bQ,totalItems:!0}]}});if(!e){j(!1);return}A([...M||[],...e.orders.items]),S(C+1),await new Promise(e=>setTimeout(e,200)),j(!1),Z.current?.scrollTo({top:Z.current?.scrollHeight,behavior:"smooth"})};return i.jsx(s.Ar,{categories:e.collections,navigation:e.navigation,pageTitle:r("ordersPage.title"),children:(0,i.jsxs)(h.O,{children:[i.jsx(c.K,{w100:!0,justifyEnd:!0,children:i.jsx(l.O,{})}),i.jsx(f.te,{w100:!0,itemsStart:!0,gap:"1.75rem",children:(0,i.jsxs)(c.K,{column:!0,w100:!0,gap:"1rem",children:[i.jsx(m.TP,{size:"2.5rem",weight:600,children:r("ordersPage.title")}),(0,i.jsxs)(k,{column:!0,w100:!0,gap:"1.5rem",children:[i.jsx(x.II,{label:r("ordersPage.searchOrder"),placeholder:r("ordersPage.lookForOrder"),onChange:e=>{p(e.target.value)}}),i.jsx(z,{flexWrap:!0,w100:!0,ref:Z,children:b?i.jsx(m.TP,{children:r("ordersPage.loading")}):M?.map(e=>i.jsx(w.v,{order:e},e.id))}),e.activeCustomer?.orders.totalItems>M?.length&&i.jsx(P,{w100:!0,children:i.jsx(K,{loading:g,onClick:I,children:r("ordersPage.loadMore")})})]})]})})]})})},k=(0,p.default)(c.K)``,P=(0,p.default)(c.K)`
    padding: 1rem;
`,K=(0,p.default)(g.zx)`
    width: 100%;
`,z=(0,p.default)(c.K)`
    position: relative;

    max-height: 60vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
        height: 0.8rem;
        width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.shadow};
        border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${e=>e.theme.gray(400)};
    }
`;a()}catch(e){a(e)}})},4817:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{N:()=>m});var i=r(9556),s=r(4979),n=r(4039),l=r(4378),d=r(7354),o=r(2254),c=r(575),h=e([d]);d=(h.then?(await h)():h)[0];let m=async e=>{let t=await (0,l.S9)(["common","customer"])(e),r=(0,d.wb)(e);if(r)return r;let a=await (0,n.b)(t.context),h=(0,o.w)(a),m=(0,d.Pf)("/")(e);try{let{activeCustomer:r}=await (0,i.bw)(e)({activeCustomer:{...s.iH,orders:[{options:{take:4,sort:{createdAt:c.As.DESC},filter:{active:{eq:!1}}}},{items:s.bQ,totalItems:!0}]}});if(!r)throw Error("No active customer");let n={...t.props,...t.context,collections:a,activeCustomer:r,navigation:h};return{props:n}}catch(e){return m}};a()}catch(e){a(e)}})},4039:(e,t,r)=>{r.d(t,{b:()=>n});var a=r(9556),i=r(4979),s=r(575);let n=async e=>{let t=await (0,a.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:i.u0}]}),r=[];try{r=await Promise.all(t.collections.items.map(async t=>{let r=await (0,a.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:s.As.ASC}}},{totalItems:!0,items:i.$b}]}]});return{...t,productVariants:r.collection?.productVariants}}))}catch(e){r=[]}let n=t.collections.items.map(e=>{let t=r.length?r.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return n}},2254:(e,t,r)=>{r.d(t,{w:()=>a});function a(e){let t={},r=[];for(let r of e)t[r.id]={...r,children:[]};for(let a of e){let e=t[a.id],i=a.parentId;if(null===i)r.push(e);else{let a=t[i];a?a.children.push(e):r.push(e)}}let a=r.length?r[0].parentId:null;return{children:r,id:a}}},4512:(e,t,r)=>{r.d(t,{v:()=>a});let a=(e,t="date")=>{let r="string"==typeof e?new Date(e):e;return"date"===t?r.toISOString().split("T")[0]:"time"===t?r.toISOString().split("T")[1].split(".")[0]:"datetime"===t?r.toISOString().split(".")[0]:r.toISOString()}},1962:(e,t,r)=>{r.d(t,{a:()=>g});var a=r(997),i=r(4297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i.Z)("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),n=(0,i.Z)("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);var l=r(9539);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,i.Z)("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]),o=(0,i.Z)("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);var c=r(8621),h=r(8761);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,i.Z)("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);var u=r(1197);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let p=(0,i.Z)("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),g=(e,t=20)=>{switch(e){case"Created":return a.jsx(s,{size:t});case"Draft":case"Modifying":return a.jsx(n,{size:t});case"AddingItems":return a.jsx(l.Z,{size:t});case"Cancelled":return a.jsx(d,{size:t});case"ArrangingPayment":return a.jsx(o,{size:t});case"PaymentAuthorized":case"PaymentSettled":case"ArrangingAdditionalPayment":return a.jsx(c.Z,{size:t});case"PartiallyShipped":case"Shipped":return a.jsx(h.Z,{size:t});case"PartiallyDelivered":return a.jsx(m,{size:t});case"Delivered":return a.jsx(u.Z,{size:t});default:if(e.includes("Payment"))return a.jsx(c.Z,{size:t});if(e.includes("Shipped"))return a.jsx(h.Z,{size:t});if(e.includes("Delivered"))return a.jsx(u.Z,{size:t});return a.jsx(p,{size:t})}}}};