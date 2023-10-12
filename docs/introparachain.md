---
id: introparachain
sidebar_position: 1
---

# Parachain Development Guide

This guide aims to jumpstart the process of developing and deploying parachains on Polkadot. This guide covers an overview of Polkadot architecture, creating your own parachain, and going through the process of registering it to a locally available relay chain.  It contains both a brief yet demystifying explanation of Polkadot and how various roles work together to provide data availability, interoperability, and shared security.  This guide also offers practical steps to begin parachain development, as well as offers different potential workflows for how to develop and test a parachain locally. 

If you wish to only learn about the current relay chain and parachain architecture, then you only need to read the [first section](./Parachain/beginner/section1/index.md).  Otherwise, this guide also provides the means to begin your parachain development journey.

:::tip Suggested Prerequisite/Complementary Reading 

The following courses, or knowledge of these subjects in general will aid you in smoothly following this guide.  As FRAME and Substrate are inevitable to know if you wish to modify and customize your parachain, the following courses cover highly useful material for this purpose:

1. [Intro to Rust](./introrust.md)
2. [Intro to Substrate](./introsubstrate.md)

* [**Rust**](https://www.rust-lang.org/tools/install) should already be installed on your system
* For a smoother start, clone the [Parachain Guide Resources](https://github.com/w3f/parachain-guide-resources) repository

:::

The primary goals are:

- Learn the basics of how Polkadot works as an **execution sharded** network.
- Learn the roles of the relay and parachain architecture.
- Install necessary binaries and dependencies needed to create networks locally.
- Modify your parachain and prep it for connecting to the relay chain.
- Create a parathread and reserve a para ID.
- Regiseter your parachain using the `sudo` pallet.
- Next steps and moving forward in deployment and production **(coming soon)**.

## Section 1 - Network Architecture

- [Polkadot Network Components](./Parachain/beginner/section1/network-components.md)
- [Parachain Architecture Overview](./Parachain/beginner/section1/parachain.md)
- [Relay Chain Architecture Overview](./Parachain/beginner/section1/relay-chain.md)

## Section 2 - Installing & Running Dependencies

- [Install Local Binaries](./Parachain/beginner/section2/install-binary.md)
- [Install the Cumulus Parachain Template](./Parachain/beginner/section2/install-template.md)
- [Running the Relay and Parachain](./Parachain/beginner/section2/running-chains.md)

## Section 3 - Registering Your Parachain

- [Creating a Parathread](./Parachain/beginner/section3/creating-parathread.md)
- [Registering Your Parachain with Sudo](./Parachain/beginner/section3/sudo-register.md)
- [Developing Your Parachain](./Parachain/beginner/section3/developing-parachain.md)

## Section 4 - Next Steps (coming soon)

- [Ecosystem Initiatives](./Parachain/beginner/section4/initatives.md)
- [Road to Production](./Parachain/beginner/section4/road-to-production.md)