---
id: substrate-pallets
title: Pallets
sidebar_label: Pallets
description: Learn what pallets are, and how they fit into FRAME.
---

FRAME, or the **Framework for Runtime Aggregation of Modularized Entities,** essentially heavily simplifies runtime development for us.  It gives us the ability to put together different modules in our runtime to customize our blockchain. Things like consensus, staking, governance, balances, and the like are all pallets covered under FRAME.   

These modules are called **pallets.**  In short, they contain the business logic for custom blockchain functionality, and are added and managed by the runtime.  In theory, you can build a Substrate based chain without them, however they contain a lot of core functionality that serves as a valuable base for a new Substrate based chain.

We’ll be making a custom pallet later on in this course, where you will see in action just how you can mix and match pallets to create your very own blockchain.  The pallets handle the signing and submission of extrinsics on Substrate, while also allowing us to implement custom functionality directly into the chain.

## Common Pallets in FRAME

There are a number of common pallets built using FRAME that are used in many networks, as well as relay chains like Polkadot or Kusama.  The common pallet naming convention is `pallet_` followed by the actual name.  The following are common pallets that you will encounter:

- `pallet_balances` - The Balances pallet provides functionality for handling accounts and balances.
- `pallet_system` - The System pallet provides low-level access to core types and cross-cutting utilities. It acts as the base layer for other pallets to interact with the Substrate framework components.
- `pallet_referenda` - The Referenda pallet handles the administration of general stakeholder voting.  This pallet is what drives Polkadot and Kusama's on-chain governance, OpenGov.

To view all pallets included with FRAME, take a look at the [repository on GitHub](https://github.com/paritytech/substrate/tree/master/frame).

## Our Pallet: pallet_connect

The pallet you are going to help build and modify is called `pallet_connect`. It is a basis for a simple, sybil-resistant social network, and show cases several key functionalities and practices for building pallets using FRAME.  

Below you may find a list of the exact features this pallet provides: 

- Create the equivalent of a social network, but with only profiles. The user must meet a set of prerequisites (namely, balance) in order to join.
- Account for sybil attacks (must contain X DOT / native currency to be a valid profile, etc)
- Each profile picture is generated on-chain using on-chain randomness - forming a gradient that is associated with every user.
- All handles are unique. No two usernames can be the same.
- Bounded metadata for each account.