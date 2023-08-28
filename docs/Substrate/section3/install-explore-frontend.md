---
id: install-explore-frontend
title: Installing & exploring the frontend template
sidebar_label: Installing & exploring the frontend template
description: Install and explore the frontend template for debugging and developing your pallet.
---

The [front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template) is
a valuable source that will allow us to quickly verify and test our Substrate chain with minimal
interference.

## Installation

```bash
# Clone the repository
git clone https://github.com/substrate-developer-hub/substrate-front-end-template.git
cd substrate-front-end-template
yarn install

# To start it
yarn start
```

More info can be found at the
[repository](https://github.com/substrate-developer-hub/substrate-front-end-template).

## The Polkadot.js Explorer

The [Polkadot.js explorer](https://polkadot.js.org/apps/#/explorer) is also a great way for
developers to get more insight into your node’s operations:

![Polkadot JS Main](../assets/polkadot_js_main.png)

The image above shows the live telemetry from the Polkadot relay chain.

Once there, you can click the upper left, select `Development` at the bottom of the menu, select
`Local Node`, and click `Switch` in the top right:

![Polkadot JS Switch](../assets/polkadot_js_switch.png)

Optionally, this
[link will also take you directly to it](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944),
although it won't show anything if a local node is not running.
