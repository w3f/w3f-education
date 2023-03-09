---
id: introrust
sidebar_position: 1
---

# Rust for Blockchain Development

Developed by the Technical Education team at the Web3 Foundation, this course introduces programming in Rust for Blockchain applications.

This course follows the free textbook, [The Rust Programming Language](https://doc.rust-lang.org/stable/book/) by Steve Klabnik and Carol Nichols.

This course is designed to teach the fundamentals of Rust to a student who is already fluent in at least one other programming language. This course provides a strong foundation in general purpose Rust, and also emphasizes some aspects of Rust (such as [no_std], anvanced Generics, and the RustWasm toolchain) that are particularly useful when developing with the Substrate blockchain framework.

## Module 1 - Why Learn Rust?

Getting Started. Installation. A hello-world program in Rust. Cargo. A few simple Rust Programs. Variables. Data Types. Functions. Comments. Control Flow.

## Module 2 - Rust 101 - The Basics

Variable Scope. Memory management. How variables interact. References. Background on Programming Safety and why it is critical for Blockchain development. Substrate introduction.

## Module 3 - Intro to Intermediate Rust: Ownership, Borrowing, & Slices

Structs. Enums. Methods. Packages and Crates.
Cargo feature - this will be important for the “std” features all over Substrate. “runtime-benchmarks” and “try-runtime”.

## Module 4 - Intro to Intermediate Rust: Enums & Matching Patterns

Vectors. Hashmaps. More on Strings. Generic types. Traits and shared behaviour.

## Module 5 - Intro to Intermediate Rust: Data Structs & Collections

To Panic or not to Panic. Writing automated tests. Substrate's own OOM and panic implementations. And recreate the infamous “duplicate lang item” error.

## Module 6 - Iterators, Closures, and Smart Pointers

Iterators vs Loops. Closures. Smart Pointers. 

## Module 7 - Advanced Features

Generics vs dynamic dispatch. Conflicting type names. Associated types.

## Module 8 - Web Assembly

A little core info about what wasm is and why it is valuable. The rust-wasm toolchain. How to add a target with rustup. How to cross compile to the new target. How to execute a wasm binary from within Rust (this is How the runtime is executed). How to package for the browser - Not directly Substrate related, but very cool, and very useful.

