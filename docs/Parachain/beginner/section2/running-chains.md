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

:::tip Use the symlink!

If you followed the steps to add a `symlink`, you may replace the preceded: `./target/release/polkadot` with just: `polkadot`

:::

- Launch Alice: 
    ```bash
    ./polkadot/target/release/polkadot \
        --alice \
        --validator \
        --base-path /tmp/relay/alice \
        --chain /tmp/raw-local-chainspec.json \
        --port 30333 \
        --rpc-port 9944
    ```
- Launch Bob:
    ```bash
    ./polkadot/target/release/polkadot \
        --bob \
        --validator \
        --base-path /tmp/relay/bob \
        --chain /tmp/raw-local-chainspec.json \
        --port 30333 \
        --rpc-port 9944
    ```

Once they are both running, you should see output similar to the following:

```bash

```

:::caution Nodes not syncing?

If Bob and Alice are not syncing, you may run `bob` with this command:

```bash
--bootnodes /ip4/127.0.0.1/tcp/30333/p2p/<local-node-identity-here>
```

:::

Congratulations, your relay chain is up and running!

## Launching the Parachain

With the relay chain actively producing blocks, we now need to launch a **collator** for our parachain:

- Launch a collator
    ```bash
    ./substrate-parachain-template/target/release/parachain-template-node \
        --alice \
        --collator \
        --force-authoring \
        --chain raw-parachain-chainspec.json \
        --base-path /tmp/parachain/alice \
        --port 40333 \
        --rpc-port 8844 \
        -- \
        --execution wasm \
        --chain ../polkadot/raw-local-chainspec.json \
        --port 30343 \
        --rpc-port 9977
    ```

## Observing State & Verifying Orchestration

The most user friendly way to verify and validate the state of both the relay chain and parachain is **Polkadot.js**.