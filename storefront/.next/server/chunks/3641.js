"use strict";exports.id=3641,exports.ids=[3641],exports.modules={5031:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{J:()=>d});var l=r(997),a=r(4115);r(6689);var s=r(6263),n=r(9689),o=r(7867),c=e([a,s,n,o]);[a,s,n,o]=c.then?(await c)():c;let d=({variant:e,addToCart:t,lazy:r,withoutRatings:i=!0,withoutRedirect:a,displayAllCategories:c})=>{let d=e.featuredAsset?.preview??e.product?.featuredAsset?.preview,f=a?g:x;return(0,l.jsxs)(s.Kq,{column:!0,gap:"0.5rem",children:[(0,l.jsxs)(s.Kq,{style:{position:"relative",width:"32rem"},children:[l.jsx(w,{children:e.product.collections.filter(e=>"all"!==e.slug&&"search"!==e.slug).sort(()=>-1).slice(0,c?void 0:1).map(e=>{let t=e?.parent?.slug!=="__root_collection__"?`/collections/${e?.parent?.slug}/${e?.slug}`:`/collections/${e?.slug}`;return l.jsx(f,{href:t,children:l.jsx(s.TP,{size:"1.25rem",color:"contrast",upperCase:!0,weight:500,style:{letterSpacing:"0.5px"},children:e.name})},e.slug)})}),l.jsx(a?u:m,{href:`/products/${e.product.slug}?variant=${e.id}`,children:l.jsx(s.qN,{...r?{lazy:!0}:{},src:d,size:"popup",alt:e.name,title:e.name})})]}),(0,l.jsxs)(s.Kq,{column:!0,gap:"2rem",children:[(0,l.jsxs)(a?h:p,{href:`/products/${e.product.slug}?variant=${e.id}`,children:[(0,l.jsxs)(s.Kq,{column:!0,gap:"0.5rem",children:[l.jsx(s.TP,{children:e.name}),l.jsx(s.tA,{price:e.priceWithTax,currencyCode:e.currencyCode})]}),!i&&l.jsx(o.J,{rating:5*Math.random()})]}),t?l.jsx(n.zx,{onClick:()=>t.action(e.id),children:t.text}):null]})]},e.name)},h=(0,a.default)(s.Kq)`
    margin-top: 0.75rem;
`,p=(0,a.default)(s.rU)`
    margin-top: 0.75rem;
`,u=(0,a.default)(s.Kq)`
    position: relative;
`,m=(0,a.default)(s.rU)`
    display: flex;
    align-items: center;
    justify-content: center;
`,g=(0,a.default)(s.Kq)`
    padding: 1rem;
    background-color: ${({theme:e})=>e.tile.background};
`,x=(0,a.default)(s.rU)`
    padding: 1rem;

    background-color: ${({theme:e})=>e.tile.background};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
        :hover {
            background-color: ${({theme:e})=>e.tile.hover};
        }
    }
`,w=(0,a.default)(s.Kq)`
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
    gap: 1rem;
    z-index: 1;
`;i()}catch(e){i(e)}})},7867:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{J:()=>o});var l=r(997),a=r(6263),s=r(4115),n=e([a,s]);[a,s]=n.then?(await n)():n;let o=({rating:e})=>{let t=Array.from({length:5},(e,t)=>t+1),r=t.reduce((t,r)=>r<=e?{...t,[r]:100}:r-1<e?{...t,[r]:(e-(r-1))*100}:{...t,[r]:0},{});return l.jsx(a.Kq,{w100:!0,children:t.map(e=>(0,l.jsxs)(c,{style:{position:"relative",height:"1.5rem",width:"1.5rem",color:"black"},children:[l.jsx("svg",{style:{clipPath:`polygon(0 0, ${r[e]}% 0, ${r[e]}% 100%, 0 100%)`},width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.64374 0.231209C6.71857 0.000937581 7.04432 0.000877559 7.11924 0.231122L8.46054 4.35362C8.48426 4.42627 8.55236 4.47539 8.62925 4.47515L12.9856 4.46663C13.2287 4.46615 13.3294 4.77782 13.1319 4.91967L9.60348 7.45444C9.54119 7.49914 9.51513 7.57891 9.53906 7.65144L10.895 11.766C10.9709 11.9963 10.7073 12.1889 10.5109 12.0467L6.98553 9.49369C6.92345 9.44872 6.83915 9.44872 6.77707 9.49369L3.25402 12.0463C3.05761 12.1886 2.79398 11.9959 2.86989 11.7656L4.2256 7.6516C4.24954 7.57907 4.2235 7.49935 4.16118 7.4546L0.632761 4.91985C0.435314 4.77801 0.535996 4.46634 0.77911 4.46681L5.13545 4.47533C5.21233 4.47558 5.28045 4.42621 5.30414 4.35356L6.64374 0.231209Z",fill:"currentColor",stroke:"currentColor"})}),l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.64374 0.231209C6.71857 0.000937581 7.04432 0.000877559 7.11924 0.231122L8.46054 4.35362C8.48426 4.42627 8.55236 4.47539 8.62925 4.47515L12.9856 4.46663C13.2287 4.46615 13.3294 4.77782 13.1319 4.91967L9.60348 7.45444C9.54119 7.49914 9.51513 7.57891 9.53906 7.65144L10.895 11.766C10.9709 11.9963 10.7073 12.1889 10.5109 12.0467L6.98553 9.49369C6.92345 9.44872 6.83915 9.44872 6.77707 9.49369L3.25402 12.0463C3.05761 12.1886 2.79398 11.9959 2.86989 11.7656L4.2256 7.6516C4.24954 7.57907 4.2235 7.49935 4.16118 7.4546L0.632761 4.91985C0.435314 4.77801 0.535996 4.46634 0.77911 4.46681L5.13545 4.47533C5.21233 4.47558 5.28045 4.42621 5.30414 4.35356L6.64374 0.231209Z",fill:"none",stroke:"currentColor"})})]},e))})},c=(0,s.default)(a.Kq)`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    color: black;

    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
`;i()}catch(e){i(e)}})},3565:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{V:()=>h});var l=r(997),a=r(6263),s=r(9450),n=r(102),o=r(4115),c=r(2701),d=e([a,o]);[a,o]=d.then?(await d)():d;let h=({cta:e,desc:t,h1:r,h2:i,image:s,link:o})=>l.jsx(g,{column:!0,justifyCenter:!0,children:(0,l.jsxs)(u,{children:[(0,l.jsxs)(p,{column:!0,gap:"2rem",children:[(0,l.jsxs)(a.Kq,{column:!0,gap:"1rem",children:[(0,l.jsxs)(a.Kq,{column:!0,children:[l.jsx(a.xZ,{weight:600,children:r}),l.jsx(a.r1,{weight:400,color:"subtitle",children:i})]}),l.jsx(a.TP,{size:"1.75rem",color:"subtitle",weight:500,children:t})]}),(0,l.jsxs)(m,{href:o,children:[e,l.jsx(c.Z,{size:"2rem"})]})]}),l.jsx(x,{fetchPriority:"high",src:(0,n.H)({size:{width:700,height:500,format:"webp",mode:"resize"},src:s}),alt:"Aexol shop demo",title:"Aexol shop demo"})]})}),p=(0,o.default)(a.Kq)`
    margin-top: 1.5rem;
    @media (min-width: ${e=>e.theme.breakpoints.md}) {
        margin-top: 0;
    }
`,u=(0,o.default)(a.Kq)`
    width: 100%;
    max-width: 1280px;
    padding: 0;
    flex-direction: column-reverse;

    @media (min-width: ${e=>e.theme.breakpoints.md}) {
        margin: 0 auto;
        gap: 4rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 1560px) {
        max-width: 1440px;
        padding: 0 4rem;
    }
`,m=(0,o.default)(a.rU)`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${s.kg.text.main};
    font-weight: 600;
    text-transform: uppercase;
`,g=(0,o.default)(a.Kq)`
    width: 100%;
    background: ${e=>e.theme.background.ice};
    padding: 4.5rem 0;
`,x=o.default.img`
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    max-height: 36rem;

    @media (min-width: ${e=>e.theme.breakpoints.md}) {
        max-width: 42rem;
        max-height: 32rem;
    }

    @media (min-width: ${e=>e.theme.breakpoints.lg}) {
        max-width: 45rem;
        max-height: 24rem;
    }
`;i()}catch(e){i(e)}})},725:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{X:()=>p});var l=r(997),a=r(6689),s=r(8081),n=r(8158),o=r(4115),c=r(6263),d=r(5031),h=e([s,n,o,c,d]);[s,n,o,c,d]=h.then?(await h)():h;let p=({sliders:e,seeAllText:t})=>{let[r,i]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{i(!0)},[]),r&&e?.length)?l.jsx(c.Kq,{w100:!0,column:!0,gap:"6rem",children:e.map(e=>{let r=e?.productVariants?.items?.map((e,t)=>l.jsx(d.J,{variant:e,lazy:t>0},t));if(!r?.length)return null;let i=e?.parent?.slug!=="__root_collection__"?`/collections/${e?.parent?.slug}/${e?.slug}`:`/collections/${e?.slug}`;return(0,l.jsxs)(u,{children:[(0,l.jsxs)(c.Kq,{w100:!0,justifyBetween:!0,children:[l.jsx(s.r1,{children:`${e.name} (${e.productVariants.totalItems})`}),l.jsx(m,{href:i,children:l.jsx(s.TP,{upperCase:!0,color:"contrast",weight:500,style:{letterSpacing:"0.5px"},children:t})})]}),l.jsx(n.i,{spacing:16,withArrows:4,slides:r})]},e.slug)})}):null},u=o.default.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,m=(0,o.default)(c.rU)`
    padding: 1rem 2rem;
    background-color: ${({theme:e})=>e.text.main};
    display: flex;
    align-items: center;
    justify-content: center;
`;i()}catch(e){i(e)}})},1543:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{S:()=>u});var l=r(997),a=r(4115);r(6689);var s=r(1377),n=r(6263),o=r(725),c=r(3565),d=r(4411),h=e([a,n,o,c,d]);[a,n,o,c,d]=h.then?(await h)():h;let p=(0,a.default)(n.Kq)`
    padding: 0 0 4rem 0;
`,u=e=>{let{t}=(0,s.useTranslation)("homepage");return l.jsx(d.Ar,{navigation:e.navigation,categories:e.categories,pageTitle:t("seo.home"),children:(0,l.jsxs)(p,{w100:!0,column:!0,gap:"4rem",children:[l.jsx(c.V,{cta:t("hero-cta"),h1:t("hero-h1"),h2:t("hero-h2"),desc:t("hero-p"),link:"/collections/all",image:e.products?.find(e=>e.slug.includes("laptop"))?.productAsset?.preview??(e.products[0]?.productAsset?.preview||"")}),l.jsx(n.OO,{children:l.jsx(o.X,{sliders:e.sliders,seeAllText:t("see-all")})})]})})};i()}catch(e){i(e)}})},7837:(e,t,r)=>{r.d(t,{b:()=>d});var i=r(9556),l=r(4979),a=r(4039),s=r(4378),n=r(2254),o=r(575);let c=["home-garden","electronics","sports-outdoor"],d=async e=>{let t=await (0,s.pc)(["common","homepage"])(e),r=(0,i.af)(t.context),d=await r({search:[{input:{take:4,groupByProduct:!0,sort:{price:o.As.ASC}}},{items:l.Gh}]}),h=await Promise.all(c.map(async e=>{let t=await r({collection:[{slug:e},l.HE]});return t.collection?t.collection:null}).filter(e=>!!e)),p=await (0,a.b)(t.context),u=(0,n.w)(p),m={props:{...t.props,...t.context,products:d.search.items,categories:p,navigation:u,sliders:h},revalidate:process.env.NEXT_REVALIDATE?parseInt(process.env.NEXT_REVALIDATE):10};return m}},4039:(e,t,r)=>{r.d(t,{b:()=>s});var i=r(9556),l=r(4979),a=r(575);let s=async e=>{let t=await (0,i.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:l.u0}]}),r=[];try{r=await Promise.all(t.collections.items.map(async t=>{let r=await (0,i.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:a.As.ASC}}},{totalItems:!0,items:l.$b}]}]});return{...t,productVariants:r.collection?.productVariants}}))}catch(e){r=[]}let s=t.collections.items.map(e=>{let t=r.length?r.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return s}},2254:(e,t,r)=>{r.d(t,{w:()=>i});function i(e){let t={},r=[];for(let r of e)t[r.id]={...r,children:[]};for(let i of e){let e=t[i.id],l=i.parentId;if(null===l)r.push(e);else{let i=t[l];i?i.children.push(e):r.push(e)}}let i=r.length?r[0].parentId:null;return{children:r,id:i}}}};