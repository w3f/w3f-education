---
id: error-handling
title: Error handling with Result & Option in Rust
sidebar_label: Error handling with Result & Option
description: Learn how to handle errors in Rust, and what the Error Type is.
---

As seen before, *panicking* when the program running is unideal, and should be avoided if necessary.  Rust includes two very commonly used *enums* that help in ensuring that data is valid in runtime: `Result` and `Option`.

Both of these types aid in ensuring invalid data and errors get handled properly, and do not cause the program to panic.

## Using Option

Option is an enum that contains two variants - `None` and `Some`: 

```rust 
enum Option<T> {
    None,
    Some(T),
}
```
The `T` here may be a new sight to behold. This is what's called a generic, which will be covered in module six.  For now, know it means that any type can be within `Some` - it doesn't matter *what* it is, just that something is there.

`None` does the opposite. If the Option is `None`, it implies the data does not exist.  This is useful for checking the state of some data, but does not describe any error associated to a potential failure.

## Using Result

A Result also contains two variants `Ok(T)` and `Err(E)`. While the generic `T` still implies any value, the generic `E` can be used to define a custom error type, allowing us to describe why a particular value or scenario did not output as expected.

```rust 
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

When interacting outside of the program, such as opening a file, a `Result` is returned in order to signify success, or some error, with accessing that file.

```rust
// Example taken from the Rust Book:

use std::fs::File;

fn main() {
    let greeting_file_result = File::open("hello.txt");

    let greeting_file = match greeting_file_result {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };
}
```

Notice the use of match within this statement - we can elegantly use pattern matching to view if the file was able to be opened or not.

There is an issue with this program; it panics.  

## Try it yourself!


## What's happening here?
