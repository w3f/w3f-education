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

## Try it out!

## What's happening here?

