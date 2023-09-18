"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8110],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(a),h=o,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(k,r(r({ref:e},u),{},{components:a})):n.createElement(k,r({ref:e},u))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},54677:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={id:"polkadot-js",title:"J for Polkadot JS",sidebar_position:11},r=void 0,s={unversionedId:"AtoZ/polkadot-js",id:"AtoZ/polkadot-js",title:"J for Polkadot JS",description:"J for Polkadot JS",source:"@site/docs/AtoZ/polkadot-js.md",sourceDirName:"AtoZ",slug:"/AtoZ/polkadot-js",permalink:"/docs/AtoZ/polkadot-js",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/polkadot-js.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:11,frontMatter:{id:"polkadot-js",title:"J for Polkadot JS",sidebar_position:11},sidebar:"atoz",previous:{title:"I for Interoperability",permalink:"/docs/AtoZ/interoperability"},next:{title:"K for Kusama",permalink:"/docs/AtoZ/kusama"}},l={},c=[{value:"Polkadot-JS UI",id:"polkadot-js-ui",level:2},{value:"Abilities",id:"abilities",level:2},{value:"Querying On-chain Data",id:"querying-on-chain-data",level:2},{value:"Issuing an Extrinsic",id:"issuing-an-extrinsic",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c},d="wrapper";function p(t){let{components:e,...i}=t;return(0,o.kt)(d,(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"J for Polkadot JS",src:a(52807).Z,width:"800",height:"420"})),(0,o.kt)("p",null,"Polkadot.js is a collection of tools that interfaces with the Polkadot blockchain in very granular\nways. Polkadot.js as a term has multiple moving parts that are worth mentioning:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/"},"Polkadot.js UI")),": This is the hosted application that loads when\nyou navigate to your browser and click apps wallet (hosted). This is also sometimes called the\n\u201cPolkadot-JS UI\u201d."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/polkadot-js/api"},"Polkadot.js API")),": This is the JavaScript API, a reusable\nlibrary to allow programs to interface with the functionality of Polkadot."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/extension/"},"Polkadot.js Extension")),": This Chrome extension allows you\nto manage your accounts and sign transactions. Note that all it does is sign messages; it has\nlimited functionality compared to full-featured wallets and cannot connect to the Polkadot\nnetwork."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/polkadot-js/"},"Polkadot.js codebase")),": The codebase contains all the code\nrepositories required to have the suite of tools working. You can navigate to the codebase here."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/phishing/"},"Polkadot.js Phishing List")),": The Phishing List website is\na community-driven curation of a list of less-than-honest operators. This list of URLs and\naddresses is constantly updated, and the polkdot.js extension uses it as a source to warn you\nwhen you navigate to a URL included in the list and blocks the addresses from the apps UI. Users\ncan also contribute suspicious sites and addresses if they come across them.")),(0,o.kt)("h2",{id:"polkadot-js-ui"},"Polkadot-JS UI"),(0,o.kt)("p",null,"This post will focus on the UI, a powerful web application with granular functionality support when\ninteracting with the Polkadot blockchain. It is not just a wallet; it has more abilities than\ncreating accounts or sending and receiving transactions."),(0,o.kt)("h2",{id:"abilities"},"Abilities"),(0,o.kt)("p",null,"Among other things, it also allows us to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Participate in staking"),(0,o.kt)("li",{parentName:"ol"},"Take part in governance"),(0,o.kt)("li",{parentName:"ol"},"Contribute to parachain crowdloans"),(0,o.kt)("li",{parentName:"ol"},"Run Parachain auctions"),(0,o.kt)("li",{parentName:"ol"},"Query chain metadata"),(0,o.kt)("li",{parentName:"ol"},"Query on-chain data using RPC calls")),(0,o.kt)("p",null,"Essentially, the UI allows you to perform all functionalities that a user can do on either the relay\nchain or any parachain (although the user interface may not be aligned precisely with the\nfunctionality of any individual parachain). If you\u2019re building a Substrate based blockchain, you can\nutilize the Polkadot.js UI to test your code's functionality."),(0,o.kt)("p",null,"Interacting with the Polkadot JS UI involves either querying on-chain data or issuing an extrinsic.\nLet's talk about what that means exactly."),(0,o.kt)("h2",{id:"querying-on-chain-data"},"Querying On-chain Data"),(0,o.kt)("p",null,"To populate the UI, the web application queries the Polkadot.js API. The API then queries a Polkadot\nnode and uses JavaScript to return information that the UI will display on the screen. You can\nchoose which node to connect to by changing it in the upper-left-hand corner of the screen."),(0,o.kt)("h2",{id:"issuing-an-extrinsic"},"Issuing an Extrinsic"),(0,o.kt)("p",null,"Extrinsics are information from outside the chain and are included in a block. Extrinsics can be one\nof three types: ",(0,o.kt)("strong",{parentName:"p"},"inherents"),", ",(0,o.kt)("strong",{parentName:"p"},"signed")," and ",(0,o.kt)("strong",{parentName:"p"},"unsigned transactions"),". Most extrinsics made from\nthe Polkadot JS UI will be signed transactions. ",(0,o.kt)("strong",{parentName:"p"},"Inherits")," are non-signed and non-gossiped pieces\nof information included in blocks by the block author, such as timestamps, which are \u201ctrue\u201d because\na sufficient number of validators have agreed about validity. ",(0,o.kt)("strong",{parentName:"p"},"Unsigned transactions")," are\ninformation that does not require a signature but will require some spam prevention. ",(0,o.kt)("strong",{parentName:"p"},"Signed\ntransactions")," are issued by the originator account of a transaction that contains a signature of\nthat account, which will be subject to a fee to have it included on the chain."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"Concerns have been raised by the community about the complexity of Polkadot-JS UI . However,\nPolkadot.js UI aims to support as much functionality as the relay chain requires of its users. Every\ntime there is a runtime update(which can be quite often), a potential change needs to be made on the\nPolkadot.js codebase. For example, with most 3rd party wallets, when there are runtime updates, they\nusually need to add support. Polkadot.js UI is focused less on a user-friendly UI but rather to\nsupport the Polkadot runtime without any bugs."),(0,o.kt)("p",null,"For more user-friendly but more straightforward wallet implementations, check out the wiki page\nwhere we list\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-wallets#treasury-funded-wallets"},"Parity-developed and Treasury-funded wallet projects")),(0,o.kt)("p",null,"Please take a look at some of the educational content we have created to learn more about\nPolkadot.js"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4EQqwGFV1D8"},"Introduction to Polkadot.js")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"Create an account using Polkadot.js")))}p.isMDXComponent=!0},52807:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/J-44c83fc5af4c1042c5896bb60fa94bc5.png"}}]);