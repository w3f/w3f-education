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


:::note All commands are in the context of the `parachain-guide-resources` repository
:::

## Launching the Relay Chain

Our relay chain needs two validators to build blocks.  We can use the `alice` and `bob` development presets to launch our testnet validation nodes using the `polkadot` binary:

:::tip Use the `symlink`!

If you followed the steps to add a `symlink`, you may replace the preceded: `./target/release/polkadot` with just: `polkadot`

:::

- Launch Alice: 
    ```bash
    ./polkadot/target/release/polkadot \
        --alice \
        --validator \
        --base-path /tmp/relay/alice \
        --chain ./relaychain/relaychain_spec_raw.json \
        --port 30333 \
        --rpc-port 9944 \
        --disable-worker-version-check
    ```
- Launch Bob:
    ```bash
    ./polkadot/target/release/polkadot \
        --bob \
        --validator \
        --base-path /tmp/relay/bob \
        --chain ./relaychain/relaychain_spec_raw.json \
        --port 30333 \
        --rpc-port 9944 \
        --disable-worker-version-check
    ```

Once they are both running, you should see output similar to the following (for `bob`):

```bash
2023-08-11 09:49:07 Parity Polkadot
2023-08-11 09:49:07 ✌️  version 0.9.43-407e158a5dc
2023-08-11 09:49:07 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023
2023-08-11 09:49:07 📋 Chain specification: Rococo Local Testnet
2023-08-11 09:49:07 🏷  Node name: Bob
2023-08-11 09:49:07 👤 Role: AUTHORITY
2023-08-11 09:49:07 💾 Database: RocksDb at /tmp/relay/bob/chains/rococo_local_testnet/db/full
2023-08-11 09:49:10 👶 Creating empty BABE epoch changes on what appears to be first startup.
2023-08-11 09:49:10 🏷  Local node identity is: 12D3KooWHk4Kx5zRpNiWoXb44Vaye1kGbgwENUwHp1AVk9ze9ko8
2023-08-11 09:49:10 🚀 Using prepare-worker binary at: "/Users/bader/Documents/polkadot/polkadot/target/release/polkadot-prepare-worker"
2023-08-11 09:49:10 🚀 Using execute-worker binary at: "/Users/bader/Documents/polkadot/polkadot/target/release/polkadot-execute-worker"
2023-08-11 09:49:10 💻 Operating system: macos
2023-08-11 09:49:10 💻 CPU architecture: aarch64
2023-08-11 09:49:10 📦 Highest known block at #0
2023-08-11 09:49:10 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-08-11 09:49:10 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]
2023-08-11 09:49:10 🏁 CPU score: 1000.29 MiBs
2023-08-11 09:49:10 🏁 Memory score: 27.17 GiBs
2023-08-11 09:49:10 🏁 Disk score (seq. writes): 1.27 GiBs
2023-08-11 09:49:10 🏁 Disk score (rand. writes): 344.09 MiBs
2023-08-11 09:49:10 ⚠️  The hardware does not meet the minimal requirements for role 'Authority' find out more at:
https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#reference-hardware
2023-08-11 09:49:10 Cannot enable landlock, a Linux kernel security feature. Running validation of malicious PVF code has a higher risk of compromising this machine. Consider running on Linux with landlock support for maximum security.
2023-08-11 09:49:10 Starting with an empty approval vote DB.
2023-08-11 09:49:10 👶 Starting BABE Authorship worker
2023-08-11 09:49:10 🥩 BEEFY gadget waiting for BEEFY pallet to become available...
2023-08-11 09:49:15 💤 Idle (0 peers), best: #0 (0x7389…4422), finalized #0 (0x7389…4422), ⬇ 0 ⬆ 0
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
        --chain ./raw-parachain-chainspec.json \
        --base-path /tmp/parachain/alice \
        --port 40333 \
        --rpc-port 8844 \
        -- \
        --execution wasm \
        --chain ./relaychain/relaychain_spec_raw.json \
        --port 30343 \
        --rpc-port 9977
    ```

## Observing State & Verifying Orchestration

The most user-friendly way to verify and validate the state of both the relay chain and parachain is **Polkadot.js**.