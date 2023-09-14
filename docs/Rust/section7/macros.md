---
id: macros
title: Macros in Rust
sidebar_label: Macros in Rust
description: Learn what macros are and how to create basic macros in Rust.
---

Macros in Rust is, in the most basic sense, "code that writes code", also known as
_metaprogramming_. By now, you have seen the `println!()` macro many times, and it illustrates how
useful macros may be in everyday coding.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3ZIc0V9X9xo?si=iib4oo30pY2kRwM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Another prime example that you have seen is the use of the `#[derive]` macro, which can implement
traits on types automatically:

```rust
// Automatically implements this type.
#[derive(PartialEq)]
struct SomeType;
```

Macros are called before the compiler interprets the code, so they can perform these operations
(i.e., implementing a trait for you). This is usually called "expanding," as the macro's code
expands to actual, usable Rust code the compiler can interpret and use.

## Macro Types

There are two primary types of macros:

- Declarative or "`macro_rules!`" Macros
- Procedural Macros - which also have subtypes

### Declarative Macros

Declarative macros are the most widely used and often easier to write than procedural ones. They
allow programmers to write expressions akin to `match` statements that "fill in the blank" to make
writing Rust more concise. Put simply; declarative macros operate almost like a template where the
parameters provided by the programmer fill in the blanks.

### Procedural Macros

Procedural macros are more complex, accepting arbitrary code as input and producing code as output.
This code, called a `TokenStream`, represents this input and output. Procedural macros operate more
like a function, accepting a `TokenStream` as a parameter and specifying a return type as a
`TokenStream`. Part of the complexity in creating these macros is that they must be in a separate
crate, impacting the Rust project's structure.

There are three primary types of procedural macros:

- `#[derive]` macros specify code to add to entities such as structs and enums.
- Function-like macros which structurally look and work like functions.
- Attribute-like macros which define custom attributes on a particular entity.

In this course, we won't be reviewing how to write a procedural macro. For more reading, it is
encouraged to read the [Rust Book's examples](https://doc.rust-lang.org/book/ch19-06-macros.html),
as well as the [The Little Book of Rust Macros](https://veykril.github.io/tlborm/) for more in-depth
reading on how macros can be utilized.

## Writing a Basic Declarative Macro

### Overview

In this example, we will be writing a declarative macro that utilizes `macro_rules!`. As stated
before, a declarative macro similarly works in principle to a match statement, as it declares a set
of rules executed in order until the condition is reached. Once the rule is met, the macro generates
the corresponding Rust code.

Courtesy of
[The Little Book of Rust Macros](https://veykril.github.io/tlborm/decl-macros/macros-methodical.html),
the following examples help to solidify this concept.

```rust
// Each rule looks like the following:
($matcher) => {$expansion}
```

And in practice:

```rust
// This simply returns the expression: "4", aka the result of "1 + 3"
macro_rules! four {
    () => { 1 + 3 };
}

fn main() {
   let f = four!(); // 4
   println!("{f}"); // 4
}
```

### Creating a square! and factor! macro

Macros can also utilize
[metavariables](https://veykril.github.io/tlborm/decl-macros/macros-methodical.html#metavariables)
to capture input and values from outside of the macro. One more commonly used is the `expr`
metavariable, which signifies some expression as an input.

Using these concepts, let's create a macro that takes a number and squares it:

```rust
macro_rules! square {
    ($e:expr) => { $e * $e };
}

fn main() {
   let f = square!(10); // 100
   println!("{f}"); // 100
}
```

Slightly more advanced, let's allow our macro to take a number, find all factors, then return a new
`Vec` of those factors:

```rust
macro_rules! square {
    ($e:expr) => {
        $e * $e
    };
}

macro_rules! find_factors {
    ($e:expr) => {{
        let mut factors = Vec::new();
        for multiplier in 1..=$e {
            if $e % multiplier == 0 {
                factors.push(multiplier);
            }
        }
        factors
    }};
}

fn main() {
    let f = square!(10);
    let factors = find_factors!(24);
    println!("{f}");
    println!("{:?}", factors);
}
```

## Try it yourself

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=macro_rules%21+square+%7B%0A++++%28%24e%3Aexpr%29+%3D%3E+%7B%0A++++++++%24e+*+%24e%0A++++%7D%3B%0A%7D%0A%0Amacro_rules%21+find_factors+%7B%0A++++%28%24e%3Aexpr%29+%3D%3E+%7B%7B%0A++++++++let+mut+factors+%3D+Vec%3A%3Anew%28%29%3B%0A++++++++for+multiplier+in+1..%3D%24e+%7B%0A++++++++++++if+%24e+%25+multiplier+%3D%3D+0+%7B%0A++++++++++++++++factors.push%28multiplier%29%3B%0A++++++++++++%7D%0A++++++++%7D%0A++++++++factors%0A++++%7D%7D%3B%0A%7D%0A%0Afn+main%28%29+%7B%0A++++let+f+%3D+square%21%2810%29%3B%0A++++let+factors+%3D+find_factors%21%2824%29%3B%0A++++println%21%28%22%7Bf%7D%22%29%3B%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+factors%29%3B%0A%7D%0A"></iframe>

## What is happening here?

Two declarative macros are defined, `square!` and `find_factors!`. Both take an expression and
return a mutated version of the input. `square!` simply returns a square version of the number,
while `find_factors!` does a few novel tasks:

- Takes an expression, `$e`.
- Defines a new inner scope to return.
- Within that scope, creates a `Vec` of factors to return.
- Declares a `for` loop, which iterates from the range of `1` to the value of `$e` (i.e.,. `1` to
  `24`).
- Finds if it is a factor via modulo and appends it to the array if it is.
