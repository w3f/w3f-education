"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[1004],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5160:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={id:"parachainblock"},c="Path of a Parachain Block",s={unversionedId:"Polkadot/Module4/parachainblock",id:"Polkadot/Module4/parachainblock",isDocsHomePage:!1,title:"Path of a Parachain Block",description:"Collators watch the progress of the block-producing and consensus protocols, e.g. by participating",source:"@site/docs/Polkadot/Module4/parachainblock.md",sourceDirName:"Polkadot/Module4",slug:"/Polkadot/Module4/parachainblock",permalink:"/w3f-education/docs/Polkadot/Module4/parachainblock",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module4/parachainblock.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"parachainblock"},sidebar:"polkadot",previous:{title:"Nodes on Polkadot Network",permalink:"/w3f-education/docs/Polkadot/Module4/nodes"},next:{title:"Decentralization of Network",permalink:"/w3f-education/docs/Polkadot/Module4/decentralization"}},d=[{value:"Parachains in Action",id:"parachains-in-action",children:[]}],u={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"path-of-a-parachain-block"},"Path of a Parachain Block"),(0,r.kt)("p",null,"Collators watch the progress of the block-producing and consensus protocols, e.g. by participating\nin the relay chain as a full node. Based on what they think is the latest relay chain block that will\nmost likely be \u2000nalised, they build on top of the latest parachain block (or other data) that would be \u2000\nfinalised by it."),(0,r.kt)("p",null,"Collators sign data building on top of said latest parachain block, and submit it possibly\nindirectly, to the validators assigned to their parachain (parachain validators for short),\nfor inclusion in the relay chain. Ideally they submit a unique one, to help performance."),(0,r.kt)("p",null,"The parachain validators decide which parachain block to support, and presents relevant\ndata of it as a parachain's next candidate to be added to the next relay chain block."),(0,r.kt)("p",null,"A block-producing validator collects candidates from all parachains, and puts this collection\nalong with any recent relay chain extrinsics into a relay chain head block.\nFor performance, this does not contain the full data from all parachains, but only metadata\nand partial data, including security-related metadata."),(0,r.kt)("p",null,"In the unfavourable case, this can result in forks, resolved later. This subprotocol\nis designed so that even with forks, participants have an idea of the block most likely to be\nfinalised, similar to Proof-of-Work protocols."),(0,r.kt)("p",null,"A subprotocol is run to ensure that the full data is indeed available, including and distributing\nit to various other relay-chain nodes."),(0,r.kt)("p",null,"Data submitted from a parachain might include indications that they are sending messages\nto another parachain, including metadata to facilitate this. This is now included on the relay\nchain head(s), so recipient parachains are aware of which new messages have been sent to\nthem. They now retrieve the message bodies from the sending parachains."),(0,r.kt)("p",null,"Validators submit their votes on the block and \u2000nalises it, resolving any forks to a single\nhead. These votes are added to the relay chain blocks."),(0,r.kt)("h2",{id:"parachains-in-action"},"Parachains in Action"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/AlnjFIfwOH0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);