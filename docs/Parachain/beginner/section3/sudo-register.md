---
id: sudo-register
title: Using Sudo to register your parachain
sidebar_label: Using Sudo to register your parachain
description: Creating and registering your parathread via sudo.
---

Normally, a parachain slot auction would have to take place in order to achieve a connection with the relay chain.  These auctions can take some time - usually one week, with multiple parachains competing for a slot in the relay chain.  

One possibility is to modify our relay chain's code to lower auction times, however, this still is unideal for development purposes.

A great side effect of running our own local relay chain includes bypassing that process via our own type of governance - `sudo`

## A Brief Introduction to the Sudo Pallet

The [`sudo`](https://paritytech.github.io/substrate/master/pallet_sudo/index.html) pallet executes calls that require `Root` origin with any keys that are declared as "sudo".  In most development environments, `Alice` is one of these keys.  It is also possible to add more keys if needed via the `set_key` extrinsic.

It mostly acts as a wrapper for other calls.  It is not meant to be used in pallets directly, but rather merely execute privileged calls that require the `Root` origin.

## Using Sudo as Governance in Polkadot.js

Using the `sudo` pallet, we can bypass the auction process and register the parachain directly.  

:::caution Make sure your collator is running!

In order to register our parachain, we need both our relay chain creating blocks and our parachain's collator running

:::

Navigate to the [Polkadot.js Developer Console](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer), and select the `Sudo` tab:

Once here, select the `parasSudoWrapper` in the dropdown:

Upload the genesis (`parachain-genesis-state`) and runtime (`parachain-wasm`) from the `parachain-guide-resources` repository:

In the events tab in the main explorer, you should see two events - `sudo.Sudid` and `paras.PvfCheckAccepted`.  These should indicate that the parachain's runtime has been successfully registered, and the collator will start syncing with the relay chain.



