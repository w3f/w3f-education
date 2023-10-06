---
id: alt-data-types
title: Alternative Data Types
sidebar_label: Alternative Data Types
description: Learn when, and how to use non-typical data types
---

Rust's primitive data types can form the basis for more complex data types. These data types are
custom, but are provided when certain primitive types are not able to accommodate some atypical
scenario.

In the Polkadot SDK, a great example of this is the `sp_arithmetic` crate, which provides minimal,
redefined primitives for basic types related to numerics specifically for Susbtrate runtimes.

`sp_core`, another crate, provides predefined types for dealing with cryptographic primitives or
large numbers. Let's explore how to access and use these data types, and why they're useful in the
context of runtime development.

:::tip Confused on what is going on? We often couple Rust with examples from the Substrate codebase.
Anytime you feel lost, make sure to read the tip right below any new concepts that are introduced!
:::

## Using Larger Data Types

When wanting to represent very large numbers, such as a _hash_ or even an elliptic-curve derived
public or private key, it often requires up to 256 bits of data. However, the Rust standard library
supplies data types up to `u128`, or 128-bit long numbers. An alternative is by using an existing
data structure, such as a `String`, however this could be costly, as well as cumbersome process when
reading it later.

These very large numbers are able to be accommodated by using external types. While these may be
slower to process, in cryptographic contexts, it allows us to represent complex numbers numerically.

Some Substrate libraries, such as `sp_core`, provide primitives for dealing with these large
numbers. Let's take a look at `U256`, aka a 256-bit integer type:

```rust
pub struct U256(pub [u64; 4]);
```

:::tip Why is a number a struct?

Because Rust cannot just simply store an entire 256-bit number in one variable, a custom data type
has to be created. This particular type, `U256`, actually stores _four_ `u64` numbers.

:::

todo: use h256 as an example?

In cryptographic contexts, this is especially, useful, as we can now represent 256-bit numbers
numerically.

## "Deterministic" Data Types - Floating Point Numbers

Floating point numbers have presented issues in traditional computing for decades. To make a long
story short, floating point calculations are not deterministic, as different architectures may
calculate the end result differently.

todo: add better sources for this

For this reason, the notion of floating point primitives, such as `f32` and `f64`, cannot, and
should not, be used in the context of the blockchain runtime. Even if one environment can
deterministically use floating point numbers with sufficient accuracy, other clients on the network
may provide alternate calculations.

## Negative Numbers - Unsigned Integers vs. Signed Integers

You may notice that Substrate specifically uses _unsigned_ for many data types which are represented
for a number, such as a `BlockNumber`, which is a `u32`, or even a balance, which is usually
represented as `u128`.

Unsigned types cannot be negative, meaning that all primitives used within a runtime are all
positive, real numbers. This is party due to a few reasons:

1. The notion of a negative balance does not exist for on-chain balances. Even for a `BlockNumber`,
   a negative block number is invalid and unreasonable in any scenario.
2. `u32` and other unsigned types give a higher, _positive_ bound then a type like `i32`. With
   `BlockNumber` as an example, this would allow the total amount of blocks that a network could
   generate to be much higher than using a signed type.

:::tip Thought exercise: if Polkadot used `u8` for the BlockNumber type, how would the chain run
before it overflowed?

Give it some thought, and pick the correct answer. What would a _smaller_ data type imply for
something like `BlockNumber`, which the network uses to progress?

<details>
    <summary>It wouldn't overflow; the error would be handled </summary>
</details>
<details>
    <summary>After the limit of <code>u8::MAX</code> blocks</summary>
</details>
:::

### Context-driven types

In runtime development, data types should be chosen more carefully than normal. Because a runtime
instance is anticipated to run for a long period of time, ideally without too many breaking
upgrades, fundamental primitives and their underlying types must be able to withstand different
scenarios or network load.

They can have a direct impact on the chain itself; from the state and how those types are stored, to
the chain's continued operation and ensuring it can run for an amount of time without interruption.

## A Deeper Look at Scalar & Compound Types

### Type Aliases

Type aliases are used to shorten long, generic types. For example, the following is how one may
access a Balance with all configuration in Substrate:

```rust
 type BalanceOf<T> == ...
```

### Recognizing "Sized" Types
