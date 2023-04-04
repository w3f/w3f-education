---
id: loops-vs-iterators
title: Loops vs Iterators - when to use which?
sidebar_label: Loops vs Iterators
description: Learn when to use loops and iterators in Rust.
---

In the previous section, a piece of code looked just like a `for` loop that was covered in the Loops module:

```rust
    let my_vec = vec![1, 2, 3, 4, 5];
    for val in my_vec.iter() {
        println!("Value: {}", val);
    }
```

At first glance, this appears to be the same syntax and functionality as a normal `for` loop:

```rust
    let my_vec = vec![1, 2, 3, 4, 5];
    for val in my_vec {
        println!("Value: {}", val);
    }
```

Both serve the same purpose, but behave differently.  Iterators operate on **references**, whereas a `for` loop directly takes possession of the value for the scope of the loop.  Calling:

```rust
for val in my_vec.iter() {}
```

Is effectively the same as calling:

```rust
for val in &my_vec {}
```

In general, it is a better design decision to utilize a reference-based approach, as `my_vec` would be unusable after a traditional `for` loop that takes ownership.

## Try it yourself!

## What's going on here?
