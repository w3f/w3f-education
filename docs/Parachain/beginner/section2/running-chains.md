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

:::note

All commands are in the context of the `parachain-guide-resources` repository

:::

## Launching the Relay Chain

Our relay chain needs two validators to build blocks. We can use the `alice` and `bob` development
presets to launch our testnet validation nodes using the `polkadot` binary:

:::tip Use the `symlink`!

If you followed the steps to add a `symlink`, you may replace the preceded:
`./target/release/polkadot` with just: `polkadot`

:::

- Launch Alice:
  ```bash
  ./target/debug/polkadot \
      --alice \
      --validator \
      --base-path /tmp/relay/alice \
      --chain ./relaychain/relaychain_spec_raw.json \
      --disable-worker-version-check
  ```
- Launch Bob:
  ```bash
  ./target/debug/polkadot \
      --bob \
      --validator \
      --base-path /tmp/relay/bob \
      --chain ./relaychain/relaychain_spec_raw.json \
      --port 30334 \
      --rpc-port 9945 \
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

If both nodes are syncing, you should be seeing the block count increase and new consensus sessions
being started:

```bash
2023-08-11 10:58:18 🙌 Starting consensus session on top of parent 0x7389b78dbb3a94bf09aa53802c338131e242b78678f5959f170e4902ccf24422
2023-08-11 10:58:20 ParentBlockRandomness did not provide entropy
2023-08-11 10:58:20 ParentBlockRandomness did not provide entropy
2023-08-11 10:58:20 🎁 Prepared block for proposing at 1 (3 ms) [hash: 0xcc797177284f6f7c6e1bc544b0f73624007909c0f94cb6079d1d4dd18fbb6056; parent_hash: 0x7389…4422; extrinsics (2): [0xdf06…3c14, 0x2cde…129c]
2023-08-11 10:58:20 🔖 Pre-sealed block for proposal at 1. Hash now 0x8934f6a5aa897e16fa3ba97e4be1ebb67372d6729737871b235b4208bf08dc5b, previously 0xcc797177284f6f7c6e1bc544b0f73624007909c0f94cb6079d1d4dd18fbb6056.
2023-08-11 10:58:20 👶 New epoch 0 launching at block 0x8934…dc5b (block slot 281960983 >= start slot 281960983).
2023-08-11 10:58:20 👶 Next epoch starts at slot 281960993
2023-08-11 10:58:20 ✨ Imported #1 (0x8934…dc5b)
```

Congratulations, your relay chain is up and running!

## Launching the Parachain

With the relay chain actively producing blocks, we now need to launch a **collator** for our
parachain:

- Launch a collator

  ```bash
  ./substrate-parachain-template/target/release/parachain-template-node \
    --alice \
    --collator \
    --force-authoring \
    --chain ./parachain/parachain_chain_spec_raw.json \
    --base-path /tmp/parachain/alice \
    --port 40333 \
    --rpc-port 8844 \
  ```

With the output looking like:

```bash
2023-08-11 10:52:44 Parachain Collator Template
2023-08-11 10:52:44 ✌️  version 0.1.0-38c8589a9f8
2023-08-11 10:52:44 ❤️  by Anonymous, 2020-2023
2023-08-11 10:52:44 📋 Chain specification: Local Testnet
2023-08-11 10:52:44 🏷  Node name: Alice
2023-08-11 10:52:44 👤 Role: AUTHORITY
2023-08-11 10:52:44 💾 Database: RocksDb at /tmp/parachain/alice/chains/local_testnet/db/full
2023-08-11 10:52:45 Parachain Account: 5Ec4AhPZk8STuex8Wsi9TwDtJQxKqzPJRCH7348Xtcs9vZLJ
2023-08-11 10:52:45 Is collating: yes
2023-08-11 10:52:46 [Parachain] 🔨 Initializing Genesis block/state (state: 0xde8e…66b5, header-hash: 0x2717…55b5)
2023-08-11 10:52:47 [Relaychain] 🔨 Initializing Genesis block/state (state: 0x98e3…789f, header-hash: 0x7389…4422)
2023-08-11 10:52:47 [Relaychain] 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-08-11 10:52:48 [Relaychain] 👶 Creating empty BABE epoch changes on what appears to be first startup.
2023-08-11 10:52:48 [Relaychain] 🏷  Local node identity is: 12D3KooWKdqvh5Lzt1p8Rm54QNC1UwWtBabyBPUYtkdAt1SKkYpG
```

Your parachain should be syncing with the relay chain, and will look similar to the below. Notice
the blocks being imported and matching the height of the relay chain:

```bash
2023-08-11 11:22:04 [Relaychain] 💤 Idle (2 peers), best: #237 (0x3069…400d), finalized #235 (0xa85b…c64c), ⬇ 48.2kiB/s ⬆ 1.9kiB/s
2023-08-11 11:22:05 [Parachain] 💤 Idle (0 peers), best: #0 (0x2717…55b5), finalized #0 (0x2717…55b5), ⬇ 0 ⬆ 0
2023-08-11 11:22:06 [Relaychain] ✨ Imported #238 (0x5a36…447c)
2023-08-11 11:22:09 [Relaychain] 💤 Idle (2 peers), best: #238 (0x5a36…447c), finalized #235 (0xa85b…c64c), ⬇ 1.7kiB/s ⬆ 1.2kiB/s
2023-08-11 11:22:10 [Parachain] 💤 Idle (0 peers), best: #0 (0x2717…55b5), finalized #0 (0x2717…55b5), ⬇ 0 ⬆ 0
2023-08-11 11:22:12 [Relaychain] ✨ Imported #239 (0x546a…53eb)
2023-08-11 11:22:14 [Relaychain] 💤 Idle (2 peers), best: #239 (0x546a…53eb), finalized #236 (0x6b32…4ead), ⬇ 1.0kiB/s ⬆ 0.5kiB/s
2023-08-11 11:22:15 [Parachain] 💤 Idle (0 peers), best: #0 (0x2717…55b5), finalized #0 (0x2717…55b5), ⬇ 0 ⬆ 0
2023-08-11 11:22:04 [Relaychain] 💤 Idle (2 peers), best: #237 (0x3069…400d), finalized #235 (0xa85b…c64c), ⬇ 48.2kiB/s ⬆ 1.9kiB/s
2023-08-11 11:22:05 [Parachain] 💤 Idle (0 peers), best: #0 (0x2717…55b5), finalized #0 (0x2717…55b5), ⬇ 0 ⬆ 0
2023-08-11 11:22:06 [Relaychain] ✨ Imported #238 (0x5a36…447c)
2023-08-11 11:22:09 [Relaychain] 💤 Idle (2 peers), best: #238 (0x5a36…447c), finalized #235 (0xa85b…c64c), ⬇ 1.7kiB/s ⬆ 1.2kiB/s
2023-08-11 11:22:10 [Parachain] 💤 Idle (0 peers), best: #0 (0x2717…55b5), finalized #0 (0x2717…55b5), ⬇ 0 ⬆ 0
2023-08-11 11:22:12 [Relaychain] ✨ Imported #239 (0x546a…53eb)2023-08-11 11:22:18 [Relaychain] 👶 New epoch 24 launching at block 0xf339…e676 (block slot 281961223 >= start slot 281961223).
2023-08-11 11:22:18 [Relaychain] 👶 Next epoch starts at slot 281961233
2023-08-11 11:22:18 [Relaychain] ✨ Imported #240 (0xf339…e676)
2023-08-11 11:22:19 [Relaychain] 💤 Idle (2 peers), best: #240 (0xf339…e676), finalized #237 (0x3069…400d), ⬇ 1.4kiB/s ⬆ 0.7kiB/s
2023-08-11 11:22:20 [Parachain] 💤 Idle (0 peers), best: #0 (0x2717…55b5), finalized #0 (0x2717…55b5), ⬇ 0 ⬆ 0
```

It's possible you may also need to specify a bootnode for the parachain as well, such as `alice`.

Our parachain is not making any blocks; and that is normal, as we still need to register it onto the
relay chain.

## Observing State & Verifying Orchestration

The most user-friendly way to verify and validate the state of both the relay chain and parachain is
**Polkadot.js**, and by visiting the relay chain and parachain respectively. The relay chain should
be making blocks, whereas the parachain shouldn't be. This is a great way to ensure your
configuration is working so far:

- [Polkadot.js - Relay Chain](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)
- [Polkadot.js - Parachain](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A8844#/explorer)
