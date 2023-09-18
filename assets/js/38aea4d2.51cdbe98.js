"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1884],{3905:(e,a,n)=>{n.d(a,{Zo:()=>l,kt:()=>f});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),s=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},l=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=t,f=u["".concat(p,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(f,i(i({ref:a},l),{},{components:n})):r.createElement(f,i({ref:a},l))}));function f(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c[u]="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19747:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),t=(n(67294),n(3905));const o={id:"developing-parachain",title:"Developing your parachain with FRAME",sidebar_label:"Developing your parachain with FRAME",description:"Configure and customize your parachain before registering it on the relay chain."},i=void 0,c={unversionedId:"Parachain/beginner/section3/developing-parachain",id:"Parachain/beginner/section3/developing-parachain",title:"Developing your parachain with FRAME",description:"Configure and customize your parachain before registering it on the relay chain.",source:"@site/docs/Parachain/beginner/section3/developing-parachain.md",sourceDirName:"Parachain/beginner/section3",slug:"/Parachain/beginner/section3/developing-parachain",permalink:"/docs/Parachain/beginner/section3/developing-parachain",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Parachain/beginner/section3/developing-parachain.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1694625501,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"developing-parachain",title:"Developing your parachain with FRAME",sidebar_label:"Developing your parachain with FRAME",description:"Configure and customize your parachain before registering it on the relay chain."},sidebar:"parachain",previous:{title:"Using Sudo to register your parachain",permalink:"/docs/Parachain/beginner/section3/sudo-register"},next:{title:"Moving Forward",permalink:"/docs/Parachain/beginner/section4/"}},p={},s=[{value:"How to approach customizing your parachain",id:"how-to-approach-customizing-your-parachain",level:2},{value:"Register a second, custom parachain",id:"register-a-second-custom-parachain",level:2}],l={toc:s},u="wrapper";function h(e){let{components:a,...n}=e;return(0,t.kt)(u,(0,r.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Congratulations, you have successfully registered a parachain to your local relay chain! "),(0,t.kt)("p",null,"Now, you have a couple of options: "),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Modify your existing parachain and upgrade its runtime."),(0,t.kt)("li",{parentName:"ol"},"Add more parachains with domain-specific functionality."),(0,t.kt)("li",{parentName:"ol"},"Change the relay chain's core configuration and functionality.")),(0,t.kt)("p",null,"Both options will require changes to the code base(s), and for the binaries to be re-compiled.  In the case of the parachain, the parachain must be upgraded to utilize the new runtime.  "),(0,t.kt)("h2",{id:"how-to-approach-customizing-your-parachain"},"How to approach customizing your parachain"),(0,t.kt)("p",null,"As the parachain template provided is mostly a Substrate node that uses FRAME, one can add or develop new pallets for their runtime.  For an example of developing a pallet from scratch, check out our ",(0,t.kt)("a",{parentName:"p",href:"/docs/introsubstrate"},"Intro to Substrate course"),"."),(0,t.kt)("h2",{id:"register-a-second-custom-parachain"},"Register a second, custom parachain"),(0,t.kt)("p",null,"Another, more advanced option would be to provision another parachain.  It would follow the same process as described, only you could challenge yourself by adding an XCM config to enable cross-consensus messaging within your network.  Another option would be to configure it as a system parachain, which is a parachain that fulfills a specific role and uses the relay chain as a form of economic security."))}h.isMDXComponent=!0}}]);