---
id: explore-pallet-template
title: Exploring the pallet template
sidebar_label: Exploring the pallet template
description: Explore the pallet template, and get a sneak peek into what is to come next!
---

We will spend most of our time in the `pallets/connect` folder in the next modules. Upon opening it,
there are a few items of interest, mostly with testing, as well as the actual source code of the
pallet. Again, as mentioned in the last section of this module, this is just a Rust crate that uses
FRAME to generate and implement certain traits and structures to be compatible with the runtime.

Our pallet, called `pallet-connect`, defines our custom logic that is then enabled by our runtime
within the node template.

## lib.rs

`lib.rs` defines the entry point for the pallet. It contains all the core logic - extrinsics,
events, and errors, are all defined by a single struct:

```rust
#[pallet::pallet]
pub struct Pallet<T>(_);
```

We will go into more detail on the structure of `lib.rs` later but know for now that this makes a
FRAME pallet at the most basic level. Pallets, just like this one, are later imported as a crate to
the runtime, where the aforementioned `construct_runtime!` macro is responsible for defining and
constructing a runtime based on the collection of pallets and their respective configurations.

## mock.rs and tests.rs

In most pallets, including our template, you will also see the following files: `mock.rs` and
`tests.rs`. As one may assume, they are used for two purposes:

- `mock.rs` is used for configuring a test environment, i.e., a test runtime configured for unit
  testing.
- `tests.rs` is where unit tests reside and act on the values and configuration defined within
  `mock.rs`

## benchmarking.rs and weights.rs

Benchmarking and weights measure an extrinsic's performance, or **weight**. Substrate is built
around the concept of **weight**, which measures how much computation is required to execute it
on-chain. Using benchmarking, weight can be assigned to each extrinsic, and the `weights.rs` file is
generated. Often, this weight corresponds to how much a user will pay to execute that state change.
Weights also ensure that the transactions within a block can be executed successfully within the
block production time window.

Although these two won't be covered in this course in-depth at a technical level, they are both
crucial concepts to learn if one wishes to create a production-grade pallet.
