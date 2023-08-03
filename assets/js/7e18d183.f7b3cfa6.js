"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={id:"unit-tests",title:"Writing unit tests for pallets",sidebar_label:"Writing unit tests for pallets",description:"Learn how to unit test your pallet."},s=void 0,o={unversionedId:"Substrate/section5/unit-tests",id:"Substrate/section5/unit-tests",title:"Writing unit tests for pallets",description:"Learn how to unit test your pallet.",source:"@site/docs/Substrate/section5/unit-tests.md",sourceDirName:"Substrate/section5",slug:"/Substrate/section5/unit-tests",permalink:"/docs/Substrate/section5/unit-tests",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section5/unit-tests.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1687791313,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{id:"unit-tests",title:"Writing unit tests for pallets",sidebar_label:"Writing unit tests for pallets",description:"Learn how to unit test your pallet."},sidebar:"substrate",previous:{title:"Creating dispatchable functions",permalink:"/docs/Substrate/section5/dispatchable"},next:{title:"Using other pallets",permalink:"/docs/Substrate/section5/coupling-pallets"}},l={},u=[{value:"Overview of <code>mock.rs</code>",id:"overview-of-mockrs",level:2},{value:"Test Externalities",id:"test-externalities",level:3},{value:"Writing a unit test for <code>register</code>",id:"writing-a-unit-test-for-register",level:2},{value:"Unit Test Cheatsheet",id:"unit-test-cheatsheet",level:3},{value:"Low balance test example",id:"low-balance-test-example",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With our dispatchable function written, it's time to ensure we understand how to unit test it.  Substrate and FRAME provide tools for unit tests without spinning up a local chain, including a mock environment and traditionally written unit tests."),(0,r.kt)("h2",{id:"overview-of-mockrs"},"Overview of ",(0,r.kt)("inlineCode",{parentName:"h2"},"mock.rs")),(0,r.kt)("p",null,"The purpose of ",(0,r.kt)("inlineCode",{parentName:"p"},"mock.rs")," is to mock a runtime configuration.  Upon observing it, you can notice that most types are regular, primitive types that are in place of the more abstract types inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime/lib.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl frame_system::Config for Test {\n    ...\n    type Index = u64;\n    type BlockNumber = u64;\n    type Hash = H256;\n    type Hashing = BlakeTwo256;\n    type AccountId = u64;\n    ...\n}\n")),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"u64"),", meaning a valid account address can be an unsigned integer, i.e.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let bob_account: u64 = 1;\n")),(0,r.kt)("p",null,"The simplification of types is for simplifying the testing process."),(0,r.kt)("h3",{id:"test-externalities"},"Test Externalities"),(0,r.kt)("p",null,"To configure and produce an environment, notice the function at the bottom of ",(0,r.kt)("inlineCode",{parentName:"p"},"mock.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Build genesis storage according to the mock runtime.\npub fn new_test_ext() -> sp_io::TestExternalities {\n    frame_system::GenesisConfig::default().build_storage::<Test>().unwrap().into()\n}\n")),(0,r.kt)("p",null,"This function defines a 'testbed' for your tests to simulate aspects like the storage layer."),(0,r.kt)("h2",{id:"writing-a-unit-test-for-register"},"Writing a unit test for ",(0,r.kt)("inlineCode",{parentName:"h2"},"register")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"pallets/connect/src/tests.rs"))),(0,r.kt)("p",null,"Unit tests are placed within ",(0,r.kt)("inlineCode",{parentName:"p"},"tests.rs"),".  They utilize the mock environment and configuration to test various scenarios with the pallet.  These are constructed like traditional Rust unit tests, with the caveat that these tests must be run within the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestExternalities")," instance defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"mock.rs"),"."),(0,r.kt)("p",null,"Using unit tests, we can test extrinsics, storage, errors, and events using our mock environment."),(0,r.kt)("h3",{id:"unit-test-cheatsheet"},"Unit Test Cheatsheet"),(0,r.kt)("p",null,"For testing, there are numerous macros and APIs one could call:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assert!"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_ok!"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_eq!")," work as per normal unit testing in Rust."),(0,r.kt)("li",{parentName:"ul"},"To check if an event has been emitted, use ",(0,r.kt)("inlineCode",{parentName:"li"},"System::assert_last_event()")," with the Event as the parameter.  You may need to use ",(0,r.kt)("inlineCode",{parentName:"li"},".into()"),"."),(0,r.kt)("li",{parentName:"ul"},"To check if an error has been emitted, use ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_noop!(call, Error::<Test>::SomeError);"),".  Notice the ",(0,r.kt)("inlineCode",{parentName:"li"},"::<Test>::")," turbofish syntax used to call the error with the Test config as the generic parameter."),(0,r.kt)("li",{parentName:"ul"},"If events aren't seemingly emitted within tests, be sure to set the testing environment to a height of at least ",(0,r.kt)("strong",{parentName:"li"},"one"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"System::set_block_number(1);"))),(0,r.kt)("h3",{id:"low-balance-test-example"},"Low balance test example"),(0,r.kt)("p",null,"While all the tests are in ",(0,r.kt)("inlineCode",{parentName:"p"},"tests.rs"),", here is an example of a unit test.  FRAME provides numerous helper APIs, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"System"),", to perform actions like setting the block height for the test environment.  See it in action below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\nfn balance_too_low() {\n    new_test_ext().execute_with(|| {\n        let name = b"polkadot".to_vec();\n        let bio = b"A heterogeneous, sharded network.".to_vec();\n        // Go past genesis block so events get deposited\n        System::set_block_number(1);\n        // Set the balance to 9 DOT - too low\n        assert_ok!(Balances::force_set_balance(RuntimeOrigin::root(), 1, 9));\n        // Dispatch a signed extrinsic.\n        assert_noop!(\n            Connect::register(RuntimeOrigin::signed(1), name.clone(), bio),\n            Error::<Test>::LowBalance\n        );\n    });\n}\n')))}d.isMDXComponent=!0}}]);