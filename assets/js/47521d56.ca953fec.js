"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[901],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),p=a,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={id:"governance"},i="On-Chain Governance",l={unversionedId:"Polkadot/Module2/governance",id:"Polkadot/Module2/governance",title:"On-Chain Governance",description:"The relay chain's logic itself will need updating occasionally. The governance mechanism allows",source:"@site/docs/Polkadot/Module2/governance.md",sourceDirName:"Polkadot/Module2",slug:"/Polkadot/Module2/governance",permalink:"/docs/Polkadot/Module2/governance",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module2/governance.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"governance"},sidebar:"polkadot",previous:{title:"Exploring Polkadot Network",permalink:"/docs/Polkadot/Module2/explorenetwork"},next:{title:"Treasury",permalink:"/docs/Polkadot/Module2/treasury"}},c={},s=[{value:"Forkless Upgrades through On-chain Governance",id:"forkless-upgrades-through-on-chain-governance",level:2},{value:"Self-Sustaining Blockchain",id:"self-sustaining-blockchain",level:2},{value:"Polkadot Council",id:"polkadot-council",level:2},{value:"Turn out Biasing",id:"turn-out-biasing",level:2}],d={toc:s},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"on-chain-governance"},"On-Chain Governance"),(0,a.kt)("p",null,"The relay chain's logic itself will need updating occasionally. The governance mechanism allows\nPolkadot token holders to participate in the decision-making process rather than having any changes\nto the system be imposed by a central authority { or in the case of some de- centralised systems, by\na team of developers. Too often, a contentious code change has led existing blockchains to an\nimpasse or a permanent fork. We want a mechanism that balances being able to make uncontentious\nchanges quickly when needed, while also providing the tools to deal with contentious proposals in a\ndecisive and fair manner. The ultimate arbiters of Polkadot are the DOT token holders and so all\nimportant decisions, such as code changes, are made by state-weighted referenda. There is an elected\ncouncil, responsible for making smaller decisions and partially setting the priority for referenda,\nin such a way that they cannot block a change that a majority wants."),(0,a.kt)("p",null,"Polkadot uses sophisticated mechanisms for Governance which allows it to evolve gracefully over time\nat the ultimate behest of its assembled stakeholders. A key and unfailing rule is that all changes\nto the protocol must be agreed upon by stake-weighted referendum { the majority of stake always\ncommands the network. In order to make any changes to the network, the idea is to bring DOT holders\ntogether and administrate a network upgrade decision with the help of the Council (see Section\n4.6.2). No matter whether the proposal is submitted by a DOT holder or by the Council, it will\nultimately have to go through a referendum to let all DOT holders, weighted by stake, make the\ndecision. Each DOT holder in Polkadot has the right to: a) submit a proposal, b) endorse a public\nproposal to prioritise it in the referendum timetable, c) vote on all active referenda, d) become a\ncandidate for a seat in the Council, and e) vote on candidates for the Council. In addition, any DOT\nholder may become a nominator or a validator candidate to participate in NPoS"),(0,a.kt)("h2",{id:"forkless-upgrades-through-on-chain-governance"},"Forkless Upgrades through On-chain Governance"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3pAyvkgGLsU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"self-sustaining-blockchain"},"Self-Sustaining Blockchain"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/o--e-6J7C6o",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"polkadot-council"},"Polkadot Council"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qpv0Bm_KyFY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"turn-out-biasing"},"Turn out Biasing"),(0,a.kt)("p",null,"Turnout biasing: It may seem restrictive to force a full stakeholder-based process to do some- thing\nas little as, say, nudging the block time down by 5%. However, without this rule the network would\nlikely be unstable, as placing its control outside of the hands of stakeholders would create a\nmisalignment that may lead to inaction or worse. However, by taking advantage of the fact that\nturnout is rarely 100%, we can effect different outcomes depending on the circumstances, crafting a\nbalance of power between active and passive stakeholders. For example, simple voting systems\ntypically introduce a notion of quorum, whereby a minimum amount of turnout must be reached before a\nchange is passed."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8CwYtcS5v18",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}h.isMDXComponent=!0}}]);