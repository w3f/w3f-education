---
id: unit-tests
title: Basic Unit Testing in Rust
sidebar_label: Unit Testing
description: Understand how to unit test your Rust code.
---

With a basic understanding of how dependencies work in Rust, you may learn how to write and
structure a basic testing structure for your Cargo project.

**Unit tests** allow you to _test_ your code for bugs using a set of predefined functions.

Be sure to open your project, `first-cargo`, as that is the repo we will be testing.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tkGYuR1KKf8?si=nuZKzP25OAN5xTFl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Putting tests below the main function

Tests are defined using the `#[test]` macro and are usually either in their separate directory on
the same level as `src` or, in some cases, included in the project file.

Defining tests involves defining a separate module using the `mod` keyword and a special macro to
indicate testing is taking place below the `main()` function:

```rust
#[cfg(test)]
mod tests {
    // Testing functions go here...
}
```

Once this is defined, you may create functions representing unit tests within:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
```

Looking further at this function, `fn it_works()`, notice the `#[test]` macro, which denotes that
this function is a unit test.

### Additional Testing Macros

`assert_eq!()`, `assert!()`, `assert_ne!()` and other macros are used within tests to make an
**assertion** about a particular value.

- `assert_eq!(value1, value2)` - tests the equality of two values. The test passes if they are
  equal.

- `assert!(value)` - tests whether a value is true (or not). The test passes if the value within is
  true.

- `assert_ne!(value1, value2)` - tests whether two values are **not** equal, the tests passes if two
  values are **not** equal.

## Writing & running a test

The above test would work but is a bit _bland_. Let's import some external functions and run tests
using `cargo test`. Similar to `cargo run`, `cargo test` is a command that only runs the functions
specified as unit tests:

```rust
// The function we want to test
fn square(x: i32) -> i32 {
   x * x
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn does_square_work() {
        let squared = square(4);
        assert_eq!(squared, 16);
    }
}
```

Upon running `cargo test`, we can successfully see the test pass:

```rust
running 1 test
test tests::does_square_work ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

For more information regarding testing, it is highly encouraged to review the
[Rust Book's](https://doc.rust-lang.org/book/ch11-01-writing-tests.html) section on it.
