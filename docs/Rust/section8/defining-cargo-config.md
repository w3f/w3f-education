---
id: defining-cargo-config
title: Reading & Defining `cargo.toml`
sidebar_label: Understanding Cargo
description: Understand how to utilize cargo.
---

If Rust is installed on your system, then `cargo` by default is installed.  `cargo` is Rust's package management system and can be called from the command line.

## Creating a new project with Cargo

Create a new project using `cargo` using the `cargo new` command.  You will need to have your command line/terminal open.  For the sake of this course, let's call the project `first-cargo`, which will create a new directory with your Rust project within:

```sh
cargo new first-cargo
cd first-cargo/
```

Upon running `tree` or `ls -R`, the file structure is revealed to be the following:

```sh
.
├── Cargo.toml
└── src
    └── main.rs

2 directories, 2 files

```

- `src/` is where your project lives and contains the source of your Rust project.  `main.rs` is where you can and will write executable code.

- `Cargo.toml` is how your Rust project manages project metadata, dependencies, and build options.

## Understanding Cargo.toml

`Cargo.toml` is written in the TOML format, and specifies metadata for your Rust project.  Upon inspecting our project, `first-cargo`'s `Cargo.toml` it should look relatively barebones:

```toml
[package]
name = "first-cargo"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

Each section is defined by square brackets (`[]`) followed by the name within (i.e., `[package]`).  Keys are determined by the name, followed by an equals sign (`=`) and the value as text in double quotes (i.e., `name = "first-cargo"`).

- `[package]` - Specifies the name of the package, version of the binary, and the Rust edition used.

- `[dependencies]` - Specifies a list of local or remote external dependencies.

## Building & Running with Cargo

Running `cargo build` within any directory with `Cargo.toml` will result in an attempt to build the project.  This merely builds the project and generates a `target/` folder with the compiled binary.

```sh
Compiling first-cargo v0.1.0 (/rust-course/first-cargo)
 Finished dev [unoptimized + debuginfo] target(s) in 1.09s
```

Running `cargo run` will both build the project, as well as run the binary.

```sh
Finished dev [unoptimized + debuginfo] target(s) in 0.03s
 Running `target/debug/first-cargo`
Hello, world!
```
