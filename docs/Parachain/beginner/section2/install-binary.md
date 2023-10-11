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

One may use `apt`, so long as they add the necessary repositories:

```bash
# Import the security@parity.io GPG key
gpg --recv-keys --keyserver hkps://keys.mailvelope.com 9D4B2B6EB8F97156D19669A9FF0812D491B96798
gpg --export 9D4B2B6EB8F97156D19669A9FF0812D491B96798 > /usr/share/keyrings/parity.gpg
# Add the Parity repository and update the package index
echo 'deb [signed-by=/usr/share/keyrings/parity.gpg] https://releases.parity.io/deb release main' > /etc/apt/sources.list.d/parity.list
apt update
# Install the `parity-keyring` package - This will ensure the GPG key
# used by APT remains up-to-date
apt install parity-keyring
# Install polkadot
apt install polkadot
```

## Chain Specification

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
./polkadot/target/release/polkadot build-spec > ./relaychain/relaychain_spec.json
# or, with symlink
polkadot build-spec > ./relaychain/relaychain_spec.json
```

Once this is built, also build the **raw**, SCALE-encoded file:

```bash
# Run from locally compiled repository
./polkadot/target/release/polkadot build-spec \
    --chain ./relaychain/relaychain_spec.json \
    --raw > ./relaychain/relaychain_spec_raw.json

# or, with symlink
polkadot build-spec \
    --chain ./relaychain/relaychain_spec.json \
    --raw > ./relaychain/relaychain_spec_raw.json
```
