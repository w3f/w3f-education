---
id: substrate-pallets
title: Pallets
sidebar_label: Pallets
description: Learn what pallets are, and how they fit into FRAME.
---

FRAME, or the **Framework for Runtime Aggregation of Modularized Entities,** essentially heavily simplifies runtime development for us.  It gives us the ability to put together different modules in our runtime to customize our blockchain. Things like consensus, staking, governance, balances, and the like are all pallets covered under FRAME.   

These modules are called **pallets.**  In short, they contain the business logic for custom blockchain functionality, and are added and managed by the runtime.  In theory, you can build a Substrate based chain without them, however they contain a lot of core functionality that serves as a valuable base for a new Substrate based chain.

We’ll be making a custom pallet later on in this course, where you will see in action just how you can mix and match pallets to create your very own blockchain.  The pallets handle the signing and submission of transactions on Substrate, while also allowing us to implement custom functionality directly into the chain.

## Common Pallets in FRAME

## Our Pallet: pallet_connect