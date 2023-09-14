---
id: substrate-design
title: Substrate’s Design Choices
sidebar_label: Substrate’s Design Choices
description: Learn how the design choices of Substrate were made, and why they matter.
---

The Substrate code base was designed to be **highly** generic. This enables high customizability and
definition of various primitives for creating a blockchain with Substrate.

From networking to defining how the state of a blockchain mutates, most of what makes Substrate
adaptable comes from its heavy use of
[Rust's generic typing system](https://doc.rust-lang.org/book/ch10-01-syntax.html).

## What is a generic code base?

At a basic level, a generic code base represents a way to define very reusable code. The Substrate
libraries use this design pattern to optionally leave some definitions of primitives up to the
developer.

Blockchains often have standard 'primitives': Polkadot, Bitcoin, or Ethereum all have concepts and
primitives that are commonplace, i.e., transactions, blocks, storage, and hashing algorithms.
Substrate's generic nature allows for these blockchain primitives to be decided by the implementor.

We only really need to define these primitives one time for the chain. In FRAME, this is done using
a Rust trait called `Config`, which uses associated types to group all relevant primitives together
in a way defined only once for the entire blockchain.

## What are the challenges?

There can be a degree of complexity for the developers maintaining a Substrate-based codebase due to
its generic nature. If you are a developer working closely with Substrate libraries, then intimate
knowledge of how this generic design (and subsequently,
[Rust's generic type system](https://doc.rust-lang.org/book/ch10-01-syntax.html)) works is highly
useful.

Luckily with FRAME, abstractions are provided to mitigate this, allowing a developer to take full
advantage of Substrate.

### Further reading

- [Substrate Seminar - Traits and Generic Types - Shawn Tabrizi](https://www.youtube.com/watch?v=6cp10jVWNl4)
- [Substrate in a nutshell - Parity Technologies](https://www.parity.io/blog/substrate-in-a-nutshell/)
- [On Generics and Associated Types - Thomas Heartman](https://blog.thomasheartman.com/posts/on-generics-and-associated-types)
