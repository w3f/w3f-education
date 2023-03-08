---
id: module1
sidebar_position: 1
---

# 1. Installing Rust

## Installing Rust

Please follow the instructions to [install Rust using rustup](https://www.rust-lang.org/tools/install) on your computer. There are other ways to install Rust which are outlined [here](https://forge.rust-lang.org/infra/other-installation-methods.html).

## Code Editors

A few code editors and plugins recommeded by Rust developers

- [VS Code](https://code.visualstudio.com/) with [RustAnalyzer](https://rust-analyzer.github.io/)
- [Atom IDE-Rust](https://atom.io/packages/ide-rust)


## Hello World

- Writing comments in Rust programs
- Writing the main function in Rust
- Use curly brackets to encapsulate a function's body
- Four space indentation
- println macro for printing a line
- Writing a string
- Checking Rust compiler version
- Compiling and executing a Rust program

<iframe width="560" height="315" src="https://www.youtube.com/embed/2Uq6W0W9Rhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Cargo - Package Manager

- What is Cargo?
- Use Cargo to create a "Hello world!" program
- Cargo toml file
- Crates - packages of code in Rust
- Cargo build, run and check
- Cargo build --release
- Substrate Node Template Repo cargo.toml file and cargo build, run

<iframe width="560" height="315" src="https://www.youtube.com/embed/NKj08cBw1WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Rust Variables

- Usage of `let` to create variables
- Immutability of Rust variables
- How to make a Rust variable mutable?
- Can a mutable Rust variable support different types of data?
- Difference between shadowing a variable vs. making it mutable


<iframe width="560" height="315" src="https://www.youtube.com/embed/3uv_XU4fR-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Rust Data Types

- Rust is statically typed language
- Scalar types - Integers, Floating point, Boolean and Character types
- Integer overflow
- Compound types - Tuples and Arrays
- Constants in Rust

(video tutorial)

## Rust Operators

- Arithmetic - addition, subtraction, multiplication, division, remainder, exponent
- Boolean - and, or, not
- Comparison
- Bitwise

(video tutorial)

## Importing Rust Libraries

- Standard Libraries. Example: `use std::io;`
- demo functionality from `std::io` library
- Library crates. Adding to `Cargo.toml` file
- demo functionality from `rand`crate


## Rust Functions

- main() function - the entry point of a Rust program
- function parameters 
- function signatures and parameter types
- Rust is an expression based language
- statements vs expressions
- functions with return values

(video tutorial)

## Rust Control Flow

- if/else if
- while
- for
- loops and loop labels

(video tutorial)


## Rust Program Examples

- Guess game
- ??

(video tutorial)

## Exercises

(Coding problems)

# Course Introduction

In this course we'll learn to program in the Rust programming language with a specific focus on the aspects of Rust that are used in the Substrate Blockchain framework. We do not assume any existing knowledge of Rust and will start from the beginning. However, we do assume some familiarity with programming in general, and that you are fluent in at least one other programming language. If you are brand new to programming, it is totally possible to start with Rust, but this course may seem a bit fast for you.

We will roughly follow the excellent book, [The Rust Programming Language by Steve Klabnik and Carol Nichols](https://doc.rust-lang.org/book/), and encourage you to read that book along with this course if you want to maximize your learning. Although we mostly follow that book, we will not cover everything that it covers, and will will cover some topics that it does not cover, such as building to WebAssembly, and cover some topics in more detail, such as generics and traits.

Throughout the course we will emphasize the differences and similarities between Rust and other programming languages that you may have encountered in the past. We will also emphasize design patterns that are used in the Substrate blockchain framework, and build familiarity with coding techniques and patterns that you will encounter when using Substrate. That being said, this course will still be very useful for someone who wants to learn Rust but has no intention to use Substrate.

In the next videos, we will get your environment set up so you can begin working with Rust. There is a video for each platform that this course supports (Linux, Mac, and Windows). These videos cover the same concepts, and you only need to follow the one for your platform of choice. If you are undecided about which platform to use, I recommend Linux or Mac OS.

# Setting up Your Environment (Linux)

## Rustup

There is a common tool in the Rust ecosystem called `rustup`. This tool allows you to easily install and manage multiple versions of Rust, and use different versions of Rust on a per-project basis. It is similar in some ways to a tool like `nvm`, the node version manager, in the Javascript ecosystem. In addition to managing version of Rust itself, it also installs `cargo` the rust build tool, and various language components such as different target architectures and clippy, the Rust linting tool.

To install rustup, simply run this install script.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

This is executing a script from the internet, so if you prefer to be careful, I encourage you to check the contents of the script to make sure it isn't doing anything nasty. At least this script does _not_ require root access unlike many such scripts on the internet.

Select option 1 for the standard install. We will add more components later in the course and learn what they do at that time.

When the command completes, you can confirm that rustup is installed by checking its version with `rustup --version`. In this course we are using version 1.25.1. Any similar version will also work fine.

```bash
$ rustup self update
info: checking for self-updates
  rustup unchanged - 1.25.1
```

We can also check the version of the rust compiler and the cargo build tool.

```bash
$ rustc --version
rustc 1.64.0 (a55dd71d5 2022-09-19)

$ cargo --version
cargo 1.64.0 (387270bc7 2022-09-16)

```

This course will use version 1.64, but again, similar versions will work just as well.

You can update your toolchains at any time by running `rustup update`, and you can even update rustup itself by running `rustup self update`.

## VS Code

Now that we have the Rust toolchain installed, let's install and configure a text editor. Throughout the course, I will be using VS Code. There are many other very good text editors and integrated development environments out there, and you are more than welcome to use whichever one you like. Nonetheless, I'll show how to install VS Code and configure it with some useful extensions for working with Rust. If you don't have a strong preference for editor, I recommend you use this setup.

If your distribution supports the snappy package manager, you may simply run `sudo snap install code --classic` and wait for the package to download and install. Otherwise, you can find a `.deb`, `.rpm`, or plain `.tar.gz` file to install at https://code.visualstudio.com/Download. Teaching each package manager is beyond the scope of this tutorial, but if you have trouble a web search for `install vscode <my OS and distribution>` should get you going again.

If you prefer an open source _and_ freely-licensed distribution of VS Code that omits telemetry, I can recommend the [VSCodium](https://vscodium.com/) project. See the project's site for installation and reasoning why you might want to use this over VS Code itself.

## Extensions

Once you have your editor or IDE of choice installed, you can add some useful extensions that will make developing in Rust much nicer and more fun.

The first extension that we'll add is Rust Analyzer, a powerful static analysis tool for the Rust programming language. This extension provides some basics such as syntax highlighting and goto definition, as well as some more powerful features such as code completion, and documentation by hovering over code.

To install it, enter VS Code's command pallet with `Ctrl + Shift + P`, and paste:

```bash
ext install rust-lang.rust-analyzer
```

The second extension is optional, but recommended if you like to do step debugging on your coding projects. It is the Code LLDB extension which provides seamless integration between LLDB, the low level debugger, and VS Code. To install it, enter the command pallet again (`Ctrl + Shift + P`) and paste:

```bash
ext install vadimcn.vscode-lldb
```

We will not use this extension actively in this course, but it is a great tool to have handy when it comes time to debug your own code.

# Setting up Your Environment (Mac)

TODO Basically the same script as for linux

# Setting up Your Environment (Windows)

TODO Basically same script as for linux.

TODO Consider offering support for native windows AND WSL

# Hello World

Now that we have our development environments set up to our liking, it is time to look at our first program, the classic `Hello World`. We'll leverage the cargo tool that we installed previously to scaffold this new program. Navigate to a working directory that you like and enter:

```bash
cargo new my-first-program
```

## Project Structure

```bash
$ cargo new my-first-program
     Created binary (application) `my-first-program` package
```

This creates a new director called `my-first-program` with the structure of a simple Rust program inside. Navigate into that directory, and launch VS Code with the command:

```bash
code .
```

Among the files that cargo has created for us is  `.gitignore` file for use with the git version control system. I highly recommend using git for your Rust projects, and all your programming projects for that matter, but we will not cover git in this course. Looking at the file, we see that Rust projects typically want to ignore the `target` directory which gives us a clue about where our build artifacts will end up when we compile our program.

Next we see a `Cargo.toml` file. This file contains some metadata about our project including a name, version, and the Rust edition that this project is following. Throughout this course we will be using the 2021 edition, which is the latest edition. We can add more metadata to this file. Let's add a description.

```toml
description = "My first Rust program. Gonna be a Substrate dev in a few weeks!"
```

None of this metadata affects how your program runs, but is useful in case we publish any of our code for others to consume. For example, many Rust programmers choose to publish their programs on the crates.io website, or on a git hosting service such as gitlab or github. There is a link in the cargo.toml file for where we can learn more about what keys are supported.

Lastly, we see the `[dependencies]` section. This is where we list any other crates that we will be depending on in our project. For this simple hello world project, and many of the other learning projects in this course, we will not need any dependencies, but most real-world projects will depend on some external code. You have likely seen this kind of file in whatever programming language you are familiar with already. For example, it is analogous to `package.json` in the javascript world, `stack.yaml` in the Haskell world, or `requirements.txt` in the python world.

## Source Code

Finally, let's take a look in the `src` directory where the Rust source code is kept. There is a single file called `main.rs`. This file name indicates that the entry point to the entire program is in this file. Looking inside, we see the `main` function which will be called when we run our program. We will learn how to read function signatures later on in the course, but for now we can simply notice that this function takes no arguments and has no return type.

Inside we have a call to a single macro `println!("Hello, World!");` The `!` tells us that this is a macro, and, as you have probably guessed, this macro is responsible for printing a line of tet to the screen with a new line character at the end. `println!` is one of the most commons macros in Rust, but it is only available when the standard library is available. Typically this will be the case, but one notable exception is inside of a Substrate runtime. We'll discuss this further near the end of the course when we talk about WebAssembly. For now, we will use `println!` often.

## Build and Run

To build our program, we can use the command `cargo build`. This creates a file at `target/debug/my-first-program` which we are free to run.

```bash
$ cargo build
   Compiling my-first-program v0.1.0 (.../my-first-program)
    Finished dev [unoptimized + debuginfo] target(s) in 0.24s

$ ./target/debug/my-first-program 
Hello, world!
```

The program gives the expected output! Notice the location of the built file inside the `target` directory. This explains the contents of the `.gitignore` file we saw earlier. All build artifacts, including intermediate ones will be placed in this `target` directory. For large Rust projects, such as Substrate, this folder can grow quite large.

Because it is so common to build a program and then immediately run it, cargo provides a short hand for this which is the `run` subcommand.

```bash
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/my-first-program`
Hello, world!
```

So far we have created debug builds of our programs. Debug builds keep debugging information such as variable names in the binary, and are also faster to compile. For these reasons, we will use debug builds throughout this course. It is also possible to create a release build which is slimmer and faster to execute, but slower to compile. To get a release build, add the `--release` flag to either `cargo build` or `cargo run`. When working with Substrate, it is often necessary to create a release build so that time sensitive tasks (such as block authoring) execute quickly enough.

```bash
$ cargo run --release
   Compiling my-first-program v0.1.0 (/home/joshy/ProgrammingProjects/my-first-program)
    Finished release [optimized] target(s) in 0.17s
     Running `target/release/my-first-program`
Hello, world!
```

# More Output

In the previous video, we learned the basic usage of the `println!` macro. In this video we will go just a bit deeper on how to print output.

In addition to the `println!` macro, there is also the `print!` macro which does the exact same thing, but without appending a new line to the end.

```rust
fn main() {
    print!("Hello, world!");
}
```

```bash
$ cargo run
   Compiling my-first-program v0.1.0 (.../my-first-program)
    Finished dev [unoptimized + debuginfo] target(s) in 0.16s
     Running `target/debug/my-first-program`
Hello, world!$ 
```

Notice that my command prompt is now on the exact same line as the output of the program. There is no new line at the end .

Both the `println!` and `print!` macros support format string substitution. We will use this feature extensively after we learn about variables, but for now let's explore it with simple strings.

```rust
fn main() {
    println!("Hello, {}!", "world");
}
```

The output of this program is identical to before. It still says "Hello, world!". The first parameter to the `println!` macro is called a format string. And the `{}` curly braces are replaced with the next parameters that follow.

Format strings allow more than simple substitution. They also allow us to control details about how to data is formatted. To show this more clearly, let's consider some numerical data.

```rust
    // Standard formatting
    println!("The answer is {}", 42);

    // Number occupies 4 spaces
    println!("The answer is {:4}", 42);

    // Number occupies 4 spaces and has leading zeros
    println!("The answer is {:04}", 42);
```

```text
The answer is 42
The answer is   42
The answer is 0042
```

You can imagine how this could be combined with variables to create some powerful output. There are many more ways to format data, some of which will be covered later in the course. If you are looking for something specific, a web search will typically help.

