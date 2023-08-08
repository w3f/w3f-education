---
id: running-chains
title: Running the Relay and Parachain
sidebar_label: Running the Relay and Parachain
description: Ensure both the relay chain and parachain run locally.
---

In this final page, we will do the following:

- Run **two** validators for our relay chain testnet.
- Run **one** parachain collator to supply block data to our relay chain.
- Observe the state changing on both chains, and what they mean.

## Launching the Relay Chain

Our relay chain needs two validators to build blocks.  We can use the `alice` and `bob` development presets to launch our testnet validation nodes using the `polkadot` binary:

- Launch Alice: 
    ```bash
    
    ```
- Launch Bob:
    ```bash
    
    ```

Once they are both running, you should see output similar to the following:

```bash

```

Congratulations, your relay chain is up and running!

## Launching the Parachain

With the relay chain actively producing blocks, we now need to launch a **collator** for our parachain:

- Launch a collator
    ```bash
    
    ```

## Observing State & Verifying Orchestration

The most user friendly way to verify and validate the state of both the relay chain and parachain is **Polkadot.js**.