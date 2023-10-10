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

:::tip Confused on what is going on? Anytime you feel lost, make sure to read the tip right below
any new concepts that are introduced! :::

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

In cryptographic contexts, this is especially, useful, as we can now represent 256-bit numbers
numerically.

## "Deterministic" Data Types - Floating Point Numbers

Floating point numbers have presented issues in traditional computing for decades. To summarize,
floating point calculations are not deterministic, as different architectures may calculate the end
result differently - a 32-bit system will calculate a floating point number differently from a
64-bit system.
[This video goes into more depth about the issues presented here.](https://www.youtube.com/watch?v=PZRI1IfStY0).

While in _most_ cases, an inaccuracy to the 100th or 1000th place is not a terrible thing, in the
case of dealing with things such as balances in a blockchain, floating point rounding errors could
easily result in different nodes calculating different balances.

For this reason, the notion of floating point primitives, such as `f32` and `f64`, cannot, and
should not, be used in the context of the blockchain runtime. Even if one environment can
deterministically use floating point numbers with sufficient accuracy, other clients on the network
may provide alternate calculations.

`sp-arithmetic` provides data types to deal with numbers less than zero, and allows them to be dealt
safely in runtime. Unlike floating point arithmetic, which is not deterministic, these data types
allow fixed point arithmetic. Fixed point arithmetic provides a uniform, deterministic result, as
they operate on parts of a whole rather than the relative nature of floating point arithmetic.

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

Give it some thought, and pick an answer! What would a _smaller_ data type imply for something like
`BlockNumber`, which the network uses to progress?

<details class="wrong">
    <summary><b>It wouldn't overflow; the error would be handled</b></summary>
Not quite - integer overflows can happen regardless of whether it is handled or not.  A more serious implication is at play here - if the chain's height is bound by a small number type, then that is effectively the maximum amount of blocks which can be generated.
</details>

<details class="correct">
    <summary><b>After the limit of <code>u8::MAX</code> blocks</b></summary>

Correct!

The limit of a `u8::MAX` would indicate the limit for the blockchain, and thus how many blocks can
be generated.

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
 type BalanceOf<T> = <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
```

This type alias truncates a long(er) type which is used to access the Balances interface from one of
the most widely used pallets, `pallet_balance`. You may notice type aliasing being used quite
frequently, as this greatly aids in code readability and saves the trouble of typing!

### Regarding "Sized" Types

In Rust, all types are either _sized_ or _unsized_. `Sized` is a trait which is implicitly placed on
every type with a known, constant type at compile time. In Rust, the notion of a type being `Sized`
refers to whether or not its reasonably able to tell the size at compile time. Unsized types, such
as dynamically sized typed, are stored on the heap and referenced via a pointer.

:::info Why would a type be 'unsized'?

As stated previously, Rust is a **statically** typed language, meaning variables (amongst other
tokens within the language) must be known at compile time.

However, especially in more trait-oriented code bases you may be dealing with **dynamically sized
types**, which while useful for demonstrating polymorphic and scalable code, it can introduce some
extra complexities in consuming those particular APIs.

:::

All local variables, functions parameters, const items, and static items (variables on the stack)
must be `Sized`.

Luckily, the pointer type in Rust is always `Sized` - this is why we are able to declare `&str`, but
cannot use `str`:

```rust
let sized_str: &str = ""; // string literals always default to &str
```

If we dereference `sized_str`, which will give us `str`, the compiler will throw an error indicating
that it cannot possibly know the size of `str`:

```rust
let unsized_str: str = *""; // string literals always default to &str
error[E0277]: the size for values of type `str` cannot be known at compilation time
   |
   |     let let unsized_str: str = *"";
   |         ^^^^^^ doesn't have a size known at compile-time
   |
```

`str` on its own is actually an undefined slice of `u8`, or `[u8]`. This does not have a defined
size, which is why `&str` must be used. `&str` _refers_ to the actual slice of bytes stored on the
heap with a pointer, which _is_ `Sized`.

### Why does this matter?

This section may seem out of place, but later when dealing with more exotic and dynamic types, such
as in the context of Substrate, this will aid in understanding the decisions of the various APIs
that Substrate exposes. Trait objects (and their respective virtual tables), smart pointers, and
other dynamically sized types all become more commonplace in bigger projects that allow for more
decisions centered around the types of the APIs themselves to take place.

Rust comes with different ways to deal with unsized types, which become increasingly more
commonplace when dealing with more generic codebases, where not all items are completely defined.
