"use strict";exports.id=765,exports.ids=[765],exports.modules={2431:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(4297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,i.Z)("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]])},6726:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{C:()=>h});var l=r(997);r(6689);var n=r(5641),a=r(6197),o=r(4115),s=r(6263),c=r(9926),d=r(1656),m=r(1377),u=r(9689),p=e([n,a,o,s,c,d,u]);[n,a,o,s,c,d,u]=p.then?(await p)():p;let h=()=>{let{t:e}=(0,m.useTranslation)("common"),t=c.z.object({email:c.z.string().email(e("notifyMe.invalidEmail"))}),{handleSubmit:r,register:i,formState:{errors:a},reset:o}=(0,n.useForm)({resolver:(0,d.zodResolver)(t)}),u=async()=>{o()};return(0,l.jsxs)(s.Kq,{column:!0,style:{position:"relative"},children:[l.jsx(f,{onSubmit:r(u),children:(0,l.jsxs)(s.Kq,{style:{height:"100%"},children:[l.jsx(x,{...i("email",{required:!0}),placeholder:e("notifyMe.placeholder")}),l.jsx(g,{type:"submit",children:e("send")})]})}),l.jsx(y,{style:{margin:0},initial:{opacity:0},animate:{opacity:a.email?.message?1:0},transition:{duration:.2},children:a.email?.message})]})},g=(0,o.default)(u.zx)`
    padding-block: 0.75rem;
`,x=o.default.input`
    appearance: none;
    outline: none;

    padding: 0.2rem 1rem;
    border: 1px solid ${e=>e.theme.gray(100)};
`,f=o.default.form`
    display: flex;
    align-items: center;
`,y=(0,o.default)(a.motion.div)`
    position: absolute;
    top: 100%;
    left: 0;
    color: ${e=>e.theme.error};
    font-size: 1.2rem;
    font-weight: 500;
    min-height: 1.8rem;
    margin: 0.4rem 0 0.8rem 0;
`;i()}catch(e){i(e)}})},2156:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{v:()=>m});var l=r(997),n=r(6689),a=r(6263),o=r(4115),s=r(7314),c=r(1012),d=e([a,o]);[a,o]=d.then?(await d)():d;let m=({data:e,defaultOpenIndexes:t})=>{let[r,i]=(0,n.useState)(e.reduce((r,i)=>t?.includes(e.indexOf(i))?{...r,[i.title]:!0}:{...r,[i.title]:!1},{}));return l.jsx(a.Kq,{w100:!0,column:!0,gap:"2rem",style:{marginTop:"3.5rem"},children:e.map((e,t)=>(0,l.jsxs)(p,{w100:!0,column:!0,children:[(0,l.jsxs)(g,{onClick:()=>i({...r,[e.title]:!r[e.title]}),children:[l.jsx(a.TP,{size:"1.5rem",weight:400,children:e.title}),r[e.title]?l.jsx(s.Z,{size:"1.5rem"}):l.jsx(c.Z,{size:"1.5rem"})]}),l.jsx(h,{open:r[e.title],children:l.jsx(x,{children:e.children})}),l.jsx(u,{})]},t))})},u=o.default.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.gray(100)};
    margin-top: 2rem;
`,p=(0,o.default)(a.Kq)``,h=o.default.div`
    display: grid;
    grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
    transition: grid-template-rows 0.3s ease-in-out;
`,g=o.default.button`
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
`,x=(0,o.default)(a.Kq)`
    overflow: hidden;
`;i()}catch(e){i(e)}})},5031:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{J:()=>d});var l=r(997),n=r(4115);r(6689);var a=r(6263),o=r(9689),s=r(7867),c=e([n,a,o,s]);[n,a,o,s]=c.then?(await c)():c;let d=({variant:e,addToCart:t,lazy:r,withoutRatings:i=!0,withoutRedirect:n,displayAllCategories:c})=>{let d=e.featuredAsset?.preview??e.product?.featuredAsset?.preview,y=n?g:x;return(0,l.jsxs)(a.Kq,{column:!0,gap:"0.5rem",children:[(0,l.jsxs)(a.Kq,{style:{position:"relative",width:"32rem"},children:[l.jsx(f,{children:e.product.collections.filter(e=>"all"!==e.slug&&"search"!==e.slug).sort(()=>-1).slice(0,c?void 0:1).map(e=>{let t=e?.parent?.slug!=="__root_collection__"?`/collections/${e?.parent?.slug}/${e?.slug}`:`/collections/${e?.slug}`;return l.jsx(y,{href:t,children:l.jsx(a.TP,{size:"1.25rem",color:"contrast",upperCase:!0,weight:500,style:{letterSpacing:"0.5px"},children:e.name})},e.slug)})}),l.jsx(n?p:h,{href:`/products/${e.product.slug}?variant=${e.id}`,children:l.jsx(a.qN,{...r?{lazy:!0}:{},src:d,size:"popup",alt:e.name,title:e.name})})]}),(0,l.jsxs)(a.Kq,{column:!0,gap:"2rem",children:[(0,l.jsxs)(n?m:u,{href:`/products/${e.product.slug}?variant=${e.id}`,children:[(0,l.jsxs)(a.Kq,{column:!0,gap:"0.5rem",children:[l.jsx(a.TP,{children:e.name}),l.jsx(a.tA,{price:e.priceWithTax,currencyCode:e.currencyCode})]}),!i&&l.jsx(s.J,{rating:5*Math.random()})]}),t?l.jsx(o.zx,{onClick:()=>t.action(e.id),children:t.text}):null]})]},e.name)},m=(0,n.default)(a.Kq)`
    margin-top: 0.75rem;
`,u=(0,n.default)(a.rU)`
    margin-top: 0.75rem;
`,p=(0,n.default)(a.Kq)`
    position: relative;
`,h=(0,n.default)(a.rU)`
    display: flex;
    align-items: center;
    justify-content: center;
`,g=(0,n.default)(a.Kq)`
    padding: 1rem;
    background-color: ${({theme:e})=>e.tile.background};
`,x=(0,n.default)(a.rU)`
    padding: 1rem;

    background-color: ${({theme:e})=>e.tile.background};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
        :hover {
            background-color: ${({theme:e})=>e.tile.hover};
        }
    }
`,f=(0,n.default)(a.Kq)`
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
    gap: 1rem;
    z-index: 1;
`;i()}catch(e){i(e)}})},7867:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{J:()=>s});var l=r(997),n=r(6263),a=r(4115),o=e([n,a]);[n,a]=o.then?(await o)():o;let s=({rating:e})=>{let t=Array.from({length:5},(e,t)=>t+1),r=t.reduce((t,r)=>r<=e?{...t,[r]:100}:r-1<e?{...t,[r]:(e-(r-1))*100}:{...t,[r]:0},{});return l.jsx(n.Kq,{w100:!0,children:t.map(e=>(0,l.jsxs)(c,{style:{position:"relative",height:"1.5rem",width:"1.5rem",color:"black"},children:[l.jsx("svg",{style:{clipPath:`polygon(0 0, ${r[e]}% 0, ${r[e]}% 100%, 0 100%)`},width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.64374 0.231209C6.71857 0.000937581 7.04432 0.000877559 7.11924 0.231122L8.46054 4.35362C8.48426 4.42627 8.55236 4.47539 8.62925 4.47515L12.9856 4.46663C13.2287 4.46615 13.3294 4.77782 13.1319 4.91967L9.60348 7.45444C9.54119 7.49914 9.51513 7.57891 9.53906 7.65144L10.895 11.766C10.9709 11.9963 10.7073 12.1889 10.5109 12.0467L6.98553 9.49369C6.92345 9.44872 6.83915 9.44872 6.77707 9.49369L3.25402 12.0463C3.05761 12.1886 2.79398 11.9959 2.86989 11.7656L4.2256 7.6516C4.24954 7.57907 4.2235 7.49935 4.16118 7.4546L0.632761 4.91985C0.435314 4.77801 0.535996 4.46634 0.77911 4.46681L5.13545 4.47533C5.21233 4.47558 5.28045 4.42621 5.30414 4.35356L6.64374 0.231209Z",fill:"currentColor",stroke:"currentColor"})}),l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.64374 0.231209C6.71857 0.000937581 7.04432 0.000877559 7.11924 0.231122L8.46054 4.35362C8.48426 4.42627 8.55236 4.47539 8.62925 4.47515L12.9856 4.46663C13.2287 4.46615 13.3294 4.77782 13.1319 4.91967L9.60348 7.45444C9.54119 7.49914 9.51513 7.57891 9.53906 7.65144L10.895 11.766C10.9709 11.9963 10.7073 12.1889 10.5109 12.0467L6.98553 9.49369C6.92345 9.44872 6.83915 9.44872 6.77707 9.49369L3.25402 12.0463C3.05761 12.1886 2.79398 11.9959 2.86989 11.7656L4.2256 7.6516C4.24954 7.57907 4.2235 7.49935 4.16118 7.4546L0.632761 4.91985C0.435314 4.77801 0.535996 4.46634 0.77911 4.46681L5.13545 4.47533C5.21233 4.47558 5.28045 4.42621 5.30414 4.35356L6.64374 0.231209Z",fill:"none",stroke:"currentColor"})})]},e))})},c=(0,a.default)(n.Kq)`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    color: black;

    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
`;i()}catch(e){i(e)}})},4812:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{j:()=>c});var l=r(997),n=r(4115),a=r(6263),o=r(6197),s=e([n,a,o]);[n,a,o]=s.then?(await s)():s;let c=({productOptionsGroups:e,handleClick:t,addingError:r})=>(0,l.jsxs)(a.Kq,{column:!0,gap:"2.5rem",children:[e?.map((e,r)=>e.options.length?l.jsxs(h,{column:!0,gap:"1.5rem",children:[l.jsx(a.TP,{capitalize:!0,children:e.name}),l.jsx(h,{gap:"1rem",children:e.options.map((r,i)=>e.name.includes("color")||e.name.includes("kolor")?l.jsx(u,{outOfStock:!(r.stockLevel>0),onClick:()=>t(e.id,r.id),color:r.name,selected:r.isSelected},r.name+i):l.jsx(p,{outOfStock:!(r.stockLevel>0),onClick:()=>t(e.id,r.id),selected:r.isSelected,children:r.name},r.name+i))})]},r):null),l.jsx(o.AnimatePresence,{children:r&&l.jsx(d,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:l.jsx(Error,{size:"1.25rem",children:r})})})]}),Error=(0,n.default)(a.TP)`
    color: ${({theme:e})=>e.error};
`,d=(0,n.default)(o.motion.div)``,m=n.default.button`
    width: 9.5rem;
    padding: 1.5rem 0;
    border: none;
    outline: 0;
`,u=(0,n.default)(m)`
    width: 3rem;
    background-color: ${e=>e.color};
    outline: 1px solid ${e=>e.theme.outline};
    height: 3rem;
    cursor: pointer;
    ${e=>e.outOfStock&&"opacity: 0.5;"}
    ${e=>e.selected&&`outline: 2px solid ${e.theme.gray(1e3)};`}
`,p=(0,n.default)(m)`
    background: ${e=>e.theme.gray(0)};
    color: ${e=>e.theme.gray(900)};
    :hover {
        background: ${e=>e.theme.gray(500)};
        color: ${e=>e.theme.gray(0)};
    }
    ${e=>e.selected?`background: ${e.theme.button.back}; color: ${e.theme.gray(0)};`:e.outOfStock&&"opacity: 0.5;"}
`,h=(0,n.default)(a.Kq)`
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`;i()}catch(e){i(e)}})},1522:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{Q:()=>c});var l=r(997);r(6689);var n=r(6263),a=r(8158),o=r(5031),s=e([n,a,o]);[n,a,o]=s.then?(await s)():s;let c=({products:e,title:t})=>{if(!e?.length)return null;let r=e.map((e,t)=>l.jsx(o.J,{lazy:!0,variant:e},t));return(0,l.jsxs)(n.Kq,{column:!0,gap:"2rem",style:{marginBottom:"2rem"},children:[l.jsx(n.r1,{children:t}),l.jsx(a.i,{withArrows:4,spacing:32,slides:r})]})};i()}catch(e){i(e)}})},6061:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{G:()=>d});var l=r(997),n=r(6263),a=r(4115),o=r(2431),s=r(6689),c=e([n,a]);[n,a]=c.then?(await c)():c;let d=({featuredAsset:e,images:t,name:r})=>{let[i,a]=(0,s.useState)(e??t?.[0]);return(0,s.useEffect)(()=>{(void 0!==e||void 0!==t||void 0!==i)&&a(e??t?.[0])},[e,t]),(0,l.jsxs)(m,{w100:!0,justifyBetween:!0,children:[l.jsx(h,{column:!0,gap:"1.75rem",children:t?.map(e=>{let t=i?.source===e?.source;return l.jsx(u,{size:"thumbnail",src:e?.preview,onClick:()=>a(e),isSelected:t,alt:r,title:r},e?.preview)})}),i?l.jsx(p,{children:l.jsx(n.qN,{size:"detail",src:i.preview,alt:r,title:r})}):l.jsx(g,{size:"60rem"})]})},m=(0,a.default)(n.Kq)`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
`,u=(0,a.default)(n.qN)`
    cursor: pointer;
    opacity: ${({isSelected:e})=>e?"100%":"40%"};
    :hover {
        opacity: 100%;
    }
`,p=a.default.div`
    position: relative;
    width: max-content;
`,h=(0,a.default)(n.Kq)`
    flex-direction: row;
    max-width: 100%;
    overflow-x: scroll;
    padding-bottom: 1rem;

    @media (min-width: 1024px) {
        flex-direction: column;
        max-width: 52rem;
        max-height: 60rem;
        overflow-y: scroll;
        padding-bottom: 0;
        padding-right: 1rem;
    }
    ::-webkit-scrollbar {
        height: 0.8rem;
        width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${e=>e.theme.gray(200)};
        border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${e=>e.theme.gray(400)};
    }
`,g=(0,a.default)(o.Z)`
    color: ${e=>e.theme.gray(50)};
`;i()}catch(e){i(e)}})},465:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{e:()=>b});var l=r(997),n=r(6689),a=r(6263),o=r(9689),s=r(6726),c=r(1522),d=r(4411),m=r(4115),u=r(3742),p=r(1352),h=r(1377),g=r(4812),x=r(5844),f=r(8603),y=r(6061),j=r(2156);r(9556);var w=r(6062);r(4979);var v=e([a,o,s,c,d,m,g,x,f,y,j]);[a,o,s,c,d,m,g,x,f,y,j]=v.then?(await v)():v;let b=e=>{let{t}=(0,h.useTranslation)("products"),{t:r}=(0,h.useTranslation)("common");(0,w.v)();let{product:i,variant:m,addingError:v,productOptionsGroups:b,handleOptionClick:z,handleBuyNow:A,handleAddToCart:S}=(0,f.i)(),E=[{name:r("breadcrumbs.home"),href:"/"},{name:e.product.name,href:`/products/${e.product.slug}`}],[P,O]=(0,n.useState)([]);return(0,n.useEffect)(()=>{},[i?.id]),l.jsx(d.Ar,{categories:e.collections,navigation:e.navigation,children:l.jsx(a.OO,{children:(0,l.jsxs)($,{column:!0,children:[l.jsx(x.O,{breadcrumbs:E}),(0,l.jsxs)(T,{gap:"5rem",children:[l.jsx(K,{w100:!0,itemsCenter:!0,justifyCenter:!0,gap:"2.5rem",children:l.jsx(y.G,{featuredAsset:i?.featuredAsset,images:i?.assets,name:i?.name})}),(0,l.jsxs)(F,{w100:!0,column:!0,gap:"2rem",children:[(0,l.jsxs)(C,{w100:!0,column:!0,gap:"1rem",children:[i?.collections.filter(e=>"all"!==e.slug&&"search"!==e.slug).sort(()=>-1).slice(0,1).map(e=>{let t=e.parent?.slug!=="__root_collection__"?`/collections/${e.parent?.slug}/${e.slug}`:`/collections/${e.slug}`;return l.jsx(k,{href:t,children:l.jsx(a.TP,{size:"1.25rem",color:"subtitle",upperCase:!0,weight:500,style:{letterSpacing:"0.5px"},children:e.name})},e.slug)}),l.jsx(a.xZ,{size:"2.5rem",children:i?.name}),m&&l.jsx(a.tA,{price:m.priceWithTax,currencyCode:m.currencyCode})]}),l.jsx(a.Kq,{w100:!0,children:i&&i.variants.length>1?l.jsx(g.j,{productOptionsGroups:b,handleClick:z,addingError:v}):null}),(0,l.jsxs)(a.Kq,{w100:!0,gap:"1rem",column:!0,children:[m&&Number(m.stockLevel)>0&&10>=Number(m.stockLevel)&&l.jsx(q,{size:"1.5rem",weight:500,children:l.jsx(h.Trans,{i18nKey:"stock-levels.low-stock",t:t,values:{value:m?.stockLevel},components:{1:l.jsx("span",{})}})}),(0,l.jsxs)(L,{comingSoon:!m,outOfStock:0>=Number(m?.stockLevel),itemsCenter:!0,gap:"0.25rem",children:[m?Number(m.stockLevel)>0?l.jsx(u.Z,{size:"1.75rem"}):l.jsx(p.Z,{}):null,l.jsx(a.TP,{children:m?t(Number(m.stockLevel)>0?"stock-levels.in-stock":"stock-levels.out-of-stock"):null})]})]}),m?0>=Number(m.stockLevel)?l.jsx(s.C,{}):(0,l.jsxs)(a.Kq,{w100:!0,gap:"2.5rem",justifyBetween:!0,column:!0,children:[l.jsx(o.Ow,{style:{textTransform:"uppercase",padding:"1.5rem"},onClick:S,children:t("add-to-cart")}),l.jsx(o.N3,{style:{textTransform:"uppercase",padding:"1.5rem"},onClick:A,children:t("buy-now")})]}):null,l.jsx(j.v,{defaultOpenIndexes:[1],data:[{title:t("details"),children:(0,l.jsxs)(a.Kq,{column:!0,style:{marginTop:"1.5rem"},children:[(0,l.jsxs)(a.Kq,{children:[l.jsx(a.TP,{color:"subtitle",children:t("sku")}),(0,l.jsxs)(a.TP,{color:"subtitle",children:["\xa0",m?.sku]})]}),m?.options.length?l.jsx(a.Kq,{column:!0,children:m?.options.map(e=>l.jsx(a.Kq,{children:l.jsx(a.TP,{color:"subtitle",children:e.name})},e.code))}):null]})},{title:t("description"),children:l.jsx(a.TP,{color:"subtitle",style:{marginTop:"1.5rem"},children:i?.description})}]})]})]}),l.jsx(c.Q,{title:t("clients-also-bought"),products:e.clientsAlsoBought?.collection?.productVariants?.items??[]}),l.jsx(c.Q,{title:t("recently-viewed"),products:P??[]})]})})})},k=(0,m.default)(a.rU)`
    width: fit-content;
`,C=(0,m.default)(a.Kq)`
    border-bottom: 2px solid ${({theme:e})=>e.gray(100)};
    padding-bottom: 7.5rem;
`,$=(0,m.default)(a.Kq)`
    padding-top: 2rem;
    @media (min-width: ${e=>e.theme.breakpoints.xl}) {
        padding: 3.5rem 0;
    }
`,q=(0,m.default)(a.TP)`
    color: ${({theme:e})=>e.error};
`,K=(0,m.default)(a.Kq)`
    @media (min-width: 1024px) {
        position: sticky;
        top: 12rem;
    }
`,L=(0,m.default)(a.Kq)`
    white-space: nowrap;
    color: ${e=>e.outOfStock?e.theme.error:e.comingSoon?e.theme.gray(800):"inherit"};
    width: max-content;
    @media (min-width: 1024px) {
        width: 100%;
    }
`,F=(0,m.default)(a.Kq)`
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,T=(0,m.default)(a.Kq)`
    padding: 1.5rem 0;
    flex-direction: column;
    align-items: start;
    @media (min-width: 1024px) {
        flex-direction: row;
        padding: 4rem 0;
    }
    margin-bottom: 2rem;
    border-bottom: 1px solid ${({theme:e})=>e.gray(100)};
`;i()}catch(e){i(e)}})},6954:(e,t,r)=>{r.d(t,{F:()=>o});var i=r(9556),l=r(4979),n=r(4546),a=r(4378);let o=async()=>{let e=(0,a.iy)(),t=await Promise.all(e.map(async e=>{let t=n.bD.find(t=>t.slug===e.params.channel)?.channel??n.vE,{products:r}=await (0,i.af)({channel:t,locale:e.params.locale})({products:[{},{items:l.Wv}]});return{...r,...e.params}})),r=t.flatMap(e=>e.items.map(t=>({params:{...e,slug:t.slug}})));return{paths:r,fallback:!1}}},8384:(e,t,r)=>{r.d(t,{b:()=>s});var i=r(9556),l=r(4979),n=r(4039),a=r(4378),o=r(2254);let s=async e=>{let t=await (0,a.pc)(["common","products"])(e),r=t.props._nextI18Next?.initialLocale||"en",{slug:s}=e.params||{},d=(0,i.af)(t.context),m="string"==typeof s?await d({product:[{slug:s},l.FY]}):null;if(!m?.product)return{notFound:!0};let u=await (0,n.b)(t.context),p=(0,o.w)(u),h=await d({collection:[{slug:m.product?.collections[0]?.slug||"search"},l.HE]}),g=await d({collection:[{slug:"search"},l.HE]}),{optionGroups:x,...f}=m.product,y=x.map(e=>({...e,options:e.options.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name)).map(e=>{let t=c.find(t=>t.name.toLowerCase()===e.code.toLowerCase())?.code||e.name;return{...e,name:t}})})),j={...t.props,...t.context,slug:e.params?.slug,product:{...f,optionGroups:y},collections:u,relatedProducts:h,clientsAlsoBought:g,navigation:p,language:r};return{props:j,revalidate:process.env.NEXT_REVALIDATE?parseInt(process.env.NEXT_REVALIDATE):10}},c=[{name:"blue",code:"#0000FF"},{name:"pink",code:"#FFC0CB"},{name:"black",code:"#000000"},{name:"gray",code:"#808080"},{name:"brown",code:"#964B00"},{name:"wood",code:"#A1662F"},{name:"yellow",code:"#FFFF00"},{name:"green",code:"#008000"},{name:"white",code:"#FFFFFF"},{name:"red",code:"#FF0000"},{name:"mustard",code:"#FFDB58"},{name:"mint",code:"#98FF98"},{name:"pearl",code:"#FDEEF4"}]},4039:(e,t,r)=>{r.d(t,{b:()=>a});var i=r(9556),l=r(4979),n=r(575);let a=async e=>{let t=await (0,i.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:l.u0}]}),r=[];try{r=await Promise.all(t.collections.items.map(async t=>{let r=await (0,i.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:n.As.ASC}}},{totalItems:!0,items:l.$b}]}]});return{...t,productVariants:r.collection?.productVariants}}))}catch(e){r=[]}let a=t.collections.items.map(e=>{let t=r.length?r.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return a}},2254:(e,t,r)=>{r.d(t,{w:()=>i});function i(e){let t={},r=[];for(let r of e)t[r.id]={...r,children:[]};for(let i of e){let e=t[i.id],l=i.parentId;if(null===l)r.push(e);else{let i=t[l];i?i.children.push(e):r.push(e)}}let i=r.length?r[0].parentId:null;return{children:r,id:i}}}};