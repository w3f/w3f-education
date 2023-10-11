---
id: pallet-coupling
title: Pallet Coupling
sidebar_label: Pallet Coupling
description:
  Learn how to couple pallets to each other, and the differences between tight and loose (and when
  to use which).
---

Pallets can use each other as dependencies to access their specific functionalities. For example, we
use `pallet_balance` to access our pallet's underlying balances and lock statuses.

This is referred to as **pallet coupling**, and they define how pallets can interact with each other
on a software level. This is similar to object-oriented programming, where tight and loose coupling
indicates the relationship between two data structures. In Rust, this refers to how various traits
and associated types are used with one another so that they may call upon each other's respective
methods and implementations.

## Loose Coupling

Our pallet used **loose** coupling, as we merely utilized an exposed trait from the Balances pallet
(`Currency`). We further stated that we wish for our notion of `Currency` also to contain the traits
`ReservableCurrency` and `LockableCurrency`, which further opens up our configuration to potentially
other pallets:

```rust
// Loosely including Currency in the configuration
/// Configure the pallet by specifying the parameters and types it depends on.
#[pallet::config]
pub trait Config: frame_system::Config {
    ...
    type Currency: ReservableCurrency<Self::AccountId>
        + LockableCurrency<Self::AccountId, Moment = Self::BlockNumber>;
    ...
}
```

## Tight Coupling

**Tight** coupling a pallet involves explicitly declaring an entire, **specific** pallet as a
dependency. This would also mean that this pallet has to be within your pallet's `Cargo.toml` file,
precisely just that specific pallet's instance. An example of this is the Bounties pallet, which
tightly couples the
[Treasury](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/treasury) pallet
to it:

```rust
/// Notice the use of the '+' operator to tightly couple the Config of pallet_treasury
pub trait Config<I: 'static = ()>: frame_system::Config + pallet_treasury::Config<I> {}
```

Tightly coupling two pallets in this manner is helpful when they share very similar goals and
objectives and for pallets that are simple enough. Because the
[Bounties](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/bounties) pallet
solely depends on the
[Treasury](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/treasury) pallet
for payouts (and its subsequent types), it is sensible to couple it tightly.

## Which to use?

Overall, for maintainability and flexibility, loosely coupling is preferred. The benefit of loosely
coupling our pallet was to reduce the apparent need to bring in the entire pallet versus just
utilizing the traits you need.
