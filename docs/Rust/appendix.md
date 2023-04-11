---
id: rust-appendix
title: Course Appendix
sidebar_label: Course Appendix
---

This page will cover any parts which may seem ambiguous or not explained as explicitly as other topics may be (i.e., `println!()`, macros etc).  As mentioned before, this course is largely based on the [Rust Book](https://doc.rust-lang.org/book/title-page.html), as well as parts of [Rust by Example](https://doc.rust-lang.org/rust-by-example/) and the [Rust Reference](https://doc.rust-lang.org/reference/index.html).  It is highly encouraged to use these comprehensive and esteemed resources to solidify your learning further.

## Common Formatting & Macros

Throughout this course, the `println!()` macro will be used excessively, which prints some value to the screen.  There are a few different ways this macro can be utilized. 

- The two curly brackets (called the "format syntax", as it formats some bit of interpolates some data into an existing String) indicate a placeholder for some value.  For example, `println!("Hello, {}", "World")` would print "Hello, World".  Using this shortcut, most values that implement the `Debug` or `Display` trait can be displayed using `println!()`.  Most primitive data types already implement this trait.
  
- Sometimes, the format syntax, `{}` may be used inline the quotes.  For example: `println!("{some_variable}")`  This accomplishes the same as above, but with a slightly shortened syntax.

## Commonly Used Types

- [`String`](https://doc.rust-lang.org/std/string/struct.String.html) - this type is not explained till Module 5 of this course, however, is used beforehand for the sake of an example.  The `::` accessor is used to access some useful methods, as shown below: 
    - `String::from("Some text")` - Used to create a new `String` from a string literal.
    - `String::new()` - Used to create a new, 'empty' instance of a `String`.
