---
id: vectors-vs-strings
title: Vectors, Strings, and &str Slices
sidebar_label: Vectors, Strings, and &str Slices
description: Learn the difference between vectors and strings in Rust.
---

It can be rather confusing for a beginner to wrap their head around how these various types relate and how they work together.

To summarize:

- A `String` is a data structure that is essentially a wrapped `Vec<T>`.  It represents a list of UTF-8 bytes that are stored on the heap.  It is useful for defining typical words and sentences in a mutable fashion, and can be modified during the runtime. Recall a `String` is just a struct, meaning it owns the fields within.  In this case, it owns the bytes that you write to it.
  
- String literals/slices, or `&str`, are immutable, predefined slices of UTF-8 butes that are defined at **compile-time**, not runtime. They are either stored as `'static`, aka part of the executable in static storage, or on the stack. It is also fixed-length.  
  
- A `Vec<T>` is a data structure that is more generic in nature, as it allows for *any* data type to be passed in to form a managed list.

## When to use a string slice versus a String?

Remember slices are essentially **"view-only", immutable references**.  `String` should be used when you require a growable, ownable collection of bytes.  `String` is more costly - with in most programs, is not an issue, but in some environments it may be better to utilize string slices whenever possible.

String slices can also be converted to a `String` rather easily:

```rust

let literal_to_string: String = "Hello".to_string();

```

