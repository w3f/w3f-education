---
id: rust-appendix
title: Course Appendix
sidebar_label: Course Appendix
---

This page will cover parts that may seem ambiguous or not explained as explicitly as other topics
(i.e., `println!()`, macros, etc.). This course is primarily based on the
[Rust Book](https://doc.rust-lang.org/book/title-page.html), as well as parts of
[Rust by Example](https://doc.rust-lang.org/rust-by-example/) and the
[Rust Reference](https://doc.rust-lang.org/reference/index.html). Using these comprehensive and
esteemed resources to solidify your learning further is highly encouraged.

## Common Formatting & Macros

Throughout this course, the `println!()` macro will be used excessively, which prints some value to
the screen. There are a few different ways this macro can be utilized.

- The two curly brackets indicate a placeholder for some value. Those brackets are called the
  "format syntax", as they format data into an existing String. For example,
  `println!("Hello, {}", "World")` would print "Hello, World". Using this shortcut, most values that
  implement the `Debug` or `Display` trait can be displayed using `println!()`. Most primitive data
  types already implement this trait.
- Sometimes, the format syntax `{}` may be used inline the quotes. For example,
  `println!("{some_variable}")` accomplishes the same as above but with a slightly shortened syntax.

## Commonly Used Types

- [`String`](https://doc.rust-lang.org/std/string/struct.String.html) - this type is not explained
  till Module 5 of this course. However, it is used beforehand for the sake of an example. The `::`
  accessor is used to access some practical methods, as shown below:
  - `String::from("Some text")` - Used to create a new `String` from a string literal.
  - `String::new()` - Used to create a new, 'empty' instance of a `String`.
