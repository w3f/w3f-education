"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={id:"generics",title:"Generic Types in Rust",sidebar_label:"Generic Types",description:"Learn what generic types are and how to use them in Rust."},s=void 0,o={unversionedId:"Rust/section6/generics",id:"Rust/section6/generics",title:"Generic Types in Rust",description:"Learn what generic types are and how to use them in Rust.",source:"@site/docs/Rust/section6/generics.md",sourceDirName:"Rust/section6",slug:"/Rust/section6/generics",permalink:"/docs/Rust/section6/generics",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section6/generics.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694690765,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{id:"generics",title:"Generic Types in Rust",sidebar_label:"Generic Types",description:"Learn what generic types are and how to use them in Rust."},sidebar:"rust",previous:{title:"Traits",permalink:"/docs/Rust/section6/traits"},next:{title:"Associated Types vs Generic Types",permalink:"/docs/Rust/section6/associated-generics"}},l={},p=[{value:"Scenario: Why Generic Code is Useful",id:"scenario-why-generic-code-is-useful",level:2},{value:"Defining Generics: Functions",id:"defining-generics-functions",level:2},{value:"Adding Trait Bounds to Generics",id:"adding-trait-bounds-to-generics",level:3},{value:"Defining Generics: Structs &amp; Methods",id:"defining-generics-structs--methods",level:2},{value:"Try it yourself!",id:"try-it-yourself",level:2},{value:"What is happening here?",id:"what-is-happening-here",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Generics are a powerful concept allowing types to be "expected" or known without knowing what they\nare. Previously, you\'ve encountered generics when dealing with the ',(0,a.kt)("inlineCode",{parentName:"p"},"Option<T>")," enum, where ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," is a\ngeneric that can accept any type. They are ",(0,a.kt)("strong",{parentName:"p"},"placeholder")," types that optionally can use traits to\ndefine a set of expectations while still being abstract and generic."),(0,a.kt)("p",null,"Generics can be used in traits, methods, functions, enums, and structs."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UuTMLSbHL78?si=_JsmCW98RbBoHOW0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"scenario-why-generic-code-is-useful"},"Scenario: Why Generic Code is Useful"),(0,a.kt)("p",null,"Let's assume that I wish to have a simple function that is meant to square two numbers, as we've\npreviously done:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn square(x: i32) -> i32 {\n    x * x\n}\n")),(0,a.kt)("p",null,"The above code is acceptable - however, there is a problem. What if other number types must be\ncompared? After all, this same function ",(0,a.kt)("em",{parentName:"p"},"could")," apply to ",(0,a.kt)("inlineCode",{parentName:"p"},"f32"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),", and so on."),(0,a.kt)("p",null,"Generics remove this redundancy by defining an abstract type, usually referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", which\nallows this function to be compatible with many types."),(0,a.kt)("h2",{id:"defining-generics-functions"},"Defining Generics: Functions"),(0,a.kt)("p",null,"To convert the above function into a ",(0,a.kt)("strong",{parentName:"p"},"generic")," one, the following syntax must be applied:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn square<T>(x: T) -> T {\n    x * x\n}\n")),(0,a.kt)("p",null,"The most glaring difference is the introduction of ",(0,a.kt)("inlineCode",{parentName:"p"},"<T>"),". This syntax precedes the parameters list,\ndefining what the generic ",(0,a.kt)("em",{parentName:"p"},"is called")," and ",(0,a.kt)("em",{parentName:"p"},"what properties it should entail regarding traits (more\non that next!).")),(0,a.kt)("p",null,"The type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," in this context quite literally means ",(0,a.kt)("em",{parentName:"p"},"any type"),", meaning the function can now be\ncalled as follows (note the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," to define the type):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rusts"},"let squared = square::<i32>(10); // 5\n")),(0,a.kt)("p",null,"When we call this function, we replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"<T>")," with the type we wish to represent - in this case,\n",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),". Taking a closer look at the function's signature, it essentially converts from ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),"\nacross the board:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn square<i32>(square: i32) -> i32;\n")),(0,a.kt)("p",null,"Now, this is possible for any number! With one caveat - not all types can utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," operator.\nFor example, if you used a String, this function would panic, as it is impossible to compare Strings\ndirectly this way. The above code shouldn't work together, as the compiler is unsure what to expect\nsince it can expect ",(0,a.kt)("em",{parentName:"p"},"any")," type."),(0,a.kt)("h3",{id:"adding-trait-bounds-to-generics"},"Adding Trait Bounds to Generics"),(0,a.kt)("p",null,"Traits will be covered more in-depth in the next section. However, know that they can define certain\nbehavior for generics to ensure the type is ",(0,a.kt)("strong",{parentName:"p"},"compatible")," with the function. This particular trait,\n",(0,a.kt)("inlineCode",{parentName:"p"},"Mul"),", is a trait that ensures that a type can be multiplied. By using the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"T: Mul"),", we limit\nall possible types ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," could be to anything that implements ",(0,a.kt)("inlineCode",{parentName:"p"},"Mul"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Output")," is an ",(0,a.kt)("strong",{parentName:"p"},"associated type"),", which will also be covered later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn square<T: Mul<Output = T> + Copy>(x: T) -> T {\n    x * x\n}\n")),(0,a.kt)("p",null,"This translates into our code being compatible with a whole host of various types that already\nimplement this trait, ",(0,a.kt)("inlineCode",{parentName:"p"},"Mul"),", by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// 32-Bit Signed Integer, note how you can also use ::<type> to define what type to expect.\nlet squared_i32 = square::<i32>(10);\n// 32-Bit Unsigned Integer\nlet squared_u32: u32 = square(10);\n// Floating Point Number\nlet squared_f32: f32 = square(10.0);\n")),(0,a.kt)("h2",{id:"defining-generics-structs--methods"},"Defining Generics: Structs & Methods"),(0,a.kt)("p",null,"As with functions, generics may be applied to structs, methods, and enums."),(0,a.kt)("p",null,"For structs, generics may be used to define abstract field types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct Point<T> {\n    x: T,\n    y: T\n}\n")),(0,a.kt)("p",null,"Multiple generics may be used, meaning the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," must differ from the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),". Generic\nlabels usually follow this convention, but in theory, can be named anything:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct Point<T, U> {\n    x: T,\n    y: U\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Point")," can now be created with different types for ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," fields."),(0,a.kt)("p",null,"If we were to define some methods for ",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),", generics may also be used to further provide type\ndynamism:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl<T, U> Point<T, U> {\n    fn x(&self) -> &T {\n        &self.x\n    }\n\n    fn y(&self) -> &U {\n        &self.y\n    }\n}\n")),(0,a.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,a.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=use+std%3A%3Aops%3A%3AMul%3B%0A%0Afn+square%3CT%3A+Mul%3COutput+%3D+T%3E+%2B+Copy%3E%28x%3A+T%29+-%3E+T+%7B%0A++++x+*+x%0A%7D%0A%0A%23%5Bderive%28Debug%29%5D%0Astruct+Point%3CT%2C+U%3E+%7B%0A++++x%3A+T%2C%0A++++y%3A+U%2C%0A%7D%0A%0Aimpl%3CT%2C+U%3E+Point%3CT%2C+U%3E+%7B%0A++++fn+x%28%26self%29+-%3E+%26T+%7B%0A++++++++%26self.x%0A++++%7D%0A%0A++++fn+y%28%26self%29+-%3E+%26U+%7B%0A++++++++%26self.y%0A++++%7D%0A%7D%0A%0Afn+main%28%29+%7B%0A++++%2F%2F+32+Bit+Signed+Integer%0A++++let+squared_i32+%3D+square%3A%3A%3Ci32%3E%2810%29%3B%0A++++%2F%2F+32+Bit+Unsigned+Integer%0A++++let+squared_u32%3A+u32+%3D+square%2810%29%3B%0A++++%2F%2F+Floating+Point+Number%0A++++let+squared_f32%3A+f32+%3D+square%2810.0%29%3B%0A%0A++++let+point+%3D+Point+%7B+x%3A+10%2C+y%3A+%2210%22+%7D%3B+%2F%2F+T+%3D+i32%2C+U+%3D+%26str%0A%0A++++println%21%28%22Point%3A+%7B%3A%3F%7D%22%2C+point%29%3B%0A++++println%21%28%22This+is+a+string+literal%3A+%7B%7D%22%2C+point.y%28%29%29%3B%0A++++println%21%28%22This+is+an+i32%3A+%7B%7D%22%2C+point.x%28%29%29%3B%0A%7D%0A"}),(0,a.kt)("h2",{id:"what-is-happening-here"},"What is happening here?"),(0,a.kt)("p",null,"This example features two primary usages of Rust generics. The first illustrates the usage of\ngenerics within a function, which reduces the boilerplate for supporting multiple compatible types\nthat want to utilize ",(0,a.kt)("inlineCode",{parentName:"p"},"fn square"),". Generics may also be used as a part of a struct, as seen with\n",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),'. An associated type is also "hidden" in the first example, where the associated type\n',(0,a.kt)("inlineCode",{parentName:"p"},"Output")," is defined as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Mul")," trait when declaring the trait bound."))}d.isMDXComponent=!0}}]);