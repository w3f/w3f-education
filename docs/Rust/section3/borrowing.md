---
id: borrowing
title: Borrowing & References in Rust
sidebar_label: Borrowing & References
description: Learn how the borrowing model works in Rust, and how to utilize it properly.
---

The borrowing model in Rust is quite trivial.  As mentioned previously, issues with ownership may arise once dealing with values that are stored on the heap (in other words, values that aren't of fixed size and defined at compile time).

While ownership does ensure that all memory will be properly allocated/deallocated, it does introduce some complexity that references and borrowing solve.

## Problem: Heap-stored Values

Data types that aren't fixed size and have the potential to grow in size during runtime are stored on the **heap**.  This essentially means that, because the compiler can't tell what the value *could* be at compile time, it's managed during the runtime.  

The primary issue with this is when a potential **move**, or change in ownership, occurs:

```rust

fn main() {
    // Create a String collection from a string literal (&str)
    let name = String::from("Bader");
    take_my_string(name);
    // Error!
    println!("{name}");
}

fn take_my_string(s: String) {
    // Prints a reverse string
    println!("{}", s.chars().rev().collect::<String>());
}

```

There is a problem with this code - that's that, in order to maintain memory safety and follow the rules of ownership, the variable`name` was moved to the `fn take_my_string` function.  In other words, it owns it, and because it is stored on the heap.  

Fixed-size variables are copied - as they the compiler knows exactly *what* to copy, whereas values on the heap are *moved*.  Once moved, they cannot be used within that context.

## Borrowing & Moving (Lack thereof)

The borrowing system in Rust solves this issue.  Using **references**, which are denoted by `&`, we can avoid moving the String directly, and instead just use a reference to it.  This references points to where it exists in memory, in contrast to moving it all together:

```rust

fn main() {
    // Create a String collection from a string literal (&str)
    let name = String::from("Bader");
    // We allow the function to borrow our String as a reference.
    take_my_string(&name);
    // No longer an error! The main function maintains ownership.
    println!("{name}");
}

// Now, instead of taking a String - we merely take a reference to it.
fn take_my_string(s: &String) {
    // Prints a reverse string
    println!("{}", s.chars().rev().collect::<String>());
}

```
Using a reference to `name`, we allow `take_my_string` to **borrow** the value, versus taking complete ownership.  We can perform whatever we want with it, but as soon as the function is complete, `name` returns back to main's ownership.

## Mutable & Immutable References

As with ownership, borrowing and references also have several rules:

- Only one mutable reference is allowed at a time
- Any number of immutable references is allowed
- References must always be valid (no *dangling*, or variables which return a reference which ends up getting dropped at the end of some scope).

## Try it out!

## What's happening here?

