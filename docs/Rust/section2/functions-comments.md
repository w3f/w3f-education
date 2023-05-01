---
id: functions-comments
title: Functions & Comments in Rust
sidebar_label: Functions & Comments
description: Learn how functions and comments work, and how to create them in Rust.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/QZQq9fepWWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

With the knowledge of variables and data types, it is time to put them to use.  **Functions** in Rust should be familiar.  The `main` function is one, for example, that you have already seen several times in the Rust Playground.

```rust 
// This is a function!
fn main() {}
```

Functions contain pieces of logic in a context-specific scope.  They are useful for splitting your program into more digestible pieces rather than just using a single main function to operate.

Declaring a function is simple - start with `fn`, followed by the name and two empty parentheses, and closed with curly brackets:  


```rust
fn main() {
    // The main function is no longer alone here.
    do_something_interesting();
}

fn do_something_interesting() {
    println!("Something interesting!");
}
```

You may have noticed that we called the `do_something_interesting()` function within our main function.  It doesn't matter where this function is declared or what it does.  It will execute as long as it's valid, safe Rust code.

## Parameters

Functions in this form aren't useful.  The above is pointless; we could accomplish the same result with less code.

**Parameters** allow for functions to have more dynamic and custom input.  For example, let's take the previous example and add a parameter:

```rust
fn main() {
    // The main function is no longer alone here.
    do_something_interesting(true);
}

fn do_something_interesting(is_interesting: bool) {
    println!("Is this interesting: {is_interesting}.");
}
// Output: Is this interesting: true.
```

A parameter is added within the previously empty parentheses.  It takes the name, `is_interesting` followed by a colon (`:`), and the type, `bool`.  This tells the function that it also expects a boolean to be included as a parameter when it is called.  These parameters become part of the *function's signature*, or the unique layout of the function.

You can include multiple parameters of multiple types:

```rust
fn main() {
    // The main function is no longer alone here.
    do_something_interesting(true, "Bader");
}

fn do_something_interesting(is_interesting: bool, name: &str) {
    println!("Hey, {name}!  Is this interesting: {is_interesting}.");
}
// Output: Hey, Bader!  Is this interesting: true.
```

## Statements and Expressions

It's essential to differentiate **statements** versus **expressions** in Rust.  Functions in Rust are **statements** that can end in an **expression**.  The difference is: 

- *Statements* perform some modification and do not return any value.
- *Expressions* provide a conclusion in the form of a value.

A simple way to think about this is when you declare something purely definitive in Rust, whether a variable or a function, it is a **statement**.  

```rust
// This is a statement - it states that x is `10` and does not return anything.
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

Notice the lack of a semicolon at the end of `x + 1`.  As soon as you add a semicolon to a line's end, it becomes a statement.  Expressions do not have semicolons appended to the end of them.


## Return types

A key part of functions in Rust is the ability to specify a return type.  With the knowledge that we can use expressions to have a conclusion to a series of operations, we can use the following syntax to add a return type and result to our function: 

```rust
// This function takes a number and returns the squared version of it.
fn square(x: i32) -> i32 {
    x * x
}
```

Notice the return type is denoted by the arrow (`->`) followed by the type we wish to return.  To return the type, we simply return the expression without a semicolon.  It's possible to also explicitly define a return statement:

```rust
// This function takes a number and returns the squared version of it.
fn square(x: i32) -> i32 {
    // This is also valid!
    return x * x;
}
```


# Comments

Comments are used to document parts of your code in order to provide clarification when needed.  Not every line needs to be commented on.  However, it may be helpful to provide context in certain situations.  Double forward slashes usually precede them (`//`).

Comments are purely for developers and not realized in the compiler.

You have already seen comments in action within the examples in this course.  Take the previous example: 

```rust
fn main() {
    // The main function is no longer alone here.
    do_something_interesting(true, "Bader");
}
// Hey, I'm a comment!  I explain things
// This function does something interesting, apparently.
fn do_something_interesting(is_interesting: bool, name: &str) {
    println!("Hey, {name}!  Is this interesting: {is_interesting}.");
}
// Output: Hey, Bader!  Is this interesting: true.
```

In the last module, you'll learn how to properly document your code using comments in a way that Cargo can understand.

## Try it out!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++%2F%2F+The+main+function+is+no+longer+alone+here..%0A++++do_something_interesting%28true%2C+%22Bader%22%29%3B%0A++++%2F%2F+Make+sure+to+call+your+function+here%21%0A%7D%0A%2F%2F+Hey%2C+I%27m+a+comment%21+I+explain+things%0A%2F%2F+This+function+does+something+interesting%2C+apparently.%0Afn+do_something_interesting%28is_interesting%3A+bool%2C+name%3A+%26str%29+%7B%0A++++println%21%28%22Hey%2C+%7Bname%7D%21++Is+this+interesting%3A+%7Bis_interesting%7D.%22%29%3B%0A%7D%0A%0A%0A%2F%2F+Change+this+function+to+take+a+parameter%2C+which+is+a+floating+point+number%0A%2F%2F+with+double+precison%2C+and+print+it.++%0A%2F%2F+Then%2C+call+it+in+the+main+function+and+run%21%0Afn+do_something_better%28%29+%7B%7D%0A"></iframe>

## What is happening here?

A new function with zero parameters is introduced, called `do_something_better`.  You should be able to add a new parameter of type `f64` (for double precision) like so:

```rust

fn do_something_better(number: f64) {
    println("{number}");
}

```

To expand it, let's specify a return type - in this case, we want to return the number we passed in but squared:


```rust

fn do_something_better(number: f64) -> f64 {
    number * number
}

```

Notice the lack of a semicolon, which denotes a resultant value in the form of an expression.
