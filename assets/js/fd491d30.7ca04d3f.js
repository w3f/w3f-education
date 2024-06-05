"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},21800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={id:"deployment-strat",title:"Deployment Strategies",sidebar_label:"Deployment Strategies",description:"Explore different relay chains for deploying your parachains"},i=void 0,l={unversionedId:"Parachain/beginner/section4/deployment-strat",id:"Parachain/beginner/section4/deployment-strat",title:"Deployment Strategies",description:"Explore different relay chains for deploying your parachains",source:"@site/docs/Parachain/beginner/section4/deployment-strat.md",sourceDirName:"Parachain/beginner/section4",slug:"/Parachain/beginner/section4/deployment-strat",permalink:"/docs/Parachain/beginner/section4/deployment-strat",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Parachain/beginner/section4/deployment-strat.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1697117609,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"deployment-strat",title:"Deployment Strategies",sidebar_label:"Deployment Strategies",description:"Explore different relay chains for deploying your parachains"},sidebar:"parachain",previous:{title:"Road to Production",permalink:"/docs/Parachain/beginner/section4/road-to-production"}},c={},s=[{value:"Testnet - Deploying on Rococo",id:"testnet---deploying-on-rococo",level:2},{value:"Lease a Parachain Slot through Auctions",id:"lease-a-parachain-slot-through-auctions",level:2},{value:"Canary - Deploying on Kusama",id:"canary---deploying-on-kusama",level:3},{value:"Production - Deploying on Polkadot",id:"production---deploying-on-polkadot",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following explores different ways one can register a parachain on Rococo, Kusama, or Polkadot.\nKeep in mind that the process of registering on Kusama versus Polkadot is quite similar, with Kusama\nhaving altered parameters for various mechanisms related to parachains leases and crowdloans."),(0,a.kt)("h2",{id:"testnet---deploying-on-rococo"},"Testnet - Deploying on Rococo"),(0,a.kt)("p",null,"Rococo is a testnet for parachains. If you're looking to have a very realistic configuration\n(similar to Polkadot's) to connect to, then Rococo is the place to start after you've completed\ndeveloping and testing locally."),(0,a.kt)("p",null,"Deploying to Rococo requires submitting a form,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/subport/issues/new?assignees=al3mart%2CAlexD10S&labels=Rococo&projects=&template=rococo.yaml"},"which you may find here.")),(0,a.kt)("p",null,"This will enable you obtain a parachain slot and subsequently deploy your parachain on Rococo and\ntest your parachain in an actual multi-chain environment."),(0,a.kt)("h2",{id:"lease-a-parachain-slot-through-auctions"},"Lease a Parachain Slot through Auctions"),(0,a.kt)("p",null,"Obtaining a slot on Polkadot or Kusama is a different process - you will need to participate in a\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-auction#mechanics-of-a-candle-auction"},"candle-style auction"),".\nUnlike Rococo, you will need to participate in a\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-auction"},"slot auction")," for a slot on either of these\nnetworks."),(0,a.kt)("h3",{id:"canary---deploying-on-kusama"},"Canary - Deploying on Kusama"),(0,a.kt)("admonition",{title:"More detailed instructions coming soon",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This section is currently incomplete.")),(0,a.kt)("p",null,"Find details on how auctions are used to obtain a parachain slot on\n",(0,a.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/learn-auction"},"Kusama here"),"."),(0,a.kt)("h3",{id:"production---deploying-on-polkadot"},"Production - Deploying on Polkadot"),(0,a.kt)("admonition",{title:"More detailed instructions coming soon",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This section is currently incomplete.")),(0,a.kt)("p",null,"Find details on how auctions are used to obtain a parachain slot on\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-auction"},"Polkadot here"),"."))}u.isMDXComponent=!0}}]);