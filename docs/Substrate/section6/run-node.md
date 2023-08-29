---
id: run-node
title: Running the node template
sidebar_label: Running the node template
description: Run and review the output from our custom pallet and node.
---

:::caution

We are now working in the node's root directory (`substrate-mooc-node`), not the pallet directory.

:::

With all of our functionality in place, it is finally time to run and view our node running in an
actual environment.

## Running tests

Before running, it is a good idea to run tests to make sure everything is working as it should:

```bash
cargo test
```

## Launching the node

If the tests pass, you may now launch the node. Ensure you are in the root directory of the node:

:::info

Note that we are running in dev mode, meaning our node has finalization without needing another node
to run.

:::

```bash
cargo run -- --dev
```

This may take some time to build and run. Once it does, you should see the following output:

```bash
2023-06-21 17:13:03 Substrate Node
2023-06-21 17:13:03 ✌️  version 4.0.0-dev-6187dc90dff
2023-06-21 17:13:03 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2023
2023-06-21 17:13:03 📋 Chain specification: Development
2023-06-21 17:13:03 🏷  Node name: brief-fiction-9945
2023-06-21 17:13:03 👤 Role: AUTHORITY
2023-06-21 17:13:03 💾 Database: RocksDb at /var/folders/x0/hd8wpwmx2kgfqv8m03wxj2mw0000gn/T/substrateSTe3Ji/chains/dev/db/full
2023-06-21 17:13:03 ⛓  Native runtime: node-template-100 (node-template-1.tx1.au1)
2023-06-21 17:13:07 🔨 Initializing Genesis block/state (state: 0x8fc4…d28d, header-hash: 0x0e62…f7d0)
2023-06-21 17:13:07 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-06-21 17:13:09 Using default protocol ID "sup" because none is configured in the chain specs
2023-06-21 17:13:09 🏷  Local node identity is: 12D3KooWDTSe4xUvaa4pjVXAZKFsm2LBTUaZQ7ZVdDgvBA4bJtQR
2023-06-21 17:13:09 💻 Operating system: macos
2023-06-21 17:13:09 💻 CPU architecture: aarch64
2023-06-21 17:13:09 📦 Highest known block at #0
2023-06-21 17:13:09 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-06-21 17:13:09 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]
2023-06-21 17:13:09 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]
2023-06-21 17:13:11 Accepting new connection 1/100
2023-06-21 17:13:12 🙌 Starting consensus session on top of parent 0x0e6244a5f0b8da2a2a424fcafcdbc4e11ab4574e1e016a403d7809e67b42f7d0
2023-06-21 17:13:12 🎁 Prepared block for proposing at 1 (1 ms) [hash: 0xdcbeb0870914fc440922d38e3ba7b3f2f7a20e176f99eeda6665c1dd6db97132; parent_hash: 0x0e62…f7d0; extrinsics (1): [0xcae8…b246]]
2023-06-21 17:13:12 🔖 Pre-sealed block for proposal at 1.  Hash now 0x8010a14bfe679f7efaeaa966289340ddabec13318a7a60eb1e1be4d64110a834, previously 0xdcbeb0870914fc440922d38e3ba7b3f2f7a20e176f99eeda6665c1dd6db97132.
2023-06-21 17:13:12 ✨ Imported #1 (0x8010…a834)
```

If you get this output, congratulations! You can see your network producing blocks, as stated by
`🎁 Prepared block for proposing at 1`. With your node running, you can now use either the
[`substrate-frontend-template`](../section3/install-explore-frontend.md) or the
[Polkadot.js](../section3/install-explore-frontend.md) app to interact with your node and view
network stats.
