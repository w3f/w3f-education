---
id: installing-crate
title: Installing a cargo crate
sidebar_label: Installing a crate
description: Understand how to install a crate and use it in a project.
---

In the previous section of this module, you learned how to create a new `cargo` project, build, and
run it. This section will focus on the `[dependencies]` section of your `Cargo.toml` and how to
bring in external crates for usage within your project. Crates are other Rust packages with publicly
exposed types and functionality for usage in `Cargo` projects.

## Adding a new crate

Two primary methods of declaring an external crate in Rust are directly putting it in `Cargo.toml`
or using the `cargo` CLI.

### Using Cargo.toml

We'll be importing the crate called [`hex`](https://crates.io/crates/hex). It is a crate that easily
encodes and decodes data into hexadecimal representation.

Add this dependency as a key and value under `[dependencies]`, like so:

```toml
[dependencies]
hex = "0.4"

```

The convention is the crate's name, `hex`, followed by the version of the crate, `0.4`. To ensure
everything is correctly in place without building the whole project, you may run `cargo check`:

```sh
Checking hex v0.4.3
Checking first-cargo v0.1.0 (/rust-course/first-cargo)
Finished dev [unoptimized + debuginfo] target(s) in 0.70s
```

### Using the cargo CLI

Optionally, you may also use the CLI to automate this by using `cargo add hex`:

```sh
Updating crates.io index
  Adding hex v0.4.3 to dependencies.
         Features:
         + alloc
         + std
         - serde
```

This will have the same effect as directly putting it within the TOML file.

For more information regarding Cargo and dependencies, visit the official
[Cargo documentation](https://doc.rust-lang.org/cargo/index.html).
