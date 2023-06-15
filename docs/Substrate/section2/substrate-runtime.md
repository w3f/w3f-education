---
id: substrate-runtime
title: Substrate Runtime
sidebar_label: Substrate Runtime
description: Learn what the runtime in Substrate is, and how it defines a state transition function.
---

## Substrate Runtime

The runtime is essentially the heart of our application, as far as a Substrate node goes. It’s responsible for ensuring the validity of transactions, can compile WASM code for forkless upgrades, and most importantly for us — facilitates the usage of FRAME (**Framework for Runtime Aggregation of Modularized Entities**).