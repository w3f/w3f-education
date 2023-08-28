---
id: lifetimes
title: Lifetimes in Rust
sidebar_label: Lifetimes
description: Learn the Rust lifetime model.
---

If you recall, in the Ownership section of this course, a value in Rust is only as valid as its
scope. Once it is out of scope, it is out of memory and disregarded. This concept is called a
**lifetime**. Every reference in Rust has a **lifetime**, although they are mostly inferred.

## When to Declare Explicit Lifetimes

Lifetimes are also generic, and are used to **validate** references. In essence, the lifetime is
defined by the scope in which a particular reference is deemed valid. In other words, it uses the
**borrow checker** to ensure that dangling pointers don't occur.

Borrows are as valid as the source:

```rust
fn main() { // Lifetime "A", or 'a.
    let y;
    { // Lifetime "B", or 'b.
        let x = 10;
        y = &x;
    }
    // y here would be "dangling", as x is no longer "living".
    println!("{y}");
}
```

The compiler tells the entire story of _why_ this cannot work:

```rust
Compiling playground v0.0.1 (/playground)
error[E0597]: `x` does not live long enough
--> src/main.rs:5:13
 |
5 |         y = &x;
 |             ^^ borrowed value does not live long enough
6 |     }
 |     - `x` dropped here while still borrowed
7 |     // y here would be "dangling", as x is no longer "living".
8 |     println!("{y}");
 |                - borrow later used here
```

Notice here that we have not explicitly defined lifetimes - as they are implicitly done for us.

## Lifetime Annotations

Lifetime annotations, as mentioned, are generics. They follow the convention of an apostrophe, `'`,
followed by the letter of going from `a` onwards.

### Annotating Functions

To annotate a function with an explicit lifetime, use `'a` like any other generic. `'a` essentially
means as long as the function is still alive:

```rust
fn bad_lifetime<'a>() -> &'a i32 {
    let _x: i32 = 19;
    // ERROR: `_x` does not live long enough; it gets dropped at the end of the function!
    let y: &'a i32 = &_x;
    y
}
```

However, as the function name suggests - this does not work, as `_x` does not live long enough and
is deallocated from memory. `y` then points to that deallocated memory, which is a prime example of
a **dangling pointer**. To fix this, we must ensure that `_x` is a reference that has the same
lifetime as `y` as well as the function itself.

```rust
fn fixed_lifetime<'a>() -> &'a i32 {
    let _x: &'a i32 = &19;
    _x
}
```

## Static Lifetimes

A unique lifetime is called `'static`, which explicitly defines a reference as something that can
live for the entirety of the program. A prime example of a `'static` lifetime is `&'static str`, or
string literals, as they are stored in the program's binary, making them always available.

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%0Afn+fixed_lifetime%3C%27a%3E%28%29+-%3E+%26%27a+i32+%7B%0A++++let+_x%3A+%26%27a+i32+%3D+%2619%3B%0A++++_x%0A%7D%0A%0Afn+main%28%29+%7B%0A++++%0A++++let+a+%3D+fixed_lifetime%28%29%3B%0A++++println%21%28%22%7B%7D%22%2C+a%29%3B%0A++++%0A%7D"></iframe>

## What's happening here?

Lifetimes prevent dangling pointers via the Rust borrow checker. In the above example, a fixed
lifetime is defined. This lifetime is valid because the lifetime, labeled `'a`, on `_x` matches that
of the function signature `<'a>`.
