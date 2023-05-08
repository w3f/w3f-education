---
id: macros
title: Macros in Rust
sidebar_label: Macros in Rust
description: Learn what macros are and how to create basic macros in Rust.
---

Macros in Rust are in the most basic sense, "code that writes code", also known as *metaprogramming*.  By now, you have seen the `println!()` macro many times, and illustrates how useful macros may be in everyday coding.

Another prime example which you have seen is the use of the `#[derive]` macro, which has the ability to automatically implement traits on types: 

```rust
// Automatically implements this type.
#[derive(PartialEq)]
struct SomeType;
```

Macros are called before the compiler interprets the code, which is why they can perform these operations (i.e., implementing a trait for you).  This usually referred to as "expanding", as the macro's code is being expanded to actual, usable Rust code the compiler can interpret and use.

## Macro Types

There are two primary types of macros:

- Declarative or "`macro_rules!`" Macros
- Procedural Macros - which also have subtypes

### Declarative Macros

Declarative macros are the most widely used, and are often easier to write than procedural macros.  They allow for programmers to write expressions that are akin to `match` statements that "fill in the blank" in order to make writing Rust more concise.  To put it simply, declarative macros operate almost like a template where the blanks are filled in by the parameters provided by the programmer.

### Procedural Macros

Procedural macros are more complex, as they accept code as input ,and produce code as output. This code, referred to as a `TokenStream`, represents this input and output.  Procedural macros operate more like a function, as they accept a `TokenStream` as a parameter and specify a return type as a `TokenStream`. Part of the complexity in creating these macros are due to the fact that they must be in a seperate crate, making them more inconvenient to add into a Rust project.

There are three primary types of procedural macros:

- `#[derive]` macros that specify code to be added to entities such as structs and enums.
- Function-like macros which structurally look and work like functions.
- Attribute-like macros which define custom attributes on a particular entity.

In this course, we won't be going over how to write a procedural macros.  For more reading, it is encouraged to read the [Rust Book's examples](https://doc.rust-lang.org/book/ch19-06-macros.html), as well as the [The Little Book of Rust Macros](https://veykril.github.io/tlborm/) for more in-depth reading on how macros can be utilized. 

## Writing a Basic Declarative Macro

## Try it yourself!

## What is happening here?