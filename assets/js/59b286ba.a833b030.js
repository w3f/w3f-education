"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"substrate-runtime",title:"Runtime & Outer Node",sidebar_label:"Runtime & Outer Node",description:"Learn what the runtime in Substrate is, and how it defines a state transition function."},i=void 0,s={unversionedId:"Substrate/section2/substrate-runtime",id:"Substrate/section2/substrate-runtime",title:"Runtime & Outer Node",description:"Learn what the runtime in Substrate is, and how it defines a state transition function.",source:"@site/docs/Substrate/section2/substrate-runtime.md",sourceDirName:"Substrate/section2",slug:"/Substrate/section2/substrate-runtime",permalink:"/docs/Substrate/section2/substrate-runtime",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section2/substrate-runtime.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"substrate-runtime",title:"Runtime & Outer Node",sidebar_label:"Runtime & Outer Node",description:"Learn what the runtime in Substrate is, and how it defines a state transition function."},sidebar:"substrate",previous:{title:"Substrate 101 - Overview of the Substrate Framework",permalink:"/docs/Substrate/section2/"},next:{title:"Storage",permalink:"/docs/Substrate/section2/substrate-storage"}},u={},c=[{value:"The Outer Node",id:"the-outer-node",level:2}],d={toc:c},l="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The runtime is the heart of our blockchain. It defines precisely how our blockchain will handle new\ndata, whether it will react to a change in the network's state, and communicates with storage and\nnetworking layers as needed. Each runtime is a Wasm Virtual Machine. It is possible to update\nruntime by modifying/replacing Wasm VM, which enables forkless upgrades on Substrate Blockchains to\nbe possible."),(0,a.kt)("mermaid",{value:"---\ntitle: Runtime, Storage, and Outer Node\n---\nflowchart LR\n subgraph ide1 [Substrate Node]\n    direction LR\n    ON[Substrate Outer Node]--\x3e|New blocks, \\n extrinsics etc| RT{Substrate Runtime}--\x3e|Validated, and stored| ST[Substrate Storage]\n end"}),(0,a.kt)("p",null,"It is also responsible for ensuring the validity of extrinsics, can compile Wasm code for forkless\nupgrades, and, most importantly for us \u2014 facilitates the usage of FRAME (",(0,a.kt)("strong",{parentName:"p"},"Framework for Runtime\nAggregation of Modularized Entities"),") to build and add pallets. You can think of the runtime as the\n",(0,a.kt)("strong",{parentName:"p"},"engine")," that facilitates the outer node (that ends up interacting with other nodes over the\nnetwork) and storage to communicate, process, then store changes."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Because the runtime compiles to a ",(0,a.kt)("strong",{parentName:"p"},"Wasm")," environment, it is also a ",(0,a.kt)("inlineCode",{parentName:"p"},"no_std")," environment. For this\nreason, not all external Rust crates will work with a runtime unless they can work in a ",(0,a.kt)("inlineCode",{parentName:"p"},"no_std"),"\nenvironment.")),(0,a.kt)("h2",{id:"the-outer-node"},"The Outer Node"),(0,a.kt)("p",null,"The outer node refers to the portion of a Substrate node that deals with peer-to-peer networking and\nreceiving new incoming from nodes. Using ",(0,a.kt)("strong",{parentName:"p"},"host functions"),", it can pass this data as an opaque blob\nthat is then decoded and processed by the runtime, where it is then stored in the underlying storage\nlayer."))}p.isMDXComponent=!0}}]);