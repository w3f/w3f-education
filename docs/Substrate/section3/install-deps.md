---
id: install-deps
title: Install, configure, and run the Node Template
sidebar_label: Install, configure, and run the Node Template
description: Install the substrate-node-template, which will jump-start the development process!
---

It’s time to finally download the Substrate Node Template. This repository will give us everything we need to run, test, and create our very own custom FRAME-based pallet.

## Cloning & Building

---

You should already have the Rust toolset installed from the [previous step.](https://www.notion.so/Downloading-Dependencies-c9d06a5f9e044450914d4c076adb9006?pvs=21) If not, go ahead and follow those then come back here.  Keep in mind this may take a bit to build and run, so feel free to get a cup of coffee or read an awesome Medium article while you wait.

Keep in mind, this repo is a clone from the original substrate-node-template, but with a few tweaks to make it easier to work with for when we start our pallet development.

```bash
git clone https://github.com/CrackTheCode016/substrate-node-template-course.git
cd substrate-node-template-course/
# this will build and launch the node
# if you wish to just build it, then run cargo build --release
cargo run --release -- --dev
```

Once it’s built, we have multiple ways of interacting and running our node.

## Running & Viewing our Development Chain

---

For immediate results to ensure our chain is up, go ahead and visit the Polkadot.js Explorer: 

[Polkadot/Substrate Portal](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944)

This link will automatically connect to your `localhost` node, where you can view all sorts of chain stats. For example, like accounts and their balances!  You can view blocks and events on-chain too, which will come in handy later. Have a good look around! 

![Screenshot 2022-10-07 at 10.26.41 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d978f4b6-00b1-4b9d-b45d-723e716b5586/Screenshot_2022-10-07_at_10.26.41_AM.png)

Another cool thing we can do is actively observe state changes live via examining the node’s storage instance under `Developer > Chain State`. Here, you can get the state of various storage mappings or values that were previously defined by the pallets in the runtime.  These are called **State Queries.**

For example, you can select the timestamp state query and click the plus button on the far right to get the time for the node:

![Screenshot 2022-10-07 at 10.29.37 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cbe3d15-c9d1-45e1-840e-a2329bb635df/Screenshot_2022-10-07_at_10.29.37_AM.png)

You can also simply search storage by raw hexadecimal key, however most of the time it’s easier to perform state queries via the respective pallet.

## Using the `substrate-frontend-template`


While the explorer is a good place for general functions, lets see what we can do with the `substrate-node-template`that we installed earlier. 

Navigate to where you installed it, and run `yarn start`. Once it’s launched my should see something like this:

![Screenshot 2022-10-07 at 10.44.59 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10414204-3901-482f-a94a-6f53be2646e8/Screenshot_2022-10-07_at_10.44.59_AM.png)

Voila! You now have most functionality and access to your chain through a GUI.  You can use the `transfer` pallet to transfer currency between accounts, upgrade your runtime via a forkless upgrade, and interact with pallets to modify state directly.

![Screenshot 2022-10-07 at 10.49.40 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a593e68e-c413-4d6f-a231-1b510040c734/Screenshot_2022-10-07_at_10.49.40_AM.png)

Feel free to play around here, and experiment as much as possible with this interface.  You’ll learn a lot just by doing that.  If you notice in the dropdown — one of the pallets is called `templateModule`  . 

In the next page, we’ll be modifying and going through this pallet to make it our very own.

If you thought we got technical in the last pages, here’s where it’s ***REALLY*** about to go down.