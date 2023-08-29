---
id: events-errors
title: Events & Errors
sidebar_label: Events & Errors
description: Define the necessary events and errors needed for our pallet
---

:::info

For this section, you should be in: `pallets/connect/lib.rs` to follow along.

:::

Although our node and pallet compile, it does not contain all the functionality we need to fulfill
the project's requirements.

We have three overarching components we need to take care of to fulfill our functionality:

1. **Implement events and errors**
2. Implement storage items
3. Implement dispatchable functions (extrinsics)

This section will focus on adding new events and errors to `pallet_connect` to prepare for creating
state changes.

## Defining Events - Adding a New Event

By now, your working directory should be `pallets/connect/lib.rs`. Navigate to `enum Event<T>`
inside of `lib.rs`:

```rust
#[pallet::event]
#[pallet::generate_deposit(pub(super) fn deposit_event)]
pub enum Event<T: Config> {}
```

:::info

`#[pallet::generate_deposit(pub(super) fn deposit_event)]` is a macro that we haven't covered yet.
It simply defines a helper method to deposit or emit an event.

:::

Considering the project's requirements, we would like to emit an event whenever a user registers. We
can add `Registered` to define a new event as a variant of our `Event` enum. As part of this event,
we also would like to show the AccountId, or address, of the registered user. The implementation is
as follows:

```rust
#[pallet::event]
#[pallet::generate_deposit(pub(super) fn deposit_event)]
pub enum Event<T: Config> {
    /// A new user has registered via our pallet.
    Registered { id: T::AccountId },
}
```

Later, we can emit this event to the network once a user registers.

## Defining Errors - Adding a New Error

As a part of our pallet's anti-sybil requirements, we also want to **only** register a user if they
have enough balance to place a lock on. However, if they don't have enough balance, we do not want
the extrinsic to commit to a state change.

We shouldn't panic within our pallet, meaning we must define an error to signify when someone has a
low balance.

Navigate to `enum Error`, and an error variant called `LowBalance`:

```rust
    // Errors inform users that something went wrong.
    #[pallet::error]
    pub enum Error<T> {
        /// Balance does not meet the minimum required amount
        LowBalance,
    }
```

Because we also have other requirements, be sure to also add these errors:

```rust
    // Errors inform users that something went wrong.
    #[pallet::error]
    pub enum Error<T> {
        /// Balance does not meet the minimum required amount
        LowBalance,
        /// Name exceeds MaxNameLength
        NameTooLong,
        /// Bio exceeds MaxBioLength
        BioTooLong,
        /// Name already registered
        NameInUse,
        /// Account ID is already registered
        AccountIdAlreadyRegistered,
        /// Integer overflow
        IntegerOverflow,
    }
```

Now we have a set amount of errors that cover any cases where our extrinsic may fail.

:::note How many events should I emit? How many errors should I define?

In pallet development, it's **highly recommended** to define errors for every edge case where a
state change may fail. The runtime should not panic, **ever**. It is prudent to define and handle
appropriate errors within your pallet.

Events do not need to be as often, but only as it is useful. Generally, an event can be emitted
whenever an extrinsic is successfully executed.

:::
