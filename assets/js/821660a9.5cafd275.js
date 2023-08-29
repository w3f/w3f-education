"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8187],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>h});var r=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(o),f=n,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return o?r.createElement(h,i(i({ref:e},p),{},{components:o})):r.createElement(h,i({ref:e},p))}));function h(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4106:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={id:"collator",title:"C for Collator",sidebar_position:3},i=void 0,l={unversionedId:"AtoZ/collator",id:"AtoZ/collator",title:"C for Collator",description:"C for Collators",source:"@site/docs/AtoZ/collator.md",sourceDirName:"AtoZ",slug:"/AtoZ/collator",permalink:"/docs/AtoZ/collator",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/collator.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:3,frontMatter:{id:"collator",title:"C for Collator",sidebar_position:3},sidebar:"atoz",previous:{title:"B for Bridge",permalink:"/docs/AtoZ/bridge"},next:{title:"D for Democracy",permalink:"/docs/AtoZ/democracy"}},c={},s=[],p={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"C for Collators",src:o(2951).Z,width:"800",height:"420"})),(0,n.kt)("p",null,"Collate (verb):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To examine and compare carefully to note points of disagreement."),(0,n.kt)("li",{parentName:"ul"},"To assemble in proper numerical or logical sequence.")),(0,n.kt)("p",null,"Collators are the maintainers of Parachains, which we will cover in more detail when we get to\nletter P. As a node on the network they have an important task, and that is to keep track of both\nthe state of the Polkadot relay chain as well as maintain the state of the given Parachain that they\nrun on. They do this by running a full node of the relay chain and a full node of the parachain and\nthen building parachain blocks along with a proof of validity for those blocks, which gets proposed\nto the Polkadot relay chain validators. Once a block is proposed, they cannot start working on the\nnext block until the relay chain validators accept the validity of the proposed block. Using\nCross-chain message passing(XCMP), which will be covered in letter X, Collators can communicate with\nother Collators of different parachains. This is imperative for allowing multi chain applications to\nwork seamlessly. If you\u2019re curious about how the technical details of Collators work, check out\nCumulous, a set of tools created by Parity to build Polkadot parachains."),(0,n.kt)("p",null,"Workshop/tutorial: ",(0,n.kt)("a",{parentName:"p",href:"https://education.web3.foundation/docs/introparachain"},"https://education.web3.foundation/docs/introparachain")," Cumulus code:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/"},"https://github.com/paritytech/cumulus/"),"."))}d.isMDXComponent=!0},2951:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/C-c20d0ec38f6d46ee0f2482cfcbd244c8.png"}}]);