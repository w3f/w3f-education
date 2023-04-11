"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4799],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"traits",title:"Defining behavior with Traits",sidebar_label:"Traits",description:"Learn how to bring data structs to life with traits in Rust."},s=void 0,c={unversionedId:"Rust/section6/traits",id:"Rust/section6/traits",isDocsHomePage:!1,title:"Defining behavior with Traits",description:"Learn how to bring data structs to life with traits in Rust.",source:"@site/docs/Rust/section6/traits.md",sourceDirName:"Rust/section6",slug:"/Rust/section6/traits",permalink:"/w3f-education/docs/Rust/section6/traits",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section6/traits.md",version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1681226866,formattedLastUpdatedAt:"4/11/2023",frontMatter:{id:"traits",title:"Defining behavior with Traits",sidebar_label:"Traits",description:"Learn how to bring data structs to life with traits in Rust."},sidebar:"rust",previous:{title:"Intro to Advanced Rust - Traits, Generics, & Lifetimes",permalink:"/w3f-education/docs/Rust/section6/section-6-intro"},next:{title:"Generic Types",permalink:"/w3f-education/docs/Rust/section6/generics"}},u=[{value:"Creating a Trait",id:"creating-a-trait",children:[]},{value:"Common Traits in Rust",id:"common-traits-in-rust",children:[{value:"Using the derive macro",id:"using-the-derive-macro",children:[]}]},{value:"Implementing a Trait on an &quot;Account&quot; struct",id:"implementing-a-trait-on-an-account-struct",children:[]},{value:"Trait Parameters &amp; Bounds",id:"trait-parameters--bounds",children:[]},{value:"Try it yourself!",id:"try-it-yourself",children:[]},{value:"What&#39;s happening here?",id:"whats-happening-here",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There is no genuine concept of object-oriented-style inheritance in Rust. ",(0,r.kt)("strong",{parentName:"p"},"Traits")," introduce the notion of defining shared behavior for data structures.  A trait defines a set of shared functions, expectations, and behavior that can be used for an indefinite number of types."),(0,r.kt)("h2",{id:"creating-a-trait"},"Creating a Trait"),(0,r.kt)("p",null,"Defining a trait utilizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," keyword, followed by the name of the trait.  In this example, notice the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pub")," (public) keyword.  This exposes the trait to any external files within a Rust crate and project to utilize:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait DigitalBank {\n    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32;\n}\n")),(0,r.kt)("p",null,"This function defines a trait ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank"),", which also defines a ",(0,r.kt)("strong",{parentName:"p"},"method signature"),", called ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),".  This signature is a blueprint for what we expect from any type that ",(0,r.kt)("em",{parentName:"p"},"implements")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," as a trait."),(0,r.kt)("h2",{id:"common-traits-in-rust"},"Common Traits in Rust"),(0,r.kt)("p",null,"As you may have already seen, there are quite a few traits that are used in Rust.  A few common traits are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/fmt/trait.Debug.html"},"Debug")," - formats the output in a debugging context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/cmp/trait.PartialEq.html"},"PartialEq")," - A trait for equality comparisons."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/clone/trait.Clone.html"},"Clone"),' - Describes how a new value can be created, or "Cloned".')),(0,r.kt)("p",null,"There are many more, but these, when used in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"derive")," macro with structs, can be very useful in making structs more pleasant to handle."),(0,r.kt)("h3",{id:"using-the-derive-macro"},"Using the derive macro"),(0,r.kt)("p",null,"A line you may have encountered above a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," declaration is ",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive()]"),".  This is what is called a ",(0,r.kt)("strong",{parentName:"p"},"procedural macros"),", which create a sort of auto-implementation for a set of compatible traits.  Between the parentheses, any traits compatible with this macro, along with the struct's fields within can be implemented:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone)]\nstruct Stormtrooper {\n    name: String\n}\n")),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," also implements ",(0,r.kt)("inlineCode",{parentName:"p"},"Clone"),", this is perfectly acceptable and easier than fully writing out the implementation for this particular trait."),(0,r.kt)("h2",{id:"implementing-a-trait-on-an-account-struct"},'Implementing a Trait on an "Account" struct'),(0,r.kt)("p",null,"To implement (",(0,r.kt)("inlineCode",{parentName:"p"},"impl"),") this trait, we will create a struct called ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),", which will also be marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"pub"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Account {\n   pub id: i32,\n   pub balance: i32,\n   pub is_legit: bool,\n}\n\nimpl DigitalBank for Account {}\n")),(0,r.kt)("p",null,"If the above code was run, we'd be presented with this error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"error[E0046]: not all trait items implemented, missing: `transfer`\n  --\x3e src/main.rs:11:1\n   |\n8  |     fn transfer(&mut self, who: &mut Account, amount: i32) -> i32;\n   |     ------------------------------------------- `transfer` from trait\n...\n11 | impl DigitalBank for Account {}\n   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `transfer` in implementation\n\nFor more information about this error, try `rustc --explain E0046`.\n")),(0,r.kt)("p",null,"As the compiler clearly says - we must implement all method signatures for this implementation!"),(0,r.kt)("p",null,"Now, we may implement our ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," trait to properly reflect the method signatures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl DigitalBank for Account {\n    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32 {\n        // Take from our (self) balance,\n        self.balance = self.balance - amount;\n        // Add that amount to someone else's balance,\n        who.balance = who.balance + amount;\n        // return our remaining balance.\n        self.balance\n    }\n}\n")),(0,r.kt)("p",null,"Because we implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," with this type, now any instance of the account struct can utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer()")," method and ensure ",(0,r.kt)("strong",{parentName:"p"},"shared")," behavior:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut account_one = Account {\n        id: 1,\n        balance: 100,\n        is_legit: true,\n    };\n    let mut account_two = Account {\n        id: 2,\n        balance: 200,\n        is_legit: true,\n    };\n\n    // In theory, account two could also easily call this!\n    account_one.transfer(&mut account_two, 50);\n\n    println!(\n        "Account One Balance: {}, Account Two Balance: {}",\n        account_one.balance, account_two.balance\n    );\n')),(0,r.kt)("p",null,"In fact, ",(0,r.kt)("em",{parentName:"p"},"any")," type that ",(0,r.kt)("inlineCode",{parentName:"p"},"impl"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," can now transfer funds, so long as it's implemented correctly as per the method and trait signatures."),(0,r.kt)("p",null,"To illustrate this let us add a method signature to ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," to drain all funds from an ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait DigitalBank {\n    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32;\n    /// New method signature!  Now we *have* to implement it.\n    fn drain_funds(&mut self) -> bool;\n}\n\nimpl DigitalBank for Account {\n    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32 {\n        // Take from our (self) balance,\n        self.balance = self.balance - amount;\n        // Add that amount to someone else's balance,\n        who.balance = who.balance + amount;\n        // return our remaining balance.\n        self.balance\n    }\n\n     fn drain_funds(&mut self) -> bool {\n        // Drain it all!\n        self.balance = 0;\n        // Really, we should have a Result that ensures that the account was successfully drained.\n        true\n     }\n}\n")),(0,r.kt)("p",null,"And as before, it's as simple as calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"drain_funds")," on any type, in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),", that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank"),"trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Account two's balance is now 0\naccount_two.drain_funds();\n")),(0,r.kt)("p",null,"Feel free to define more types and implement, or even expand ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," with more methods as you see fit."),(0,r.kt)("h2",{id:"trait-parameters--bounds"},"Trait Parameters & Bounds"),(0,r.kt)("p",null,"A common use of traits is their use as ",(0,r.kt)("strong",{parentName:"p"},"bounds")," in functions, which can then be used to define ",(0,r.kt)("strong",{parentName:"p"},"parameters")," that abide by these bounds.  With generics, this becomes possible and produces very reusable code:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For this scenario, we added an additional method to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," trait - ",(0,r.kt)("inlineCode",{parentName:"p"},"is_legit()"),", which verifies the legitimacy of a particular entity.  This entity could be an ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),", or even something like a ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartContract")," type."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn verify_entity(entity: &impl DigitalBank) {\n    if entity.is_legit() {\n        println!("Entity is legit!");\n    } else {\n         println!("Entity is NOT legit!");\n    }\n}\n')),(0,r.kt)("p",null,"The function's parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", is saying something very particular here: ",(0,r.kt)("strong",{parentName:"p"},"any")," type which implements ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," as a trait is a valid parameter.  If we were to define another type, say ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartContract"),", that implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank"),", then that would also be completely valid."),(0,r.kt)("p",null,"It can also be written using ",(0,r.kt)("em",{parentName:"p"},"trait bound syntax"),", which allows for a better view of generics at work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn verify_entity<T: DigitalBank>(entity: &T) {\n    if entity.is_legit() {\n        println!("Entity is legit!");\n    } else {\n         println!("Entity is NOT legit!");\n    }\n}\n')),(0,r.kt)("p",null,"To call a function like this would be quite interesting, as we would need to specify which type, so long as it abides by the trait bound ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let mut account = Account {\n    id: 1,\n    balance: 100,\n};\n// Account goes in the angled brackets, as it's a type 'T' that implements 'DigitalBank':\nverify_entity::<Account>(&account);\n")),(0,r.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,r.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=pub+struct+Account+%7B%0A++++pub+id%3A+i32%2C%0A++++pub+balance%3A+i32%2C%0A%7D%0A%0Apub+trait+DigitalBank+%7B%0A++++%2F%2F%2F+Return+the+new+balance.%0A++++fn+transfer%28%26mut+self%2C+who%3A+%26mut+Account%2C+amount%3A+i32%29+-%3E+i32%3B%0A++++fn+is_legit%28%26self%29+-%3E+bool%3B%0A++++fn+drain_funds%28%26mut+self%29+-%3E+bool%3B%0A%0A%7D%0A%0Aimpl+DigitalBank+for+Account+%7B%0A++++fn+transfer%28%26mut+self%2C+who%3A+%26mut+Account%2C+amount%3A+i32%29+-%3E+i32+%7B%0A++++++++%2F%2F+Take+from+our+%28self%29+balance%2C%0A++++++++self.balance+%3D+self.balance+-+amount%3B%0A++++++++%2F%2F+Add+that+amount+to+someone+else%27s+balance%2C%0A++++++++who.balance+%3D+who.balance+%2B+amount%3B%0A++++++++%2F%2F+return+our+remaining+balance.%0A++++++++self.balance%0A++++%7D%0A%0A+++++fn+drain_funds%28%26mut+self%29+-%3E+bool+%7B%0A++++++++%2F%2F+Drain+it+all%21%0A++++++++self.balance+%3D+0%3B%0A++++++++%2F%2F+Really%2C+we+should+have+a+Result+that+ensures+that+the+account+was+successfully+drained.%0A++++++++true%0A+++++%7D%0A+++++%0A+++++fn+is_legit%28%26self%29+-%3E+bool+%7B%0A++++++++self.balance+%21%3D+0%0A+++++%7D%0A%7D%0A%0Afn+verify_entity%3CT%3A+DigitalBank%3E%28entity%3A+%26T%29+%7B%0A++++if+entity.is_legit%28%29+%7B%0A++++++++println%21%28%22Entity+is+legit%21%22%29%3B%0A++++%7D+else+%7B%0A+++++++++println%21%28%22Entity+is+NOT+legit%21%22%29%3B%0A++++%7D%0A%7D%0A%0Afn+main%28%29+%7B%0A++++let+mut+account_one+%3D+Account+%7B%0A++++++++id%3A+1%2C%0A++++++++balance%3A+100%2C%0A++++%7D%3B%0A++++let+mut+account_two+%3D+Account+%7B%0A++++++++id%3A+2%2C%0A++++++++balance%3A+200%2C%0A++++%7D%3B%0A%0A++++account_one.transfer%28%26mut+account_two%2C+50%29%3B%0A%0A++++println%21%28%0A++++++++%22Account+One+Balance%3A+%7B%7D%2C+Account+Two+Balance%3A+%7B%7D%22%2C%0A++++++++account_one.balance%2C+account_two.balance%0A++++%29%3B%0A++++%0A++++account_two.drain_funds%28%29%3B%0A++++%2F%2F+ALl+funds+are+gone%21%0A++++println%21%28%0A++++++++%22Account+One+Balance%3A+%7B%7D%2C+Account+Two+Balance%3A+%7B%7D%22%2C%0A++++++++account_one.balance%2C+account_two.balance%0A++++%29%3B%0A++++%0A++++let+mut+account+%3D+Account+%7B%0A++++id%3A+1%2C%0A++++balance%3A+100%2C%0A++++%7D%3B%0A++++%2F%2F+Account+goes+in+the+angled+brackets%2C+as+it%27s+a+type+%27T%27+that+implements+%27DigitalBank%27%3A%0A++++verify_entity%3A%3A%3CAccount%3E%28%26account%29%3B%0A++++verify_entity%3A%3A%3CAccount%3E%28%26account_two%29%3B%0A%7D%0A"}),(0,r.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,r.kt)("p",null,"In this example, we define a common trait ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank"),", which allows a struct to define and access three methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"is_legit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"drain_funds"),".  When a struct implements this trait, it must specify the functionality for each method.  A function, ",(0,r.kt)("inlineCode",{parentName:"p"},"verify_entity"),", also introduces a ",(0,r.kt)("strong",{parentName:"p"},"trait bound")," ",(0,r.kt)("inlineCode",{parentName:"p"},"T: DigitalBank"),".  This bound ensures that only types that have correctly implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalBank")," are to be valid arguments."))}m.isMDXComponent=!0}}]);