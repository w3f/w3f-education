"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4656],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"grandpa",title:"G for GRANDPA",sidebar_position:7},l=void 0,c={unversionedId:"AtoZ/grandpa",id:"AtoZ/grandpa",isDocsHomePage:!1,title:"G for GRANDPA",description:"G for GRANDPA",source:"@site/docs/AtoZ/grandpa.md",sourceDirName:"AtoZ",slug:"/AtoZ/grandpa",permalink:"/w3f-education/docs/AtoZ/grandpa",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/grandpa.md",version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1676643140,formattedLastUpdatedAt:"2/17/2023",sidebarPosition:7,frontMatter:{id:"grandpa",title:"G for GRANDPA",sidebar_position:7},sidebar:"atoz",previous:{title:"F for Forkless",permalink:"/w3f-education/docs/AtoZ/forkless"},next:{title:"H for Hash",permalink:"/w3f-education/docs/AtoZ/hash"}},d=[{value:"Finality",id:"finality",children:[]},{value:"GRANDPA",id:"grandpa",children:[]},{value:"Further reading",id:"further-reading",children:[]}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"G for GRANDPA",src:n(5835).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GRANDPA"),"(GHOST-based Recursive ANcestor Deriving Prefix Agreement) is the finality module of the Polkadot and Kusama blockchains."),(0,i.kt)("h2",{id:"finality"},"Finality"),(0,i.kt)("p",null,"In the world of blockchains, finality is when a new block has been added to the blockchain with confidence that it won\u2019t be reverted, and the network agrees on this new copy of the chain. It happens to be an essential part of the consensus mechanism. A consensus mechanism, such as Bitcoin's Nakamoto consensus, has a probabilistic finality. The more blocks that get added after that block, the higher the probability that the block will be included in the canonical (network-approved) chain. However, this comes with risks - one can never be 100% sure that a block is canonical, although the more blocks built on top of a given block, the less likely it is. Various kinds of double-spend attacks rely on this feature, advertising a block that contains a transaction but does not stay as a part of the canonical chain. "),(0,i.kt)("h4",{id:"lets-think-about-this-in-a-real-world-scenario"},"Let's think about this in a real-world scenario:"),(0,i.kt)("p",null,"Let's say we\u2019re buying a cup of coffee. The finality of that transaction is when the cash is handed to the cafe, and the employee puts it in the register. Then, the cash value is recorded in the cafe's books, stored in an envelope, and deposited at their bank; after a few days, it becomes available in their account for payroll, rent, and other costs. During each of those steps, the probability that cash value will be reverted, meaning lost or stolen, will become less and less likely."),(0,i.kt)("h2",{id:"grandpa"},"GRANDPA"),(0,i.kt)("p",null,"Polkadot and Kusama have a hybrid consensus model that splits the responsibilities of consensus into two different modules: GRANDPA, the finality module, and BABE, the block production module. BABE (Blind Assignment for Blockchain Extension) produces blocks, and GRANDPA decides which blocks are finalized - that is, what is the provable canonical chain. Note that BABE has its own chain selection rule, but it is probabilistic; however, if there is an issue with getting consensus from the required number of validators for GRANDPA-derived functionality, the network reverts to probabilistic finality as opposed to stalling."),(0,i.kt)("p",null,"Each round of GRANDPA votes can finalize many blocks on the canonical chain, significantly increasing the speed of finalization. GRANDPA considers this sufficient for finality as long as \u2154 of validators agree on the canonical chain. If there is a case of less than \u2154 consensus on a new copy of the chain, GRANDPA has mechanisms to punish validators that vote on more than one new version of the chain."),(0,i.kt)("p",null,"Splitting up consensus allows us to define network assumptions into the modules, making the consensus model in Polkadot a ",(0,i.kt)("strong",{parentName:"p"},"deterministic")," model. Which we consider being more secure than a probabilistic model. Especially since block production can continue and not stall even when not enough validators are online, in this case, we fall back to the BABE chain selection. GRANDPA is a piece of code that can be plugged into any blockchain; it's designed to work on any blockchain implementation as the finality module as long as it is provided with the necessary inputs."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GRANDPA paper: ",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2007.01560.pdf"},"https://arxiv.org/pdf/2007.01560.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-consensus-part-2-grandpa/"},"https://polkadot.network/polkadot-consensus-part-2-grandpa/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/grandpa-block-finality-in-polkadot-an-introduction-part-1-d08a24a021b5"},"https://medium.com/polkadot-network/grandpa-block-finality-in-polkadot-an-introduction-part-1-d08a24a021b5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-consensus#what-is-grandpababe"},"https://wiki.polkadot.network/docs/learn-consensus#what-is-grandpababe"))))}h.isMDXComponent=!0},5835:function(e,t,n){t.Z=n.p+"assets/images/G-2f3cc6a8b487fd61f28ef63b2a577f53.png"}}]);