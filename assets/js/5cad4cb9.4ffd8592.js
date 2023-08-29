"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,b=d["".concat(l,".").concat(p)]||d[p]||h[p]||s;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={id:"substrate-design",title:"Substrate\u2019s Design Choices",sidebar_label:"Substrate\u2019s Design Choices",description:"Learn how the design choices of Substrate were made, and why they matter."},i=void 0,o={unversionedId:"Substrate/section1/substrate-design",id:"Substrate/section1/substrate-design",title:"Substrate\u2019s Design Choices",description:"Learn how the design choices of Substrate were made, and why they matter.",source:"@site/docs/Substrate/section1/substrate-design.md",sourceDirName:"Substrate/section1",slug:"/Substrate/section1/substrate-design",permalink:"/docs/Substrate/section1/substrate-design",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section1/substrate-design.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"substrate-design",title:"Substrate\u2019s Design Choices",sidebar_label:"Substrate\u2019s Design Choices",description:"Learn how the design choices of Substrate were made, and why they matter."},sidebar:"substrate",previous:{title:"History Behind Substrate",permalink:"/docs/Substrate/section1/substrate-history"},next:{title:"Course Capstone Project",permalink:"/docs/Substrate/section1/capstone-project"}},l={},c=[{value:"What is a generic code base?",id:"what-is-a-generic-code-base",level:2},{value:"What are the challenges?",id:"what-are-the-challenges",level:2},{value:"Further reading",id:"further-reading",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Substrate code base was designed to be ",(0,n.kt)("strong",{parentName:"p"},"highly")," generic. This enables high customizability and\ndefinition of various primitives for creating a blockchain with Substrate."),(0,n.kt)("p",null,"From networking to defining how the state of a blockchain mutates, most of what makes Substrate\nadaptable comes from its heavy use of\n",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch10-01-syntax.html"},"Rust's generic typing system"),"."),(0,n.kt)("h2",{id:"what-is-a-generic-code-base"},"What is a generic code base?"),(0,n.kt)("p",null,"At a basic level, a generic code base represents a way to define very reusable code. The Substrate\nlibraries use this design pattern to optionally leave some of the definitions of primitives up to\nthe developer."),(0,n.kt)("p",null,"Blockchains often have standard 'primitives': Polkadot, Bitcoin, or Ethereum all have concepts and\nprimitives that are commonplace, i.e., transactions, blocks, storage, and hashing algorithms.\nSubstrate's generic nature allows for these blockchain primitives to be decided by the implementor."),(0,n.kt)("p",null,"We only really need to define these primitives one time for the chain. In FRAME, this is done using\na Rust trait called ",(0,n.kt)("inlineCode",{parentName:"p"},"Config"),", which uses associated types to group all relevant primitives together\nin a way defined only once for the entire blockchain."),(0,n.kt)("h2",{id:"what-are-the-challenges"},"What are the challenges?"),(0,n.kt)("p",null,"There can be a degree of complexity for the developers maintaining a Substrate-based codebase due to\nits generic nature. If you are a developer working closely with Substrate libraries, then intimate\nknowledge of how this generic design (and subsequently,\n",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch10-01-syntax.html"},"Rust's generic type system"),") works is highly\nuseful."),(0,n.kt)("p",null,"Luckily with FRAME, abstractions are provided to mitigate this, allowing a developer to take full\nadvantage of Substrate."),(0,n.kt)("h3",{id:"further-reading"},"Further reading"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6cp10jVWNl4"},"Substrate Seminar - Traits and Generic Types - Shawn Tabrizi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/substrate-in-a-nutshell/"},"Substrate in a nutshell - Parity Technologies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.thomasheartman.com/posts/on-generics-and-associated-types"},"On Generics and Associated Types - Thomas Heartman"))))}h.isMDXComponent=!0}}]);