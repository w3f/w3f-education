---
id: coupling-pallets
title: Using other pallets
sidebar_label: Using other pallets
description: Learn how coupling other pallets can extend your own pallet's functionality
---

We successfully constructed a function that registers a user in the previous section. Within that
function, we used the `T: Config` generic to access two noteworthy traits:

- `Currency` - i.e., `T::Currency`
- `Randomness` - i.e., `T::Randomness`

## Softly coupling pallets via `Config`

Both of these allowed us to check user balances with `Currency` and a source of randomness with
`Randomness`. Taking a closer look, these are both in our pallet's configuration. The act of
including a pallet's functionality within the configuration is called **soft coupling**:

```rust
/// Configure the pallet by specifying the parameters and types it depends on.
#[pallet::config]
pub trait Config: frame_system::Config {
    /// Using the pallet_balances exposed 'Currency' trait to fetch user balance info
    type Currency: ReservableCurrency<Self::AccountId> + LockableCurrency<Self::AccountId, Moment = Self::BlockNumber>;
    /// Randomness!
    type Randomness: Randomness<Self::Hash, Self::BlockNumber>;
}
```

Each of these traits interfaces with other pallets. `ReservableCurrency` and `LockableCurrency` are
both traits of the `pallet_balances` and give us the ability to do things such as lock balance,
check balance, and whatever other methods the trait exposes.

Randomness is a more straightforward example and also accomplishes the same concept. Any pallet that
implements the `Randomness` trait can now be used within our pallet's configuration, just as the
`ReservableCurrency` and `LockableCurrency` traits can also be utilized with any pallet that exposes
these as interfaces.

## Calling the `Balances` and `Randomness` pallet within `register`

Because both traits are part of our `Config`, we can access these types using the generic `T`. This
is possible due to how the Pallet struct **must** take some generic `T` which implements `Config` as
a trait:

```rust
/// The extrinsics, or dispatchable functions, for this pallet.
#[pallet::call]
impl<T: Config> Pallet<T> { ... }
```

We can now access any type within our configuration, per `T: Config`.

### Type breakdown: `BalanceOf<T>`

At the top of the file, you notice a type alias that uses the `Currency` trait as well:

```rust
type BalanceOf<T> =
    <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
```

This type of declaration defines our minimum lockable amount for a user. In short, it correctly
states what balance should look like, as per the currency system (in this case, whatever `Currency`
is) in place and used in the rest of the chain.
