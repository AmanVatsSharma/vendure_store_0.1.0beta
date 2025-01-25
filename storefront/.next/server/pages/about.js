"use strict";(()=>{var e={};e.id=2521,e.ids=[2521,2888],e.modules={4851:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>u,getStaticProps:()=>h,reportWebVitals:()=>x,routeModule:()=>S,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>f});var i=a(7093),o=a(5244),n=a(1323),s=a(4844),l=a(3877),d=a(3485),p=e([l,d]);[l,d]=p.then?(await p)():p;let c=(0,n.l)(d,"default"),h=(0,n.l)(d,"getStaticProps"),u=(0,n.l)(d,"getStaticPaths"),m=(0,n.l)(d,"getServerSideProps"),g=(0,n.l)(d,"config"),x=(0,n.l)(d,"reportWebVitals"),f=(0,n.l)(d,"unstable_getStaticProps"),b=(0,n.l)(d,"unstable_getStaticPaths"),v=(0,n.l)(d,"unstable_getStaticParams"),w=(0,n.l)(d,"unstable_getServerProps"),y=(0,n.l)(d,"unstable_getServerSideProps"),S=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/about",pathname:"/about",bundlePath:"",filename:""},components:{App:l.default,Document:s.default},userland:d});r()}catch(e){r(e)}})},2426:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{C:()=>c});var i=a(997);a(6689);var o=a(1377),n=a(4411),s=a(4115),l=a(7033),d=e([n,s]);[n,s]=d.then?(await d)():d;let p=l.US,c=e=>{let{t}=(0,o.useTranslation)("homepage");return i.jsx(n.Ar,{navigation:e.navigation,categories:e.categories,pageTitle:t("seo.home"),children:(0,i.jsxs)(f,{children:[i.jsx("h1",{children:l.TN}),i.jsx("h4",{children:l.WL}),i.jsx(v,{children:p.map(e=>(0,i.jsxs)(w,{children:[i.jsx(S,{src:`/images/${e.photo}`}),(0,i.jsxs)(y,{children:[i.jsx(j,{children:e.name}),i.jsx(k,{children:e.position})]}),i.jsx(P,{children:e.description}),i.jsx(x,{target:"_blank",href:e.ln,children:"Connect"})]},e.name))}),(0,i.jsxs)(b,{"data-aos":"fade-up",children:[i.jsx("h3",{children:l.EX.T}),i.jsx("p",{children:l.EX.f})]}),i.jsx(h,{children:l.hZ.map((e,t)=>i.jsx(u,{"data-aos":"flip-right",children:(0,i.jsxs)(m,{href:e.href,target:"_blank",children:[(0,i.jsxs)(g,{children:[i.jsx("h5",{children:e.name}),i.jsx("p",{children:l.hZ[t].content})]}),i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fillRule:"evenodd",clipRule:"evenodd",children:i.jsx("path",{style:{fill:"GrayText"},d:"M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"})})]})},e.name))})]})})},h=s.default.div`
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
`,u=s.default.div`
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
`,m=s.default.a`
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
`,k=s.default.span``,P=s.default.div``;r()}catch(e){r(e)}})},7837:(e,t,a)=>{a.d(t,{b:()=>p});var r=a(9556),i=a(4979),o=a(4039),n=a(4378),s=a(2254),l=a(575);let d=["home-garden","electronics","sports-outdoor"],p=async e=>{let t=await (0,n.pc)(["common","homepage"])(e),a=(0,r.af)(t.context),p=await a({search:[{input:{take:4,groupByProduct:!0,sort:{price:l.As.ASC}}},{items:i.Gh}]}),c=await Promise.all(d.map(async e=>{let t=await a({collection:[{slug:e},i.HE]});return t.collection?t.collection:null}).filter(e=>!!e)),h=await (0,o.b)(t.context),u=(0,s.w)(h),m={props:{...t.props,...t.context,products:p.search.items,categories:h,navigation:u,sliders:c},revalidate:process.env.NEXT_REVALIDATE?parseInt(process.env.NEXT_REVALIDATE):10};return m}},4039:(e,t,a)=>{a.d(t,{b:()=>n});var r=a(9556),i=a(4979),o=a(575);let n=async e=>{let t=await (0,r.af)(e)({collections:[{options:{filter:{slug:{notEq:"search"}}}},{items:i.u0}]}),a=[];try{a=await Promise.all(t.collections.items.map(async t=>{let a=await (0,r.af)(e)({collection:[{slug:t.slug},{productVariants:[{options:{take:4,sort:{createdAt:o.As.ASC}}},{totalItems:!0,items:i.$b}]}]});return{...t,productVariants:a.collection?.productVariants}}))}catch(e){a=[]}let n=t.collections.items.map(e=>{let t=a.length?a.find(t=>t.id===e.id):{productVariants:{items:[],totalItems:0}};return{...e,productVariants:t?.productVariants}});return n}},6301:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>d,getStaticPaths:()=>s.Fe,getStaticProps:()=>n.b});var i=a(997);a(6689);var o=a(2426),n=a(7837),s=a(4378),l=e([o]);o=(l.then?(await l)():l)[0];let d=e=>i.jsx(o.C,{...e});r()}catch(e){r(e)}})},3485:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>l,getStaticProps:()=>o.getStaticProps});var i=a(997),o=a(6301),n=a(7354);a(6689);var s=e([o,n]);[o,n]=s.then?(await s)():s;let l=e=>(0,n.l_)({children:i.jsx(o.default,{...e})})();r()}catch(e){r(e)}})},2254:(e,t,a)=>{a.d(t,{w:()=>r});function r(e){let t={},a=[];for(let a of e)t[a.id]={...a,children:[]};for(let r of e){let e=t[r.id],i=r.parentId;if(null===i)a.push(e);else{let r=t[i];r?r.children.push(e):a.push(e)}}let r=a.length?a[0].parentId:null;return{children:a,id:r}}},1161:e=>{e.exports=require("keen-slider/react")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7441:e=>{e.exports=require("unstated-next")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},5158:e=>{e.exports=import("country-flag-icons/react/3x2")},6197:e=>{e.exports=import("framer-motion")},3707:e=>{e.exports=import("next-language-detector")},5641:e=>{e.exports=import("react-hook-form")},7987:e=>{e.exports=import("react-i18next")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},7033:e=>{e.exports=JSON.parse('{"TN":"About us","WL":"We are passionate about solving real-world problems using code and making an impact on its users\' lives.","EX":{"T":"Sharing is caring","f":"We do share our solutions on GitHub gathering more than 10000 Github Stars all-together."},"hZ":[{"name":"graphql-editor","href":"https://github.com/graphql-editor/graphql-editor","content":"Visual editor & GraphQL IDE. Draw GraphQL schemas using visual nodes and explore GraphQL API with beautiful UI."},{"name":"graphql-zeus","href":"https://github.com/graphql-editor/graphql-zeus","content":"GraphQL client and GraphQL code generator with GraphQL autocomplete library generation for browser,nodejs and React Native."},{"name":"rerousel","href":"https://github.com/aexol-studio/rerousel","content":"Simplest infinite carousel for React."},{"name":"react-pdf-editor","href":"https://github.com/aexol-studio/react-pdf-editor","content":"Pdf editor react component."},{"name":"elm-pages-tailwind-starter","href":"https://github.com/aexol-studio/elm-pages-tailwind-starter","content":"Starter for elm pages and Tailwind."},{"name":"diagram","href":"https://github.com/graphql-editor/diagram","content":"Tool for making node graphs. Inspired by dependency graph. Used mainly for automation services."}],"US":[{"photo":"claudia-page.jpg","name":"Claudia Barrera","position":"Design Lead","description":"I have polished my skills in creating visually captivating designs that work across various digital platforms. I\'ve demonstrated a successful track record in design team leading, overcoming obstacles, and fostering a work atmosphere that encourages individual talents to bloom.","ln":"https://www.linkedin.com/in/claudia-barrera-pineda/"},{"photo":"ada-page.jpg","name":"Adrianna Gregorczuk","position":"Head of Growth","description":"I am experienced and effective Head of Growth bringing more than seven years\' of valuable technology industry experience and a passion for management. I am always results oriented with a proven track record of improving the market position of Aexol and GraphQL Editor.","ln":"https://www.linkedin.com/in/adrianna-gregorczuk/"},{"photo":"tomek-page.jpg","name":"Tomasz Poniatowicz","position":"A bit of everything","description":"Over the years we’ve built and successfully launched over 50 apps that climbed to the top of the app stores rankings in a number of large markets like the US, Japan, Canada, Germany and France. I\'ve done the acquisition & ads part.","ln":"https://www.linkedin.com/in/tomaszponiatowicz/"},{"photo":"artur-page.jpg","name":"Artur Czemiel","position":"CEO, TypeScript AllStack","description":"I help to shape GraphQL landscape through innovative tools right now. Created the \'Weed Scale\' app featured in High Times and earning about 1,5M$ on it and GraphQL Editor - #1 GraphQL IDE.","ln":"https://www.linkedin.com/in/arturczemiel/"}]}')}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[8428,6838,6859,4672,3877,6215],()=>a(4851));module.exports=r})();