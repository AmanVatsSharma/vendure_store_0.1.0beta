"use strict";(()=>{var e={};e.id=6740,e.ids=[6740,2888],e.modules={4046:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>u,getStaticPaths:()=>m,getStaticProps:()=>h,reportWebVitals:()=>x,routeModule:()=>S,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>f});var i=r(7093),o=r(5244),n=r(1323),s=r(4844),l=r(3877),d=r(6301),p=e([l,d]);[l,d]=p.then?(await p)():p;let c=(0,n.l)(d,"default"),h=(0,n.l)(d,"getStaticProps"),m=(0,n.l)(d,"getStaticPaths"),u=(0,n.l)(d,"getServerSideProps"),g=(0,n.l)(d,"config"),x=(0,n.l)(d,"reportWebVitals"),f=(0,n.l)(d,"unstable_getStaticProps"),b=(0,n.l)(d,"unstable_getStaticPaths"),v=(0,n.l)(d,"unstable_getStaticParams"),w=(0,n.l)(d,"unstable_getServerProps"),y=(0,n.l)(d,"unstable_getServerSideProps"),S=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/[channel]/about",pathname:"/[channel]/about",bundlePath:"",filename:""},components:{App:l.default,Document:s.default},userland:d});a()}catch(e){a(e)}})},2426:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{C:()=>c});var i=r(997);r(6689);var o=r(1377),n=r(4411),s=r(4115),l=r(7033),d=e([n,s]);[n,s]=d.then?(await d)():d;let p=l.US,c=e=>{let{t}=(0,o.useTranslation)("homepage");return i.jsx(n.Ar,{navigation:e.navigation,categories:e.categories,pageTitle:t("seo.home"),children:(0,i.jsxs)(f,{children:[i.jsx("h1",{children:l.TN}),i.jsx("h4",{children:l.WL}),i.jsx(v,{children:p.map(e=>(0,i.jsxs)(w,{children:[i.jsx(S,{src:`/images/${e.photo}`}),(0,i.jsxs)(y,{children:[i.jsx(j,{children:e.name}),i.jsx(k,{children:e.position})]}),i.jsx(P,{children:e.description}),i.jsx(x,{target:"_blank",href:e.ln,children:"Connect"})]},e.name))}),(0,i.jsxs)(b,{"data-aos":"fade-up",children:[i.jsx("h3",{children:l.EX.T}),i.jsx("p",{children:l.EX.f})]}),i.jsx(h,{children:l.hZ.map((e,t)=>i.jsx(m,{"data-aos":"flip-right",children:(0,i.jsxs)(u,{href:e.href,target:"_blank",children:[(0,i.jsxs)(g,{children:[i.jsx("h5",{children:e.name}),i.jsx("p",{children:l.hZ[t].content})]}),i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fillRule:"evenodd",clipRule:"evenodd",children:i.jsx("path",{style:{fill:"GrayText"},d:"M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"})})]})},e.name))})]})})},h=s.default.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 40px;
    margin-bottom: 100px;
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
    @media (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
`,m=s.default.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 40px 40px;
    border: 0.5px solid gray;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    :hover {
        transform: scale(1.05);
    }

    h5 {
        margin-bottom: 20px;
    }
    a {
        text-decoration: none;
    }

    @media (max-width: 700px) {
        min-height: auto;
    }
`,u=s.default.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    height: 100%;
`,g=s.default.div`
    display: flex;
    flex-direction: column;
`,x=s.default.a`
    background: #fff;
    color: #000;
    font-size: 1.25rem;
    font-weight: 800;
    border-radius: 4px;
    border: 1px solid;
    outline: 0;
    padding: 0.5rem 2rem;
    box-shadow: blue 4px 4px 0px;
    :hover {
        color: #eee;
        background-color: #333;
    }
`,f=s.default.div`
    max-width: 1200px;
    margin: 130px auto 0;
    width: 100%;
    user-select: none;
    h1 {
        font-size: 4rem;
        font-style: normal;
        font-weight: 800;
        line-height: 120%;
        color: black;
        margin-bottom: 2rem;
    }
    h4 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: gray;
    }
`,b=s.default.div`
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
        margin-top: 130px;
    }

    h3 {
        margin-bottom: 20px;
    }
`,v=s.default.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
    gap: 4rem;
    font-size: 1.2rem;
`,w=s.default.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 4rem;
    align-items: center;
    gap: 2rem;
    border-radius: 4px;
    box-shadow: blue 4px 4px 0px;
`,y=s.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`,S=s.default.img`
    width: 12rem;
    height: 12rem;
    border-radius: 6rem;
    box-shadow: 3px 3px 0 2px blue;
`,j=s.default.div`
    font-weight: 600;
`,k=s.default.span``,P=s.default.div``;a()}catch(e){a(e)}})},7837:(e,t,r)=>{r.d(t,{b:()=>p});var a=r(9556),i=r(4979),o=r(4039),n=r(4378),s=r(2254),l=r(575);let d=["home-garden","electronics","sports-outdoor"],p=async e=>{let t=await (0,n.pc)(["common","homepage"])(e),r=(0,a.af)(t.context),p=await r({search:[{input:{take:4,groupByProduct:!0,sort:{price:l.As.ASC}}},{items:i.Gh}]}),c=await Promise.all(d.map(async e=>{let t=await r({collection:[{slug:e},i.HE]});return t.collection?t.collection:null}).filter(e=>!!e)),h=await (0,o.b)(t.context),m=(0,s.w)(h),u={props:{...t.props,...t.context,products:p.search.items,categories:h,navigation:m,sliders:c},revalidate:process.env.NEXT_REVALIDATE?parseInt(process.env.NEXT_REVALIDATE):10};return u}},4039:(e,t,r)=>{r.d(t,{b:()=>n});var a=r(9556),i=r(4979),o=r(575);let n=async e=>{let t=await (0,a.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:i.u0}]}),r=[];try{r=await Promise.all(t.collections.items.map(async t=>{let r=await (0,a.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:o.As.ASC}}},{totalItems:!0,items:i.$b}]}]});return{...t,productVariants:r.collection?.productVariants}}))}catch(e){r=[]}let n=t.collections.items.map(e=>{let t=r.length?r.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return n}},6301:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d,getStaticPaths:()=>s.Fe,getStaticProps:()=>n.b});var i=r(997);r(6689);var o=r(2426),n=r(7837),s=r(4378),l=e([o]);o=(l.then?(await l)():l)[0];let d=e=>i.jsx(o.C,{...e});a()}catch(e){a(e)}})},2254:(e,t,r)=>{r.d(t,{w:()=>a});function a(e){let t={},r=[];for(let r of e)t[r.id]={...r,children:[]};for(let a of e){let e=t[a.id],i=a.parentId;if(null===i)r.push(e);else{let a=t[i];a?a.children.push(e):r.push(e)}}let a=r.length?r[0].parentId:null;return{children:r,id:a}}},1161:e=>{e.exports=require("keen-slider/react")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7441:e=>{e.exports=require("unstated-next")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},5158:e=>{e.exports=import("country-flag-icons/react/3x2")},6197:e=>{e.exports=import("framer-motion")},3707:e=>{e.exports=import("next-language-detector")},5641:e=>{e.exports=import("react-hook-form")},7987:e=>{e.exports=import("react-i18next")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},7033:e=>{e.exports=JSON.parse('{"TN":"About us","WL":"We are passionate about solving real-world problems using code and making an impact on its users\' lives.","EX":{"T":"Sharing is caring","f":"We do share our solutions on GitHub gathering more than 10000 Github Stars all-together."},"hZ":[{"name":"graphql-editor","href":"https://github.com/graphql-editor/graphql-editor","content":"Visual editor & GraphQL IDE. Draw GraphQL schemas using visual nodes and explore GraphQL API with beautiful UI."},{"name":"graphql-zeus","href":"https://github.com/graphql-editor/graphql-zeus","content":"GraphQL client and GraphQL code generator with GraphQL autocomplete library generation for browser,nodejs and React Native."},{"name":"rerousel","href":"https://github.com/aexol-studio/rerousel","content":"Simplest infinite carousel for React."},{"name":"react-pdf-editor","href":"https://github.com/aexol-studio/react-pdf-editor","content":"Pdf editor react component."},{"name":"elm-pages-tailwind-starter","href":"https://github.com/aexol-studio/elm-pages-tailwind-starter","content":"Starter for elm pages and Tailwind."},{"name":"diagram","href":"https://github.com/graphql-editor/diagram","content":"Tool for making node graphs. Inspired by dependency graph. Used mainly for automation services."}],"US":[{"photo":"claudia-page.jpg","name":"Claudia Barrera","position":"Design Lead","description":"I have polished my skills in creating visually captivating designs that work across various digital platforms. I\'ve demonstrated a successful track record in design team leading, overcoming obstacles, and fostering a work atmosphere that encourages individual talents to bloom.","ln":"https://www.linkedin.com/in/claudia-barrera-pineda/"},{"photo":"ada-page.jpg","name":"Adrianna Gregorczuk","position":"Head of Growth","description":"I am experienced and effective Head of Growth bringing more than seven years\' of valuable technology industry experience and a passion for management. I am always results oriented with a proven track record of improving the market position of Aexol and GraphQL Editor.","ln":"https://www.linkedin.com/in/adrianna-gregorczuk/"},{"photo":"tomek-page.jpg","name":"Tomasz Poniatowicz","position":"A bit of everything","description":"Over the years we’ve built and successfully launched over 50 apps that climbed to the top of the app stores rankings in a number of large markets like the US, Japan, Canada, Germany and France. I\'ve done the acquisition & ads part.","ln":"https://www.linkedin.com/in/tomaszponiatowicz/"},{"photo":"artur-page.jpg","name":"Artur Czemiel","position":"CEO, TypeScript AllStack","description":"I help to shape GraphQL landscape through innovative tools right now. Created the \'Weed Scale\' app featured in High Times and earning about 1,5M$ on it and GraphQL Editor - #1 GraphQL IDE.","ln":"https://www.linkedin.com/in/arturczemiel/"}]}')}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8428,6838,6859,4672,3877,6215],()=>r(4046));module.exports=a})();