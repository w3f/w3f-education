---
id: collections
title: Collections in Rust - Vectors, Strings, Hashmaps
sidebar_label: Collections - Vectors, Strings, Hashmaps
description: Learn what collections are, and when to use which in Rust.
---

We've already dealt with several collections. Rust's standard library provides these data structures
and aid in **dynamic** data manipulation and representation. Similar to arrays and tuples,
collections can store more than value. In contrast to such compound types, collections point to
items stored on the **heap**. The benefit of it being managed on the heap allows collections to be
growable and generally more modifiable in runtime. One collection you have already encountered
numerous times throughout this course is `String`, which represents a list of characters.

There are three commonly used collections in Rust:

- Vectors - re-sizable arrays. Like slices, their size is not known at compile time, but they can
  grow or shrink at any time.
- Hashmaps - key-value data structures that store a **map** of information.
- Strings - a collection of characters that are stored on the heap.

<iframe width="560" height="315" src="https://www.youtube.com/embed/du6V0bpafws?si=S8hPiTfjb6oF4okz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Vectors

The official type declaration of a vector is `Vec<T>`, which represents a list of any generic type
`T`. We'll go over generics in the next module, but for now, know it is used exactly how `T` is used
in the `Option<T>` and `Result<T, E>` enums. Like arrays, Vectors can only store values of the same
type.

To create a new, empty vector, we call the associated method `new()`:

```rust
let vector: Vec<i32> = Vec::new();
// Optionally, one may also use the `vec!` macro with initialized values.  Type is inferred.
let vector = vec![1, 2, 3];
```

Now that the vector is defined, it exposes several methods which we can use to manipulate it:

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

A vector follows all rules of the borrow checker - meaning if the vector is mutable, then an
immutable reference to an element is impossible. Vectors also aren't limited to scalar types - you
may define a struct, and store a list of structs within a vector if desired.

## Strings

The `String` collection should be very familiar by now. `String` is a collection of characters
stored on the heap. The `&str` type, or string slice/literal is different from this type, as it's a
primitive type, whereas `String` is a data structure part of the Rust standard library. At its core,
a String is a wrapped `Vec` of bytes.

Strings are rather complicated yet advantageous data structures. If you want to learn more about
Strings at a more technical level, please read the
[Rust book](https://doc.rust-lang.org/stable/book/), as this is just meant to introduce how to use
`String`.

To create a new `String`, use the associated function `new()`, along with others:

```rust
// An empty string
let s = String::new();

// Push a string literal to a String
s.push_str("Web");

// Push a single char using .push()
s.push('3');
```

## Hashmaps

Hashmaps store a mapping of `K` to `V`, and in other languages, are often to referred to as a map,
dictionary, or hash table. As with `T` in `Vec<T>`, `K` and `V` are generic types used to refer to
_any_ type. As with vectors, values within the hashmap are stored on the heap. If an external
variable is placed as part of a hashmap insertion, then the hashmap owns that variable.

To create a new hashmap, the associated method `new()` is also used:

```rust
let mut balances = Hashmap::new();
```

To add new values to the `balances` map. This particular mapping maps a `String` to an `i32`:

```rust
balances.insert(String::from("Bader"), 100);
```

To access a value, a `.get(key: K)` method is also exposed, upon which the value may be fetched by a
reference to the key (so as to prevent ownership):

```rust
let mut balances = Hashmap::new();
balances.insert(String::from("Bader"), 100);
let key = String::from("Bader");
let bader_bal: Option<i32> = balances.get(&key);
```

The `Option` returned must be adequately handled via pattern matching, or a default value must be
provided to `bader_bal`.

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=use+std%3A%3Acollections%3A%3AHashMap%3B%0A%0A%0Afn+main%28%29+%7B%0A%2F%2F+VECTORS%21%0A++++%2F%2F+Declare+a+new.+empty+vector%0A++++let+mut+vector%3A+Vec%3Ci32%3E+%3D+Vec%3A%3Anew%28%29%3B%0A++%0A++++%2F%2F+Add+new+elements+to+the+vector%0A++++vector.push%282%29%3B+%2F%2F+%5B2%5D%0A++++vector.push%283%29%3B+%2F%2F+%5B2%2C+3%5D%0A++++vector.push%284%29%3B+%2F%2F+%5B2%2C+3%2C+4%5D%0A++++%0A++++%2F%2F+Reading+via+.get%28%29%0A++++let+four%3A+Option%3C%26i32%3E+%3D+vector.get%282%29%3B+%2F%2F+retrieves+an+Option%2C+which+can+be+pattern+matched%0A++++%0A++++%2F%2F+Reading+a+vector+via+indexing+-+same+as+an+array%0A++++%2F%2F+use+with+caution%2C+the+index+may+not+exist%21%0A++++let+four%3A+%26i32+%3D+%26vector%5B2%5D%3B%0A++++%0A%0A%2F%2F+STRINGS%21%0A++++%2F%2F+An+empty+string%0A++++let+mut+s+%3D+String%3A%3Anew%28%29%3B%0A++++%2F%2F+Push+a+string+literal+to+a+String%0A++++s.push_str%28%22Web%22%29%3B%0A++++%2F%2F+Push+a+single+char+using+.push%28%29%0A++++s.push%28%273%27%29%3B%0A%0A%2F%2F+HASHMAPS%21%0A++++%2F%2F+An+empty+hashmap%0A++++let+mut+balances+%3D+HashMap%3A%3Anew%28%29%3B%0A++++%2F%2F+Insert+a+key%2C+value+type+of+String+-%3E+i32+%28a+name+to+balance%29%0A++++balances.insert%28String%3A%3Afrom%28%22Bader%22%29%2C+100%29%3B%0A++++%2F%2F+Create+a+key%2C+aka+a+String%0A++++let+key+%3D+String%3A%3Afrom%28%22Bader%22%29%3B%0A++++let+bader_bal%3A+Option%3C%26i32%3E+%3D+balances.get%28%26key%29%3B%0A%0A%7D%0A"></iframe>

## What's happening here?

All three collections and their common, respective operations are shown above. For more info, be
sure to checkout the [Rust Book](https://doc.rust-lang.org/book/ch08-00-common-collections.html) as
well as the [Rust Standard Library's](https://doc.rust-lang.org/std/index.html) documentation for
each of these data structures.
