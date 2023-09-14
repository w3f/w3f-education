"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={id:"runtime-panics",title:"Runtime Panics & FRAME Best Practices",sidebar_label:"Runtime Panics & FRAME Best Practices",description:"Learn how to solidify safe programming practices using Rust error handling to avoid panicking in the runtime."},o=void 0,s={unversionedId:"Substrate/section7/runtime-panics",id:"Substrate/section7/runtime-panics",title:"Runtime Panics & FRAME Best Practices",description:"Learn how to solidify safe programming practices using Rust error handling to avoid panicking in the runtime.",source:"@site/docs/Substrate/section7/runtime-panics.md",sourceDirName:"Substrate/section7",slug:"/Substrate/section7/runtime-panics",permalink:"/docs/Substrate/section7/runtime-panics",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section7/runtime-panics.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"runtime-panics",title:"Runtime Panics & FRAME Best Practices",sidebar_label:"Runtime Panics & FRAME Best Practices",description:"Learn how to solidify safe programming practices using Rust error handling to avoid panicking in the runtime."},sidebar:"substrate",previous:{title:"Thinking in terms of blockchain development",permalink:"/docs/Substrate/section7/blockchain-dev"},next:{title:"How to approach testing in FRAME",permalink:"/docs/Substrate/section7/how-to-test-frame"}},c={},l=[{value:"Avoiding runtime panics - Defensive Programming",id:"avoiding-runtime-panics---defensive-programming",level:2},{value:"Using safe arithmetic",id:"using-safe-arithmetic",level:3},{value:"Accounting for all errors",id:"accounting-for-all-errors",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'If there is one "rule of thumb" in developing in a runtime environment, is to ',(0,r.kt)("strong",{parentName:"p"},"avoid runtime\npanics")," at all costs. With the premise that a blockchain should never cease to operate, abusing the\nnotion of ",(0,r.kt)("inlineCode",{parentName:"p"},"panic!"),"(king) in Rust should never be used."),(0,r.kt)("h2",{id:"avoiding-runtime-panics---defensive-programming"},"Avoiding runtime panics - Defensive Programming"),(0,r.kt)("p",null,"Avoiding runtime panics is done by implementing some concepts of ",(0,r.kt)("strong",{parentName:"p"},"defensive programming"),". Here is\na checklist of some common things to avoid and do in order to avoid panicking:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Account for any and all edge cases in terms of what ",(0,r.kt)("em",{parentName:"li"},"could")," panic."),(0,r.kt)("li",{parentName:"ol"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"li"},"panic!()"),"."),(0,r.kt)("li",{parentName:"ol"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"li"},"unwrap()"),"."),(0,r.kt)("li",{parentName:"ol"},"Handle all possible ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Err")," values with proper error handling."),(0,r.kt)("li",{parentName:"ol"},"When indexing collections, use ",(0,r.kt)("inlineCode",{parentName:"li"},"Vec")," methods like ",(0,r.kt)("inlineCode",{parentName:"li"},"get()")," and handle appropriately."),(0,r.kt)("li",{parentName:"ol"},"Mathematically impossible operations, such as dividing by zero, or overflow scenarios.")),(0,r.kt)("p",null,"In some cases, using ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap_or_default()")," is appropriate, but only if a ",(0,r.kt)("inlineCode",{parentName:"p"},"Default")," implementation\nexists for that particular type. Generally, you do not want to ",(0,r.kt)("em",{parentName:"p"},"throw")," errors, rather you want to\nlog and return them."),(0,r.kt)("admonition",{title:"Logging has a cost in the runtime.",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that logging has a computational cost in the runtime environment.")),(0,r.kt)("h3",{id:"using-safe-arithmetic"},"Using safe arithmetic"),(0,r.kt)("p",null,"In the previous modules, we used a function - ",(0,r.kt)("inlineCode",{parentName:"p"},"checked_add()"),". This is part of defensive\nprogramming, as we even negate the chance of an overflow of an integer. Substrate provides a number\nof ways to handle not only adding or subtracting numbers, but also floating point numbers (and\nsubsequently, percentages)."),(0,r.kt)("h3",{id:"accounting-for-all-errors"},"Accounting for all errors"),(0,r.kt)("p",null,"As mentioned, every single error should be accounted for - even if logically, that error cannot be\nreached. This is part of ensuring that any functions that can panic ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap()"),", have even a chance\nto panic. Whether it's for casting to a different type, user-induced errors, or the like - all\nbranched paths should be covered."))}m.isMDXComponent=!0}}]);