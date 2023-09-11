---
id: developing-parachain
title: Developing your parachain with FRAME
sidebar_label: Developing your parachain with FRAME
description: Configure and customize your parachain before registering it on the relay chain.
---

Congratulations, you have successfully registered a parachain to your local relay chain! 

Now, you have a couple options: 

1. Modify your existing parachain and upgrade its runtime.
2. Add more parachains with domain specific functionality.
3. Change the relay chain's core configuration and functionality.

Both of these options will require changes to the code base(s), and for the binaries to be re-compiled.  In the case of the parachain, the parachain must be upgraded in order to utilize the new runtime.  

## How to approach customizing your parachain

As the parachain template provided is mostly a Substrate node that uses FRAME, one can simply add or develop new pallets for their runtime.  For an example on how to develop a pallet from scratch, check out our [Intro to Substrate course](../../../introsubstrate.md).

## Register a second, custom parachain

Another, more advanced option would be to setup another parachain.  It would follow the same process as described, only you could challenge yourself by adding an XCM config to enable cross consensus messaging within your network.  Another option would be to configure it as a system parachain, which is a parachain that fulfills a specific role and uses the relay chain as a form of economic security.