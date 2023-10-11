---
id: substrate-history
title: History Behind Substrate
sidebar_label: History Behind Substrate
description: Learn the history of how Substrate came about and its relevance to Polkadot.
---

Substrate, at its origins, was created very close to the conception of the Polkadot network. The two
are usually tightly coupled - where the improvements to Substrate funnel into Polkadot and vice
versa. Parachains that connect to Polkadot are also built using Substrate, generally using some
abstractions such as FRAME and Cumulus.

Setting the context is crucial to understand Substrate's role in web3. Polkadot is a relay chain
that uses Substrate libraries and FRAME. Substrate is a blockchain developer framework. It enables
the creation of solo chains or parachains. Initially, much of what was Substrate came from Polkadot
due to necessity. The reasoning behind this choice was if parachains were to be built, it would be
sensible to make all standard blockchain protocols and primitives available to parachain developers.

## The Polkadot SDK

As of August 25th, 2023, Substrate, Polkadot, and Cumulus were merged under a
[single monorepo](https://github.com/paritytech/polkadot-sdk) after being in three separate
repositories.
