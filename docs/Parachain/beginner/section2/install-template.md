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
- If you don't wish to customize or go through this process, refer to the `parachain-guide-resources` repository



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

:::tip Create a symlink to easily run your parachain binary.

For ease of use, consider adding the target executable to your local path or creating a symlink:
 
```bash
# Replace <path> with the path to your cloned substrate-parachain-template repo
# The last line may need to be replaced! 
ln -s <path>/target/release/substrate-parachain-template /usr/local/bin/substrate-parachain-template 
# Use directly in path!

substrate-parachain-template --help
```

:::

:::tip If you don't wish to customize or go through this process, refer to the [`parachain-guide-resources`](https://github.com/CrackTheCode016/parachain-guide-resources) repository

The repository has everything required to proceed to running your chains.

:::

## Parachain Chain Specification

Just as the relay chain had a chain spec, the parachain must have one as well.  It is generated in the same way:


1. Firstly, generate the JSON file:

    ```bash
    # Run from locally compiled repository
    ./target/release/substrate-parachain-template build-spec > /tmp/parachain_chain_spec.json
    # or, with symlink:
    substrate-parachain-template build-spec > /tmp/parachain_chain_spec.json
    ```

2. Once this is built, also build the **raw**, SCALE-encoded file:

    ```bash
    # Run from locally compiled repository
    ./target/release/substrate-parachain-template build-spec > /tmp/parachain_chain_spec.json
    # or, with symlink:
    substrate-parachain-template build-spec > /tmp/parachain_chain_spec.json
    ```


## Parachain Genesis & Runtime State

If you recall, the runtime of every Substrate-based chain is compiled down to Web Assembly (Wasm).  This enables the runtime to be portable and stored on the relay chain, which is used for the purpose of validating state transitions from the parachain's collator.

The genesis configuration must also be configured, as the relay chain will require it when registering it in the next section.  These both depend on the `parachain_chain_spec.json` which we previously generated.

As always, these are already available within 

### Optional: Generating The Runtime Wasm Bundle

    ```bash
    ./substrate-parachain-template/target/target/release/parachain-template-node export-genesis-wasm --chain ./parachain/parachain_chain_spec_raw.json parachain-wasm
    # or, with symlink:
    parachain-template-node export-genesis-wasm --chain ./parachain/parachain_chain_spec_raw.json parachain-wasm
    ```

### Optional: Generating the Genesis Wasm Bundle

    ```bash
    ./substrate-parachain-template/target/target/release/parachain-template-node export-genesis-state --chain ./parachain/parachain_chain_spec_raw.json ./parachain/parachain-genesis-state
    # or, with symlink:
    parachain-template-node export-genesis-state --chain ./parachain/parachain_chain_spec_raw.json ./parachain/parachain-genesis-state
    ```

By now, you should have three total files generated and/or available: 

- **Parachain Runtime**: `parachain-wasm`
- **Genesis State**: `parachain-genesis-state`
- **Raw Chain Spec**: `parachain_chain_spec_raw.json`

With these, we are now able to run our relay chain validators, run our parachain collator, and finally register our parachain.
