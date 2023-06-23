---
id: coupling-pallets
title: Using other pallets
sidebar_label: Using other pallets
description: Learn how coupling other pallets can extend your own pallet's functionality
---

In the previous section, we successfully constructed a function that registers a user.  Within that function, we used the `T: Config` generic to access two interesting traits:

- `Currency` - called as `T::Currency`
- `Randomness` - called as`T::Randomness`

## Softly coupling pallets via `Config`

Both of these gave us the ability to check user balances with `Currency` and a source of randomness with `Randomness`.  Taking a closer look, these are both in our pallet's configuration.  The act of including a pallet's functionality within the configuration is called **soft coupling**:

```rust
/// Configure the pallet by specifying the parameters and types on which it depends.
#[pallet::config]
pub trait Config: frame_system::Config {
    /// Using the pallet_balances exposed 'Currency' trait to fetch user balance info
    type Currency: ReservableCurrency<Self::AccountId> + LockableCurrency<Self::AccountId, Moment = Self::BlockNumber>;
    /// Randomness!
    type Randomness: Randomness<Self::Hash, Self::BlockNumber>;
}
```

Each of these traits are actually interfaces to other pallets.  `ReservableCurrency` and `LockableCurrency` are both traits of the `pallet_balances`, and give us the ability to do things such as lock balance, check balance, and whatever other methods the trait exposes.

Randomness is a simpler example, and also accomplishes the same concept.  Any pallet that implements the `Randomness` trait can now be used within our pallet's configuration, just as the `ReservableCurrency` and `LockableCurrency` traits can also be utilized with any pallet that exposes these as interfaces.

## Calling the `Balances` and `Randomness` pallet within `register`

Because both of these traits are part of our `Config`, we are able to access these types using the generic `T`.  This is possible due to how the Pallet struct **must** take some generic `T` which implements `Config` as a trait:

```rust
/// The extrinsics, or dispatchable functions, for this pallet.
#[pallet::call]
impl<T: Config> Pallet<T> { ... }
```

Meaning that we now have access to any type within our configuration, as per `T: Config`.

### Type breakdown: `BalanceOf<T>`

At the type of the file, you notice type alias that uses `Currency` trait as well: 

```rust
type BalanceOf<T> =
	<<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
```

This type declaration is used to define our minimum lockable amount for a user.  In short, it properly states what balance should look like, as per the currency system (in this case, whatever `Currency` is)in place and being used in the rest of the chain.



