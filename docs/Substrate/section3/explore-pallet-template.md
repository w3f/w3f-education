---
id: explore-pallet-template
title: Exploring the pallet template
sidebar_label: Exploring the pallet template
description: Explore the pallet template, and get a sneak peek into what is to come next!
---

In the next modules we will spend most of our time inside of the `pallets/connect` folder. Upon opening it, there are a few items of interest, mostly with testing, as well as the actual source code of the pallet.  Again, as mentioned in the last section of this module, this is just a Rust crate that uses FRAME to generate and implement certain traits and structures, so that it is compatible with the runtime.

Our pallet, called `pallet-connect`, defines our custom logic that is then enabled by our runtime within the node template.

## lib.rs

`lib.rs` defines the entry point for the pallet.  It contains all the core logic - extrinsics, events, and errors, are all defined by a single struct:

```rust
#[pallet::pallet]
pub struct Pallet<T>(_);
```

We will go into more detail on the structure of `lib.rs` later, but know for now that this is what makes a FRAME pallet at the most basic level.  THis is later imported as a crate to the runtime, where the aforementioned `construct_runtime!` macro is responsible for defining a runtime based off of the collection of pallets and their respective configurations.

## mock.rs and tests.rs

In most pallets, including our template, you will also see the following files: `mock.rs` and `tests.rs`.  As one may assume, they are used for two purposes:

- `mock.rs` is used for configuring a test environment, i.e., a test runtime that is configured to be used for unit testing.
- `tests.rs` is where unit tests actually reside, and act on the values and configuration defined within `mock.rs`

## benchmarking.rs and weights.rs

Benchmarking and weights both are used to measure the performance, or **weight** of an extrinsic.  Substrate is built around the concept of **weight**, where each state change carries how much it computation is required to execute it on-chain.  Using benchmarking, `weights.rs` can be generated, therein a weight can be assigned to each extrinsic.  It is this weight that defines how much a user will pay to execute that state change.

Although these two won't be covered in-depth at a technical level in this course, they are both crucial concepts to learn if one wishes to create a production grade pallet.