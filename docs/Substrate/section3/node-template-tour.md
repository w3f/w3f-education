---
id: node-template-tour
title: Node Template Tour & Overview
sidebar_label: Node Template Tour & Overview
description: Get familiar with the Substrate node template and its various components.
---

In the last section of this module, you installed and ran the `substrate-mooc-node`.  It's important to realize: this isn't just a node for a blockchain, but rather an entire blockchain in of itself.  If you look further in the configuration and structure of this node template, there are files that are specifically for setting the initial state of the entire blockchain.

## Node Template Structure

The `substrate-mooc-node` is based on the `substrate-node-template`, which is "A Substrate project such as this consists of a number of components that are spread across a few directories".

It comes pre-configured with a number of crucial components to begin developing a blockchain with FRAME and Substrate - including networking, a configured runtimes, and template for adding more pallets to your chain.  Pallets can be added either locally, as per this example, or remotely.  For now, pallets are imported as crates from GitHub (using the `git = "<source>"` within the `Cargo.toml` of a particular project).

### Node / Networking Directory - `node/`

In order to allow your chain to communicate to the outside world, whether that's to other nodes in the chain, or simply to expose an rpc interface.  It must contain networking in order to perform peer-to-peer actions for functionality like finality, of which are included within Substrate as a library (`sc_consensus_grandpa`).  There are also a few other utilitarian files, such as `cli.rs`, which exposes a command-line interface for your node.

Paraphrasing the [node template](https://github.com/substrate-developer-hub/substrate-node-template#node), a blockchain node typically these three things (which are included with this node):

1. Networking - This is implemented with `libp2p` and Substrate libraries, and is how nodes communicate in a multi-node scenario.
   
2. Consensus - Consensus is the crucial aspect that allows for the chain to agree on some state.  Substrate provides some implementations for some consensus models, i.e., `sc_consensus_grandpa`, but also provides a way to create your own consensus model.
   
3. RPC Server - A remote procedural call server that enables for clients to interact with the node. 

It has three primary files that implement the above:

- `service.rs` - Defines each of the related services needed to establish peer-to-peer communications, consensus, finalization, and fork-choice ruling.
- `rpc.rs` - Manages and keeps track of clients and their requests, extendable by API if the developer wishes (and the pallet exposes methods for the RPC to utilize).
- `chain_spec.rs` - The chain specification file is used to establish an initial state for the network, such as user balances on genesis (for both development and production).


### Runtime Directory - `runtime/`

The runtime, also referred to as the **state transition function**, refers to the core business logic at the center of the blockchain.  It is the beating heart of the blockchain node, and is the deciding factor in how a piece of data is transformed, stored, and how it effects other state within the chain. It is also responsible for validating blocks, which is probably one of the best examples of this occurring.

It is within this runtime that you will see FRAME being utilized completely.  FRAME, as mentioned, provides a number of support libraries (and their respective macros therein) which are used for building runtimes.  As also mentioned, **pallets** are used to establish custom, domain-specific pieces of logic that can be added to the runtime.

It has one primary file to take a look at: `runtime/lib.rs`.
 
### Pallets Subdirectory = `pallets/`

Lastly, the `pallets/` directly can be used to add or create pallets locally as a Rust crate.  However, pallets are often and are also added remotely within `runtime/Cargo.toml`.  Pallets can also use other pallets through a coupling mechanism, which you will learn later.

All pallets are Rust crates that utilize FRAME's support libraries and macros, where they are then registered and configured within the `runtime`.