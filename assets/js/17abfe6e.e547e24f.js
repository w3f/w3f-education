"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2156],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={id:"account",title:"A for Account",sidebar_position:1},s=void 0,l={unversionedId:"AtoZ/account",id:"AtoZ/account",isDocsHomePage:!1,title:"A for Account",description:"A for Account",source:"@site/docs/AtoZ/account.md",sourceDirName:"AtoZ",slug:"/AtoZ/account",permalink:"/w3f-education/docs/AtoZ/account",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/account.md",version:"current",lastUpdatedBy:"emresurmeli",lastUpdatedAt:1641951667,formattedLastUpdatedAt:"1/12/2022",sidebarPosition:1,frontMatter:{id:"account",title:"A for Account",sidebar_position:1},sidebar:"atoz",previous:{title:"W3F A - Z ELI5 series",permalink:"/w3f-education/docs/introatoz"},next:{title:"B for Bridge",permalink:"/w3f-education/docs/AtoZ/bridge"}},u=[{value:"What is an account?",id:"what-is-an-account",children:[]},{value:"What a Polkadot account public key looks like",id:"what-a-polkadot-account-public-key-looks-like",children:[]},{value:"Creating an account",id:"creating-an-account",children:[]},{value:"What a mnemonic phrase looks like:",id:"what-a-mnemonic-phrase-looks-like",children:[]},{value:"Portability",id:"portability",children:[]}],d={toc:u};function p(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A for Account",src:n(3744).Z})),(0,r.kt)("h2",{id:"what-is-an-account"},"What is an account?"),(0,r.kt)("p",null,"Accounts are also sometimes referred to as wallets or addresses. On blockchains we need a place to hold our assets, and this is what accounts are used for. A user can have many accounts, and on Polkadot and Kusama, unlike most other public blockchains we can even give accounts on-chain, authenticated, and human readable identities if we would like to. "),(0,r.kt)("h2",{id:"what-a-polkadot-account-public-key-looks-like"},"What a Polkadot account public key looks like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"14dQ7nC8YabzseZ5iqvG4EQnrkTCsUCwMbCP6nQWeKgjF6Ye\n")),(0,r.kt)("p",null,"Accounts on Polkadot and Kusama are SS58 encoded key-network pairs. By representing an address as a combination of keys and network IDs, it makes sending assets to an address that is unusable much less likely (Ethereum only uses keys; imagine sending ETH from Ethereum mainnet to an account that only exists on Binance Smart Chain, which is another EVM-based chain, and being confused as to why you can\u2019t see the ETH on Binance Smart Chain). SS58 is a slight modification of the Bitcoin Base-58-Check encoding. By using different address prefixes, we can easily tell if an account is on the same chain as another. For example, Polkadot addresses start with a 1, Kusama is always with a capital letter, generic substrate addresses will start with a 5. "),(0,r.kt)("h2",{id:"creating-an-account"},"Creating an account"),(0,r.kt)("p",null,"Just like any other blockchain address, Polkadot and Kusama accounts are controlled with public private key pairs. This is a cryptographic way of creating a public facing id that is intrinsically linked to a private id, which should be kept secret. The address generation starts with a mnemonic phrase which is then converted into a public-private key pair. Because different wallets use different ways to derive the public and private keys from the mnemonic phrase, there can be issues with deriving the same public and private key pairs from the same mnemonic on different wallets."),(0,r.kt)("h2",{id:"what-a-mnemonic-phrase-looks-like"},"What a mnemonic phrase looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"way pumpkin card castle crystal domain mystery chalk dog twin chronic image\n")),(0,r.kt)("h2",{id:"portability"},"Portability"),(0,r.kt)("p",null," Accounts can also be utilized across Substrate chains. Since addresses are the result of encoding a public key and a network ID, we can create an address for another chain by decoding the address, changing the network ID, and encoding the key with the new network ID, resulting in a new address that is controlled by the same underlying key. This allows you to use one mnemonic phrase across multiple Substrate chains."))}p.isMDXComponent=!0},3744:function(e,t,n){t.Z=n.p+"assets/images/A-a014f6c3611f8cf182b05bc800de2feb.png"}}]);