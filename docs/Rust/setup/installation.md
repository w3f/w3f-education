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

## Code Editors

The most commonly used (and recommended) tool to use for Rust is [VS Code](https://code.visualstudio.com/) with the [Rust analyzer](https://rust-analyzer.github.io/), which can be installed as a VSCode extension.

Alternatively, [Atom IDE-Rust](https://atom.io/packages/ide-rust) may also be used.

# Setting up Your Environment

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

## VSCode

Now that we have the Rust toolchain installed, let's install and configure a text editor. Throughout the course, I will be using VS Code. There are many other very good text editors and integrated development environments out there, and you are more than welcome to use whichever one you like. Nonetheless, I'll show how to install VS Code and configure it with some useful extensions for working with Rust. If you don't have a strong preference for editor, I recommend you use this setup.

If your distribution supports the snappy package manager, you may simply run `sudo snap install code --classic` and wait for the package to download and install. Otherwise, you can find a `.deb`, `.rpm`, or plain `.tar.gz` file to install at https://code.visualstudio.com/Download. Teaching each package manager is beyond the scope of this tutorial, but if you have trouble a web search for `install vscode <my OS and distribution>` should get you going again.

If you prefer an open source _and_ freely-licensed distribution of VS Code that omits telemetry, I can recommend the [VSCodium](https://vscodium.com/) project. See the project's site for installation and reasoning why you might want to use this over VS Code itself.

### Extensions

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