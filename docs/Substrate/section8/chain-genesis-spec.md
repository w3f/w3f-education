---
id: chain-genesis-spec
title: Chain Specification
sidebar_label: Chain Specification
description: Learn how basis chain and genesis configurations work in FRAME
---

The **chain specification** describes any Substrate-based network.  Located in `node/src/chain_spec.rs`, the chain specification describes the inital state of the network via the `ChainSpec` struct, which is usually exported as a JSON file using the `substrate build-spec` command.

As you may have noticed, when we start our chain in developmental mode, we have a set of pre-defined, funded accounts.  This is located inside `chain_spec.rs` where default accounts, the chain's name, id, sudo accounts, and more are defined.

## `chain_spec.rs` Overview

## Modifying Your Chain Spec

### Defining Validator Keys
