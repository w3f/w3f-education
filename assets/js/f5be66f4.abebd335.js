"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[9003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"slices",title:"Slices in Rust",sidebar_label:"Slices",description:"Learn what slices are, how they work, and why they are useful."},s=void 0,o={unversionedId:"Rust/section3/slices",id:"Rust/section3/slices",title:"Slices in Rust",description:"Learn what slices are, how they work, and why they are useful.",source:"@site/docs/Rust/section3/slices.md",sourceDirName:"Rust/section3",slug:"/Rust/section3/slices",permalink:"/docs/Rust/section3/slices",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section3/slices.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"slices",title:"Slices in Rust",sidebar_label:"Slices",description:"Learn what slices are, how they work, and why they are useful."},sidebar:"rust",previous:{title:"Borrowing & References",permalink:"/docs/Rust/section3/borrowing"},next:{title:"Intro to Intermediate Rust - Enums & Matching Patterns",permalink:"/docs/Rust/section4/"}},l={},c=[{value:"String slices",id:"string-slices",level:2},{value:"Modifying a slice in-place",id:"modifying-a-slice-in-place",level:2},{value:"Try it yourself!",id:"try-it-yourself",level:2},{value:"What&#39;s happening here?",id:"whats-happening-here",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Slices are another type of reference. As the name implies, they ",(0,i.kt)("em",{parentName:"p"},"refer")," to a ",(0,i.kt)("em",{parentName:"p"},"slice")," of information,\nin bytes, to an existing variable in memory."),(0,i.kt)("p",null,"Instead of handling an entire collection, which could be costly performance-wise, we can use slices\nto handle a ",(0,i.kt)("em",{parentName:"p"},"reference")," to those items. These slices can be modified in place or returned as\nimmutable as part of a function."),(0,i.kt)("h2",{id:"string-slices"},"String slices"),(0,i.kt)("p",null,"Working with string and byte slices is one of the most common tasks when working with Rust,\nespecially at a lower level."),(0,i.kt)("p",null,"A String slice is simply a reference to a part, or slice, of a String:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'\nlet name = String::from("Bader");\n// We can use the `..` operator to specify a range for the slice to cover\n// In this case, we want the \'Bad\' from Bader\nlet bad_slice = &name[0..3];\nprintln!("{bad_slice}"); // Prints "Bad"\n\n')),(0,i.kt)("p",null,"The double period syntax (",(0,i.kt)("inlineCode",{parentName:"p"},".."),") signifies a range. It creates a variable that represents that\nspecific String in memory from those specified positions (",(0,i.kt)("inlineCode",{parentName:"p"},"[starting_index..ending_index]"),")."),(0,i.kt)("h2",{id:"modifying-a-slice-in-place"},"Modifying a slice in-place"),(0,i.kt)("p",null,"It's possible to modify a mutable slice. This is also called changing it 'in place', as you are\nmanipulating the data within that specific starting and ending index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut arr = [1, 2, 3, 4, 5];\n    modify_in_place(&mut arr[2..4]); // pass in a mutable slice that refers to elements 3 and 4 of the array\n    println!("{:?}", arr); // prints "[1, 2, 6, 8, 5]"\n}\n\nfn modify_in_place(slice: &mut [i32]) {\n    for i in 0..slice.len() {\n        slice[i] *= 2; // double each element in the slice\n}\n')),(0,i.kt)("p",null,"We can modify a slice, or part of the array (",(0,i.kt)("inlineCode",{parentName:"p"},"arr"),") versus the entire array. This way, we can only\nact on the part of the data given."),(0,i.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,i.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+name+%3D+String%3A%3Afrom%28%22Bader%22%29%3B%0A++++%2F%2F+We+can+use+the+%60..%60+operator+to+specify+a+range+for+the+slice+to+cover%0A++++%2F%2F+In+this+case%2C+we+just+want+the+%27Bad%27+from+Bader%0A++++let+bad_slice+%3D+%26name%5B0..3%5D%3B%0A++++println%21%28%22%7Bbad_slice%7D%22%29%3B+%2F%2F+Prints+%22Bad%22%0A%7D%0A%0A%0A%2F%2F+A+function+that+does+the+same+as+above%2C+only+specifies+a+the+return+type+as+%0A%2F%2F+a+string+slice%0Afn+take_slice%28s%3A+%26String%29+-%3E+%26str+%7B%0A++++%26s%5B0..3%5D%0A%7D%0A%0A"}),(0,i.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,i.kt)("p",null,"The code above illustrates how to construct a basic string slice as well as return it in a function.\nTo make it interesting, try to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," as a mutable reference - does it work? Why and why not?"))}d.isMDXComponent=!0}}]);