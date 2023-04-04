---
id: closures
title: Closure Functions in Rust
sidebar_label: Closures
description: Learn how to use function closures.
---

Closures are one of Rust's functional programming-esque features that provide the ability to create **anonymous functions**.  Closures, like functions, execute blocks of logic within.  They are fundementelly different in how they operate and handle ownership.

They may even be used as a return type, as shown in examples such as `unwrap_or_else()`:

```rust
let some_result: i32 = dangerous_value().unwrap_or_else(|| 42);
```

The two vertical pipes within `unwrap_or_else` signify that it is a closure, and 42 is the returned value.  Closures can be used in generics using the `Fn` trait, or even as a parameter for an actual function.

## Defining & Using Closures

Defining closures is similar to defining a variable.  It utilizes two vertical pipes to signify any parameters. A return type can also be specified, and is called like a function:

```rust
fn main() {
    let name = "Bob";
    // Closure that captures `name` and returns a new string with "Hello, " prepended
    let greet_closure = |name: &str| -> String {
        format!("Hello, {}!", name)
    };
    // It is called the same way a function is
    let greeting = greet_closure(name);
    println!("{}", greeting); // Prints "Hello, Bob!"
}
```

### Type Inference

Where functions require explicit type declarations for their parameter and return types, closures don't have this requorement.  They are able to infer both types, depending on how one uses it:

:::note

This also can shorten the closure into one-line, as the curly brackets can be omitted and the return type directly specified. If this was a multi-line closure, then curly brackets would be required.

:::

```rust
let name = "Bob";
let greet_closure = |name| format!("Hello, {}!", name);
// It is called the same way a function is. The types are inferred here!
// `name` is of type &str, meaning it now expects it from thereon.
let greeting = greet_closure(name);
println!("{}", greeting); // Prints "Hello, Bob!"
// This will fail!
let greeting_two = greet_closure(123);
```

```rust
18 | let greeting = greet_closure(123);
   |                ------------- ^^^ expected `&str`, found integer
   |                |
   |                arguments to this function are incorrect
```

### Capturing Enviroments

Unlike functions, closures can capture their enviorment.  A closure can utilize local variables within a scope that the closure is defined:

```rust
fn main() {
    let name = "Bob";
    // This closure has no arguments now, but can use the `name`
    // variable defined in the main scope.
    let greet_closure_that_captures = || format!("Hello Captured, {}!", name);
    // It is called the same way a function is
    let greeting_two = greet_closure_that_captures();
    println!("{}", greeting); /
}
```

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+name+%3D+%22Bob%22%3B%0A++++let+greet_closure+%3D+%7Cname%7C+format%21%28%22Hello%2C+%7B%7D%21%22%2C+name%29%3B%0A++++%2F%2F+It+is+called+the+same+way+a+function+is.+The+types+are+inferred+here%21%0A++++%2F%2F+%60name%60+is+of+type+%26str%2C+meaning+it+now+expects+it+from+thereon.%0A++++let+greeting+%3D+greet_closure%28name%29%3B%0A++++println%21%28%22%7B%7D%22%2C+greeting%29%3B+%2F%2F+Prints+%22Hello%2C+Bob%21%22%0A%0A++++%2F%2F+This+will+fail%21%0A++++%2F%2F+let+greeting+%3D+greet_closure%28123%29%3B%0A++++%0A++++%2F%2F+Closure+that+captures+%60name%60+and+returns+a+new+string+with+%22Hello%2C+%22+prepended%0A++++let+greet_closure_that_captures+%3D+%7C%7C+format%21%28%22Hello+Captured%2C+%7B%7D%21%22%2C+name%29%3B%0A++++%2F%2F+It+is+called+the+same+way+a+function+is%0A++++let+greeting_two+%3D+greet_closure_that_captures%28%29%3B%0A++++println%21%28%22%7B%7D%22%2C+greeting_two%29%3B+%2F%2F+Prints+%22Hello%2C+Bob%21%22%0A%7D%0A"></iframe>

## What's going on here?

The code above showcases two examples of closures in use.  The first example accepts a parameter, of which its type is inferred. The second example removes the parameter, and instead captures a variable outside of the closure, but within the same scope.
