"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={id:"blockchain-dev",title:"Thinking in terms of blockchain development",sidebar_label:"Thinking in terms of blockchain development",description:"How to think like a runtime developer and avoid common pitfalls."},i=void 0,s={unversionedId:"Substrate/section7/blockchain-dev",id:"Substrate/section7/blockchain-dev",title:"Thinking in terms of blockchain development",description:"How to think like a runtime developer and avoid common pitfalls.",source:"@site/docs/Substrate/section7/blockchain-dev.md",sourceDirName:"Substrate/section7",slug:"/Substrate/section7/blockchain-dev",permalink:"/docs/Substrate/section7/blockchain-dev",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section7/blockchain-dev.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"blockchain-dev",title:"Thinking in terms of blockchain development",sidebar_label:"Thinking in terms of blockchain development",description:"How to think like a runtime developer and avoid common pitfalls."},sidebar:"substrate",previous:{title:"FRAME - Best Practices",permalink:"/docs/Substrate/section7/"},next:{title:"Runtime Panics & FRAME Best Practices",permalink:"/docs/Substrate/section7/runtime-panics"}},c={},l=[{value:"On Cryptography - &quot;Don&#39;t roll your own crypto&quot;",id:"on-cryptography---dont-roll-your-own-crypto",level:2},{value:"On Storage - Blockchains aren&#39;t just databases",id:"on-storage---blockchains-arent-just-databases",level:2}],p={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'If you have come from a web2 background, it can be a learning curve to "think like a blockchain\ndeveloper".'),(0,a.kt)("p",null,"While this course merely touches on the more surface-level capabilities of Substrate, there are some\ncritical practices and concepts to remember when starting your journey to develop blockchains with\nSubstrate."),(0,a.kt)("h2",{id:"on-cryptography---dont-roll-your-own-crypto"},'On Cryptography - "Don\'t roll your own crypto"'),(0,a.kt)("p",null,"It is important to abide by the general rule of thumb of ",(0,a.kt)("strong",{parentName:"p"},'"not rolling your own crypto"'),". Use\nestablished or community-approved algorithms."),(0,a.kt)("p",null,"Whether it is apparent or not, all blockchain-based systems rely heavily on various cryptographic\nmethods to track, verify, and provide the integrity blockchains intrisically offer."),(0,a.kt)("p",null,"As we've seen with the ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageMap")," implementation, we used the Blake2 hashing algorithm to hash our\nstorage keys, or more important; we require an extrinsic to be a cryptographically valid, signed\npayload that represents that specific call. The blockchain itself relies on a series of hashes that\nbuild on each other to form the infamous, verifiable ledger that is the blockchain."),(0,a.kt)("mermaid",{value:'---\ntitle: Blockchain 101 - Hashes\n---\nflowchart LR\n    subgraph Blocks\n    direction TB\n        b1c["B1 State Changes"] --\x3e b2c["B2 State Changes"] --\x3e b3c["B3 State Changes"] --\x3e b4c["B4 State Changes"]\n    end\n    subgraph Ledger\n    direction TB\n        b1["Hash(B1)"] --\x3e b2["Hash(B2)"] --\x3e b3["Hash(B3)"] --\x3e b4["Hash(B4)"]\n    end\n    b1 ==> b1c\n    b2 ==> b2c\n    b3 ==> b3c\n    b4 ==> b4c\n\n    Ledger ==> final["State Root Hash"]'}),(0,a.kt)("p",null,"Not using approved cryptography within your chain could make it fundamentally insecure and\nvulnerable to attack."),(0,a.kt)("h2",{id:"on-storage---blockchains-arent-just-databases"},"On Storage - Blockchains aren't just databases"),(0,a.kt)("p",null,"There is a common misconception that a blockchain is simply a distributed database; with that\nthinking, any data can be put on the blockchain. When developing a pallet or dApp, it is important\nto realize ",(0,a.kt)("strong",{parentName:"p"},"do not store data, but rather a representation of it"),"."),(0,a.kt)("admonition",{title:"A real-world example: Video on blockchain",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In this hypothetical scenario, a platform wishes to gate access to a video streaming platform unless\ncertain NFTs are owned. Video is a computationally expensive to store and manage - so would the\nblockchain instance store each video?"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"The answer is no.")," In most cases, the blockchain merely ",(0,a.kt)("strong",{parentName:"p"},"points")," to the content but doesn't\nstore it on the network.")),(0,a.kt)("p",null,"As we've seen, blockchains are not simply just a database - they represent an autonomous way to\nagree upon the state of some network. In order to agree on this state of the network, each node must\nhold some semblance of a copy of the network. In many cases, full nodes bear the brunt of the load\nwhen it comes to proving the state and providing access to it. Moreover, storing data on-chain is\n\"expensive\". While fees aren't an issue in our developmental network, a network like Polkadot\nrequires a fee for a state change. The more data in that state change, the more computation and\nstorage it will cost the network."))}d.isMDXComponent=!0}}]);