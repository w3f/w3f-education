"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"phragm\xe9n",title:"P for Phragm\xe9n",sidebar_position:15},i=void 0,s={unversionedId:"AtoZ/phragm\xe9n",id:"AtoZ/phragm\xe9n",title:"P for Phragm\xe9n",description:"P for Phragm\xe9n",source:"@site/docs/AtoZ/phragm\xe9n.md",sourceDirName:"AtoZ",slug:"/AtoZ/phragm\xe9n",permalink:"/docs/AtoZ/phragm\xe9n",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/phragm\xe9n.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:15,frontMatter:{id:"phragm\xe9n",title:"P for Phragm\xe9n",sidebar_position:15},sidebar:"atoz",previous:{title:"O for On-chain Governance",permalink:"/docs/AtoZ/on-chain-governance"},next:{title:"Q for FAQ",permalink:"/docs/AtoZ/q-faq"}},l={},p=[],c={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"P for Phragm\xe9n",src:n(9248).Z,width:"1597",height:"837"})),(0,o.kt)("p",null,"Phragm\xe9n is a collection of election mechanisms emphasizing fair representation created by or\ninspired by Lars Edvard Phragm\xe9ns work. In the late 19th century he noticed that the most popular\npolitical party occupied the Swedish parliamentary seats and that minority parties were not\nrepresented. In order to have better voter representation in parliament he designed a method which\nwould distribute votes across seats fairly. This became known as the Phragm\xe9n method, which works\nwell for elections with multiple winners. Since several methods are associated with Lars Phragm\xe9n,\nin this post, I will talk about the specific method used in Polkadot called ",(0,o.kt)("strong",{parentName:"p"},"sequential Phragm\xe9n\n(seq-Phragm\xe9n)"),", and the newer optimization that will increase security qualities and improve the\nrepresentation of voters called ",(0,o.kt)("strong",{parentName:"p"},"Phragmms"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How seq-Phragm\xe9n is used in Polkadot")),(0,o.kt)("p",null,"Fair representation is important when electing a pool of validators in ",(0,o.kt)("strong",{parentName:"p"},"Nominated Proof of Stake\n(NPoS)"),". Or when electing ",(0,o.kt)("strong",{parentName:"p"},"Council members"),". Both of these elections have many voters with\nvarying stake, many candidates to elect or nominate, and many available seats in either the\nvalidator set or the council. seq-Phragm\xe9n has a property called proportional justified\nrepresentation(PJR), which ensures that no candidate is over or under-represented; it is a method\nthat finds a fair distribution of stake across the highest-backed candidates. By sequentially\noptimizing the elected set of candidates and the stake distributed across those elected, it gets us\ncloser to ideals that would ensure high security of the network, better representation of token\nholders in elections, as well as decentralization of validators and council members. The algorithm\nhas two critical roles:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Elect the highest backed candidates"),": Make sure that only the candidates with the highest\nbacking get elected to the active set of validators or council"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Distribute the stake evenly among them"),": Make sure all staked DOTs for a given election are as\nevenly distributed across the elected set as possible.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NPoS validator elections")),(0,o.kt)("p",null,"For NPoS, the election needs to be designed to maximize security. NPoS nominators stake their DOTs\nto elect validators to build blocks. And since a proof-of-stake network's security partially depends\non the amount staked in the system and how decentralized that stake is across the participants,\nseq-Phragm\xe9n needs to take into account three points and optimize those as much as possible with a\ngiven sensible computation input:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Maximize the total amount at stake."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Meaning elect the most backed validators into the active set."),(0,o.kt)("li",{parentName:"ul"},"More staked DOTs = higher security."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Maximize the stake behind the minimally staked validator."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Meaning distributing the total stake as evenly as possible among the elected validators."),(0,o.kt)("li",{parentName:"ul"},"This is an ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NP-hardness"},"NP-hard problem"),", meaning it is\ncomputationally difficult and requires optimization."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Minimize the variance of the stake in the active set."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Meaning the difference in stake between the most backed validator and the least backed\nvalidator is minimized."),(0,o.kt)("li",{parentName:"ul"},"Ensures higher security by raising the cost to attack the lowest-backed validator.")))),(0,o.kt)("p",null,"Aiming to optimize these properties of the NPoS validator set will increase the security of the\nnetwork and the payout that validators and nominators will gain."),(0,o.kt)("admonition",{title:"NP-hard problems tend to be computationally heavy and tend to require optimizations. When",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"developing blockchain runtimes, it's essential to ensure computation on-chain is kept to a minimum\nor that it has no potential to stall block production. :::"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Council elections")),(0,o.kt)("p",{parentName:"admonition"},"When it comes to electing Council members, seq-Phragm\xe9n is also used. In each election cycle, the\nelection yields 20 top-backed potential accounts and then picks the top 13 backed to be in the\nactive Council and 7 to be runner-ups.")),(0,o.kt)("p",null,"Stake-backed voting might seem un-democratic at first sight, but it is straightforward to game a\nsystem that does not have a stake-backed voting system on a pseudonymous blockchain system. In a\nnon-stake-backed system where one account has one vote, any entity could create multiple accounts,\ngive their single vote to the same candidate, and make it look like many voters back them."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Off-chain Phragm\xe9n")),(0,o.kt)("p",null,"Due to its computationally heavy process, seq-Phragm\xe9n is run preferably ",(0,o.kt)("strong",{parentName:"p"},"off-chain"),", and the\nresult is submitted to the chain via a transaction. This is done by\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/how-to-guides/v3/ocw/transactions/"},"off-chain workers(OCW)"),". And any\nvalidator node by default runs as an off-chain worker. This means that the computation happens on\nthe validator's machine/hardware and is responsible for the person running the validator; the\ncomputation does not happen on-chain. A validator can turn off the OCW option if they choose to."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Phragmms")),(0,o.kt)("p",null,"One of the risks of combating only underrepresentation is that some minorities may well end up being\noverrepresented, which is also troublesome for the goal of decentralization. Phragmms, the next\nstage of improvements, will enable an election resulting in the most verifiably fair representation\nof candidates based on given votes and stake. Though still computationally heavy, the beauty of\nPhragmms is its strong verification properties, which allow even an untrusted third party to run the\nelections privately and off-chain, and then prove to the network that the corresponding election\nresults are fair and proportional. This opens up an excellent opportunity for the trustless\ncomputation of elections off-chain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Resources")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=MjOvVhc1oXw"},"Solving the NPoS problem with Phragm\xe9n video by Kian Paimani")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"Polkadot Wiki: Sequential Phragm\xe9n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/Polkadot/protocols/NPoS/Overview"},"W3F Research: Overview of NPoS")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2004.12990.pdf"},"Phragmms research paper")))}d.isMDXComponent=!0},9248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/P-3793b0db868549439f9d6256b7c5eb17.png"}}]);