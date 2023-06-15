---
id: substrate-design
title: Substrate’s Design Choices
sidebar_label: Substrate’s Design Choices
description: Learn how the design choices of Substrate were made, and why they matter.
---

Substrate was built to be **highly** generic.  This enables for a high level of customizability and definition of various primitives for creating a blockchain with Substrate.

From networking, to defining how state mutates, most of what makes Substrate able to be adaptable comes from its heavy use of Rust's generic typing system.

## What is a generic base?

At a basic level, a generic code base represents a way to define very re-usable code.  The Substrate libraries use this design pattern to optionally  leave some of the definitions of primitives up to the developer.

Blockchains often have common 'primitives', whether it's Polkadot, Bitcoin, or Ethereum (transactions, blocks, storage, hashing algorithms). Substrate's generic nature allows for these blockchain primitives to be decided by the implementor.

 We only really need to define these primitives one time for the chain.  In FRAME, this is done using a Rust trait called `Config`, which uses associated types to group all relevant primitives together in a way that it is defined only once for the entire blockchain.

## Are there any drawbacks?

There can be a degree of complexity for the developers maintaining the Substrate codebase, as there is a bit of learning curve.  If you are a developer working closely with Substrate libraries, then intimate knowledge of how Rust typing works is crucial.

Luckily with FRAME, abstractions are provided to mitigate this, and allow for a developer to take full advantage of Substrate.

### Further reading

- [Substrate Seminar - Traits and Generic Types - Shawn Tabrizi](https://www.youtube.com/watch?v=6cp10jVWNl4)
- [Substrate in a nutshell - Parity Technologies](https://www.parity.io/blog/substrate-in-a-nutshell/)
- [On Generics and Associated Types - Thomas Heartman](https://blog.thomasheartman.com/posts/on-generics-and-associated-types)