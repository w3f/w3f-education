---
id: events-errors
title: Events & Errors
sidebar_label: Events & Errors
description: Define the necessary events and errors needed for our pallet
---

:::caution

For this section, you should be in: `pallets/connect/lib.rs` to follow along.

:::

Although our node and pallet compile, it does not contain all the functionality we need to fulfill the project's requirements.

This section will focus on adding a new events and errors to `pallet_connect` in order to prepare for creating state changes.

## Defining Events - Adding a New Event

By now, your working directory should be `pallets/connect/lib.rs`.  Navigate to `enum Event<T>` inside of `lib.rs`:

```rust
#[pallet::event]
#[pallet::generate_deposit(pub(super) fn deposit_event)]
pub enum Event<T: Config> {}
```

:::info

`#[pallet::generate_deposit(pub(super) fn deposit_event)]` is a macro that we haven't covered yet. It simply defines a helper method to deposit, or emit, an event.

:::

If we think about the requirements of the project, we would like to emit an event every time a user registers.  To define a new event, we can simply add an event called `Registered` as a variant of our `Event` enum.  As part of this event, we also would like to show the AccountId, or address, of the user that registered.  The implementation is as follows:

```rust
#[pallet::event]
#[pallet::generate_deposit(pub(super) fn deposit_event)]
pub enum Event<T: Config> {
    /// A new user has registered via our pallet.
    Registered { id: T::AccountId },
}
```

Later on, we will be able to emit this event to the network once a user registers.

## Defining Errors - Adding a New Error

As a part of our pallet's anti-sybil requirements, we also want to **only** register a user if they have enough balance to lock.  However, if they don't have enough balance, we do not want the extrinisc to commit to a state change. 

We shouldn't panic our pallet, meaning we must define an error to signify when someone has a low balance. 

Navigate to `enum Error`, and an error variant called `LowBalance`:

```rust
	// Errors inform users that something went wrong.
	#[pallet::error]
	pub enum Error<T> {
		/// Balance does not meet the minimum required amount
		LowBalance,
	}
```

Because we also have other requirements, be sure to also add these errors as well:

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

Now we have set amount of errors that cover any cases where our extrinsic may fail.

:::note How many events should I emit? How many errors should I define?

In pallet development, it's **highly reccommended** to define errors for every edge case where a state change may fail.  The runtime should not panic, **ever**, it is prudent to define and handle appropriate errors within your pallet.

Events do not need to be as often, but only as it is useful.  Generally, an event can be emitted whenever an extrinsic is successfully executed.

:::