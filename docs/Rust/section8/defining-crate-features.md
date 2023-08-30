---
id: defining-crate-features
title: Features in Cargo
sidebar_label: Specifying features in crates
description: Specify features for crates to utilize.
---

In the last section, we defined the `hex` crate as an external dependency that we could use within
our project with a simple name and version of the crate. However, there are other important factors
to consider than declaring a version.

In some cases, such as the case in Substrate runtime development, the `std` library may not be
available. This is due to the constraints of running in a Wasm runtime versus a native binary.

There are also other cases where `std` may not be available. For this reason, some crates offer the
option of a `no-std` implementation which does not use the Rust Standard Library and can run in
these resource-constrained environments.

## Specifying features

A **feature** in the context of Rust crates refers to the ability to conditionally/optionally
include (or not include) certain sub-dependencies.

To have the `hex` crate be compatible in a `no-std` environment, `default-features` must be
declared:

```toml
[dependencies]
hex = { version = "0.4", default-features = false }
```

This is now more akin to a JSON object, with curly brackets encasing the keys and values within
`hex`. Setting the default features of a crate to `false` will force the crate not to use `std`, as
that was the default.

Keep in mind that not all crates support no-std environments.
