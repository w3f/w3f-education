---
id: substrate-pallets
title: Pallets
sidebar_label: Pallets
description: Learn what pallets are, and how they fit into FRAME.
---

FRAME, or the **Framework for Runtime Aggregation of Modularized Entities,** essentially heavily
simplifies runtime development for us. It allows us to combine different runtime modules to
customize our blockchain. Consensus, staking, governance, balances, and the like are all pallets
covered under FRAME.

These modules are called **pallets.** In short, they contain the business logic for custom
blockchain functionality and are added and managed by the runtime. In theory, you can build a
Substrate based chain without them. However, they contain a lot of core functionality that serves as
a valuable base for a new Substrate based chain.

We’ll create a custom pallet later in this course, where you will see how to mix and match pallets
to create your own blockchain. The pallets handle the signing and submission of extrinsics on
Substrate, allowing us to implement custom functionality directly into the chain.

## Common Pallets in FRAME

Several standard pallets built using FRAME are used in many networks and relay chains like Polkadot
or Kusama. The standard pallet naming convention is `pallet_` followed by the actual name. Here are
a few standard pallets that you might often encounter as a developer:

- `pallet_balances` - The Balances pallet provides account and balance functionality.
- `pallet_system` - The System pallet provides low-level access to core types and cross-cutting
  utilities. It is the base layer for other pallets interacting with the Substrate framework
  components.
- `pallet_referenda` - The Referenda pallet handles the administration of general stakeholder
  voting. This pallet along with other pallets like `pallet_conviction_voting` drives Polkadot
  [OpenGov - the next generation of decentralized on-chain governance](https://wiki.polkadot.network/docs/learn-polkadot-opengov).

To view all pallets included with FRAME, look at the
[repository on GitHub](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame).

## Our Pallet: pallet_connect

As a part of this course, the pallet you will build and modify is called `pallet_connect`. It is a
basis for a simple, Sybil-resistant social network, demonstrating several vital functionalities and
practices for building pallets using FRAME.

Below you may find a list of the exact features this pallet provides:

- Create the equivalent of a social network, but with only profiles. The user must meet a set of
  prerequisites (balance) to join.
- Account for Sybil attacks by requiring an amount of currency to be locked (an existential deposit)
  for each user.
- Each profile picture is generated on-chain using on-chain randomness - forming a gradient image
  associated with every user.
- All handles are unique. No two usernames can be the same.
- Bounded metadata for each account.
