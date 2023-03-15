---
id: wasm-tldr
title: WASM TLDR - What is WASM, and why is it important?
sidebar_label: WASM TLDR
description:  Why WASM is used, and it's support in Rust.
---

WebAssembly (Wasm) is becoming a core part of many technology stacks.  It is a portable target for higher-level languages to compile to and has no direct limitations on where it can run (although it is mostly browser focused at the moment).  It can run near-native speeds and provides a sandboxed, agnostic set of instructions to run in any environment that supports it.

Wasm has two common formats, `wat` and `wasm`.  

- `.wat` - a text-based format, called WebAssembly Text, that is a more human readable way of representing Wasm instructions.
- `.wasm` - a binary-based format that defines an executable that is then executed by a Wasm virtual machine.

WebAssembly, while not exclusive to Rust by any means, is highly supported in Rust.  This enables for Rust code to be even more portable in the context of web-based applications, for example (or any environment that supports WebAssembly).

:::info 

Fun fact: Wasm is what enables for **forkless upgrades** to occur on Polkadot, as each instance of the Polkadot Runtime compiles down to Wasm and is stored the blockchain's storage.

:::

## Basic Wasm Architecture

At its core, Wasm is a stack-based virtual machine, where each value is popped and pushed on an arbitrary stack. It is worth noting that Wasm is not a *register* machine, as it contains no context-specific registers for bytes to be held.

## Wasm Usecases

On Polkadot, Web3 Foundation's flagship project, Wasm is a core part of the technology stack:

- It's used for defining reliable state transition functions for [relay chain runtimes](https://wiki.polkadot.network/docs/glossary#runtime).
- It's used for defining [Parachain Validation Functions (PVFs)](https://wiki.polkadot.network/docs/learn-parachains-protocol), which is a core part of how relay and parachains agree on state.
- The [ink!](https://use.ink/) smart contract language compiles to Wasm, which takes full advantage of the sandboxed and portable nature of Wasm.


