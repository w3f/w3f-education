---
id: install-template
title: Install the Cumulus Parachain Template
sidebar_label: Install the Cumulus Parachain Template
description: Install the Cumulus Parachain Template
---

With our relay chain ready to be launched, we now need to ensure we have a parachain that meets the aforementioned requirements.  

In this page, you will:

- Install and compile the `substrate-parachain-template`
- Configure the ParaID & Chain Spec
- Generate your parachain's runtime and genesis state (Wasm)

## Install the `substrate-parachain-template`

The `substrate-parachain-template` is a Cumulus ready node template.  If you have taken the previous Intro to Substrate course, you may have used a similar template.  That template was a standalone chain - this template contains the requirements that a parachain needs to fulfill.

1. Start by cloning the repository with the **same version as the relay chain**:

    ```bash
    git clone --depth 1 --branch polkadot-v1.0.0 https://github.com/substrate-developer-hub/substrate-parachain-template.git
    ```

2. Ensure we're on our own branch, and now build

    :::caution ⌛ This will take some time

    Depending on your machine, this may take 45-60 minutes.

    :::

    ```bash
    cd substrate-parachain-template
    git switch -c my-branch-v1.0.0
    # Build
    cargo build --release
    ```

Once your parachain is compiled, the process of altering it (if required) and recompiling will be trivial. 

:::tip Add to your local path!

For ease of use, consider adding the target executable to your local path:

    ```bash
    export PATH= ./target/release/substrate-parachain-template

    # Use directly in path!
    substrate-parachain-template --help
    ```

:::

## Parachain Chain Specification

Just as the relay chain had a chain spec, the parachain must have one as well.  It is generated in the same way:


1. Firstly, generate the JSON file:

    ```bash
    ./target/release/substrate-parachain-template build-spec > /tmp/parachain_chain_spec.json
    ```

2. Once this is built, also build the **raw**, SCALE-encoded file:

    ```bash
    ./target/release/polkadot build-spec > /tmp/parachain_chain_spec.json
    ```


## Parachain Genesis & Runtime State

If you recall, the runtime of every Substrate-based chain is compiled down to Web Assembly (Wasm).  This enables the runtime to be portable and stored on the relay chain, which is used for the purpose of validating state transitions from the parachain's collator.

The genesis configuration must also be configured, as the relay chain will require it when registering it in the next section.  These both depend on the `parachain_chain_spec.json` which we previously generated.

### Generating The Runtime Wasm Bundle

```bash
./target/release/parachain-template-node export-genesis-wasm --chain raw-parachain-chainspec.json para-2000-wasm
```

### Generating the Genesis Wasm Bundle

```bash
./target/release/parachain-template-node export-genesis-state --chain raw-parachain-chainspec.json para-2000-genesis-state
```

By now, you should have three total files generated: 

- **Parachain Runtime**: `para-2000-wasm`
- **Genesis State**: `para-2000-genesis-state`
- **Raw Chain Spec**: `raw-parachain-chainspec.json`

With these, we are now able to run our relay chain validators, run our parachain collator, and finally register our parachain.

