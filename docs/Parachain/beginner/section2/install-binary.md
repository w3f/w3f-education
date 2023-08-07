---
id: install-binary
title: Install Local Binaries
sidebar_label: Install Local Binaries
description: Install the necessary Polkadot binaries onto your local machine.
---

This page will focus on installing the dependencies you need to run a local relay chain.  You will:

- Install `polkadot`
- Configure a valid chain specification for your relay chain

## Prerequisites

Before starting, you should have the following already on your system:

1. **Rust Toolchain**
2. **git**

For more information, view the **General Prerequisites** page.

## Installing `polkadot`

For this guide, we will ensure a consistent environment by installing Polkadot.  This is how we will provision and start our relay chain instance:


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

:::caution 

Depending in your machine, this can take 45-60 minute to build.

:::

1. Once compiled, ensure it runs:

```bash
./target/release/polkadot --help
```

:::tip Add to your local path

Adding your newly compiled `polkadot` binary will help in ensuring you can focus on launching your chain locally.

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

Once Polkadot is compiled, we must ensure we have a valid `chain_spec` file to launch our local relay chain.  For the purposes of this guide, you can download the one located here: parachain_development_guide_chain_spec.json. Keep this at hand, as this will be used to run your relay chain.

### Generating a Custom Chain Specification

It is possible to also generate your own, custom chain specification.  This is usually done after changing the `polkadot` source code, as the `code` field within the chain spec would need to be updated.  Once you modify the chain spec, you can run the following command to generate it:

```bash
./target/release/polkadot build-spec > /tmp/chain-spec-plain.json
```



