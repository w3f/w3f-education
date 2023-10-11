---
id: pallet-config
title: Adjusting Pallet Config & Runtime Overview
sidebar_label: Adjusting Pallet Config & Runtime Overview
description: Learn how a pallet's configuration works and connects with the runtime.
---

Before looking at our pallet (`pallet_connect`), let's tour the node's runtime - `runtime/lib.rs`
and change our pallet's configuration.

## Adjusting `pallet_connect`'s Config

Upon looking at the file, it is evident that each pallet must be configured. `pallet_connect` is no
different and requires several configuration parameters pertaining to its functionality:

```rust
/// Configure pallet-connect
impl pallet_connect::Config for Runtime {
    type RuntimeEvent = RuntimeEvent;
    type WeightInfo = pallet_connect::weights::SubstrateWeight<Runtime>;
    type Currency = Balances;
    type MaxBioLength = ConstU32<100>;
    type MinimumLockableAmount = MinimumLockableAmount;
    type MaxNameLength = ConstU32<100>;
    type Randomness = InsecureRandomness;
}
```

The ones to pay attention to for now are `MaxBioLength` and `MaxNameLength`. These define bounded
data types in the pallet and are configurable via the runtime.

Go ahead and change `MaxBioLength` to a higher limit:

```rust
/// Configure pallet-connect
impl pallet_connect::Config for Runtime {
    ...
    // Increase from 100 to 200.
    type MaxBioLength = ConstU32<200>;
    ...
}
```

Congratulations, you just changed your first runtime configuration parameter!

## `runtime/lib.rs` Overview

If you navigate to this file, it may seem intimidating at first. The node's runtime defines all the
business logic, or state transition function, for how an extrinsic may change the chain's state.
This runtime is built using FRAME and takes advantage of several macros and conventions used to
implement various pallets, as well as the runtime itself.

The runtime houses the configuration for not only itself but also the pallets that it utilizes.

### `impl frame_system::Config for Runtime` and `struct Runtime`

This implementation defines several configurable factors for a FRAME-based runtime. It uses
associated types, as discussed previously, to determine common types for blockchain-based
primitives. For example, for this runtime, an `AccountId` is defined as follows:

```rust
/// Some way of identifying an account on the chain.  We intentionally make it equivalent
/// to the public key of our transaction signing scheme.
pub type AccountId = <<Signature as Verify>::Signer as IdentifyAccount>::AccountId;

impl frame_system::Config for Runtime {
    ...
    /// The identifier used to distinguish between accounts.
    type AccountId = AccountId;
    ...
}
```

Note that the common type is often defined via a type alias at the top of `runtime/lib.rs`.

### Pallet Configurations

Following the primary configuration of the overall runtime, it is also necessary to configure each
pallet. This is done by implementing the pallet's `Config` trait for the runtime. For example, the
sudo pallet (`pallet_sudo`) is a simple configuration where it simply utilizes the runtime's `Event`
and `Call` types:

```rust
impl pallet_sudo::Config for Runtime {
    type RuntimeEvent = RuntimeEvent;
    type RuntimeCall = RuntimeCall;
}
```

### `construct_runtime!` macro

This macro is what is responsible for registering pallets that were configured. It is what creates
the runtime with the pallets and name given (in this case, `Runtime`):

```rust
construct_runtime!(
    pub struct Runtime
    where
        Block = Block,
        NodeBlock = opaque::Block,
        UncheckedExtrinsic = UncheckedExtrinsic,
    {
        System: frame_system,
        InsecureRandomness: pallet_insecure_randomness_collective_flip,
        Timestamp: pallet_timestamp,
        Aura: pallet_aura,
        Grandpa: pallet_grandpa,
        Balances: pallet_balances,
        TransactionPayment: pallet_transaction_payment,
        Sudo: pallet_sudo,
        // Include the custom logic from the pallet-connect in the runtime.
        Connect: pallet_connect,
    }
);
```
