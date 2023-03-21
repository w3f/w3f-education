---
id: functions-comments
title: Functions & Comments in Rust
sidebar_label: Functions & Comments
description: Learn how functions and comments work, and how to create them in Rust.
---

With the knowledge of variables and data types in place, it is now time to put them to use.  **Functions** in Rust should be nothing new. The `main` function is one, for example, that you have already seen a number of times in the Rust Playground.

```rust 
// This is a function!
fn main() {}
```

Functions contain pieces of logic into a context-specific scope.  They are useful for splitting your program into more digestible pieces, rather than just using a single main function to operate.

Declaring a function is simple - start with `fn`, followed by the name, and two empty parentheses, and closed with curly brackets:  


```rust
fn main() {
    // The main function is no longer alone here..
    do_something_interesting();
}

fn do_something_interesting() {
    println!("Something interesting!");
}
```

You may have noticed that we called the function, called `do_something_interesting()`, within our main function.  It doesn't matter where this function is declared, nor what it does, as long as its valid, safe Rust code, then it will execute.

## Parameters

Functions in this form aren't terribly useful. In fact, the above is rather pointless, as we could accomplish the same result with less code.

**Parameters** allow for functions to have more dynamic and custom input.  For example, let's take the previous example, and add a parameter:

```rust
fn main() {
    // The main function is no longer alone here..
    do_something_interesting(true);
}

fn do_something_interesting(is_interesting: bool) {
    println!("Is this interesting: {is_interesting}.");
}
// Output: Is this interesting: true.
```

A parameter is added within the previously empty parentheses. It takes the name, `is_interesting` followed by a colon (`:`), and the type, `bool`.  This tells the function that when it is called, it also expects a boolean to be included as a parameter.  These parameters become part of the *function's signature*, or the unique layout of the function.

You can include multiple parameters of multiple types:

```rust
fn main() {
    // The main function is no longer alone here..
    do_something_interesting(true, "Bader");
}

fn do_something_interesting(is_interesting: bool, name: &str) {
    println!("Hey, {name}!  Is this interesting: {is_interesting}.");
}
// Output: Hey, Bader!  Is this interesting: true.
```

## Statements and Expressions

It's important to differentiate **statements** versus **expressions** in Rust. Functions in Rust are **statements** that can end in an **expression**.  The difference being: 

- *Statements* perform some modification, and do not return any sort of value.
- *Expressions* provide a conclusion in the form of a value.

A simple way to think about this is when you declare something which is purely definitive in Rust, be it a variable or a function, it is a **statement**.  

```rust
// This is a statement - it states that x is 10, and does not return anything.
let x = 10;
```

For expressions, they must evaluate and **express** a final value.  Take this example: 

```rust
// Defining a new scope within main.
let y = {
    let x = 3;
    x + 1 // An expression that returns 4
};

```

Notice the lack of a semicolon at the end of `x + 1`.  As soon as you add a semicolon to the end of a line, it turns into a statement. Expressions do not have semicolons appended to the end of them.

# Comments

Comments are nothing new in Rust, however there are a few you should be aware of. Comments are used to document parts of your code in order to provide clarification when needed.  Not every line needs to be commented, however it may be helpful to provide context in certain situations. They are preceded by double forward slashes in most cases (`//`).

Comments are purely for developers, and not realized in the compiler.

You have already seen comments in action within the examples in this course.  Take the previous example: 

```rust
fn main() {
    // The main function is no longer alone here..
    do_something_interesting(true, "Bader");
}
// Hey, I'm a comment! I explain things
// This function does something interesting, apparently.
fn do_something_interesting(is_interesting: bool, name: &str) {
    println!("Hey, {name}!  Is this interesting: {is_interesting}.");
}
// Output: Hey, Bader!  Is this interesting: true.
```

In the last module, you'll learn how to properly document your code using comments in a way that Cargo can understand.


