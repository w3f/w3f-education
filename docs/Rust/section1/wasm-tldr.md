---
id: wasm-tldr
title: WASM TLDR - What is WASM, and why is it important?
sidebar_label: WASM TLDR
description:  Why WASM is used, and it's support in Rust.
---

WebAssembly (Wasm) is becoming a core part of many technology stacks.  It is a portable target for higher-level languages to compile to and has no direct limitations on where it can run (although it is mostly browser focused at the moment).  It can run at near-native speeds and provides a sandboxed, agnostic set of instructions to run in any environment that supports it.

Wasm has two common formats, `wat` and `wasm`.  

- `.wat` - a text-based format, called WebAssembly Text, that is a more human readable way of representing Wasm instructions.
- `.wasm` - a binary-based format that defines an executable that is then executed by a Wasm virtual machine.

WebAssembly, while not exclusive to Rust by any means, is highly supported in Rust.  This enables Rust code to be even more portable in the context of web-based applications (or any environment that supports WebAssembly).

:::info 

Fun fact : Heard of **forkless upgrades** on Polkadot? It is Wasm that enables these seamless blockchain upgrades. Each instance of the Polkadot Runtime compiles to a Wasm blob and is stored in the blockchain's storage, which can be replaced through an on-chain governance based upgrade. 

:::

## Basic Wasm Architecture

At its core, Wasm is a stack-based virtual machine, where each value is popped and pushed on an arbitrary stack. It is worth noting that Wasm is not a *register* machine, as it contains no context-specific registers for bytes to be held.

## Wasm Usecases

On Polkadot, Web3 Foundation's flagship project, Wasm is a core part of the technology stack:

- It defines reliable state transition functions for the [relay chain runtimes](https://wiki.polkadot.network/docs/glossary#runtime).
- It defines [Parachain Validation Functions (PVFs)](https://wiki.polkadot.network/docs/learn-parachains-protocol), which is a core part of how relay and parachains agree on their respective state.
- The [ink!](https://use.ink/) smart contract language compiles to Wasm, which takes full advantage of the sandboxed and portable nature of Wasm.


