"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,d=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},72525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"why-rust",title:"Why Learn Rust?",sidebar_label:"Why Learn Rust?",description:"A brief overview of the pros of learning the Rust programming language."},s=void 0,i={unversionedId:"Rust/section1/why-rust",id:"Rust/section1/why-rust",title:"Why Learn Rust?",description:"A brief overview of the pros of learning the Rust programming language.",source:"@site/docs/Rust/section1/why-rust.md",sourceDirName:"Rust/section1",slug:"/Rust/section1/why-rust",permalink:"/docs/Rust/section1/why-rust",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section1/why-rust.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"why-rust",title:"Why Learn Rust?",sidebar_label:"Why Learn Rust?",description:"A brief overview of the pros of learning the Rust programming language."},sidebar:"rust",previous:{title:"What is Rust?",permalink:"/docs/Rust/section1/what-is-rust"},next:{title:"WASM TLDR",permalink:"/docs/Rust/section1/wasm-tldr"}},l={},u=[{value:"Rust is safe",id:"rust-is-safe",level:2},{value:"Safety",id:"safety",level:2},{value:"Rust Safety by Example",id:"rust-safety-by-example",level:3},{value:"Resources",id:"resources",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before starting your Rust development journey, it is essential to understand ",(0,a.kt)("em",{parentName:"p"},"why")," Rust was the\nlanguage chosen for this course as, if you are new to programming, the reasons why Rust was chosen\nmay be foreign."),(0,a.kt)("p",null,"Before learning more about Rust, see below a few general programming terms and what they mean."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"programming language")," is a way for humans to write instructions for a computer to follow.\nProgramming languages are exact and similar to spoken languages like English, Spanish, or French;\nand contain a set of rules for how a program should be written. This is called the ",(0,a.kt)("strong",{parentName:"p"},"syntax")," of\nthe program.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"compiler")," is a special program that translates the code we write, whether it be Rust or\nsomething else, into something a computer can understand (machine code). It acts as a translator\nbetween the human code and the machine.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are two phases of a program - ",(0,a.kt)("strong",{parentName:"p"},"compile-time")," and ",(0,a.kt)("strong",{parentName:"p"},"runtime"),". Compile time is when a\nhuman\u2019s code is converted to machine code. Runtime refers to the period when the program has been\nrunning after it has been compiled.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"garbage collector")," manages a program\u2019s memory, i.e. when and where memory should be allocated\nand released. The benefit of a garbage collector is that the programmer doesn't have to account\nfor how to allocate memory within code."))),(0,a.kt)("h2",{id:"rust-is-safe"},"Rust is safe"),(0,a.kt)("p",null,"The primary reason why Rust is used is because of ",(0,a.kt)("strong",{parentName:"p"},"safety")," reasons. In the context of programming,\nsafety means that the programmer can confidently write a program with the certainty that it will\nwork as intended. In more technical terms, a safe language ensures memory safety and a safe language\ncannot write a dangerous program (unless those safety features are bypassed)."),(0,a.kt)("p",null,"Safety is mainly derived from two factors that work in tandem:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rust's strict type system"),(0,a.kt)("li",{parentName:"ol"},"Rust's robust and pedantic compiler that checks every single line of code to ensure it will not\nbe invalid now, ",(0,a.kt)("em",{parentName:"li"},"or")," in the future.")),(0,a.kt)("p",null,"For example, if the Rust compiler detects an issue with a variable within your program, it will\nnotify the programmer that this would become an issue in runtime and the program will not be allowed\nto compile."),(0,a.kt)("p",null,"Safe programming is also a matter of security. Many exploits and hacks occur because the program's\nmemory can be accessed and modified in an unsafe or unauthorized way."),(0,a.kt)("p",null,"These factors are crucial when building applications and programs that make guarantees in impactful\nindustries. The Rust compiler's strictness makes it hard to write ",(0,a.kt)("em",{parentName:"p"},"bad")," or ",(0,a.kt)("em",{parentName:"p"},"dangerous")," code."),(0,a.kt)("h2",{id:"safety"},"Safety"),(0,a.kt)("p",null,"Because Rust is so strict at compile-time, there is no need for a ",(0,a.kt)("strong",{parentName:"p"},"garbage collector")," or any other\nmechanism that operates with the program\u2019s runtime. Effectively, this means that Rust\u2019s powerful,\nrobust typing system comes at zero cost. These abstractions do not sacrifice the readability, ease\nof use, or speed of Rust."),(0,a.kt)("p",null,"This allows for a level of control comparable to something lower-level, such as C, but is much more\nbeginner friendly in terms of writing useful programs. It also allows for flexibility for\napplications that require granular control and resource management, such as embedded systems,\noperating systems, and distributed ledgers."),(0,a.kt)("p",null,"Rust lowers the barriers when dealing with more complex concepts such as concurrency, low-level\nmemory management, and data representation."),(0,a.kt)("h3",{id:"rust-safety-by-example"},"Rust Safety by Example"),(0,a.kt)("p",null,"Take this example - if we try to compile this Rust code (note that the lines of code starting with\n",(0,a.kt)("inlineCode",{parentName:"p"},"//")," are comments that are not executed):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    // Here, the number five variable is, well, the number 5. It is a number that can be added and subtracted.\n    let the_number_five: u32 = 5;\n    // Here is another variable - but instead of being a number it's a character, as denoted by the `char` type and the single quotes surrounding the 5 ('5')\n    let imposter_number_five: char = '5';\n    // Let\u2019s say we want to add them - this shouldn't work, as this is the same as trying to add a number to a word.\n    let the_number_ten: u32 = the_number_five + imposter_number_five;\n    // FAILURE!\n    println!(\"{the_number_ten}\");\n")),(0,a.kt)("p",null,"The Rust compiler, before we even run the program, gives an error as to ",(0,a.kt)("em",{parentName:"p"},"why")," this is impossible to\ncompile. See below the level of detail the compiler gives the programmer, including a reference for\nwhy this may not compile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  Compiling playground v0.0.1 (/playground)\nerror[E0277]: cannot add `char` to `u32`\n --\x3e src/main.rs:5:38\n  |\n5 | let the_number_ten = the_number_five + imposter_number_five;\n  |                                      ^ no implementation for `u32 + char`\n  |\n  = help: the trait `Add<char>` is not implemented for `u32`\n  = help: the following other types implement trait `Add<Rhs>`:\n            <&'a u32 as Add<u32>>\n            <&u32 as Add<&u32>>\n            <u32 as Add<&u32>>\n            <u32 as Add>\n\nFor more information about this error, try `rustc --explain E0277`.\n")),(0,a.kt)("p",null,"In this specific case we cannot add a type number with a character."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Why Rust? by Dimitiy Kashitsyn at Parity Technologies")," - ",(0,a.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/why-rust"},"https://www.parity.io/blog/why-rust"))))}c.isMDXComponent=!0}}]);