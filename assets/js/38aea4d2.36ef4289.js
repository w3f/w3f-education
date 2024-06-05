"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"developing-parachain",title:"Developing your parachain with FRAME",sidebar_label:"Developing your parachain with FRAME",description:"Configure and customize your parachain before registering it on the relay chain."},o=void 0,s={unversionedId:"Parachain/beginner/section3/developing-parachain",id:"Parachain/beginner/section3/developing-parachain",title:"Developing your parachain with FRAME",description:"Configure and customize your parachain before registering it on the relay chain.",source:"@site/docs/Parachain/beginner/section3/developing-parachain.md",sourceDirName:"Parachain/beginner/section3",slug:"/Parachain/beginner/section3/developing-parachain",permalink:"/docs/Parachain/beginner/section3/developing-parachain",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Parachain/beginner/section3/developing-parachain.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1698774696,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{id:"developing-parachain",title:"Developing your parachain with FRAME",sidebar_label:"Developing your parachain with FRAME",description:"Configure and customize your parachain before registering it on the relay chain."},sidebar:"parachain",previous:{title:"Using Sudo to register your parachain",permalink:"/docs/Parachain/beginner/section3/sudo-register"},next:{title:"Moving Forward",permalink:"/docs/Parachain/beginner/section4/"}},l={},p=[{value:"How to approach customizing your parachain",id:"how-to-approach-customizing-your-parachain",level:2},{value:"Adding pallets - <code>pallet_assets</code> example",id:"adding-pallets---pallet_assets-example",level:2},{value:"Upgrading your parachain with a new runtime",id:"upgrading-your-parachain-with-a-new-runtime",level:4},{value:"Register a second, custom parachain",id:"register-a-second-custom-parachain",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Congratulations, you have successfully registered a parachain on a local relay chain!"),(0,r.kt)("p",null,"Now, you have a few options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modify your existing parachain by either developing or adding ",(0,r.kt)("strong",{parentName:"li"},"pallets"),", and upgrading its\nruntime."),(0,r.kt)("li",{parentName:"ol"},"Locally deploy more parachains with domain-specific functionality."),(0,r.kt)("li",{parentName:"ol"},"Change the relay chain's core configuration and functionality.")),(0,r.kt)("p",null,"Both options will require changes to the code base(s), and for the binaries to be re-compiled. In\nthe case of the parachain, the parachain must be upgraded to utilize the new runtime."),(0,r.kt)("h2",{id:"how-to-approach-customizing-your-parachain"},"How to approach customizing your parachain"),(0,r.kt)("p",null,"As the parachain template provided is mostly a Substrate node that uses FRAME, one can either add or\ndevelop new pallets for their runtime. Pallets are how one can extend the base functionality of the\ntemplate used here. To view a full list of pallets, view\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-sdk/substrate/frame")),"."),(0,r.kt)("p",null,"For an example of developing a pallet from scratch, check out our\n",(0,r.kt)("a",{parentName:"p",href:"/docs/introsubstrate"},"Intro to Substrate course"),"."),(0,r.kt)("h2",{id:"adding-pallets---pallet_assets-example"},"Adding pallets - ",(0,r.kt)("inlineCode",{parentName:"h2"},"pallet_assets")," example"),(0,r.kt)("p",null,"The parachain we just registered didn't have very many features - in fact, beyond managing user\nbalances, it doesn't offer much in the way of functionality. Let's run through how you may add an\nexisting FRAME pallet - ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet_assets"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pallet_assets")," is a pallet that specializes in allowing users to create ",(0,r.kt)("strong",{parentName:"p"},"fungible")," assets. In\nother words, using pallet_assets, you could create different currencies on your chain."),(0,r.kt)("p",null,"A pallet is simply a Rust crate, meaning it has to be added as a dependency of our runtime."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add it to ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime/lib.rs"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\npallet-assets = { git = "https://github.com/paritytech/substrate", default-features = false, branch = "polkadot-v1.0.0" }\n\n# Make sure to add it as part of std:\nstd = [\n# ...\n"pallet-assets/std",\n# ...\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add this configuration to your ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime/lib.rs")," (taken from\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/extended-parachain-template"},"extended-parachain-template"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'parameter_types! {\n    pub const AssetDeposit: Balance = 10 * UNIT;\n    pub const AssetAccountDeposit: Balance = deposit(1, 16);\n    pub const ApprovalDeposit: Balance = EXISTENTIAL_DEPOSIT;\n    pub const StringLimit: u32 = 50;\n    pub const MetadataDepositBase: Balance = deposit(1, 68);\n    pub const MetadataDepositPerByte: Balance = deposit(0, 1);\n}\n\nimpl pallet_assets::Config for Runtime {\n    type RuntimeEvent = RuntimeEvent;\n    type Balance = Balance;\n    type RemoveItemsLimit = ConstU32<1000>;\n    type AssetId = u32;\n    type AssetIdParameter = Compact<u32>;\n    type Currency = Balances;\n    type CreateOrigin = AsEnsureOriginWithArg<EnsureSigned<AccountId>>;\n    type ForceOrigin = EnsureRoot<AccountId>;\n    type AssetDeposit = AssetDeposit;\n    type AssetAccountDeposit = AssetAccountDeposit;\n    type MetadataDepositBase = MetadataDepositBase;\n    type MetadataDepositPerByte = MetadataDepositPerByte;\n    type ApprovalDeposit = ApprovalDeposit;\n    type StringLimit = StringLimit;\n    type Freezer = ();\n    type Extra = ();\n    type CallbackHandle = ();\n    type WeightInfo = pallet_assets::weights::SubstrateWeight<Runtime>;\n    #[cfg(feature = "runtime-benchmarks")]\n    type BenchmarkHelper = ();\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"At the top of your ",(0,r.kt)("inlineCode",{parentName:"li"},"lib.rs"),", ensure you have the proper imports:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use frame_system::EnsureSigned;\nuse codec::Compact;\nuse frame_support::traits::AsEnsureOriginWithArg;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add this convenience function for easily calculating deposits at the top as well, below\n",(0,r.kt)("inlineCode",{parentName:"li"},"EXISTENTIAL_DEPOSIT"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub const fn deposit(items: u32, bytes: u32) -> Balance {\n    (items as Balance * 20 * UNIT + (bytes as Balance) * 100 * MICROUNIT) / 100\n}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Finally, add it to ",(0,r.kt)("inlineCode",{parentName:"li"},"construct_runtime!")," with the other pallets. It will look like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"construct_runtime!(\n    pub enum Runtime\n    {\n                // ...\n        Assets: pallet_assets = 51, // some arbitrary id for the pallet, should be higher than the last pallet.\n                // ...\n    }\n);\n")),(0,r.kt)("p",null,"Once complete, you should be able to build (",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build --release"),") and re-launch your collator.\nKeep in mind you will also have to upgrade your parachain."),(0,r.kt)("h4",{id:"upgrading-your-parachain-with-a-new-runtime"},"Upgrading your parachain with a new runtime"),(0,r.kt)("p",null,"If your runtime has changed, you need to upgrade your parachain. As the relay chain holds the PVF of\nyour parachain, it also needs to be part of the upgrade process."),(0,r.kt)("p",null,"Upgrading your parachain usually involves two steps, both done using the ",(0,r.kt)("inlineCode",{parentName:"p"},"parachainSystem")," pallet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Authorize the upgrade by providing its hash via the ",(0,r.kt)("inlineCode",{parentName:"strong"},"authorize_upgrade")," extrinsic:"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4694).Z,width:"1920",height:"790"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Enact the upgrade via the ",(0,r.kt)("inlineCode",{parentName:"strong"},"enact_authorized_upgrade")," extrinsic:"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(691).Z,width:"1916",height:"780"})),(0,r.kt)("p",null,"These first notify the relay chain of the new PVF, then actually enact that upgrade with our new\nruntime."),(0,r.kt)("p",null,"In PolkadotJS, both extrinsics can accept the runtime, where the first one hashes it, and the second\none accepts the full runtime code, where it applies the upgrade."),(0,r.kt)("h2",{id:"register-a-second-custom-parachain"},"Register a second, custom parachain"),(0,r.kt)("p",null,"Another, more advanced option would be to provision another parachain. It would follow the same\nprocess as described, only you could challenge yourself by adding an XCM config to enable\ncross-consensus messaging within your network. Another option would be to configure it as a system\nparachain, which is a parachain that fulfills a specific role and uses the relay chain as a form of\neconomic security."))}d.isMDXComponent=!0},4694:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/authorize_upgrade-c52e095cade4dd2937b4bf683f2741ef.png"},691:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enact-82a36cc65e842e1111a36cd91eea7e5a.png"}}]);