---
id: node-template-tour
title: Node Template Tour & Overview
sidebar_label: Node Template Tour & Overview
description: Get familiar with the Substrate node template and its various components.
---

In the last section of this module, you installed and ran the `substrate-mooc-node`. It's important
to realize that this isn't just a node for a blockchain but an entire blockchain itself. If you look
further into the configuration and structure of this node template, some files are specifically for
setting the initial state of the entire blockchain.

## Node Template Structure

The `substrate-mooc-node` is based on the `substrate-node-template`, "A Substrate project such as
this consists of several components spread across a few directories."

It comes pre-configured with several crucial components to develop a blockchain with FRAME and
Substrate - including networking, configured runtimes, and a template for adding more pallets to
your chain. Pallets can be added either locally, as per this example, or remotely. For now, pallets
are imported as crates from GitHub (using the `git = "<source>"` within the `Cargo.toml` of a
particular project).

### Node / Networking Directory - `node/`

To allow your chain to communicate to the outside world, whether to other nodes in the chain or to
expose an RPC interface. It must contain networking to perform peer-to-peer actions for
functionality like finality, which are included within Substrate as a library
(`sc_consensus_grandpa`). There are also a few other practical files, such as `cli.rs`, which
exposes a command-line interface for your node.

Paraphrasing the
[node template](https://github.com/substrate-developer-hub/substrate-node-template#node), a
blockchain node typically has these three things (which are included with this node):

1.  Networking - This is implemented with `libp2p` and Substrate libraries and is how nodes
    communicate in a multi-node scenario.

2.  Consensus - Consensus is the crucial aspect allowing the chain to agree on some state. Substrate
    provides some implementations for consensus models, i.e., `sc_consensus_grandpa`, but also
    provides a way to create your consensus model.

3.  RPC Server - A remote procedural call server that enables clients to interact with the node.

It has three primary files that implement the above:

- `service.rs` - Defines each related service needed to establish peer-to-peer communications,
  consensus, finalization, and fork-choice ruling.
- `rpc.rs` - Manages and keeps track of clients and their requests, extendable by API if the
  developer wishes (and the pallet exposes methods for the RPC to utilize).
- `chain_spec.rs` - The chain specification file establishes an initial configuration for the state
  of the network, such as user balances on genesis (for both development and production).

### Runtime Directory - `runtime/`

The runtime, also referred to as the **state transition function**, refers to the core business
logic at the center of the blockchain. It is the beating heart of the blockchain node and the
deciding factor in how a piece of data is transformed and stored and affects another state within
the chain. It is also responsible for validating blocks, probably one of the best examples of this
occurring.

It is within this runtime that you will see FRAME being utilized completely. FRAME, as mentioned,
provides many support libraries (and their respective macros therein) that are used for building
runtimes. As also mentioned, **pallets** are used to establish a custom, domain-specific pieces of
logic that can be added to the runtime.

It has one primary file to look at: `runtime/lib.rs`.

### Pallets Subdirectory = `pallets/`

Lastly, the `pallets/` can be used to add or create pallets locally as a Rust crate. However,
pallets are often added remotely within `runtime/Cargo.toml`. Pallets can also use other pallets
through a coupling mechanism, which you will learn later.

All pallets are Rust crates that utilize FRAME's support libraries and macros, where they are then
registered and configured within the `runtime`.
