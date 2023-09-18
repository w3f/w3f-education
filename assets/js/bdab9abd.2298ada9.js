"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={id:"install-deps",title:"Install, configure, and run the Node Template",sidebar_label:"Install, configure, and run the Node Template",description:"Install the substrate-node-template, which will jump-start the development process!"},i=void 0,l={unversionedId:"Substrate/section3/install-deps",id:"Substrate/section3/install-deps",title:"Install, configure, and run the Node Template",description:"Install the substrate-node-template, which will jump-start the development process!",source:"@site/docs/Substrate/section3/install-deps.md",sourceDirName:"Substrate/section3",slug:"/Substrate/section3/install-deps",permalink:"/docs/Substrate/section3/install-deps",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section3/install-deps.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"install-deps",title:"Install, configure, and run the Node Template",sidebar_label:"Install, configure, and run the Node Template",description:"Install the substrate-node-template, which will jump-start the development process!"},sidebar:"substrate",previous:{title:"Substrate Node Template",permalink:"/docs/Substrate/section3/"},next:{title:"Node Template Tour & Overview",permalink:"/docs/Substrate/section3/node-template-tour"}},s={},u=[{value:"Cloning &amp; Building",id:"cloning--building",level:2},{value:"Running &amp; Viewing our Development Chain",id:"running--viewing-our-development-chain",level:2},{value:"Observing Chain State",id:"observing-chain-state",level:3},{value:"Modifying Chain State",id:"modifying-chain-state",level:3},{value:"Using the <code>substrate-frontend-template</code>",id:"using-the-substrate-frontend-template",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It\u2019s time to download the Substrate Node Template. This repository will give us everything to run,\ntest, and create a custom FRAME-based pallet."),(0,r.kt)("p",null,"As a part of this course, a pre-configured pallet and node runtime are already provided for you,\nwhich you will find here."),(0,r.kt)("h2",{id:"cloning--building"},"Cloning & Building"),(0,r.kt)("p",null,"You should already have the Rust toolset installed on your system. If not, go ahead and follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/install/"},"instructions to install")," and come back to this section.\nRemember, this may take a bit to build and run, so feel free to get a cup of coffee or read an\nawesome Medium article while you wait."),(0,r.kt)("p",null,"Remember that this repo is a clone from the original substrate-node-template, but with a few tweaks\nto make it easier to work with when we start our pallet development."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/w3f/substrate-mooc-node\ncd substrate-mooc-node/\n# This will build and launch the node\n# If you wish to just build it, then run cargo build --release\ncargo run --release -- --dev\n")),(0,r.kt)("p",null,"Once built, we have multiple ways of running and interacting with our node."),(0,r.kt)("h2",{id:"running--viewing-our-development-chain"},"Running & Viewing our Development Chain"),(0,r.kt)("p",null,"For immediate results to ensure our chain is up, go ahead and visit the Polkadot.js Explorer:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944"},"Polkadot/Substrate Portal")),(0,r.kt)("p",null,"This link will automatically connect to your ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," node, where you can view all chain stats.\nFor example, accounts, their balances, blocks, and on-chain events:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Polkadot JS Dev",src:n(31082).Z,width:"1418",height:"891"})),(0,r.kt)("h3",{id:"observing-chain-state"},"Observing Chain State"),(0,r.kt)("p",null,"By navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer > Chain State"),", it is possible to get the state of various storage\nmappings or values previously defined by the pallets in the runtime. These are called ",(0,r.kt)("strong",{parentName:"p"},"State\nQueries.")),(0,r.kt)("p",null,"For example, you can select the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," state query and click the plus button on the far right\nto get the time for the node:"),(0,r.kt)("h3",{id:"modifying-chain-state"},"Modifying Chain State"),(0,r.kt)("p",null,"Modifying the chain's state is done via ",(0,r.kt)("strong",{parentName:"p"},"extrinsics")," . An extrinsic is similar to the concept of a\ntransaction, as it represents a unit of change within a chain's particular state, i.e., transferring\ncurrency that changes two users' balances."),(0,r.kt)("p",null,"You can also simply search storage by raw hexadecimal key. However, most of the time, it\u2019s easier to\nperform state queries via the respective pallet and its associated storage items."),(0,r.kt)("h2",{id:"using-the-substrate-frontend-template"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"substrate-frontend-template")),(0,r.kt)("p",null,"While the explorer is an ideal place for general functions, the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},(0,r.kt)("inlineCode",{parentName:"a"},"substrate-frontend-template")),"\nis another way to interact with the node."),(0,r.kt)("p",null,"Navigate to where you installed it, and run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," (assuming you have run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install")," to\ninstall its local dependencies):"),(0,r.kt)("p",null,"This should launch the frontend, located at\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/substrate-front-end-template"},"localhost:8000"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Substrate Frontend Template",src:n(71780).Z,width:"2844",height:"1580"})),(0,r.kt)("p",null,"You now have most functionality and access to your chain through a single-page GUI. For example, you\ncan use the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," pallet to transfer currency between accounts, upgrade your runtime via a\nforkless upgrade, and interact with pallets to modify the state of the chain directly."),(0,r.kt)("p",null,"Feel free to play around here and experiment as much as possible with this interface, as a lot can\nbe gleaned from observing this structure. If you notice in the dropdown \u2014 one of the pallets is\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"."),(0,r.kt)("p",null,"On the next page, we\u2019ll modify and go through this pallet to make it our own."))}d.isMDXComponent=!0},71780:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend_template-64b2319f095e907b83397bbc1abe9965.png"},31082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polkadot_js_dev-e29accd6280f8f608086bf23c694d1af.png"}}]);