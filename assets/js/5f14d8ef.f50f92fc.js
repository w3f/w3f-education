"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},44035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"introparachain",sidebar_position:1},o="Parachain Development Guide",l={unversionedId:"introparachain",id:"introparachain",title:"Parachain Development Guide",description:"This guide aims to jumpstart the process of developing and deploying parachains on Polkadot. This guide covers an overview of Polkadot architecture, creating your own parachain, and going through the process of registering it to a locally available relay chain.  It contains both a brief yet demystifying explanation of Polkadot and how various roles work together to provide data availability, interoperability, and shared security.  This guide also offers practical steps to begin parachain development, as well as offers different potential workflows for how to develop and test a parachain locally.",source:"@site/docs/introparachain.md",sourceDirName:".",slug:"/introparachain",permalink:"/docs/introparachain",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/introparachain.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1697117718,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:1,frontMatter:{id:"introparachain",sidebar_position:1},sidebar:"parachain",next:{title:"Parachain Architecture Overview",permalink:"/docs/Parachain/beginner/section1/"}},c={},s=[{value:"Section 1 - Network Architecture",id:"section-1---network-architecture",level:2},{value:"Section 2 - Installing &amp; Running Dependencies",id:"section-2---installing--running-dependencies",level:2},{value:"Section 3 - Registering Your Parachain",id:"section-3---registering-your-parachain",level:2},{value:"Section 4 - Next Steps (coming soon)",id:"section-4---next-steps-coming-soon",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parachain-development-guide"},"Parachain Development Guide"),(0,r.kt)("p",null,"This guide aims to jumpstart the process of developing and deploying parachains on Polkadot. This guide covers an overview of Polkadot architecture, creating your own parachain, and going through the process of registering it to a locally available relay chain.  It contains both a brief yet demystifying explanation of Polkadot and how various roles work together to provide data availability, interoperability, and shared security.  This guide also offers practical steps to begin parachain development, as well as offers different potential workflows for how to develop and test a parachain locally. "),(0,r.kt)("p",null,"If you wish to only learn about the current relay chain and parachain architecture, then you only need to read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Parachain/beginner/section1/"},"first section"),".  Otherwise, this guide also provides the means to begin your parachain development journey."),(0,r.kt)("admonition",{title:"Suggested Prerequisite/Complementary Reading ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following courses, or knowledge of these subjects in general will aid you in smoothly following this guide.  As FRAME and Substrate are inevitable to know if you wish to modify and customize your parachain, the following courses cover highly useful material for this purpose:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/introrust"},"Intro to Rust")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/introsubstrate"},"Intro to Substrate"))),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},(0,r.kt)("strong",{parentName:"a"},"Rust"))," should already be installed on your system"),(0,r.kt)("li",{parentName:"ul"},"For a smoother start, clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/parachain-guide-resources"},"Parachain Guide Resources")," repository"))),(0,r.kt)("p",null,"The primary goals are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn the basics of how Polkadot works as an ",(0,r.kt)("strong",{parentName:"li"},"execution sharded")," network."),(0,r.kt)("li",{parentName:"ul"},"Learn the roles of the relay and parachain architecture."),(0,r.kt)("li",{parentName:"ul"},"Install necessary binaries and dependencies needed to create networks locally."),(0,r.kt)("li",{parentName:"ul"},"Modify your parachain and prep it for connecting to the relay chain."),(0,r.kt)("li",{parentName:"ul"},"Create a parathread and reserve a para ID."),(0,r.kt)("li",{parentName:"ul"},"Regiseter your parachain using the ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo")," pallet."),(0,r.kt)("li",{parentName:"ul"},"Next steps and moving forward in deployment and production ",(0,r.kt)("strong",{parentName:"li"},"(coming soon)"),".")),(0,r.kt)("h2",{id:"section-1---network-architecture"},"Section 1 - Network Architecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section1/network-components"},"Polkadot Network Components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section1/parachain"},"Parachain Architecture Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section1/relay-chain"},"Relay Chain Architecture Overview"))),(0,r.kt)("h2",{id:"section-2---installing--running-dependencies"},"Section 2 - Installing & Running Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section2/install-binary"},"Install Local Binaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section2/install-template"},"Install the Cumulus Parachain Template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section2/running-chains"},"Running the Relay and Parachain"))),(0,r.kt)("h2",{id:"section-3---registering-your-parachain"},"Section 3 - Registering Your Parachain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section3/creating-parathread"},"Creating a Parathread")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section3/sudo-register"},"Registering Your Parachain with Sudo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section3/developing-parachain"},"Developing Your Parachain"))),(0,r.kt)("h2",{id:"section-4---next-steps-coming-soon"},"Section 4 - Next Steps (coming soon)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section4/initatives"},"Ecosystem Initiatives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Parachain/beginner/section4/road-to-production"},"Road to Production"))))}d.isMDXComponent=!0}}]);