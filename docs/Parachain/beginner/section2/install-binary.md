---
id: install-binary
title: Install Local Binaries
sidebar_label: Install Local Binaries
description: Install the necessary Polkadot binaries onto your local machine.
---

This page will focus on installing the dependencies you need to run a local relay chain. You will:

- Install `polkadot`
- Configure a valid chain specification for your relay chain

## Prerequisites

Before starting, you should have the following already on your system:

1. **Rust Toolchain**
2. **git**

For more information, view the **General Prerequisites** page.

For the best experience in following this guide, consider also cloning this repository:
[`parachain-guide-resources`](https://github.com/CrackTheCode016/parachain-guide-resources)

## Installing `polkadot`

For this guide, we will ensure a consistent environment by installing Polkadot. This is how we will
provision and start our relay chain instance:

### Option 1: Manual Compilation (Recommended)

If you are on macOS, below is the current best way to install `polkadot`:

1. Clone the latest, stable branch of Polkadot (1.0.0 at the time of this writing):

   ```bash
   git clone --branch release-v1.0.0 https://github.com/paritytech/polkadot.git
   ```

2. Use `cargo` to build the binary

   ```bash
   cargo build --release
   ```

   :::caution ⌛ This will take some time

   Depending on your machine, this may take 45-60 minutes.

   :::

3. Once compiled, ensure it runs:

   ```bash
   ./target/release/polkadot --help
   ```

:::tip Create a symlink to easily run your Polkadot binary.

For ease of use, consider adding the target executable to your local path or creating a symlink.
There are three binaries that need to be linked if you choose to do this:

- `polkadot`
- `polkadot-execute-worker`
- `polkadot-prepare-worker`

```bash
# Replace <path> with the path to your cloned polkadot repo
# The last line may need to be replaced!

# Polkadot
ln -s <path-to-polkadot>/target/release/polkadot /usr/local/bin/polkadot

# Polkadot Prepare Worker
ln -s <path-to-polkadot>/target/release/polkadot-prepare-worker /usr/local/bin/polkadot-prepare-worker

# Polkadot Execute Worker
ln -s <path-to-polkadot>/target/release/polkadot-execute-worker /usr/local/bin/polkadot-execute-worker

# Use directly in path!

polkadot --help
```

:::

### Option 2: Install via a package manager (Linux)

One may use `apt` to install the `polkadot` binary. You may find instructions for this on the
[Polkadot Wiki](https://wiki.polkadot.network/docs/maintain-sync#setup-instructions).

## Chain Specification

:::warning This is optional!

Generating a new chain specification should only be done if you want to run the relay chain with
your own modification. It is recommended that you skip this and come back to it later if you decide
to change how the relay chain implementation works, or wish to try out different configs.

For development purposes, it is recommended that you use the chain specification included within
[`parachain-guide-resources`](https://github.com/w3f/parachain-guide-resources).

:::

Once Polkadot is compiled, we must ensure we have a valid `chain_spec` file to launch our local
relay chain.

For the purposes of this guide, you can use the one located here with your cloned repository at
`relaychain/relaychain_chain_spec.json` and `relaychain/relaychain_chain_spec_raw.json` and. Keep
this at hand, as this will be used to run your relay chain.

### Optional: Generating a Custom Chain Specification

It is possible to also generate your own, custom chain specification. This is usually done after
changing the `polkadot` source code, as the `code` field within the chain spec would need to be
updated. Once you modify the chain spec, you can run the following command to generate it:

```bash
# Run from locally compiled repository
./target/debug/polkadot build-spec > ./relaychain/my_relaychain_spec.json
# or, with symlink
polkadot build-spec > ./relaychain/my_relaychain_spec.json
```

Once this is built, also build the **raw**, SCALE-encoded file:

```bash
# Run from locally compiled repository
./target/debug/polkadot build-spec \
    --chain ./relaychain/my_relaychain_spec.json \
    --raw > ./relaychain/my_relaychain_spec_raw.json

# or, with symlink
polkadot build-spec \
    --chain ./relaychain/my_relaychain_spec.json \
    --raw > ./relaychain/my_relaychain_spec_raw.json
```
