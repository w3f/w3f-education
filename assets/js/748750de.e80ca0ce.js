"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"ownership",title:"Rust's Ownership Model",sidebar_label:"The Ownership Model",description:"Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time."},a=void 0,s={unversionedId:"Rust/section3/ownership",id:"Rust/section3/ownership",title:"Rust's Ownership Model",description:"Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time.",source:"@site/docs/Rust/section3/ownership.md",sourceDirName:"Rust/section3",slug:"/Rust/section3/ownership",permalink:"/docs/Rust/section3/ownership",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section3/ownership.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694687959,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{id:"ownership",title:"Rust's Ownership Model",sidebar_label:"The Ownership Model",description:"Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time."},sidebar:"rust",previous:{title:"Intro to Intermediate Rust - Ownership, Borrowing, & Slices",permalink:"/docs/Rust/section3/"},next:{title:"Borrowing & References",permalink:"/docs/Rust/section3/borrowing"}},l={},p=[{value:"Ownership Rules",id:"ownership-rules",level:2},{value:"Variable Scope",id:"variable-scope",level:2},{value:"Try it out!",id:"try-it-out",level:2},{value:"What&#39;s happening here?",id:"whats-happening-here",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As mentioned in the intro, a crucial part of Rust's safety is its memory management. ",(0,o.kt)("strong",{parentName:"p"},"Ownership"),"\nin Rust is the concept that defines a set of rules for how to handle memory in a Rust program. It\ndoes not affect performance - as ownership checks happen at compile time."),(0,o.kt)("p",null,"While these rules may seem prohibitive, they sometimes ensure entirely memory-safe code."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8yH5vLQm7Po?si=jUH1ktS4XbmrNq3K",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you aren't familiar with the stack and heap, make sure you\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap"},"read this first"),",\nas it will provide context for why ownership is essential when dealing with collections.")),(0,o.kt)("h2",{id:"ownership-rules"},"Ownership Rules"),(0,o.kt)("p",null,"As stated in the Rust book, ownership has three primary concepts/rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every single value (statement) has an owner"),(0,o.kt)("li",{parentName:"ul"},"There can only be one owner at a time"),(0,o.kt)("li",{parentName:"ul"},"Ownership is heavily dependent on the scope. When a statement goes out of scope, the ownership is\ndropped.")),(0,o.kt)("p",null,"These rules ensure that the ownership of a particular variable in memory is managed correctly and\nappropriately. Simply put - the scope defines the ownership of a particular variable, as you will\nsee."),(0,o.kt)("h2",{id:"variable-scope"},"Variable Scope"),(0,o.kt)("p",null,"Let's run through an example to demonstrate the importance of scope and how it relates to ownership:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// You can define a new scope within main using this syntax.\n// Everything within this scope is valid until the closing curly bracket.\n// For example, you cannot use `x` outside of this scope - as the variable is dropped from memory\n\n{\n    // Declare an integer x\n    let x = 10;\n    // We can do whatever we want in the context of this scope,\n    // but after it ends, we cannot use x.\n}\n// We cannot use `x` here!\n")),(0,o.kt)("p",null,"In terms of ownership, the ",(0,o.kt)("em",{parentName:"p"},"variable ",(0,o.kt)("inlineCode",{parentName:"em"},"x"))," is owned by this scope, defined by curly brackets, until\nthe end of the scope. From here, the Rust compiler handles the de-allocation of memory in a safe\nmanner."),(0,o.kt)("p",null,"Ownership gets more complex when dealing with values not defined at compile-time. For more\ninformation on the complexities of ownership, read the\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"},"Rust book's explanation"),"."),(0,o.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,o.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A+++let+y+%3D+11%3B%0A++++%2F%2F+You+can+define+a+new+scope+within+main+using+this+syntax.%0A++++%2F%2F+Everything+within+this+scope+is+valid+until+the+closing+curly+bracket.%0A++++%2F%2F+For+example%2C+you+cannot+use+%60x%60+outside+of+this+scope+-+as+the+variable+is+dropped+from+memory%0A++++%7B%0A++++++++%2F%2F+Declare+an+integer+x%0A++++++++let+x+%3D+10%3B%0A++++++++%2F%2F+We+can+do+whatever+we+want+in+the+context+of+this+scope%2C%0A++++++++%2F%2F+but+after+it+ends%2C+we+cannot+use+x.%0A++++++++println%21%28%22x%3A+%7Bx%7D%2C+y%3A+%7By%7D%22%29%3B%0A++++%7D%0A++++%2F%2F+We+cannot+use+%60x%60+here%21+It+was+owned+by+the+inner+scope+defined+previously.%0A++++%2F%2F+println%21%28%22%7Bx%7D%22%29%3B+-+this+wouldn%27t+work.%0A++++%2F%2F+Printing+%60y%60+is+perfectly+fine%2C+as+it+it%27s+ownership+and+scope+is+above+that%0A++++%2F%2F+of+x%27s.%0A++++println%21%28%22only+y%3A+%7By%7D%22%29%3B%0A%7D%0A"}),(0,o.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,o.kt)("p",null,"We define two variables here: ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),". Both are fixed size, and known at compile time. The\ndifference between the two is that ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," is owned by the scope of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function, while ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is\nowned by another inner scope. The code illustrates that ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is dropped after the inner scope ends,\nwhile ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," can still be used until the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function's scope."))}u.isMDXComponent=!0}}]);