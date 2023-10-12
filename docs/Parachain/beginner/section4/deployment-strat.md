---
id: deployment-strat
title: Deployment Strategies
sidebar_label: Deployment Strategies
description: Explore different relay chains for deploying your parachains
---

The following explores different ways one can register a parachain on Rococo, Kusama, or Polkadot.
Keep in mind that the process of registering on Kusama versus Polkadot is quite similar, with Kusama
having altered parameters for various mechanisms related to parachains leases and crowdloans.

## Testnet - Deploying on Rococo

Rococo is a testnet for parachains. If you're looking to have a very realistic configuration
(similar to Polkadot's) to connect to, then Rococo is the place to start after you've completed
developing and testing locally.

Deploying to Rococo requires submitting a form,
[which you may find here.](https://github.com/paritytech/subport/issues/new?assignees=al3mart%2CAlexD10S&labels=Rococo&projects=&template=rococo.yaml)

This will enable you obtain a parachain slot and subsequently deploy your parachain on Rococo and
test your parachain in an actual multi-chain environment.

## Lease a Parachain Slot through Auctions

Obtaining a slot on Polkadot or Kusama is a different process - you will need to participate in a
[candle-style auction](https://wiki.polkadot.network/docs/learn-auction#mechanics-of-a-candle-auction).
Unlike Rococo, you will need to participate in a
[slot auction](https://wiki.polkadot.network/docs/learn-auction) for a slot on either of these
networks.

### Canary - Deploying on Kusama

:::warning More detailed instructions coming soon

This section is currently incomplete.

:::

Find details on how auctions are used to obtain a parachain slot on
[Kusama here](https://guide.kusama.network/docs/learn-auction).

### Production - Deploying on Polkadot

:::warning More detailed instructions coming soon

This section is currently incomplete.

:::

Find details on how auctions are used to obtain a parachain slot on
[Polkadot here](https://wiki.polkadot.network/docs/learn-auction).
