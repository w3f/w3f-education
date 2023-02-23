"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6811],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},915:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={id:"phragm\xe9n",title:"P for Phragm\xe9n",sidebar_position:15},l=void 0,c={unversionedId:"AtoZ/phragm\xe9n",id:"AtoZ/phragm\xe9n",isDocsHomePage:!1,title:"P for Phragm\xe9n",description:"P for Phragm\xe9n",source:"@site/docs/AtoZ/phragm\xe9n.md",sourceDirName:"AtoZ",slug:"/AtoZ/phragm\xe9n",permalink:"/w3f-education/docs/AtoZ/phragm\xe9n",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/phragm\xe9n.md",version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1677163961,formattedLastUpdatedAt:"2/23/2023",sidebarPosition:15,frontMatter:{id:"phragm\xe9n",title:"P for Phragm\xe9n",sidebar_position:15},sidebar:"atoz",previous:{title:"O for On-chain Governance",permalink:"/w3f-education/docs/AtoZ/on-chain-governance"}},p=[],h={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"P for Phragm\xe9n",src:a(7261).Z})),(0,i.kt)("p",null,"Phragm\xe9n is a collection of election mechanisms emphasizing fair representation created by or inspired by Lars Edvard Phragm\xe9ns work. In the late 19th century he noticed that the most popular political party occupied the Swedish parliamentary seats and that minority parties were not represented. In order to have better voter representation in parliament he designed a method which would distribute votes across seats fairly. This became known as the Phragm\xe9n method, which works well for elections with multiple winners. Since several methods are associated with Lars Phragm\xe9n, in this post, I will talk about the specific method used in Polkadot called ",(0,i.kt)("strong",{parentName:"p"},"sequential Phragm\xe9n (seq-Phragm\xe9n)"),", and the newer optimization that will increase security qualities and improve the representation of voters called ",(0,i.kt)("strong",{parentName:"p"},"Phragmms"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How seq-Phragm\xe9n is used in Polkadot")),(0,i.kt)("p",null,"Fair representation is important when electing a pool of validators in ",(0,i.kt)("strong",{parentName:"p"},"Nominated Proof of Stake (NPoS)"),". Or when electing ",(0,i.kt)("strong",{parentName:"p"},"Council members"),". Both of these elections have many voters with varying stake, many candidates to elect or nominate, and many available seats in either the validator set or the council. seq-Phragm\xe9n has a property called proportional justified representation(PJR), which ensures that no candidate is over or under-represented; it is a method that finds a fair distribution of stake across the highest-backed candidates. By sequentially optimizing the elected set of candidates and the stake distributed across those elected, it gets us closer to ideals that would ensure high security of the network, better representation of token holders in elections, as well as decentralization of validators and council members. The algorithm has two critical roles:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Elect the highest backed candidates"),": Make sure that only the candidates with the highest backing get elected to the active set of validators or council"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Distribute the stake evenly among them"),": Make sure all staked DOTs for a given election are as evenly distributed across the elected set as possible.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NPoS validator elections")),(0,i.kt)("p",null,"For NPoS, the election needs to be designed to maximize security. NPoS nominators stake their DOTs to elect validators to build blocks. And since a proof-of-stake network's security partially depends on the amount staked in the system and how decentralized that stake is across the participants, seq-Phragm\xe9n needs to take into account three points and optimize those as much as possible with a given sensible computation input:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Maximize the total amount at stake."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Meaning elect the most backed validators into the active set."),(0,i.kt)("li",{parentName:"ul"},"More staked DOTs = higher security."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Maximize the stake behind the minimally staked validator."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Meaning distributing the total stake as evenly as possible among the elected validators."),(0,i.kt)("li",{parentName:"ul"},"This is an ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NP-hardness"},"NP-hard problem"),", meaning it is computationally difficult and requires optimization."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Minimize the variance of the stake in the active set."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Meaning the difference in stake between the most backed validator and the least backed validator is minimized."),(0,i.kt)("li",{parentName:"ul"},"Ensures higher security by raising the cost to attack the lowest-backed validator.")))),(0,i.kt)("p",null,"Aiming to optimize these properties of the NPoS validator set will increase the security of the network and the payout that validators and nominators will gain."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"NP-hard problems tend to be computationally heavy and tend to require optimizations. When developing blockchain runtimes, it's essential to ensure computation on-chain is kept to a minimum or that it has no potential to stall block production."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Council elections")),(0,i.kt)("p",null,"When it comes to electing Council members, seq-Phragm\xe9n is also used. In each election cycle, the election yields 20 top-backed potential accounts and then picks the top 13 backed to be in the active Council and 7 to be runner-ups. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Stake-backed voting might seem un-democratic at first sight, but it is straightforward to game a system that does not have a stake-backed voting system on a pseudonymous blockchain system. In a non-stake-backed system where one account has one vote, any entity could create multiple accounts, give their single vote to the same candidate, and make it look like many voters back them."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Off-chain Phragm\xe9n")),(0,i.kt)("p",null,"Due to its computationally heavy process, seq-Phragm\xe9n is run preferably ",(0,i.kt)("strong",{parentName:"p"},"off-chain"),", and the result is submitted to the chain via a transaction. This is done by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/how-to-guides/v3/ocw/transactions/"},"off-chain workers(OCW)"),". And any validator node by default runs as an off-chain worker. This means that the computation happens on the validator's machine/hardware and is responsible for the person running the validator; the computation does not happen on-chain. A validator can turn off the OCW option if they choose to."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Phragmms")),(0,i.kt)("p",null,"One of the risks of combating only underrepresentation is that some minorities may well end up being overrepresented, which is also troublesome for the goal of decentralization. Phragmms, the next stage of improvements, will enable an election resulting in the most verifiably fair representation of candidates based on given votes and stake. Though still computationally heavy, the beauty of Phragmms is its strong verification properties, which allow even an untrusted third party to run the elections privately and off-chain, and then prove to the network that the corresponding election results are fair and proportional. This opens up an excellent opportunity for the trustless computation of elections off-chain."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resources")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=MjOvVhc1oXw"},"Solving the NPoS problem with Phragm\xe9n video by Kian Paimani")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"Polkadot Wiki: Sequential Phragm\xe9n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/NPoS/1.%20Overview.html?highlight=Phragm%C3%A9n#the-election-process"},"W3F Research: Overview of NPoS")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2004.12990.pdf"},"Phragmms research paper")))}d.isMDXComponent=!0},7261:function(e,t,a){t.Z=a.p+"assets/images/P-3793b0db868549439f9d6256b7c5eb17.png"}}]);