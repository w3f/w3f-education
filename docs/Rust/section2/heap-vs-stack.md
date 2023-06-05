---
id: heap-vs-stack
title: The Heap vs. The Stack
sidebar_label: The Heap vs. The Stack
description: Learn the summarized differences between the stack and the heap and how they affect your Rust programming.
---

Throughout this course, a common occurrence presented is the notion of "putting" variables on either the **stack** or the **heap**.  This page provides a summary as to what each is and how they relate to programming in Rust.  Low-level languages have to be concerned with memory management and allocation.  This concept should be familiar if you're coming from a language like C or C++.  

## What do the stack and heap represent?

The stack and heap are memory management and allocation concepts.  They relate to how memory in any program is managed, accessed and whether or not it can be changed in the runtime.  The stack and heap are two common methods to accomplish a program's memory management and allocation.

## The Stack

The stack is a linear model of storing objects on a "stack."  It is faster than the heap but cannot be modified as easily.  Objects are pushed and popped to and from the stack accordingly.  In Rust, items that are of known size are stored on the stack.  Known size in this context refers to some value that can be calculated at compile time, for example: 

```rust
let hello = "Hello, World";
// or
let x = 10;
```

Both `hello` and `x` are pushed onto the stack because they are known in size, meaning their memory profile can be determined at compile time because their contents are defined preemptively.  

In Rust, the stack is the default for managing primitive/basic values, call frames and local variables.  Non-primitives can also be put on the stack, but this is dependent on their lifetime and usage (i.e., a `struct` that has elements of known size).  The stack itself also has a limited size, hence why the stack can overflow if too much memory is allocated to it.

## The Heap

The heap refers to a dynamically managed, hierarchical model of storing objects.  It is slower than the stack but provides a way to store larger amounts of data for modification at a later time in memory.  Objects stored on the heap are typically not known in size at compile time, meaning they have the potential to grow and shrink as needed.  Rust has many mechanisms to manage this memory safely and avoid problems such as data races or dangling pointers.

In Rust, data structures such as `Vec` and `String` utilize the heap, which can grow and shrink within the runtime.

```rust
// A vector in Rust, the Rust equivalent to an array
let vector_of_numbers = vec![0, 1, 2];
// Change this in the runtime!
modify_vec(vector_of_numbers); // [0, 1, 2, 3]

// A growable, shrinkable "String."
let hello_string = String::from("Hello, World");
hello_string.push('!'); // Adds an ! to hello_string
```

## When to use which?  How is this used in Rust?

In Rust, this memory management and allocation is handled for you. There is no special syntax to dictate this in Rust, as it is already a part of the language.  As you progress, you will learn how Rust efficiently manages memory through the ownership and borrowing systems while providing low-level access.