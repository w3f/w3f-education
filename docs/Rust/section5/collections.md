---
id: collections
title: Collections in Rust - Vectors, Strings, Hashmaps
sidebar_label: Collections - Vectors, Strings, Hashmaps
description: Learn what collections are, and when to use which in Rust.
---

We've already dealt with quite a few collections - which are data structures provided by Rust's standard library and aid in **dynamic** data manipulation and representation.  Similar arrays and tuples, collections can store more than value.  In contrast to such compound types, collections point to items stored on the **heap**.    The benefit of it being managed on the heap allows collections to be growable, as well as generally more modifiable in runtime.  One collection you have already encountered numerous times throughout this course is `String`, which represents a list of characters.

There are three main commonly used collections in Rust: 

- Vectors - very similar to arrays, where a list of items stored in chronological order are defined.
- Hashmaps - key value data structures that store a **map** of information.
- Strings - a collection of characters which are stored on the heap.

## Strings

The `String` collection should be very familiar by now.  `String` is a collection of characters stored on the heap.  The `&str` type, or string slice/literal is different from this type, as it's a primitive type, whereas `String` is a data structure part of the Rust standard library.  At it's core, a String is actually a wrapped type that is a vector of bytes.  

## Vectors

The official type declaration of a vector is `Vec<T>`, which represents a list of any generic type `T`.  We'll go over generics in the next module, but for now just know it used exactly how `T` is used in the `Option<T>` and `Result<T, E>` enums.  Like arrays, Vectors can only store values of the same type.

To create a new, empty vector, we simply call the associated method `new()`:

```rust
let vector: Vec<i32> = Vec::new();
// Optionally, one may also use the `vec!` macro with initialized values. Type is inferred.
let vector = vec![1, 2, 3];
```

Now that the vector is defined, it exposes a number of methods which we can use to manipulate it:

```rust
// Initialize a new vector
let vector: Vec<i32> = Vec::new();

// Push new items to it
vector.push(2); // [2]
vector.push(3); // [2, 3]
vector.push(4); // [2, 3, 4]

// Reading via .get()
let four: Option<i32> = vector.get(2) // retrieves an Option, which can be pattern matched

// Reading a vector via indexing - same as an array
// use with caution, the index may not exist!
let four: i32 = &vector[2];
```

A vector follows all rules of the borrow checker - meaning if the vector is mutable, then an immutable reference to an element is impossible to have.  Vectors also aren't limited to scalar types - you may define a struct, and store a list of structs within a vector if desired.

## Hashmaps

Hashmaps store a mapping of `K` to `V`, and in other languages are often to referred to as a map, dictionary, or hash table.  As with `T` in `Vec<T>`, `K` and `V` are generic types used to refer to *any* type. As with vectors, values within the hashmap are stored on the heap.  If an external variable is placed as part of a hashmap insertion, then that variable is owned by the hashmap.

To create a new hashmap, the associated method `new()` is also used: 

```rust
let mut balances = Hashmap::new();
```

To add new values to the `balances` map.  This particular mapping maps a `String` to an `i32`:

```rust
balances.insert(String::from("Bader"), 100);
```

To access a value, a `.get(key: K)` method is also exposed, upon which the value may be fetched by a reference to the key (so as to prevent ownership):
```rust
let mut balances = Hashmap::new();
balances.insert(String::from("Bader"), 100);
let key = String::from("Bader");
let bader_bal: Option<i32> = balances.get(&key);
```

The `Option` returned must be handled properly, or a default value must be provided to `bader_bal`.  


## Try it yourself!


## What's happening here?

