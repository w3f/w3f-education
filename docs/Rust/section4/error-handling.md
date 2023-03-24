---
id: error-handling
title: Error handling with Result & Option in Rust
sidebar_label: Error handling with Result & Option
description: Learn how to handle errors in Rust, and what the Error Type is.
---

As seen before, *panicking* when the program is running is unideal and should be avoided if necessary.  Rust includes two commonly used *enums* that help ensure data is valid in runtime: `Result` and `Option`.

Both types ensure invalid data and errors are handled adequately and do not cause the program to panic.

## Using Option

Option is an enum that contains two variants - `None` and `Some`: 

```rust 
enum Option<T> {
    None,
    Some(T),
}
```

The `T` here may be a new sight to behold.  This is a **generic type parameter**, which will be covered in module six.  For now, know it means that *any* type can be within `Some` - it doesn't matter *what* it is, just that something is there.

A concrete example would be attempting to access an empty array.  Instead of panicking and attempting to access an index that doesn't exist, we can return an `Option`

```rust 
// An example of a function that returns an Option, aka, Some(i32) or None.
// Notice the angled brackets which contain the type we're expecting.
fn safe_access(index: usize, slice: &[i32]) -> Option<i32> {
    // We check to see if the length of the slice is zero, or
    // less than the requested index.  If it is, we return `None`
    if slice.len() == 0 || slice.len() < index {
        return None;
    }
    // Otherwise, we're good to return the requested item!
    Some(slice[index])
}
```

`None` does the opposite.  If the Option is `None`, it implies the data does not exist.  This is useful for checking the state of some data but does not describe any error associated with a potential failure.

```rust
let empty_array = [];
let valid_array = [1, 2, 3];
// Pass it in as a reference, as per the function signature

safe_access(1, &empty_array); // returns None
safe_access(1, &valid_array); // returns Some(2)
```

## Pattern Matching with Option

Because `Option` returns an enum, it would be good practice to ensure that we handle both variants.  Functions can be called and matched directly:

```rust
let empty_array = [];
let valid_array = [1, 2, 3];

// Technically could be None or Some
// hint: look at the type of this variable
let maybe_value: Option<i32> = safe_access(1, &valid_array);

// However, let's match the function directly:
match safe_access(1, &valid_array) {
    Some(value) => println!("We have a value! {value}"),
    None => println!("It doesn't exist :()")
};

```

## Using `if let` with Option

Alternatively, an `if let` statement may be used instead of `match`. `if let` essentially will peform the same type of pattern matching, where it will look for `Some` value, assign it to a variable if it exists, and safely `unwrap` it:

```rust 
let valid_array = [1, 2, 3];

if let Some(value) = safe_access(0, &valid_array) {
    println!("{value}"); // 1
} else {
     println!("Nothing valid was found!");
}
```

## Using Result

A Result also contains two variants, `Ok(T)` and `Err(E)`.  While the generic `T` still implies any value, the generic `E` can be used to define a custom error type, allowing us to describe why a particular value or scenario did not output as expected.

It is used very similarly to `Option` at times, with the exception that instead of returning `None`, it returns an `Error` that describes what went wrong.  Usually, `Option` should be used when a value is not certain to be existent or not, and `Result` used when referring to a computation that has the possibility of failing.

You may read more on `Option` vs. `Result` [**here**](https://levelup.gitconnected.com/rust-option-vs-result-when-to-use-what-e73e82612cb0).

```rust 
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Here is the example above, only adapted to use a `Result`:

```rust
fn safe_access_result(index: usize, slice: &[i32]) -> Result<i32, String> {
    if slice.len() == 0 || slice.len() < index {
        return Err(String::from("Error! Invalid index!"));
    }
    Ok(slice[index])
}
```

A key aspect is the `E`, or `Err`, part of this expected return type.  It's a String, meaning while it enables us to express why it has failed, it is unideal.

## Defining a Custom Error Type For Result

Rather than having obscure Strings as an Error type, we can instead define a custom enum to represent any potential errors:

```rust
enum SafeArrayError {
    InvalidIndex
}
```

With this type defined, we can now change our function to the following:

```rust

enum SafeArrayError {
    InvalidIndex
}

fn safe_access_result(index: usize, slice: &[i32]) -> Result<i32, SafeArrayError> {
    if slice.len() == 0 || slice.len() < index {
        // Now, we return a context-specific error.
        return Err(SafeArrayError::InvalidIndex);
    }
    Ok(slice[index])
}
```

## Try it yourself!


## What's happening here?
