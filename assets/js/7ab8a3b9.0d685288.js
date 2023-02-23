"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"on-chain-governance",title:"O for On-chain Governance",sidebar_position:14},s=void 0,u={unversionedId:"AtoZ/on-chain-governance",id:"AtoZ/on-chain-governance",isDocsHomePage:!1,title:"O for On-chain Governance",description:"O for On-chain Governance",source:"@site/docs/AtoZ/on-chain-governance.md",sourceDirName:"AtoZ",slug:"/AtoZ/on-chain-governance",permalink:"/w3f-education/docs/AtoZ/on-chain-governance",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/on-chain-governance.md",version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1677163283,formattedLastUpdatedAt:"2/23/2023",sidebarPosition:14,frontMatter:{id:"on-chain-governance",title:"O for On-chain Governance",sidebar_position:14},sidebar:"atoz",previous:{title:"N for Nominated Proof of Stake (NPoS)",permalink:"/w3f-education/docs/AtoZ/npos"},next:{title:"P for Phragm\xe9n",permalink:"/w3f-education/docs/AtoZ/phragm\xe9n"}},c=[],p={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"O for On-chain Governance",src:n(9584).Z})),(0,r.kt)("p",null,"To understand on-chain governance, we need to understand its origin and components, and how those two work together."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Council")),(0,r.kt)("p",null,"The council is an on-chain origin whose purpose is to represent passive token holders. Though it is an influential authority group, candidates need to be elected into the council by token holders. So gaining favorability among the community is imperative to win a council seat. Council members have a few key responsibilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initiating sensible referenda"),(0,r.kt)("li",{parentName:"ul"},"Canceling uncontroversial, harmful, and malicious referenda"),(0,r.kt)("li",{parentName:"ul"},"Managing the treasury"),(0,r.kt)("li",{parentName:"ul"},"Electing members to the technical committee. ")),(0,r.kt)("p",null,"There are 13 council seats on Polkadot, with space for up to 20 runners-up (those waiting to become council members). And there are 19 seats on Kusama, with room for up to 19 runners-up. The council rotates (councilors get re-elected) every 7 days on Polkadot and every 24 hrs on Kusama."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Technical Committee")),(0,r.kt)("p",null,"The Technical Committee is a group of teams that have proven their technical knowledge by successfully implementing a Polkadot runtime. Teams can be added or removed by simple majority votes in the Council. "),(0,r.kt)("p",null,"The Technical Committee aims to safeguard against malicious referenda, implement bug fixes, reverse faulty runtime updates, or add new but battle-tested features. These changes through the technical committee are fast-tracked for voting and implementation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proposals")),(0,r.kt)("p",null,"There can be two types of proposals on-chain. ",(0,r.kt)("strong",{parentName:"p"},"Public proposals"),", which are made by token holders. And ",(0,r.kt)("strong",{parentName:"p"},"Council proposals")," come in the form of external motions, either made by a Council member or a token holder. The council also has a unique internal motion, but these do not become referendums. Internal motions don\u2019t require Democracy pallet functionality, as they handle matters that don\u2019t require runtime changes, such as managing treasury proposals or electing technical committee members. Public proposals can be made by bonding the minimum token amount (currently 100 DOT on Polkadot). Once the proposal has been posted on-chain, token holders signal their support by ",(0,r.kt)("em",{parentName:"p"},"endorsing")," it. Endorsing requires them to bond the same token amount as the account that initially posted the proposal. Amount bonded is the critical metric when choosing which proposals become referendums. A proposal with three accounts bonding 10 DOTs each outweighs 29 accounts bonding 1 DOT each. The bonded tokens will be released back to the original accounts when the proposal becomes a referendum."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Referenda")),(0,r.kt)("p",null,"Council proposals will become referendums when a simple majority of council members agree on the proposal. This is how the council can initiate legislation. Once passed, it becomes a public referendum. And if token holders created the proposal, those with the highest amount of bonded tokens backing them become public referendums. "),(0,r.kt)("p",null,"Each proposal type, public and council, have their on-chain queue. Proposals live in their respective queues, and every 28 days (on Polkadot), the most backed proposal will become referendums that can be voted on. The on-chain mechanism that chooses the following proposal to become referendums alternates between the public and council queue."),(0,r.kt)("p",null,"The timetable for referendums on Polkadot is every 28 days, which means that every 28 days, the most backed public proposal or the most recent council proposal becomes a referendum and will be up for a vote by the token holders. Unless there is an emergency referendum, there can only be one referendum for a vote at a time. By alternating queues every 28 days, assuming both queues are full of proposals, each respective queue will get their turn every 56 days. Active referenda can be viewed using chain explorers, such as ",(0,r.kt)("a",{parentName:"p",href:"http://polkadot.js.org"},"Polkadot-JS UI")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"Polkassembly"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Voting")),(0,r.kt)("p",null,"Token holders can choose from multiple levels of support for a referendum, anywhere from ",(0,r.kt)("strong",{parentName:"p"},"not bonding any tokens "),", which reduces the weight of their votes, or by ",(0,r.kt)("strong",{parentName:"p"},"bonding up passes "),"for a range of periods to increase their voting power. This creates an incentive to dissuade vote selling and also a way to allow smaller token holders to increase their voting power by locking up tokens for more than the minimum required amount. This is called conviction voting. Based on the voting outcome, the referendum will either pass or fail. If it passes, it will be enacted, meaning the runtime upgrade will be included in an upcoming block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conviction Voting")),(0,r.kt)("p",null,"Simply put, conviction voting, aka voluntary locking, is a mechanism that allows token holders to increase their voting power on referenda by locking up their tokens securely on-chain. Built-in multipliers have a minimum of 0.1x (meaning no bond) and a maximum of 6x (bonded for 896 days). Remember, a single lock-up period is equal to the timetable of a referendum, which is 28 days."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Lock up period (amount in eras)"),(0,r.kt)("td",null,"Multiplier")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"0.1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,"5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"32"),(0,r.kt)("td",null,"6"))),(0,r.kt)("p",null,"And the equation used to calculate your voting power is:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"votes = tokens * conviction_multiplier")),(0,r.kt)("p",null,"If you don\u2019t lock up your tokens, your vote will be worth 1/10th of a regular vote. If you lock up for one voting period by bonding the same amount as the originator of the proposal, your vote will be worth one vote, and if you lock up for 32 periods, your vote will be worth 6x. "),(0,r.kt)("p",null,"Conviction voting is there to help protect and keep a check and balance for smaller token holders by giving them the ability to increase their voting power."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Adaptive Quorum Biasing (Turnout Biasing)")),(0,r.kt)("p",null,"We can think of this mechanism as a lever that changes the super-majority percentage needed for referenda to pass. Its importance lies in situations without clear majority backing or against a referendum. Voting turnout will cause this mechanism to fall into two categories,",(0,r.kt)("strong",{parentName:"p"}," positive turnout bias "),"and",(0,r.kt)("strong",{parentName:"p"}," negative turnout bias"),", which control the ",(0,r.kt)("strong",{parentName:"p"},"simple majority "),"variable."),(0,r.kt)("p",null,"All public proposals use what is called ",(0,r.kt)("strong",{parentName:"p"},"positive turnout bias"),", meaning that as the referendum turnout increases, the threshold of \u201caye\u201d votes needed decreases. Positive turnout bias ensures that with lower turnout, only uncontroversial proposals can pass. For example, if the turnout is 25%, which is a low turnout, the super-majority needed is around 66%. As turnout increases, the required super-majority decreases. For example, if the turnout is 75%, the super-majority required will be 54%."),(0,r.kt)("p",null,"Council proposals that pass unanimously use ",(0,r.kt)("strong",{parentName:"p"},"negative turnout bias"),", meaning it is easier to pass with low turnout and requires the super-majority to deny it. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Canceling")),(0,r.kt)("p",null,"There are a few cancelation methods that can be utilized at different points of a proposal's lifespan:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If there is a unanimous agreement, the Technical Committee can cancel a proposal."),(0,r.kt)("li",{parentName:"ol"},"If the proposal has become a referendum, and there was a last-minute issue, such as a bug in the runtime code. The Council, through a 2/3rds majority vote, can cancel the referendum.")),(0,r.kt)("p",null,"A canceled proposal\u2019s deposit will be burned, but in the past, there have been proposals to reverse the burned tokens if it was controversial."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The future (On-chain Governance 2.0)")),(0,r.kt)("p",null,"Though imperfect, the model has worked well for the past two years. Ever since the first proposals, thoughts have been floating around about how some weaknesses could be improved in the future. The community has signaled concern about the low voter turnout and the council and technical committee being a central form of authority."),(0,r.kt)("p",null,"In efforts to address these issues and decentralize the Polkadot and Kusama networks even further, efforts to dissolve the council and technical committee have been a focus of the development team at Parity Technologies. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10195"},"The code that would make this possible has been merged into the Substrate code base"),", but has yet to be tested on Kusama, audited, and approved by the community via runtime upgrade. The goal of governance 2.0 is to be a more agile, inclusive, secure, and decentralized design."),(0,r.kt)("p",null,"If you would like to learn more about on-chain governance, check out some of these resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/polkadot-governance/"},"Blog post about governance 1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-governance"},"Polkadot Wiki: Governance"))))}h.isMDXComponent=!0},9584:function(e,t,n){t.Z=n.p+"assets/images/O-8d97cc89e6f8b45b1d6fa775ccde1efc.png"}}]);