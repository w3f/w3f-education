"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[3122],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(o),b=r,p=h["".concat(c,".").concat(b)]||h[b]||u[b]||a;return o?n.createElement(p,i(i({ref:t},d),{},{components:o})):n.createElement(p,i({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},50010:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={id:"bridge",title:"B for Bridge",sidebar_position:2},i=void 0,s={unversionedId:"AtoZ/bridge",id:"AtoZ/bridge",title:"B for Bridge",description:"B for Bridges",source:"@site/docs/AtoZ/bridge.md",sourceDirName:"AtoZ",slug:"/AtoZ/bridge",permalink:"/docs/AtoZ/bridge",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/bridge.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:2,frontMatter:{id:"bridge",title:"B for Bridge",sidebar_position:2},sidebar:"atoz",previous:{title:"A for Account",permalink:"/docs/AtoZ/account"},next:{title:"C for Collator",permalink:"/docs/AtoZ/collator"}},c={},l=[{value:"What are Bridges?",id:"what-are-bridges",level:2},{value:"How do Bridges work?",id:"how-do-bridges-work",level:2},{value:"How can we achieve Bridges?",id:"how-can-we-achieve-bridges",level:2},{value:"What are some projects that\u2019re building Bridges, and how can you build a Bridge?",id:"what-are-some-projects-thatre-building-bridges-and-how-can-you-build-a-bridge",level:2}],d={toc:l},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"B for Bridges",src:o(16358).Z,width:"800",height:"420"})),(0,r.kt)("h2",{id:"what-are-bridges"},"What are Bridges?"),(0,r.kt)("p",null,"Bridges are connections to the Polkadot relay chain that have special properties which allow them to\ncommunicate with other blockchains. They\u2019re secured via the Polkadot consensus and are maintained by\na group of participants called Collators which we will cover in next week's post for letter C.\nBridges are the cornerstone of interoperability that Polkadot is looking to deliver in the\nblockchain ecosystem. We can think of them as communication channels for isolated blockchains, such\nas Bitcoin or Ethereum, that can send messages, mint new coins, securely lock funds, and burn\ntokens, among other functionality. With a bridge, we enable more complex applications to be\ndeveloped that can use multiple blockchains for functionality, hence combating the issue of chain\nmaximalism."),(0,r.kt)("h2",{id:"how-do-bridges-work"},"How do Bridges work?"),(0,r.kt)("p",null,"Let's consider an example; we have two bridges, one for BTC and another for ETH, and Bob wants to\ntransfer BTC to ETH. Polkadot can facilitate this transaction via the use of it\u2019s messaging protocol\nthat allows bridges to communicate with each other, this is called XCMP. The BTC bridge will send a\nmessage to the ETH bridge with the amount of BTC and Bobs ETH account into which the bridge will\ndeposit the newly minted ETH token, let's call this PBTC. The token minting logic is executed by an\nEthereum smart contract, which the bridge can trigger. Once the transaction happens on both bridges\nand the PBTC is minted at a 1:1 ratio as the sent BTC amount, the PBTC is deposited to Bob's ETH\naccount. Meanwhile, the original BTC is locked up in the BTC bridge, which will be accessible only\nby the original sender of the transaction. So if Bob ever wants to transfer the PBTC back into his\nBTC account, the same smart contract can burn the PBTC on the Ethereum blockchain, take the locked\nup 1:1 and send it back to Bob\u2019s BTC account. This is all secured by the bridge's Collators,\nsynchronized with the consensus of the bridged blockchain and the Polkadot blockchain."),(0,r.kt)("p",null,"See this video for a visual explanation of this process: How Bitcoin and Ethereum can Cooperate and\nCollaborate Through Polkadot with Bruno Skvorc"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about how Bitcoin and Ethereum can cooperate and collaborate through Polkadot in\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rvoFUiOR3cM"},"this video")," by Bruno Skvorc.")),(0,r.kt)("h2",{id:"how-can-we-achieve-bridges"},"How can we achieve Bridges?"),(0,r.kt)("p",null,"There are a couple ways to develop a Bridge on Polkadot. Primary way is to use the Bridge pallet\nthrough the Substrate framework, which the Polkadot and Kusama blockchains are also built with.\nAnother way is to use smart contracts, especially if the blockchain being bridged is not a Substrate\nchain. For example, bridging Ethereum will require this approach where a smart contract living on\nEthereum can execute the logic that the bridge requires. And lastly we can use Higher-order\nprotocols like XClaim, a base protocol on which we can build bridges on top of. This is only\nrecommended if the asset being bridged does not have a smart contract platform on-chain, such as\nBTC."),(0,r.kt)("h2",{id:"what-are-some-projects-thatre-building-bridges-and-how-can-you-build-a-bridge"},"What are some projects that\u2019re building Bridges, and how can you build a Bridge?"),(0,r.kt)("p",null,"Bridges are software that needs to be written and maintained, so what\u2019re some examples of this in\nthe real world? Interoperability in a decentralized, trustless way is a difficult endeavor. At Web3\nFoundation, we fund different applications looking to build bridges, such as ChainSafe and\nCentrifuge, through our grants program. Another Web3 funded project called PolkaBTC has developed a\nSubstrate bridge to BTC. And ChainX, as mentioned earlier, is a protocol that can be utilized to\ndevelop bridges, and a BTC bridge has been built using that. If you\u2019re interested in building your\nbridge, start by looking into the Parity Bridges Common repository, where the team at Parity have\nput together a collection of valuable components when building bridges."))}u.isMDXComponent=!0},16358:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/B-d03c580b65e9c438032b099ce2433e31.png"}}]);