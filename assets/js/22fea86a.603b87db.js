"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6880],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=r,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3130:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={id:"democracy",title:"D for Democracy",sidebar_position:4},c=void 0,l={unversionedId:"AtoZ/democracy",id:"AtoZ/democracy",isDocsHomePage:!1,title:"D for Democracy",description:"D for Democracy",source:"@site/docs/AtoZ/democracy.md",sourceDirName:"AtoZ",slug:"/AtoZ/democracy",permalink:"/w3f-education/docs/AtoZ/democracy",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/democracy.md",version:"current",lastUpdatedBy:"emresurmeli",lastUpdatedAt:1641951667,formattedLastUpdatedAt:"1/12/2022",sidebarPosition:4,frontMatter:{id:"democracy",title:"D for Democracy",sidebar_position:4},sidebar:"atoz",previous:{title:"C for Collator",permalink:"/w3f-education/docs/AtoZ/collator"},next:{title:"E for Existential Deposit",permalink:"/w3f-education/docs/AtoZ/existential-deposit"}},d=[{value:"Proposal of referenda",id:"proposal-of-referenda",children:[]},{value:"Voting on referendum proposals",id:"voting-on-referendum-proposals",children:[]},{value:"Enactment",id:"enactment",children:[]},{value:"Council",id:"council",children:[]}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"D for Democracy",src:o(2777).Z})),(0,a.kt)("p",null,"Democracy is a form of governance that society has been practicing in different forms for centuries. At its purest form, it is the decentralization of power. It first appeared in the 5th century BC derived from the Greek word meaning \u201crule of the people'' and 26 centuries later taking form in Polkadot, the application of Democracy can be thought of as \u201crule of the stakeholders\u201d. It acts as the ",(0,a.kt)("strong",{parentName:"p"},"governance")," mechanism through which only agreed upon changes to the network by its stakeholders(participants) are able to pass. It is imperative for the network to function as a decentralized system and it also happens to be how the network handles code updates. When a new functionality is proposed, the network participants, that is, the DOT holders, vote on it. And if it passes the Democratic process, it will automatically call the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_code")," function, which will update the runtime code(which is a WebAssembly blob, which we will cover later this year with letter W) of the network. This is how Polkadot works around hard forks which most other blockchains need to use to update their code. "),(0,a.kt)("p",null,"So how does the system work? In simple terms the flow is as follows - ",(0,a.kt)("strong",{parentName:"p"},"proposal of referenda > voting > enactment"),", however, there are many details in the seams of each step that will be abstracted away for the sake of keeping this post simple. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-democracy"},"wiki")," for a deeper dive into each part."),(0,a.kt)("h2",{id:"proposal-of-referenda"},"Proposal of referenda"),(0,a.kt)("p",null,"In Polkadot, the main application of Democracy comes in the form of a public referendum. Referendums are simple, inclusive, stake weighted voting mechanisms and they start with a proposal, which can be enacted in a few different ways: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Publicly submitted proposals"),(0,a.kt)("li",{parentName:"ul"},"Proposals submitted by the council, either through a majority or unanimously"),(0,a.kt)("li",{parentName:"ul"},"Proposals submitted as part of the enactment of a prior referendum"),(0,a.kt)("li",{parentName:"ul"},"Emergency proposals submitted by the Technical Committee and approved by the Council")),(0,a.kt)("h2",{id:"voting-on-referendum-proposals"},"Voting on referendum proposals"),(0,a.kt)("p",null,"Proposing requires you to bond some tokens, and once the proposal has been made, the tokens are locked until the proposal has been \u201ctabled\u201d. Meaning, that there was a voting period. Bonded tokens have a lock period, and in Polkadot one lock period is 28 days, and Kusama is 8 days.\nOnce a proposal has been tabled, voting can begin. In reality, getting voting turnouts to be 100% is extremely rare, so we have developed Adaptive Quorum Biasing. In simple terms, this tool allows the network to intelligently adjust the amount of aye, or nay votes required to successfully pass or not pass a referendum based on the participant turnout.  "),(0,a.kt)("h2",{id:"enactment"},"Enactment"),(0,a.kt)("p",null,"Every approved proposal will have a period of time before it is enacted, that is, when the set_code function is called. We call this the delayed enactment period, and it allows participants that do not agree with the new update to leave the network, and also those who voted for the proposal will have their bonded DOT locked until the upgrade is executed. "),(0,a.kt)("h2",{id:"council"},"Council"),(0,a.kt)("p",null,"Any DOT holder can become elected to the council. This a delegated group of stakeholders that are elected through a rotating approval vote, meaning that the seats in coun  cil are voted on one at a time. Like a few other parts of the network, the elections use the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"sequential Phragm\xe9n method"),". Polkadot currently has 13 council seats and is planning to eventually have 24, while Kusama has 19. Candidates for council bond their DOT in order to be voted for, and their DOT is returned when they\u2019re elected. Top runner-ups are persisted until the next election, meaning their bond stays locked till the next seat is up for election. Council terms are 7 days on Polkadot and 1 day on Kusama. Their role is to control the treasury, propose referenda, cancel dangerous and non-controversial referenda, as well as elect the technical committee. The existence of the council allows the network to have a trusted group that represents the absent participants in order to make sure Democracy is functioning as intended."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://www.crowdcast.io/e/governance-on-polkadot--/register"},"this")," crowdcast which dives deeper into the governance of Polkadot."))}u.isMDXComponent=!0},2777:function(e,t,o){t.Z=o.p+"assets/images/D-c9ebe497693976125d82df68d7d263fd.png"}}]);