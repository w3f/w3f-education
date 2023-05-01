---
id: installation
title: Installing & Setting up a Rust Developer Environment
sidebar_label: Installing & Setting up a Rust Developer Environment
description: Installing Rust, and setting up your development environment.
---

In this section, you will: 

- Install Rust and its dependencies
- Learn what `rustup` and `cargo` is
- Get your environment ready for Rust development
  
# Setting up Your Environment

## Rustup

There is a standard tool in the Rust ecosystem called `rustup`. This tool allows you to easily install and manage multiple Rust versions and use different Rust versions on a per-project basis. It is similar to a tool like `nvm`, the node version manager in the Javascript ecosystem. In addition to managing the version of Rust itself, it also installs `cargo` the Rust build tool, and various language components such as different target architectures, and clippy, the Rust linting tool.

To install `rustup`, run this install script below:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

This script installs several tools:

- `rustup`, which was covered above,
- [`cargo`](https://doc.rust-lang.org/cargo/index.html), the Rust package manager,
- `rustc`, the official compiler for the Rust language,

This is executing a script from the internet, so if you prefer to be careful, check its contents to ensure it isn't doing anything unwanted.

Select **Option 1** for the standard install. We will add more components later in the course as needed.

```bash
Current installation options:


   default host triple: x86_64-apple-darwin
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>
```

When the command completes, you can confirm that rustup is installed by checking its version with `rustup --version`:

```bash
$ rustup self update
info: checking for self-updates
  rustup unchanged - 1.25.2
```

We can also check the version of the rust compiler and the cargo build tool.

```bash
$ rustc --version
rustc 1.68.0 (a55dd71d5 2022-09-19)

$ cargo --version
cargo 1.68.0 (387270bc7 2022-09-16)

```

This course will use version 1.68, but similar versions will work just as well.

You can update your toolchains at any time by running `rustup update`, and you can even update rustup itself by running `rustup self update`.

## Install VSCode

The most commonly used (and recommended) tool to use for Rust is [VS Code](https://code.visualstudio.com/) with the [Rust analyzer](https://rust-analyzer.github.io/), which can be installed as a VSCode extension.

Alternatively, [Atom IDE-Rust](https://atom.io/packages/ide-rust) may also be used.

Throughout the course, VSCode will be the primary editor of choice. There are other acceptable text editors and integrated development environments also available.

Please head to https://code.visualstudio.com/download to install VSCode.

If you prefer an open source _and_ freely-licensed distribution of VS Code that omits telemetry, [VSCodium](https://vscodium.com/) is also viable. See the project's installation site and the reason why you might want to use this over VSCode itself.


### Extensions

Once VSCode is installed, there are a couple of extensions that will smooth the development experience.

The first extension we'll add is Rust Analyzer, a powerful static analysis tool for the Rust programming language. This extension provides some basics such as syntax highlighting and goto definition, as well as more powerful features such as code completion and documentation by hovering over code.

To install it, enter VS Code's command pallet with `Ctrl + Shift + P`, and paste:

```bash
ext install rust-lang.rust-analyzer
```

The second extension is optional but recommended if you like to do step debugging on your coding projects. It is the Code LLDB extension that provides seamless integration between LLDB, the low-level debugger, and VS Code. To install it, enter the command pallet again (`Ctrl + Shift + P`) and paste:

```bash
ext install vadimcn.vscode-lldb
```

We will not use this extension actively in this course, but it is a great tool to have handy when it comes time to debug your own code.


## The Rust Playground

The Rust playground is an in-browser implementation of a Rust development environment.  Feel free to use it to run snippets of code if setting up a proper development environment is somehow inaccessible.  Throughout this course, you will notice it embedded within the page as follows: 


<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Define+entry+point.%0Afn+main%28%29+%7B%0A++++%2F%2F+Writes+to+the+output.+Delete+the+%27%2F%2F%27+before+println+and+see+what+happens%21%0A+++%2F%2F+println%21%28%22Hello+world%21%22%29%3B%0A%7D"></iframe>

You may also visit it at https://play.rust-lang.org/.
