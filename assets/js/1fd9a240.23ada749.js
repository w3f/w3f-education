"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1554],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,a,r=function(A,e){if(null==A)return{};var t,a,r={},n=Object.keys(A);for(a=0;a<n.length;a++)t=n[a],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(a=0;a<n.length;a++)t=n[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var i=a.createContext({}),l=function(A){var e=a.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},c=function(A){var e=l(A.components);return a.createElement(i.Provider,{value:e},A.children)},p="mdxType",f={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(A,e){var t=A.components,r=A.mdxType,n=A.originalType,i=A.parentName,c=s(A,["components","mdxType","originalType","parentName"]),p=l(t),d=r,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||n;return t?a.createElement(g,o(o({ref:e},c),{},{components:t})):a.createElement(g,o({ref:e},c))}));function g(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=A,s[p]="string"==typeof A?A:r,o[1]=s;for(var l=2;l<n;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2265:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const n={id:"interoperability",title:"I for Interoperability",sidebar_position:9},o=void 0,s={unversionedId:"AtoZ/interoperability",id:"AtoZ/interoperability",title:"I for Interoperability",description:"I for Interoperability",source:"@site/docs/AtoZ/interoperability.md",sourceDirName:"AtoZ",slug:"/AtoZ/interoperability",permalink:"/docs/AtoZ/interoperability",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/interoperability.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:9,frontMatter:{id:"interoperability",title:"I for Interoperability",sidebar_position:9},sidebar:"atoz",previous:{title:"H for Hash",permalink:"/docs/AtoZ/hash"},next:{title:"J for Polkadot JS",permalink:"/docs/AtoZ/polkadot-js"}},i={},l=[{value:"A little history: Interoperability of isolated internet networks",id:"a-little-history-interoperability-of-isolated-internet-networks",level:2},{value:"Layer 0 and Layer 1",id:"layer-0-and-layer-1",level:2},{value:"XCM",id:"xcm",level:2},{value:"Interoperable chains: parathreads/parachains/bridges",id:"interoperable-chains-parathreadsparachainsbridges",level:2}],c={toc:l},p="wrapper";function f(A){let{components:e,...n}=A;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"I for Interoperability",src:t(32430).Z,width:"800",height:"420"})),(0,r.kt)("p",null,"Interoperability is at the core of the Polkadot philosophy. We aspire to combat chain maximalism and\nbelieve that the ecosystem is healthier when blockchains can communicate with each other. That\u2019s why\nwe call ourselves a Layer 0 multi-chain platform, and with that comes the technical challenge of\nconnecting isolated blockchain networks. In this post, I will explain what interoperability means,\nthe difference between Layer 0 and Layer 1 chains, how we use cross-consensus messaging(XCM) to\nachieve cross-chain communication of arbitrary data, and what the different ways to connect to\nPolkadot."),(0,r.kt)("h2",{id:"a-little-history-interoperability-of-isolated-internet-networks"},"A little history: Interoperability of isolated internet networks"),(0,r.kt)("p",null,"Starting in the early 70s up to the 80s, the internet began as isolated networks across\nuniversities, government agencies, and the military. Research fueled by these participants and an\nexcited community of developers from around the globe led to the development of Transmission Control\nProtocol and Internet Protocol(TCP/IP), which allowed these isolated networks to connect, locate and\ninteroperate with each other. We can think of the current state of the blockchain ecosystem as the\nearly days of the internet, a collection of isolated blockchains that still have yet to connect\nunder a protocol that allows them to communicate with each other. Polkadot seeks to become that\nprotocol that will allow blockchains to interoperate. That\u2019s why we call it a Layer 0\nblockchain/protocol."),(0,r.kt)("h2",{id:"layer-0-and-layer-1"},"Layer 0 and Layer 1"),(0,r.kt)("p",null,"From a societal development perspective, we scaled as communities into nation-states partly due to\nthe specialization of skills. Members of the society can choose to develop their skills and\nspecialize in areas like medicine, economics, politics, and manufacturing, among other things; they\nare also able to tap into an economy of trade where those specialized skills have a marketplace. We\ncan think of those specializations as Layer 1 solutions: in the blockchain space, these are Bitcoin\nand Ethereum. And we can also think of the economy and marketplace as Layer 0. This is what Polkadot\nis aiming to be in the blockchain ecosystem."),(0,r.kt)("h2",{id:"xcm"},"XCM"),(0,r.kt)("p",null,"Cross-Consensus Messaging (XCM) is a messaging format/paradigm that allows interoperability of Layer\n1 blockchains. It is implemented at Layer 0 and has multiple message-passing functionalities. From\nLayer 1 to Layer 1, there is Cross-chain Message Passing(XCMP). From Layer 1 to Layer 0, i.e. from\nparachains to the relay chain, there is Upwards Message Passing (UMP), while from Layer 0 to Layer 1\n(i.e. from the relay chain to parachains) we have Downwards Message Passing(DMP). XCM is\nun-opinionated about the structure of the chains on the sending and receiving end and can pass\ninformation unstructured to many types of chains. Hence, allowing any chain to utilize it for\ninteroperability. We will cover this in more detail when we get to letter X."),(0,r.kt)("h2",{id:"interoperable-chains-parathreadsparachainsbridges"},"Interoperable chains: parathreads/parachains/bridges"),(0,r.kt)("p",null,"Now that we understand the concept of Layer 0 and Layer 1, we can talk about the types of\nconnections Layer 1 chains can have on Polkadot."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parachain"),": Parachains are Layer 1 solutions that will benefit from shared consensus and the\npooled security of Polkadot. Parachain slots are slowly released by the network where potential\nparachain projects can place bids as parachain candidates. Most projects choose to do a crowdloan as\na fundraising mechanism to increase their bid, hence their probability of winning a slot. Once a\nslot is won, the parachain project gets onboarded to Polkadot and is now a part of the ecosystem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parathread"),": All Parachains are, by default, Parathreads. Parathreads are under-the-hood\nparachain slots but allow multiple chains to reside in them, allowing chains to participate in\nconsensus on a per-block basis. It might not make sense economically for some projects to live in a\nparachain slot full time; for those projects, we have parathreads."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bridge"),": Bridges are for established, economically sovereign chains with an already established\nnetwork. There are still ways for those networks to connect to Polkadot and benefit from the\neconomy."))}f.isMDXComponent=!0},32430:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,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NAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANPcOTu3AQAAmEANCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDSvbICT9euvv25+//33i9err766eeuttzYAAMdMDQicoM8//3xz7969i9fbb7+9ee+99y7+fe211zYff/zxBjgN+d2t3+V6XYc8lGj/n8h2fv755xeW++GHH17Y/rb/Q7KO2uf8n5Nl8yAEYB9qQOCE5A/9hx9+OCxIRAodS+8Bx+fJkyebp0+fbq7bp59+uvn666+ffZ//OxIcsr3Ulrb6ALEtUOT/n/b9/H+T7x8/frwBWEsNCJyQPNHcFTDeeOONzW2RQlQKTe3rpgNWQl6eGgt6HLPR/XnVBxS570fhZG0NSJb7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aq6Vz54/jd95/ivo5Fod8vxnP7ONbQW36sOSe+EyhdwKAUvD1uY8JVhsCx8l+1nr2nZess91/q67U3bWve14os5Xjim/c6OC/ZrruuvcZV9yDbPMddgWkmvW+stacyz1/842WWZ0TfX9gNN0J9UgG+ClUjM319P6FBJGo2YxVqOJVXv+nLt9Cmmj81+vm1BDm1Zb/TqetffDnTt3nvs+n03gKtXxOK/LnK9ef/6uY537yLbbEeW2/f5kmdrfy/ye9dtq5xq5bofe1mj9+9xn6ZfS91XLfeZhCZweAQSAK9kVQOCqEloyOlwrAaYd9AE4HZpgAQBHbTS/iyHC4XQJIADAUUgTq3YOnJo7p+8rlFq2bf1xgONmHhAA4CikpiN9kkbzErXMfA6nTQ0IAHDj0s9jzez1aXql9gNOmwACAByFXSNapebjOuY+AW6WJlgAXEnfPt9wzlxGjZ6W5le//PLLs34g+fmbb755Uevh3oLbwTC8AADANJpgAQAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANAIIAAAwjQACAABMI4AAAADTCCAAAMA0AggAADCNAAIAAEwjgAAAANMIIAAAwDQCCAAAMI0AAgAATCOAAAAA0wggAADANP8I3SHWdJc6hU4AAAAASUVORK5CYII="}}]);