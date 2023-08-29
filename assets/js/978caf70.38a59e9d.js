"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6792],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},h=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?n.createElement(f,o(o({ref:a},h),{},{components:t})):n.createElement(f,o({ref:a},h))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1963:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const i={id:"relay-chain",title:"Relay Chain Architecture Overview",sidebar_label:"Relay Chain Architecture Overview",description:"Learn the role of the relay chain, and how it registers and validates parachains."},o=void 0,l={unversionedId:"Parachain/beginner/section1/relay-chain",id:"Parachain/beginner/section1/relay-chain",title:"Relay Chain Architecture Overview",description:"Learn the role of the relay chain, and how it registers and validates parachains.",source:"@site/docs/Parachain/beginner/section1/relay-chain.md",sourceDirName:"Parachain/beginner/section1",slug:"/Parachain/beginner/section1/relay-chain",permalink:"/docs/Parachain/beginner/section1/relay-chain",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Parachain/beginner/section1/relay-chain.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1693334255,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{id:"relay-chain",title:"Relay Chain Architecture Overview",sidebar_label:"Relay Chain Architecture Overview",description:"Learn the role of the relay chain, and how it registers and validates parachains."},sidebar:"parachain",previous:{title:"Polkadot Network Components",permalink:"/docs/Parachain/beginner/section1/network-components"},next:{title:"Parachain Architecture Overview",permalink:"/docs/Parachain/beginner/section1/parachain"}},c={},s=[{value:"The Path of a Parablock",id:"the-path-of-a-parablock",level:2},{value:"Requirements for a Parachain",id:"requirements-for-a-parachain",level:2}],h={toc:s},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The relay chain relieves the parachain of economic security's responsibility while facilitating interoperability.  Several stages are involved, from the collator, paravalidators, and the wider relay chain's validator set."),(0,r.kt)("h2",{id:"the-path-of-a-parablock"},"The Path of a Parablock"),(0,r.kt)("p",null,"If you recall the diagram from Network Components, you will notice a simplified path that the parablock travels to be included in the relay chain:"),(0,r.kt)("mermaid",{value:'---\ntitle: Simplified Relay Chain Block Architecture\n---\nflowchart TD\n    RC["Relay Chain"]\n    PC1("Parachain 1")\n    PC2("Parachain 2")\n    PB1("Parablock")\n    PB2("Parablock")\n    RCB("Relay Chain Block")\n\n    PC1--\x3ePB1\n    PC2--\x3ePB2\n    PB1==>RCB\n    PB2==>RCB\n    RCB --\x3e RC\n'}),(0,r.kt)("p",null,"However, a more involved process enables parablocks to be validated and included on the relay chain."),(0,r.kt)("admonition",{title:"State transition?  Transaction?  Extrinsic?  What's the difference?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Until now, the term ",(0,r.kt)("strong",{parentName:"p"},"state transition")," has been repeated a few times.   A state transition merely represents some State A moving to some State B, which the blockchain must validate as honest and abiding or reject due to invalidity.")),(0,r.kt)("p",null,"At a high level, the path of the parablock must undergo several stages before it is to be included and finalized on the relay chain.  "),(0,r.kt)("mermaid",{value:'---\ntitle: Simplified Path of a Parablock\n---\nflowchart TD\n    RC["Relay Chain"]\n    PB1("Parablock")\n    RCB("Relay Chain Block")\n    CB("Candidate Block")\n    BB("Backed Block")\n    IB("Included Block")\n    C("Collator")\n    PV("Paravalidator")\n    V("Relay Chain Validator")\n\n    subgraph RCR["Relay Chain"]\n      direction LR\n        RCB --\x3e RC\n        BB--\x3eIB\n        IB==>RCB\n    end\n\n   subgraph PC["Parachain"]\n     direction LR\n        PB1--\x3eCB\n    end\n\n    subgraph VP["Validation Process"]\n     direction LR\n        C--\x3ePV==>V\n    end\n\n    RCR--\x3eVP--\x3ePC\n'}),(0,r.kt)("p",null,"Here is a brief breakdown of how a parablock may move from parachain to relay chain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A subset of paravalidators is selected on the relay chain to validate a particular parachain."),(0,r.kt)("li",{parentName:"ul"},"The parachain's collator passes the potential parablock, with a proof of validity, to the paravalidators."),(0,r.kt)("li",{parentName:"ul"},"The collator also passes the PVF, or ",(0,r.kt)("strong",{parentName:"li"},"parachain validation function"),", to the paravalidators.  The PVF validates that the transitions in the parablock are valid."),(0,r.kt)("li",{parentName:"ul"},"A paravalidator seconds this block, which is was a candidate block, and is also validated by other paravalidators."),(0,r.kt)("li",{parentName:"ul"},"This block is now ",(0,r.kt)("strong",{parentName:"li"},"backable"),", and can now be considered as ",(0,r.kt)("strong",{parentName:"li"},"backed"),"."),(0,r.kt)("li",{parentName:"ul"},"The backed block can now be selected by the wider set of relay chain validators."),(0,r.kt)("li",{parentName:"ul"},"After a second series of checks, the relay chain's validators include the block.")),(0,r.kt)("p",null,"For a more thorough explanation, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/the-path-of-a-parachain-block"},'"The Path of a Parachain Block" by Joe Petrowski')," and the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-parachains-protocol"},"Polkadot Wiki"),"."),(0,r.kt)("h2",{id:"requirements-for-a-parachain"},"Requirements for a Parachain"),(0,r.kt)("p",null,"In the list above, note the terms: ",(0,r.kt)("strong",{parentName:"p"},"Parachain Validation Functio"),"n and ",(0,r.kt)("strong",{parentName:"p"},"Proof of Validity"),".  These both are requirements needed for the parachain to communicate with the relay chain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The proof of validity is an amount of witness data sent with a potential parablock, which may include affected points of a merkle tree, the list of state transitions, and the hashes that the state transitions modified within the parachain's storage.  This data is what helps verify the overall validity of the block throughout the entire process.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Parachain Validation Function, or ",(0,r.kt)("strong",{parentName:"p"},"PVF"),", is essentially the Wasm runtime of a parachain.  It defines how the state is supposed to transition for that certain parachain.  The entire state of the parachain doesn't need to be verified - just the proposed state changes for that particular parablock."))),(0,r.kt)("p",null,"In the section page, we also discussed Cumulus, a Parachain Development Kit based on FRAME and Substrate.  Cumulus provides the functions needed for collators to provide the PVF and information for the proof of validity to be generated, which is required for the parachain to finalize its state on the relay chain."))}d.isMDXComponent=!0}}]);