---
id: creating-parathread
title: Reserve your parathread
sidebar_label: Reserve your parathread
description: Reserve your parathread and para ID.
---

Before registering and uploading your parachain's runtime, you need to register a `ParaId`.  Each parachain has a unique id on the relay chain.

:::info Different RPC Ports for the Relay and Parachain

For connecting to Polkadot.js, you will need to use the following URLs:

- Relay Chain on [Port 9944](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)
- Parachain Collator on [Port 8844](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A8844#/explorer)

:::

## Reserving a ParaID

Navigate to the [Polkadot.js Developer Console](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer), select the "Network" dropdown, and select "Parachains":

Select the "Parathreads" tab.  Our parachain indicates the ID is `2000`, as per our chain spec.  Luckily, the default starting `ParaId` is 2000, as stated below:

![](../assets/register_paraid.png)

Select `Alice` as per above, and send the extrinsic.  Your parachain can now be registered using that `ParaId` once the extrinsic has confirmed.
