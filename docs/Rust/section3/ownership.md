---
id: ownership
title: Rust's Ownership Model
sidebar_label: The Ownership Model
description: Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time.
---

As mentioned in the intro, a crucial part of Rust's safety is its memory management.  **Ownership** in Rust is the concept that defines a set of rules for how to handle memory in a Rust program.  It does not affect performance - as  ownership checks happen at compile time.  

While these rules may seem prohibitive at times, they ensure completely memory-safe code.

:::note 

If you aren't familiar with what the stack and heap is, make sure you read this first, as it will provide context for why ownership is important when dealing with certain collections.

:::

## Ownership Rules

As stated in the Rust book, ownership has three primary concepts/rules: 

- Every single value (statement) has an owner
- There can only be one owner at a time
- Ownership is heavily dependent on scope. As soon as a statement goes out of scope, the ownership is dropped.

These rules ensure that the ownership of a particular variable in memory is managed correctly and properly handled.Simply put - the scope defines the ownership of a particular variable, as you will see.

## Variable Scope

Let's run through an example to demonstrate the importance of scope and how it relates to ownership: 

```rust
// You can define a new scope within main using this syntax.
// Everything within this scope is valid until the closing curly bracket.
// For example, you cannot use `x` outside of this scope - as the variable is dropped from memory

{
    // Declare an integer x
    let x = 10;
    // We can do whatever we want in the context of this scope,
    // but after it ends, we cannot use x.
}
// We cannot use `x` here!
```

In terms of ownership, the *variable `x`* is owned by this scope, defined by curly brackets, until the end of the scope.  From here, the Rust compiler handles the the de-allocation of memory in a safe manner.


Ownership gets more complex when dealing with values that aren't defined at compile-time.  For more information on the complexities of ownership, read the [Rust book's explanation](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). 


## Try it out!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A+++let+y+%3D+11%3B%0A++++%2F%2F+You+can+define+a+new+scope+within+main+using+this+syntax.%0A++++%2F%2F+Everything+within+this+scope+is+valid+until+the+closing+curly+bracket.%0A++++%2F%2F+For+example%2C+you+cannot+use+%60x%60+outside+of+this+scope+-+as+the+variable+is+dropped+from+memory%0A++++%7B%0A++++++++%2F%2F+Declare+an+integer+x%0A++++++++let+x+%3D+10%3B%0A++++++++%2F%2F+We+can+do+whatever+we+want+in+the+context+of+this+scope%2C%0A++++++++%2F%2F+but+after+it+ends%2C+we+cannot+use+x.%0A++++++++println%21%28%22x%3A+%7Bx%7D%2C+y%3A+%7By%7D%22%29%3B%0A++++%7D%0A++++%2F%2F+We+cannot+use+%60x%60+here%21+It+was+owned+by+the+inner+scope+defined+previously.%0A++++%2F%2F+println%21%28%22%7Bx%7D%22%29%3B+-+this+wouldn%27t+work.%0A++++%2F%2F+Printing+%60y%60+is+perfectly+fine%2C+as+it+it%27s+ownership+and+scope+is+above+that%0A++++%2F%2F+of+x%27s.%0A++++println%21%28%22only+y%3A+%7By%7D%22%29%3B%0A%7D%0A"></iframe>

## What's happening here?

We define two variables here: `x` and `y`.  Both are fixed size, and known at compile time.  The difference between the two is that `y` is owned by the scope of the `main` function, while `x` is owned by another, inner scope.  The code illustrates that `x` is dropped after the inner scope ends, while `y` can still be used until the end of the `main` function's scope.

