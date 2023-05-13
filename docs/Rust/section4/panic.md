---
id: panic
title: Panic! in Rust
sidebar_label: Panic! in Rust
description: Discover what panic! in Rust is, and when you should panic.
---

Previously we mentioned the concept of **panicking**, or the program stopping during runtime.  This is usually to prevent something unsafe from occurring, such as the possibility of invalid data being accessed in memory.  A panic is a **irrecoverable** error.

However, it is possible to invoke a panic using the `panic!` macro:

```rust
fn main() {
    println!("This program will panic!");
    panic!();
}
```

The output of this program indicates that an **explicit** panic did indeed occur within the main function: 

```rust 
  Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 0.55s
     Running `target/debug/playground`
thread 'main' panicked at 'explicit panic', src/main.rs:3:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

There are a few methods that could cause a panic, namely within using `Result`.  Methods such as `unwrap()` and `expect()` can cause a panic if the `Result` is `None`, as the error is not being handled.  As a result, the program simply panics and closes to prevent any further unwanted behavior.

The program should only panic if it could be in a "bad" state, where there is invalid data flowing within the program.  Ideally, errors should be recoverable if possible.  Concepts like logic flows and pattern matching help with handling different types and Errors, which will be apparent in the next section.