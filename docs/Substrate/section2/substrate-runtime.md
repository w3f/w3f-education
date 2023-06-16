---
id: substrate-runtime
title: Runtime & Outer Node
sidebar_label: Runtime & Outer Node
description: Learn what the runtime in Substrate is, and how it defines a state transition function.
---

```mermaid
---
title: Runtime, Storage, and Outer Node
---
flowchart LR
    ON[Substrate Outer Node]-->|New blocks, \n transactions etc| RT{Substrate Runtime}-->|Validated, and stored| ST[Substrate Storage]
```

The runtime is essentially the heart of our blockchain.  It defines exactly how our blockchain will handle new data, whether or not it will react with a change in the network's state or not, and making calls to the storage and networking layers as needed.  Each runtime is actually a Wasm runtime, which is what enables for forkless upgrades to be possible.

It is also responsible for ensuring the validity of transactions, can compile WASM code for forkless upgrades, and most importantly for us — facilitates the usage of FRAME (**Framework for Runtime Aggregation of Modularized Entities**) to build and add pallets.  You can think of a runtime as the **engine** that facilitates the outer node (that ends up interacting with other nodes over the network) and storage to communicate, process, then store changes.

## The Outer Node
