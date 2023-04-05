---
id: iterators
title: Iterators in Rust
sidebar_label: Iterators
description: Learn how to use iterators in Rust.
---

Iterators in Rust allow you to perform tasks sequentially on a series of items while knowing the end of the sequence.  `Iterator` is a trait that, once implemented, handles many of the nuances of safely looping through collections.  Iterators are **lazy**, meaning they are only used when called upon.

## Creating an Iterator

Most collections we discussed earlier have the `Iterator` trait already implemented.  The most common usage of iterators regards arrays or vectors, and they are often used as an alternative for loops:

```rust
let my_vec = vec![1, 2, 3, 4, 5];

// Call the `.iter()` method on `Vec`:
let iter = my_vec.iter();
for val in iter {
    println!("Value: {}", val);
}
// Optionally, call it in-line:
let my_vec = vec![1, 2, 3, 4, 5];
for val in my_vec.iter() {
    println!("Value: {}", val);
}
```

You may notice that this looks familiar to a regular `for` loop.  This will be discussed more deeply in [Loops vs. Iterators](./loops-vs-iterators.md), but know they are different!

## A closer look at the `Iterator` trait

Let's examine the `Iterator` trait itself:

```rust
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;
    // methods with default implementations elided
}
```

The `next()` method is the heart of an `Iterator`'s functionality, as it's the only method needed to implement the `Iterator` trait.  `next()` returns the next item as `Some(value)` from the iterator, and returns `None` once it's complete.

Notice that although `Iterator` can iterate over many types, it uses an associated type, `Item`.  Using an associated type allows the type implementing the trait to specify the desired outcome, versus a generic would have the developer impose some type that may be incorrect.

## "Consuming" An Iterator & Iterator Methods

As a result of implementing `Iterator`, one can use a few key methods to modify a sequence of items.  For more information on available methods, it is highly encouraged to read through the Rust documentation for the [`Iterator`](https://doc.rust-lang.org/std/iter/trait.Iterator.html) trait.

Some methods consume an iterator, meaning they call the `next( )` method within their implementation.  An example is `.sum()`, which collectively adds all items by calling `next()` until the iterator has reached its end:

```rust
let my_vec = vec![1, 2, 3, 4, 5];
let sum = my_vec.iter().sum();
```

The `.map()` method is very commonly used.  It takes a closure, performs an operation over each item in the iterator, and returns an iterator.  This does not modify the previous iterator, rather it returns a new one with modified values:

```rust
let my_vec = vec![1, 2, 3, 4, 5];
// Returns a new iterator that adds `1` to each item
my_vec.iter().map(|x| x + 1);
```

Another method that operates similarly is `filter()` , which returns an iterator of filtered values based on a conditional statement within the closure:

```rust
let my_vec = vec![1, 2, 3, 4, 5];
// Returns a new iterator that adds `1` to each item
my_vec.iter().filter(|x| *x % 2 == 0);
```

### Using .collect()

Using `collect()`, you can gather the values of an iterator and back into a vector that represents the operation you performed on it:

```rust
let my_vec = vec![1, 2, 3, 4, 5];
// Returns a new iterator containing only even numbers
let filter_iter = my_vec.iter().filter(|x| *x % 2 == 0);
// Returns a new iterator that adds `1` to each item
let map_iter = my_vec.iter().map(|x| x + 1);

// Collect into a filtered Vec
let even: Vec<_> = filter_iter.collect(); // [2, 4]
// Collect into a mapped Vec
let plus_one: Vec<_> = map_iter.collect(); // [2, 3, 4, 5, 6]

```

As some of these methods return an iterator, it's possible to chain them:

```rust
// Both maps then filter on the returned iterator from `map`
let chained_iter = my_vec.iter().map(|x| x + 1).filter(|x| *x % 2 == 0);
```

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+my_vec+%3D+vec%21%5B1%2C+2%2C+3%2C+4%2C+5%5D%3B%0A++++%2F%2F+Returns+a+new+iterator+that+only+contains+even+numbers%0A++++let+filter_iter+%3D+my_vec.iter%28%29.filter%28%7Cx%7C+*x+%25+2+%3D%3D+0%29%3B%0A++++%2F%2F+Returns+a+new+iterator+that+adds+%601%60+to+each+item%0A++++let+map_iter+%3D+my_vec.iter%28%29.map%28%7Cx%7C+x+%2B+1%29%3B%0A++++%2F%2F+Chain+iterators%21%0A++++let+chained_iter+%3D+my_vec.iter%28%29.map%28%7Cx%7C+x+%2B+1%29.filter%28%7Cx%7C+*x+%25+2+%3D%3D+0%29%3B%0A%0A++++%2F%2F+Collect+into+a+filtered+Vec%0A++++let+even%3A+Vec%3C_%3E+%3D+filter_iter.collect%28%29%3B%0A++++%2F%2F+Collect+into+a+mapped+Vec%0A++++let+plus_one%3A+Vec%3C_%3E+%3D+map_iter.collect%28%29%3B%0A++++%2F%2F+Collect+into+a+Vec+that+combined+the+two+operations%0A++++let+chained%3A+Vec%3C_%3E+%3D+chained_iter.collect%28%29%3B%0A++++%2F%2F+Consume%21%0A++++let+sum%3A+i32+%3D+my_vec.iter%28%29.sum%28%29%3B%0A%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+even%29%3B%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+plus_one%29%3B%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+chained%29%3B%0A++++println%21%28%22%7B%7D%22%2C+sum%29%3B%0A%7D%0A"></iframe>

## What's going on here?

The code features a collection of various iterators stemming from the same `Vec`, `my_vec`.  Iterators do not directly modify the `Vec`. Rather each operation returns a new iterator with values that may be modified, which is the case with `map()`.
