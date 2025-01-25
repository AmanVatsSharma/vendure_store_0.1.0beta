"use strict";exports.id=695,exports.ids=[695],exports.modules={4998:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(4297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},2612:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(4297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r.Z)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]])},804:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.d(t,{v:()=>u});var n=i(997),a=i(6263),l=i(4115),s=i(9774),o=i(6689),c=i(8971),d=e([a,l,s]);[a,l,s]=d.then?(await d)():d;let u=({facet:{id:e,name:t,values:i},onClick:r,selected:l})=>{let[d,u]=(0,o.useState)(!0);return(0,n.jsxs)(m,{w100:!0,column:!0,children:[(0,n.jsxs)(h,{onClick:()=>u(!d),children:[n.jsx(a.y2,{capitalize:!0,size:"1.5rem",children:t}),n.jsx(f,{children:n.jsx(c.Z,{})})]}),n.jsx(p,{open:d,children:n.jsx(g,{children:n.jsx(x,{children:i.map(i=>{let a=l?.includes(i.id);return n.jsx(s.Jg,{label:`${i.name} (${i.count})`,checked:a,onChange:()=>r({id:e,name:t},i)},i.id)})})})})]})},m=(0,l.default)(a.Kq)`
    margin-top: 1.7rem;
    min-width: 420px;
    max-width: 100%;
`,p=l.default.div`
    margin-top: 1.7rem;
    display: grid;
    grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
    transition: grid-template-rows 0.3s ease-in-out;
    border-bottom: 1px solid ${e=>e.theme.gray(100)};
`,h=l.default.button`
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
`,g=(0,l.default)(a.Kq)`
    overflow: hidden;
`,x=l.default.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
    width: 100%;
    & > label {
        font-size: 1.5rem;
        letter-spacing: -0.64px;
        margin-left: 0.5rem;
    }
`,f=l.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;r()}catch(e){r(e)}})},802:(e,t,i)=>{i.d(t,{h:()=>r});let r=({page:e,totalPages:t})=>{let i=[],r=t=>i.push({text:t.toString(),page:t,isCurrent:t===e});if(e>1&&(i.push({text:"<<",page:1}),i.push({text:"<",page:e-1})),t<=5)for(let e=1;e<=t;e++)r(e);else{let i=Math.max(1,e-Math.floor(2.5)),n=Math.min(t,i+5-1);for(let e=i;e<=n;e++)r(e)}return e<t&&(i.push({text:">",page:e+1}),i.push({text:">>",page:t})),{items:i}}},3294:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.d(t,{t:()=>c});var n=i(997),a=i(1467),l=i(802),s=i(4115),o=e([a,s]);[a,s]=o.then?(await o)():o;let c=({page:e,changePage:t,totalPages:i})=>{if(1===i)return null;let{items:r}=(0,l.h)({page:e,totalPages:i});return n.jsx(d,{w100:!0,justifyCenter:!0,itemsCenter:!0,gap:"1rem",children:i>1?r.map(({text:e,page:i,isCurrent:r})=>n.jsx(u,{onClick:()=>{let e=document.getElementById("collection-scroll");e?.scrollIntoView({behavior:"smooth"}),t(i)},isCurrent:r,children:e},e)):n.jsx(u,{isCurrent:!0,children:"1"})})},d=(0,s.default)(a.K)`
    margin: 3.5rem 0;
`,u=s.default.a`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${e=>e.isCurrent?e.theme.gray(700):e.theme.gray(500)};
    cursor: pointer;
`;r()}catch(e){r(e)}})},7099:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.d(t,{v:()=>c});var n=i(997),a=i(6263),l=i(9290),s=i(4115);i(6689);var o=e([a,s]);[a,s]=o.then?(await o)():o;let c=({product:e,collections:t,lazy:i})=>{let r="value"in e.priceWithTax?(0,l.L)(e.priceWithTax.value,e.currencyCode):e.priceWithTax.min===e.priceWithTax.max?(0,l.L)(e.priceWithTax.min,e.currencyCode):`${(0,l.L)(e.priceWithTax.min,e.currencyCode)} - ${(0,l.L)(e.priceWithTax.max,e.currencyCode)}`;return(0,n.jsxs)(g,{column:!0,gap:"1rem",children:[n.jsx(a.rU,{href:`/products/${e.slug}/`,children:n.jsx(a._C,{loading:i?"lazy":void 0,src:e.productAsset?.preview,alt:e.productName,title:e.productName})}),n.jsx(d,{gap:"0.5rem",children:e.collectionIds.filter((t,i)=>e.collectionIds.indexOf(t)===i).map(e=>t.find(t=>t.id===e)).filter(e=>e&&"all"!==e.slug&&"search"!==e.slug).map(e=>{let t=e?.parent?.slug!=="__root_collection__"?`/collections/${e?.parent?.slug}/${e?.slug}`:`/collections/${e?.slug}`;return n.jsx(m,{href:t,children:n.jsx(a.TP,{size:"1.25rem",color:"contrast",upperCase:!0,weight:500,style:{letterSpacing:"0.5px"},children:e?.name})},e?.slug)})}),(0,n.jsxs)(a.Kq,{column:!0,gap:"0.25rem",children:[n.jsx(a.Kq,{column:!0,gap:"0.5rem",children:n.jsx(a.rU,{href:`/products/${e.slug}/`,children:n.jsx(u,{children:e.productName})})}),n.jsx(p,{gap:"0.25rem",children:n.jsx(h,{children:r})})]})]})},d=(0,s.default)(a.Kq)`
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
`,u=s.default.div`
    font-weight: 400;
    color: ${e=>e.theme.gray(900)};
    font-size: 1.5rem;
`,m=(0,s.default)(a.rU)`
    padding: 1rem;

    background-color: ${({theme:e})=>e.tile.background};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
        :hover {
            background-color: ${({theme:e})=>e.gray(500)};
        }
    }
`,p=(0,s.default)(a.Kq)`
    font-size: 1.25rem;
`,h=(0,s.default)(a.Kq)`
    font-weight: 400;
`,g=(0,s.default)(a.Kq)`
    font-size: 1.5rem;
    position: relative;
    width: 100%;
    font-weight: 500;

    @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
        max-width: 35.5rem;
    }
`;r()}catch(e){r(e)}})},6191:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.d(t,{h:()=>h});var n=i(997),a=i(2743),l=i(6689),s=i(6263),o=i(1377),c=i(4115),d=i(6197),u=i(846),m=i(4998),p=e([s,c,d]);[s,c,d]=p.then?(await p)():p;let h=({handleSort:e,sort:t})=>{let{t:i}=(0,o.useTranslation)("collections"),[r,c]=(0,l.useState)(!1),p=(0,l.useRef)(null);return(0,u.O)(p,()=>c(!1)),n.jsx(x,{gap:"0.5rem",children:(0,n.jsxs)(f,{ref:p,itemsCenter:!0,justifyBetween:!0,children:[(0,n.jsxs)(Option,{itemsCenter:!0,onClick:()=>c(!r),gap:"0.75rem",children:[n.jsx(s.Kq,{itemsEnd:!0,children:n.jsx(s.TP,{capitalize:!0,children:i("sort-by")})}),n.jsx(g,{justifyCenter:!0,itemsCenter:!0,children:n.jsx(m.Z,{})})]}),n.jsx(d.AnimatePresence,{children:r&&n.jsx(j,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeInOut"},children:a.Fo.map(r=>n.jsx(y,{selected:r.key==t.key&&r.direction==t.direction,itemsCenter:!0,onClick:async()=>{c(!1),await e(r)},children:(0,n.jsxs)(s.Kq,{itemsCenter:!0,children:[(0,n.jsxs)(s.TP,{capitalize:!0,weight:400,size:"1.5rem",children:[r.key,"\xa0"]}),(0,n.jsxs)(s.TP,{capitalize:!0,weight:400,size:"1.5rem",children:["(",i(`sort-directions.${r.direction}`),")"]})]})},r.key+r.direction))})})]})})},g=(0,c.default)(s.Kq)`
    width: 1.75rem;
    height: 1.75rem;
`,x=(0,c.default)(s.Kq)``,f=(0,c.default)(s.Kq)`
    position: relative;
`,j=(0,c.default)(d.motion.div)`
    top: 3rem;
    right: 0;
    position: absolute;
    z-index: 1;
    width: 21rem;
    display: flex;
    flex-direction: column;
    background: ${({theme:e})=>e.background.main};
    border: 1px solid ${({theme:e})=>e.button.back};
`,Option=(0,c.default)(s.Kq)`
    cursor: pointer;
    user-select: none;
`,y=(0,c.default)(s.Kq)`
    cursor: pointer;
    user-select: none;
    justify-content: space-between;
    padding: 1.8rem 2.4rem;
    background-color: ${({theme:e,selected:t})=>t?`${e.background.third}`:"unset"};
`;r()}catch(e){r(e)}})},3657:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.d(t,{Z:()=>q});var n=i(997),a=i(3541),l=i(4115),s=i(6197),o=i(1352),c=i(2612),d=i(1377),u=i(6263),m=i(5844),p=i(9689),h=i(804),g=i(3294),x=i(7099),f=i(6191),j=i(4411),y=e([l,s,u,m,p,h,g,x,f,j]);[l,s,u,m,p,h,g,x,f,j]=y.then?(await y)():y;let w=(0,l.default)(u.Kq)`
    flex-direction: column;
    gap: 2rem;
    @media (min-width: ${e=>e.theme.breakpoints.xl}) {
        flex-direction: row;
    }
`,b=(0,l.default)(u.Kq)`
    position: relative;
    padding-top: 2rem;
    @media (min-width: ${e=>e.theme.breakpoints.xl}) {
        padding: 3.5rem 0;
    }
`,v=l.default.div`
    position: absolute;
    top: -5rem;
    left: 0;
`,C=(0,l.default)(u.Kq)`
    width: auto;
    cursor: pointer;
`,k=(0,l.default)(s.motion.div)`
    width: 100%;
    background: ${e=>e.theme.grayAlpha(900,.5)};
    position: fixed;
    inset: 0;
    z-index: 2138;
`,$=(0,l.default)(s.motion.div)`
    max-width: fit-content;
    width: 100%;
    background: ${e=>e.theme.gray(0)};
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 2rem;
    left: 0;
    z-index: 1;
    overflow-y: auto;
`,q=e=>{let{t}=(0,d.useTranslation)("collections"),{t:i}=(0,d.useTranslation)("common"),{collection:r,products:l,facetValues:y,filtersOpen:q,setFiltersOpen:K,paginationInfo:T,changePage:z,filters:P,applyFilter:I,removeFilter:A,sort:E,handleSort:_}=(0,a.K)(),Z=[{name:i("breadcrumbs.home"),href:"/"},{name:e.collection?.parent?.name,href:`/collections/${e.collection?.parent?.slug}`},{name:e.collection?.name,href:`/collections/${e.collection?.parent?.slug}/${e.collection?.slug}`}].filter(e=>"__root_collection__"!==e.name);return n.jsx(j.Ar,{categories:e.collections,navigation:e.navigation,children:(0,n.jsxs)(u.OO,{children:[n.jsx(s.AnimatePresence,{children:q&&n.jsx(k,{onClick:()=>K(!1),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},children:n.jsx($,{onClick:e=>e.stopPropagation(),initial:{translateX:"-100%"},animate:{translateX:"0%"},exit:{translateX:"-100%"},transition:{duration:.3,ease:"easeInOut"},children:(0,n.jsxs)(u.Kq,{column:!0,children:[(0,n.jsxs)(u.Kq,{justifyBetween:!0,itemsCenter:!0,children:[n.jsx(u.TP,{weight:400,upperCase:!0,children:t("filters")}),n.jsx(p.hU,{onClick:()=>K(!1),children:n.jsx(o.Z,{})})]}),n.jsx(u.Kq,{column:!0,children:y?.map(e=>n.jsx(h.v,{facet:e,selected:P[e.id],onClick:(e,t)=>{P[e.id]?.includes(t.id)?A(e,t):I(e,t)}},e.code))})]})})})}),(0,n.jsxs)(b,{gap:"2rem",column:!0,children:[n.jsx(v,{id:"collection-scroll"}),n.jsx(m.O,{breadcrumbs:Z}),(0,n.jsxs)(w,{justifyBetween:!0,children:[n.jsx(u.Kq,{itemsEnd:!0,children:n.jsx(u.xZ,{children:r?.name})}),(0,n.jsxs)(u.Kq,{justifyEnd:!0,itemsCenter:!0,gap:"2.5rem",children:[(0,n.jsxs)(C,{onClick:()=>K(!0),children:[n.jsx(u.TP,{children:t("filters")}),n.jsx(p.hU,{title:t("filters"),children:n.jsx(c.Z,{})})]}),n.jsx(f.h,{sort:E,handleSort:_})," "]})]}),n.jsx(u.d2,{children:l?.map(t=>n.jsx(x.v,{collections:e.collections,product:t},t.slug))}),n.jsx(g.t,{page:T.currentPage,changePage:z,totalPages:T.totalPages})]})]})})};r()}catch(e){r(e)}})},1411:(e,t,i)=>{i.d(t,{F:()=>s});var r=i(9556),n=i(4546),a=i(4378);let l=async()=>{let e=(0,a.iy)(),t=await Promise.all(e.map(async e=>{let t=n.bD.find(t=>t.slug===e.params.channel)?.channel??n.vE,i=await (0,r.af)({channel:t,locale:e.params.locale})({collections:[{options:{filter:{slug:{notEq:"search"}},topLevelOnly:!0}},{items:{id:!0,slug:!0,children:{id:!0,slug:!0}}}]}).then(t=>{let i=t.collections?.items.map(t=>{let i=t.children?.map(i=>({params:{id:i.id,slug:[t.slug,i.slug],locale:e.params.locale,channel:e.params.channel}}));return i?.push({params:{id:t.id,slug:[t.slug],locale:e.params.locale,channel:e.params.channel}}),i}).flat();return i});return i}));return t.flatMap(e=>e)},s=async()=>{let e=await l();return{paths:e,fallback:!1}}},4191:(e,t,i)=>{i.d(t,{b:()=>d});var r=i(9556),n=i(4979),a=i(4039),l=i(4378),s=i(2743),o=i(2254),c=i(575);let d=async e=>{let{slug:t}=e.params||{},i=t?.length?t[t.length-1]:"",d={...e,params:{...e.params,slug:i}},u=await (0,l.pc)(["common","collections"])(d),m=await (0,a.b)(u.context),p=(0,o.w)(m),h=(0,r.af)(u.context),{collection:g}=await h({collection:[{slug:i},n.en]});if(!g)return{notFound:!0};let x=await h({search:[{input:{collectionSlug:i,groupByProduct:!0,take:s.LZ,sort:{name:c.As.ASC}}},n.QJ]}),f=(0,s.bC)(x.search.facetValues),j={...u.props,...u.context,slug:e.params?.slug,collections:m,name:m.find(e=>e.slug===i)?.name,products:x.search?.items,facets:f,totalProducts:x.search?.totalItems,collection:g,navigation:p};return{props:j,revalidate:process.env.NEXT_REVALIDATE?parseInt(process.env.NEXT_REVALIDATE):10}}},4039:(e,t,i)=>{i.d(t,{b:()=>l});var r=i(9556),n=i(4979),a=i(575);let l=async e=>{let t=await (0,r.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:n.u0}]}),i=[];try{i=await Promise.all(t.collections.items.map(async t=>{let i=await (0,r.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:a.As.ASC}}},{totalItems:!0,items:n.$b}]}]});return{...t,productVariants:i.collection?.productVariants}}))}catch(e){i=[]}let l=t.collections.items.map(e=>{let t=i.length?i.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return l}},2254:(e,t,i)=>{i.d(t,{w:()=>r});function r(e){let t={},i=[];for(let i of e)t[i.id]={...i,children:[]};for(let r of e){let e=t[r.id],n=r.parentId;if(null===n)i.push(e);else{let r=t[n];r?r.children.push(e):i.push(e)}}let r=i.length?i[0].parentId:null;return{children:i,id:r}}}};