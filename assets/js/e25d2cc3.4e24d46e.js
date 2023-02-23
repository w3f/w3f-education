"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8675],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),k=u(a),h=o,p=k["".concat(l,".").concat(h)]||k[h]||c[h]||r;return a?n.createElement(p,i(i({ref:e},d),{},{components:a})):n.createElement(p,i({ref:e},d))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2218:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={id:"kusama",title:"K for Kusama",sidebar_position:10},l=void 0,u={unversionedId:"AtoZ/kusama",id:"AtoZ/kusama",isDocsHomePage:!1,title:"K for Kusama",description:"K for Kusama",source:"@site/docs/AtoZ/kusama.md",sourceDirName:"AtoZ",slug:"/AtoZ/kusama",permalink:"/w3f-education/docs/AtoZ/kusama",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/kusama.md",version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1676644993,formattedLastUpdatedAt:"2/17/2023",sidebarPosition:10,frontMatter:{id:"kusama",title:"K for Kusama",sidebar_position:10},sidebar:"atoz",previous:{title:"J for Polkadot JS",permalink:"/w3f-education/docs/AtoZ/polkadot-js"},next:{title:"L for Polkadot Launch",permalink:"/w3f-education/docs/AtoZ/launch"}},d=[{value:"Some functionality differences between Kusama and Polkadot",id:"some-functionality-differences-between-kusama-and-polkadot",children:[]},{value:"Testing in the world of blockchains",id:"testing-in-the-world-of-blockchains",children:[]},{value:"Kusama becoming its own network",id:"kusama-becoming-its-own-network",children:[]}],c={toc:d};function k(t){var e=t.components,s=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"K for Kusama",src:a(2326).Z})),(0,r.kt)("p",null,"It is known as the canary network for Polkadot and has been called a \u201cvalue-bearing test network\u201d by Gavin Wood. At its core, Kusama is a blockchain network that shares an almost identical code base with Polkadot, with the caveat that it might be slightly more advanced since code gets tested first on Kusama and vetted before moving onto Polkadot (but not always); the slight differences in parameters make it a good testing ground, but also a great place for startups and teams that want to move fast. For example, ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/grandpa-equivocation-and-sysinfo-process-collection-results-in-slashing-on-kusama-network-a-post-mortem/"},"this")," postmortem of when a slashing bug was found on Kusama and fixed before it could impact Polkadot. As the slogan goes, \u201cExpect Chaos\u201d. The Kusama community tends to be a bit more developer-focused and smaller than the one on Polkadot. And even though it started as a value-bearing test network, we are now seeing projects that will only deploy on Kusama with no plans to deploy to Polkadot, so we are witnessing Kusama become its own fully-fledged network in its own right."),(0,r.kt)("h2",{id:"some-functionality-differences-between-kusama-and-polkadot"},"Some functionality differences between Kusama and Polkadot"),(0,r.kt)("p",null,"There are runtime differences that make Kusama more conducive to testing out features. In general, Kusama is 4x as fast as Polkadot. This allows for an environment where runtime changes and parachain features can be tested \u201cquicker\u201d. Not everything is 4x as fast; for instance, the block time and speed of the chain grow is the same, at 6 seconds per block. Some of the main differences:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Parameter")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Polkadot")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Kusama"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.polkadot.network/docs/build-protocol-info#existential-deposit"},"Existential Deposit")),(0,r.kt)("td",null,"1 DOT"),(0,r.kt)("td",null,"33.3333 microKSM (0.0000333333 KSM)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.polkadot.network/docs/glossary#epoch"},"Epoch")),(0,r.kt)("td",null,"4 hours"),(0,r.kt)("td",null,"1 hour")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.polkadot.network/docs/glossary#era"},"Era")),(0,r.kt)("td",null,"24 hours"),(0,r.kt)("td",null,"6 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("a",{href:"https://wiki.polkadot.network/docs/maintain-guides-democracy"},"Democracy"))),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Voting Period"),(0,r.kt)("td",null,"28 days"),(0,r.kt)("td",null,"7 days")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Launch Period"),(0,r.kt)("td",null,"28 days"),(0,r.kt)("td",null,"7 days")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Enactment Period"),(0,r.kt)("td",null,"28 days"),(0,r.kt)("td",null,"8 days")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("a",{href:"https://wiki.polkadot.network/docs/learn-staking"},"Staking"))),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Term duration"),(0,r.kt)("td",null,"1 day"),(0,r.kt)("td",null,"6 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Nomination period"),(0,r.kt)("td",null,"1 day"),(0,r.kt)("td",null,"6 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Un-bonding duration"),(0,r.kt)("td",null,"28 days"),(0,r.kt)("td",null,"7 days")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("a",{href:"https://wiki.polkadot.network/docs/learn-parachains"},"Parachains"))),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Max lease period"),(0,r.kt)("td",null,"2 years"),(0,r.kt)("td",null,"1 year"))),(0,r.kt)("p",null,"The 4x faster environment allows for more experimentation, such as passing new runtime upgrades quicker; this requires diligence from the participants to stay up to date. Regarding parachain slots, the team at Parity has suggested that the Kusama to Polkadot ratio will be 4:3, meaning Polkadot should have a 75% parachain slot capacity as Kusama to ensure stability guarantees."),(0,r.kt)("h2",{id:"testing-in-the-world-of-blockchains"},"Testing in the world of blockchains"),(0,r.kt)("p",null,"We need Kusama because Web 3.0 functionality has high stakes due to blockchains' monetary aspect. It is important to note that testing features of blockchain networks is more complex than features of Web 2.0 applications. Failed features of blockchain technologies can lead to significant financial losses. The Ethereum DAO ",(0,r.kt)("a",{parentName:"p",href:"https://news.coinsquare.com/blockchain/the-dao-how-a-failed-project-may-still-impact-the-world/"},"story")," is a perfect example, where a smart contract was drained of $150 million worth of ETH. In Web 2.0 applications, testing a feature can be as easy as putting it on a test server where it can be confirmed to work before it is released into production. This effort can take anywhere between a couple of minutes to a day or two, depending on the size of the feature. Blockchains, however, have a few aspects that make testing more difficult. Blockchains are heavily game theoretic; participants\u2019 behavior is incentivized through value-bearing tokens (cryptocurrencies). If for some reason, a runtime upgrade contains some gameable bug, this can be difficult to foresee and could take the malicious participant a while to find. Hence, to test changes to code, we need a network where the real value is being used, and we can find such errors there. Kusama acts as that value-bearing network. When functionality is tested, and the code is audited, we can be more confident of its validity before putting it on Polkadot."),(0,r.kt)("h2",{id:"kusama-becoming-its-own-network"},"Kusama becoming its own network"),(0,r.kt)("p",null,"It is interesting to see that the canary paradigm of Kusama also reflects in the parachains deployed on it. Projects in the Polkadot ecosystem tend to test their functionalities on their respective Kusama parachain first and then plan to deploy them on their Polkadot parachain. However, we are slowly seeing projects that still need plans to deploy their projects to Polkadot and only stay on Kusama.** **Both chains are running smoothly and are onboarding more parachains as we speak. As of today (Jan 7, 2022), Kusama has 16+1 and Polkadot has 5+1, the +1 being Statemine and Statemint, respectively, the common-good parachains deployed and maintained by the team at Parity. To learn more about Kusama, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://guide.kusama.network/"},"guide")," and check out all the parachains on Kusama ",(0,r.kt)("a",{parentName:"p",href:"https://parachains.info/#!"},"here"),". Kusama has funded 72,590KSM to proposals through its Treasury, including a few chain state scanners like Subscan and Polkascan and wallets like Fearless and Polkawallet. Check out all the Treasury activity on Kusama ",(0,r.kt)("a",{parentName:"p",href:"https://www.dotreasury.com/ksm/"},"here"),"."))}k.isMDXComponent=!0},2326:function(t,e,a){e.Z=a.p+"assets/images/K-50a11a7ca4fd6b017cdf1980f8a2b68c.png"}}]);