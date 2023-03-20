---
id: variables-mutability
title: Variables & Mutability
sidebar_label: Variables & Mutability
description: How variables and mutability works in Rust.
---

If you have ever used another programming language, the concept of **variables** should not be too foreign. 


```rust
// A couple Rust variables. 
// The first holds a name (a slice of text), and the other, an age (a number).
let my_name: &str = "Bader";
let age: u32 = 22;
// We'll dive more into this line later, but just know that it is a way to print information.
println!("My name is {my_name} and I am {age} years old.");
```

As in other languages, variables in Rust behave mostly the same with the exception of a few unique properties the most prominent being **mutability** and **shadowing** .

:::info

All variables in Rust are immutable by default. Immutable variables cannot be changed, unless explicitly declared as mutable.  This prevents unwanted changes to values in code.  

:::

## Immutability in Rust

As mentioned before, by default, all variables in Rust are immutable.  This means that once a variable has been declared, the value within cannot be changed.

```rust
// The compiler won't allow this to be changed. 
// This code would throw an error!

let age: u32 = 22;
// Increment the age by one.
age += 1;

======

error[E0384]: cannot assign twice to immutable variable `age`
  --> src/main.rs:26:1
   |
24 | let age: u32 = 22;
   |     ---
   |     |
   |     first assignment to `age`
   |     help: consider making this binding mutable: `mut age`
25 | // Increment the age by one.
26 | age += 1;
   | ^^^^^^^^ cannot assign twice to immutable variable
```

This is yet another example of how the Rust compiler prevents any illegal operations, along with a descriptive way of letting the developer know.  The most interesting line to note is `cannot assign twice to immutable variable`, as this clearly shows the immutability property of the variable.

It's this very error that actually is incredibly useful, as in some cases, we don't always want to change the value of a variable.  The Rust compiler, by default, keeps this *safe* by keeping it immutable. There are many practical reasons for this, i.e., multi-developer projects, where one developer can clearly see the intentions of the program by whether a variable is mutable or not.  

A variable's value changing unintentionally can also be the cause of trivial bugs, but luckily the Rust compiler deals with it quite elegantly using immutability.

Of course, variables aren't always meant to be immutable.  To allow a variable to become mutable, simply use the `mut` keyword before the variable name when declaring it:

```rust
// This works now! Notice the `mut`, short for mutable, after `let`
let mut age: u32 = 22;
// Increment the age by one.
age += 1;
```

## Shadowing in Rust

## Constants in Rust

## Try it out!

## Explanation: Why is this invalid?

