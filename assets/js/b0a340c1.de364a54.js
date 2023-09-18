"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={id:"introsubstrate",sidebar_position:1},i="Introduction to Polkadot SDK - Substrate & FRAME",o={unversionedId:"introsubstrate",id:"introsubstrate",title:"Introduction to Polkadot SDK - Substrate & FRAME",description:"Developed by the Technical Education team at the Web3 Foundation, this course provides a",source:"@site/docs/introsubstrate.md",sourceDirName:".",slug:"/introsubstrate",permalink:"/docs/introsubstrate",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/introsubstrate.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693920394,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:1,frontMatter:{id:"introsubstrate",sidebar_position:1},sidebar:"substrate",next:{title:"Why Learn Substrate?",permalink:"/docs/Substrate/section1/"}},s={},u=[{value:"Module 1 - Why Learn Substrate?",id:"module-1---why-learn-substrate",level:2},{value:"Module 2 - Substrate 101 - Overview of the Substrate Framework",id:"module-2---substrate-101---overview-of-the-substrate-framework",level:2},{value:"Module 3 - Installing Dependencies &amp; Node Template",id:"module-3---installing-dependencies--node-template",level:2},{value:"Module 4 - Intro to Building a Custom FRAME Pallet",id:"module-4---intro-to-building-a-custom-frame-pallet",level:2},{value:"Module 5 - Building a Custom FRAME Pallet - Making our pallet actionable",id:"module-5---building-a-custom-frame-pallet---making-our-pallet-actionable",level:2},{value:"Module 6 - Building a Custom FRAME Pallet - Deploying &amp; Testing",id:"module-6---building-a-custom-frame-pallet---deploying--testing",level:2},{value:"Module 7 - Building a Custom FRAME Pallet - FRAME Best Practices",id:"module-7---building-a-custom-frame-pallet---frame-best-practices",level:2},{value:"Module 8 - Substrate Deepdive",id:"module-8---substrate-deepdive",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction-to-polkadot-sdk---substrate--frame"},"Introduction to Polkadot SDK - Substrate & FRAME"),(0,n.kt)("p",null,"Developed by the Technical Education team at the Web3 Foundation, this course provides a\ncomprehensive overview of the Substrate blockchain framework and building blockchains."),(0,n.kt)("admonition",{title:"Prerequisites",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before starting, it would be wise to either have experience with Rust, or have taken our\n",(0,n.kt)("a",{parentName:"p",href:"/docs/introrust"},"Intro to Rust course"),". Substrate depends heavily on Rust, and it will be elaborated\non extensively in this course.")),(0,n.kt)("p",null,"This course will provide a solid foundation in navigating the creation and modification of custom\nblockchain modules, called ",(0,n.kt)("strong",{parentName:"p"},"pallets"),". This course will serve as an introduction into becoming a\nSubstrate developer, the factors involved, as well as a guided, hands on portion to building a\ncustom FRAME pallet."),(0,n.kt)("p",null,"In this course, you will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn about FRAME, the primary mode of implementation for Substrate"),(0,n.kt)("li",{parentName:"ul"},"Learn at high-level how storage, the runtime, and pallets work in FRAME"),(0,n.kt)("li",{parentName:"ul"},"Learn how to build a basic pallet and run a custom blockchain via a template"),(0,n.kt)("li",{parentName:"ul"},"Learn basic testing of a FRAME pallet"),(0,n.kt)("li",{parentName:"ul"},"Learn best practices and important considerations when building a FRAME pallet"),(0,n.kt)("li",{parentName:"ul"},"Build and deploy a basic, social-network like blockchain pallet called ",(0,n.kt)("inlineCode",{parentName:"li"},"connect"))),(0,n.kt)("h2",{id:"module-1---why-learn-substrate"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section1/"},"Module 1 - Why Learn Substrate?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section1/"},"Why Learn Substrate?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section1/what-is-substrate"},"What is Substrate?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section1/substrate-history"},"History Behind Substrate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section1/substrate-design"},"Substrate\u2019s Design Choices"))),(0,n.kt)("h2",{id:"module-2---substrate-101---overview-of-the-substrate-framework"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section2/"},"Module 2 - Substrate 101 - Overview of the Substrate Framework")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section2/"},"Substrate 101 - Overview of the Substrate Framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section2/substrate-runtime"},"FRAME Runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section2/substrate-storage"},"FRAME Storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section2/substrate-pallets"},"FRAME Pallets"))),(0,n.kt)("h2",{id:"module-3---installing-dependencies--node-template"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section3/"},"Module 3 - Installing Dependencies & Node Template")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section3/install-deps"},"Installing Dependencies & Node Template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section3/node-template-tour"},"Install, configure, and run the Node Template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section3/explore-pallet-template"},"Node Template Tour & Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section3/install-explore-frontend"},"Installing & exploring the frontend template"))),(0,n.kt)("h2",{id:"module-4---intro-to-building-a-custom-frame-pallet"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section4/"},"Module 4 - Intro to Building a Custom FRAME Pallet")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section4/project-structure"},"Structuring our project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section4/pallet-config"},"Adjusting Pallet Config & Runtime Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section4/create-storage-map"},"Creating storage maps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section4/events-errors"},"Events & Errors"))),(0,n.kt)("h2",{id:"module-5---building-a-custom-frame-pallet---making-our-pallet-actionable"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section5/"},"Module 5 - Building a Custom FRAME Pallet - Making our pallet actionable")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section5/dispatchable"},"Creating dispatchable functions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section5/unit-tests"},"Writing unit tests for pallets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section5/coupling-pallets"},"Using the Balance pallet"))),(0,n.kt)("h2",{id:"module-6---building-a-custom-frame-pallet---deploying--testing"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section6/"},"Module 6 - Building a Custom FRAME Pallet - Deploying & Testing")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section6/run-node"},"Running the node template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section6/test-frontend"},"Use the frontend-template to test your pallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section6/use-polkadotjs"},"Using Polkadot.js to explore your storage"))),(0,n.kt)("h2",{id:"module-7---building-a-custom-frame-pallet---frame-best-practices"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section7/"},"Module 7 - Building a Custom FRAME Pallet - FRAME Best Practices")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section7/blockchain-dev"},"Thinking in terms of blockchain development")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section7/runtime-panics"},"Runtime Panics & FRAME Best Practices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section7/how-to-test-frame"},"How to approach testing in FRAME"))),(0,n.kt)("h2",{id:"module-8---substrate-deepdive"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Substrate/section8/"},"Module 8 - Substrate Deepdive")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section8/origins-calls"},"Origins / Privileged Calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section8/chain-genesis-spec"},"Chain & Genesis specification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section8/pallet-coupling"},"Pallet coupling (loose vs tight)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Substrate/section8/benchmarking"},"Introduction to benchmarking"))))}p.isMDXComponent=!0}}]);