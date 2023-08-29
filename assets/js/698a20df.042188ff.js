"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[3347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return n?o.createElement(f,i(i({ref:t},h),{},{components:n})):o.createElement(f,i({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={id:"q-faq",title:"Q for FAQ",sidebar_position:16},i=void 0,s={unversionedId:"AtoZ/q-faq",id:"AtoZ/q-faq",title:"Q for FAQ",description:"J for Polkadot JS",source:"@site/docs/AtoZ/q-faq.md",sourceDirName:"AtoZ",slug:"/AtoZ/q-faq",permalink:"/docs/AtoZ/q-faq",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/q-faq.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:16,frontMatter:{id:"q-faq",title:"Q for FAQ",sidebar_position:16},sidebar:"atoz",previous:{title:"P for Phragm\xe9n",permalink:"/docs/AtoZ/phragm\xe9n"}},l={},d=[{value:"How does staking work?",id:"how-does-staking-work",level:2},{value:"What is the Polkadot-JS UI?",id:"what-is-the-polkadot-js-ui",level:2},{value:"Why does a parachain need to connect to the Relay Chain?",id:"why-does-a-parachain-need-to-connect-to-the-relay-chain",level:2},{value:"How is Polkadot different from Cosmos?",id:"how-is-polkadot-different-from-cosmos",level:2},{value:"Why do different networks have different addresses but the same pubkey?",id:"why-do-different-networks-have-different-addresses-but-the-same-pubkey",level:2},{value:"Why is the unbonding period 28 days and why can\u2019t I earn staking rewards when I\u2019m unbonding?",id:"why-is-the-unbonding-period-28-days-and-why-cant-i-earn-staking-rewards-when-im-unbonding",level:2},{value:"Is Kusama a testnet?",id:"is-kusama-a-testnet",level:2}],h={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"J for Polkadot JS",src:n(7774).Z,width:"1600",height:"840"})),(0,a.kt)("p",null,"For the past two-plus years that Polkadot has been live, questions from the community are frequently\npresent in socials. In this post, I\u2019ll be answering some of those questions. If you have any other\nquestions that you think should be a part of this post, please leave a comment."),(0,a.kt)("h2",{id:"how-does-staking-work"},"How does staking work?"),(0,a.kt)("p",null,"Staking on Polkadot uses Nominated Proof-of-Stake(NPoS), a flavor of PoS that allows for two types\nof participants, nominators and validators. Validators are the entities that run a full version of\nthe Polkadot blockchain as a node, and they secure the network by bonding a number of tokens, which\nin turn allows them to create blocks. Nominators are the entities that elect validators into the\nactive validator set, which currently is 297 on Polkadot and 1000 on Kusama."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The active validator set is an arbitrary value that can be changed via governance.")),(0,a.kt)("p",null,"The role of staking is a part of the consensus mechanism. The mechanism allows token holders to be\nthe on-chain entities that secure the network by putting up their tokens as collateral. This\nincentive, baked into the protocol, allows any token holder to earn newly created tokens, which the\nnetwork mints whenever there is a successful new block. In simple terms, this is the inflation\nportion of the monetary policy of the network."),(0,a.kt)("p",null,"The reason why its design is complex is due to avoid the pitfalls of staking models. Mainly that of\na few entities controlling the majority of the stake. Proof-of-Stake systems all have a different\nflavor of choosing the staked entities as validators. And the goal here is not to favor certain\nentities more than others. That endeavour in itself is a challenging problem to solve."),(0,a.kt)("p",null,"For a detailed dive into NPoS read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/AtoZ/npos"},"letter N")," post of this blog series. And also be\nsure to checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"Polkadot wiki"),"."),(0,a.kt)("h2",{id:"what-is-the-polkadot-js-ui"},"What is the Polkadot-JS UI?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/AtoZ/polkadot-js"},"Polkadot-JS")," is a developer-centric interface that allows for granular control of\nSubstrate-based chains. The idea with Polkadot-JS is to be a place where all\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-extrinsics"},"extrinsics")," of all pallets can be engaged. For\na tool like Polkadot-JS to stay up to date with the ever-changing Substrate landscape, functionality\nis the primary goal, and the user interface has to be a secondary consideration. Therefore, we\nshould consider Polkadot-JS as a featureful tool rather than a user-centric one. For more\nuser-centric tools, try one of the many wallets that support Substrate."),(0,a.kt)("h2",{id:"why-does-a-parachain-need-to-connect-to-the-relay-chain"},"Why does a parachain need to connect to the Relay Chain?"),(0,a.kt)("p",null,"The Relay Chain provides security for parachains. On a more granular level, it also provides a\nmarketplace for parachains to compete. Via the parachain auctions, this competition can be\nconsidered healthy, as it incentivizes good product development and disincentivizes scams. The\nsecurity of the Relay Chain is inherited by the parachains, making them as secure as the Relay\nChain. This is a big improvement to previous models of blockchain development - as previously\nblockchains would have needed to develop their network security from scratch."),(0,a.kt)("h2",{id:"how-is-polkadot-different-from-cosmos"},"How is Polkadot different from Cosmos?"),(0,a.kt)("p",null,"A classic comparison. Polkadot vs. Cosmos has been one of the most debated topics as they are\ncompetitors for a chain model that allows other layer 1 chains to connect and interoperate. See\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-comparisons-cosmos"},"this wiki page")," for more info about\nthis topic."),(0,a.kt)("h2",{id:"why-do-different-networks-have-different-addresses-but-the-same-pubkey"},"Why do different networks have different addresses but the same pubkey?"),(0,a.kt)("p",null,"Substrate-based chains use the SS58 format for generating their account keypairs. Different network\nformats are other representations of the same public key in a key pair generated by an\naddress-generation tool. This results in addresses being compatible across networks as long as the\nformat is converted correctly."),(0,a.kt)("h2",{id:"why-is-the-unbonding-period-28-days-and-why-cant-i-earn-staking-rewards-when-im-unbonding"},"Why is the unbonding period 28 days and why can\u2019t I earn staking rewards when I\u2019m unbonding?"),(0,a.kt)("p",null,"The unbonding feature is designed to ensure that those who stake are not simply able to remove their\nstake at will, which ensures security in the network. Technically you will earn staking rewards if\nyou unbond in the middle of an era for that era; however, not for the following one. The time you\nwill have to wait until your tokens serves as a cooldown. During this time, you cannot nominate\nand/or transfer, hence unable to earn staking rewards."),(0,a.kt)("h2",{id:"is-kusama-a-testnet"},"Is Kusama a testnet?"),(0,a.kt)("p",null,"Kusama was intended to be a value-bearing test network, but since its inception, we have seen it\nbecome a sovereign network in its own right. Including a vibrant developer community and culture, as\nwell as projects that live solely in Kusama, with no plans to move on to Polkadot. So why? Because,\nin the world of blockchains, we are dealing with real value. A bug in runtime code can be extremely\ncostly, and to prevent this, runtime code needs to be tested in real value-bearing environments. In\naddition to Web 2.0 style testing, Web 3.0 needs to be run in the wild to see if any game-theoretic\nunpredictable behaviors emerge. Kusama is exactly that for Polkadot and any other parachain that\nplans to be on Polkadot. But now, it is also home to many projects that have found a home in the\nworld of Kusama."))}u.isMDXComponent=!0},7774:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Q-2caee259075baa504c86aa870364f944.png"}}]);