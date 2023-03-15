---
id: what-is-rust
title: What is Rust?
sidebar_label: What is Rust?
description: An introduction to what the Rust programming language is, and how it compares to other languages.
---

Rust is a systems programming language that is aimed to empower its users with high-level, ergonomic code whilst also being able to maintain a level of control akin to a language like C.  It's meant to empower and give confidence to whomever is writing it, and guarantee secure and reliable output.

It offers many solutions and unique takes in terms of combining the best of both object-oriented and functional programming concepts into one single language.  Rust is **statically typed**, focuses on code and memory safety, and a powerful memory management system that eliminates the need for a garbage collector.

## Learning Rust for Substrate

In this course, we'll learn to program in the Rust programming language with a specific focus on the aspects of Rust that are used in the Substrate Blockchain framework. We do not assume any existing knowledge of Rust and will start from the beginning. However, we do assume some familiarity with programming in general, and that you are fluent in at least one other programming language. If you are brand new to programming, it is totally possible to start with Rust, but this course may seem a bit fast for you.

Throughout the course, we will emphasize the differences and similarities between Rust and other programming languages that you may have encountered in the past. Design patterns that are used in the Substrate blockchain framework will also be emphasized, as well as general familiarity with coding techniques and patterns that you will encounter when using Substrate. 

This course will still be very useful for someone who wants to learn Rust but has no intention to use Substrate.

## Course Format

Throughout this course, it will follow mostly a particular format: 

1. Background information about a particular topic
2. Relevant code example 
3. Interactive portion made possible by the [Rust Playground](https://play.rust-lang.org/)

Here is an example of how that might look like:

### Hello, World in Rust.

:::info

The classic "Hello, world" program in Rust.

:::

In every Rust program comes the `fn main()` function.  This function is the entry point for the program, and is where code is actually executed when compiled, and where **the execution of the program begins**.  Every Rust program must have a main function.  It takes no arguments, and returns what is called a unit type in Rust: `()`.

```rust
// Define entry point.
fn main() {

}
```

What does the program above do? Well, nothing.  There is no executable code within the curly brackets of the `main()` function, however it still is a valid Rust program.

## Try it yourself!

This course is meant to be hands on.  Delete the `//` before `println!("Hello world!");`, and click run.  Optionally, you may also change the value within the quotes and experiment. 

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Define+entry+point.%0Afn+main%28%29+%7B%0A++++%2F%2F+Writes+to+the+output.+Delete+the+%27%2F%2F%27+before+println+and+see+what+happens%21%0A+++%2F%2F+println%21%28%22Hello+world%21%22%29%3B%0A%7D"></iframe>

## Resources

- *Rust Programming Language* - https://www.rust-lang.org/
- *Rust Book* - https://doc.rust-lang.org/book/

