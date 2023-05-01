---
id: why-rust
title: Why Learn Rust?
sidebar_label: Why Learn Rust?
description: A brief overview of the pros of learning the Rust programming language.
---

Before starting your Rust development journey, it is essential to understand _why_ Rust was the language chosen for this course as, if you are new to programming, the reasons why Rust was chosen may be foreign.

 Before learning more about Rust, see below a few general programming terms and what they mean.

 - A **programming language** is a way for humans to write instructions for a computer to follow. Programming languages are exact and similar to spoken languages like English, Spanish, or French; and contain a set of rules for how a program should be written.  This is called the **syntax** of the program.

 - A **compiler** is a special program that translates the code we write, whether it be Rust or something else, into something a computer can understand (machine code). It acts as a translator between the human code and the machine. 

 - There are two phases of a program - **compile-time** and **runtime**.  Compile time is when a human’s code is converted to machine code.  Runtime refers to the period when the program has been running after it has been compiled. 
  
 - A **garbage collector** manages a program’s memory, i.e. when and where memory should be allocated and released.  The benefit of a garbage collector is that the programmer doesn't have to account for how to allocate memory within code.

## Rust is safe

The primary reason why Rust is used is because of **safety** reasons. In the context of programming, safety means that the programmer can confidently write a program with the certainty that it will work as intended. In more technical terms, a safe language ensures memory safety and a safe language cannot write a dangerous program (unless those safety features are bypassed).

Safety is mainly derived from two factors that work in tandem: 

1. Rust's strict type system
2. Rust's robust and pedantic compiler that checks every single line of code to ensure it will not be invalid now, *or* in the future.

For example, if the Rust compiler detects an issue with a variable within your program, it will notify the programmer that this would become an issue in runtime and the program will not be allowed to compile.

Safe programming is also a matter of security. Many exploits and hacks occur because the program's memory can be accessed and modified in an unsafe or unauthorized way.

These factors are crucial when building applications and programs that make guarantees in impactful industries. The Rust compiler's strictness makes it hard to write *bad* or *dangerous* code.


## Safety

Because Rust is so strict at compile-time, there is no need for a **garbage collector** or any other mechanism that operates with the program’s runtime.  Effectively, this means that Rust’s powerful, robust typing system comes at zero cost.  These abstractions do not sacrifice the readability, ease of use, or speed of Rust.

This allows for a level of control comparable to something lower-level, such as C, but is much more beginner friendly in terms of writing useful programs.  It also allows for flexibility for applications that require granular control and resource management, such as embedded systems, operating systems, and distributed ledgers.

Rust lowers the barriers when dealing with more complex concepts such as concurrency, low-level memory management, and data representation.

### Rust Safety by Example

Take this example - if we try to compile this Rust code (note that the lines of code starting with `//` are comments that are not executed):

```
    // Here, the number five variable is, well, the number 5. It is a number that can be added and subtracted.
    let the_number_five: u32 = 5;
    // Here is another variable - but instead of being a number it's a character, as denoted by the `char` type and the single quotes surrounding the 5 ('5')
    let imposter_number_five: char = '5';
    // Let’s say we want to add them - this shouldn't work, as this is the same as trying to add a number to a word.
    let the_number_ten: u32 = the_number_five + imposter_number_five;
    // FAILURE!
    println!("{the_number_ten}");
```

The Rust compiler, before we even run the program, gives an error as to *why* this is impossible to compile. See below the level of detail the compiler gives the programmer, including a reference for why this may not compile.

```
  Compiling playground v0.0.1 (/playground)
error[E0277]: cannot add `char` to `u32`
 --> src/main.rs:5:38
  |
5 | let the_number_ten = the_number_five + imposter_number_five;
  |                                      ^ no implementation for `u32 + char`
  |
  = help: the trait `Add<char>` is not implemented for `u32`
  = help: the following other types implement trait `Add<Rhs>`:
            <&'a u32 as Add<u32>>
            <&u32 as Add<&u32>>
            <u32 as Add<&u32>>
            <u32 as Add>

For more information about this error, try `rustc --explain E0277`.
```

In this specific case we cannot add a type number with a character.

## Resources

- *Why Rust? by Dimitiy Kashitsyn at Parity Technologies* - https://www.parity.io/blog/why-rust

