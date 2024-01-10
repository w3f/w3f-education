---
id: dispatchable
title: Creating dispatchable functions
sidebar_label: Creating dispatchable functions
description: Creating dispatchable functions for our pallet.
---

With all of our tools in place to register a user, let's go through the process of adequately
registering them via an **extrinsic** or state change.

:::info What is an extrinsic again?

An extrinsic is a transaction or a unit to define how the state should change within the network.

:::

## Adding the `register` dispatchable

Navigate to the `#[pallet::call]` macro; it should be empty:

```rust
#[pallet::call]
impl<T: Config> Pallet<T> {
    // Our dispatchable goes here.
}
```

We are going to create a function called `register`, which will take several parameters/factors into
consideration and perform the following checks:

- Take a parameter, `name`, of the user. The character amount must be below `MaxNameLength`.
- Take a parameter, `bio`, of the user. The character amount must be below `MaxBioLength`.
- Check if they have enough balance to lock, and if so, lock it. Else, they cannot register.
- Generate a profile picture for our user
- If the user meets the requirements, we store them in our `StorageMap`.
- Emit an event that they registered.

### Defining our sender and function

With our requirements adequately defined, we can begin coding this function. Go ahead and paste the
function called `register` that includes some beginning logic to start:

```rust
#[pallet::call]
impl<T: Config> Pallet<T> {

    /// Registers a user to the network.  It requires the balance of the sender to have an amount
    /// which is greater than or equal to MinimumLockableAmount. Locks MinimumLockableAmount as
    /// part of the registration process.
    #[pallet::call_index(0)]
    pub fn register(origin: OriginFor<T>, name: Vec<u8>, bio: Vec<u8>) -> DispatchResult {
        let sender = ensure_signed(origin)?;
    }
}
```

### Checking balance and using `ensure!` to check requirements

A very useful macro, `ensure!`, is provided by FRAME. This macro enables us to check a condition. If
the condition proves false, it allows an extrinsic to fail with a specific error.

We can also use the `Currency` trait included with our configuration. We will elaborate more on this
trait later but know that for now, it enables us to check the balance of the sender:

```rust
// Retrieve the "free" balance of the user
let balance = T::Currency::free_balance(&sender);

// Before proceeding - we have to make sure the *free* balance of a user is enough to
// lock up!  Otherwise, we halt this dispatchable with an error.
ensure!(balance >= T::MinimumLockableAmount::get(), Error::<T>::LowBalance);
```

### Unbounded to bounded

If you notice, the parameters (`name` and `bio`) provided in `register` are of type `Vec<u8>`. This
is a vector of bytes, which you may now consider a `String`.

Within our config, we have two notable constants defined: `MaxBioLength` and `MaxNameLength`. We
want our two parameters to be **bounded** to these limits, as we shouldn't allow for infinite values
to be stored on the chain.

The following code does just that and maps the appropriate error if it does exceed this length. We
use the type `BoundedVec` to convert from a `Vec` to something that is bounded:

```rust
let name_bounded: BoundedVec<u8, T::MaxNameLength> =
    BoundedVec::try_from(name.clone()).map_err(|_| Error::<T>::NameTooLong)?;
let bio_bounded: BoundedVec<u8, T::MaxBioLength> =
    BoundedVec::try_from(bio).map_err(|_| Error::<T>::BioTooLong)?;

// 2.  Check if the name already exists or user metadata already exists
ensure!(<Names<T>>::get(&name_bounded).is_none(), Error::<T>::NameInUse);
ensure!(
    <RegisteredUsers<T>>::get(&sender).is_none(),
    Error::<T>::AccountIdAlreadyRegistered
);
```

### Generate a gradient profile and build our user

We can build our user once we have our parameters converted and ready.

Firstly, we can call another trait, `T::Randomness`, to provide a random value to the included
`generate_hex_values` function.

This will return two randomly generated hex values that can be used to create a gradient profile
picture:

```rust
// Generate our random profile picture (aka, two hex values that form a gradient)
// Usually, some increasing nonce is used as a seed.  For simplicity, we use the account
// id as the seed.
let (value, _) = T::Randomness::random(&sender.encode());
let random_pfp = Self::generate_hex_values(value);

// Construct our UserMetadata.  Ideally, we could also create an implementation to make
// this easier to create!
let user_metadata: UserMetadata<T> = UserMetadata {
    name: name_bounded.clone(),
    bio: bio_bounded,
    profile_gradient: random_pfp,
    account_id: sender.clone(),
};
```

### Lock balance and store our user

With our users fully configured, we can now lock their balance and finish the registration process
by storing them in our `RegisteredUsers` mapping:

We also add the user's name to another mapping of names (`Names`) to ensure it doesn't get taken.

```rust
// Lock the minimum deposit.  This account will now have this amount locked until
// they 'de-register'.
T::Currency::set_lock(
    LOCK_ID,
    &sender,
    T::MinimumLockableAmount::get(),
    WithdrawReasons::RESERVE,
);

// Store the user, add to existing names, and update the total amount of users
<RegisteredUsers<T>>::insert(&sender, user_metadata);
<Names<T>>::insert(&name_bounded, sender.clone());
```

### Update the total amount of users on the network

Once we register the user, we can update the total number of users on the network. Note the use of
`checked_add` and `unwrap_or_default()`:

```rust
// Note the use of 'unwrap_or_default' - this is better than just a plain 'unwrap()'
// The default for 'u32' is 0, meaning an 'unwrap_or(0)' could also work here!

let total_registered = <TotalRegistered<T>>::get().unwrap_or_default();

// Using checked_add() ensures 'safe math' occurs.
// Since we never want panic within a runtime, we have to ensure all *possible* errors
// can be caught.

<TotalRegistered<T>>::put(
    total_registered.checked_add(1).ok_or(Error::<T>::IntegerOverflow)?,
);
```

### Emit an event

Lastly, we can emit an event once everything above is performed to indicate a new user has been
registered:

```rust
// Emit an event to indicate a new user was added to the network
Self::deposit_event(Event::Registered { id: sender });
```

### Full `register` function

The entire register function should end up looking like this by the end:

```rust
    #[pallet::call_index(0)]
    pub fn register(origin: OriginFor<T>, name: Vec<u8>, bio: Vec<u8>) -> DispatchResult {
        let sender = ensure_signed(origin)?;
        let balance = T::Currency::free_balance(&sender);

        // Before proceeding - we have to make sure the *free* balance of a user is enough to
        // lock up! Otherwise, we halt this dispatchable with an error.
        ensure!(balance >= T::MinimumLockableAmount::get(), Error::<T>::LowBalance);

        // 1. Craft the user metadata out of the given parameters from `register`.
        // Keep in mind we have to cast these to `BoundedVec` using the limits we have defined
        // in our Config (hence why we must access them using our handy `T` generic operator!).
        // Notice the error handling! Other types of error handling are okay too :)

        let name_bounded: BoundedVec<u8, T::MaxNameLength> =
            BoundedVec::try_from(name.clone()).map_err(|_| Error::<T>::NameTooLong)?;
        let bio_bounded: BoundedVec<u8, T::MaxBioLength> =
            BoundedVec::try_from(bio).map_err(|_| Error::<T>::BioTooLong)?;

        // 2. Check if the name already exists or user metadata already exists
        ensure!(<Names<T>>::get(&name_bounded).is_none(), Error::<T>::NameInUse);
        ensure!(
            <RegisteredUsers<T>>::get(&sender).is_none(),
            Error::<T>::AccountIdAlreadyRegistered
        );

        // 3. Generate our random profile picture (aka, two hex values which form a gradient)
        // Usually, some increasing nonce is used as a seed. For simplicity, we use the account
        // id as the seed.
        let (value, _) = T::Randomness::random(&sender.encode());
        let random_pfp = Self::generate_hex_values(value);

        // 4. Construct our UserMetadata.  Ideally, we could also create an implementation to make
        // this easier to create!
        let user_metadata: UserMetadata<T> = UserMetadata {
            name: name_bounded.clone(),
            bio: bio_bounded,
            profile_gradient: random_pfp,
            account_id: sender.clone(),
        };

        // 5. Lock the minimum deposit.  This account will now have this amount locked until
        // they 'de-register'.
        T::Currency::set_lock(
            LOCK_ID,
            &sender,
            T::MinimumLockableAmount::get(),
            WithdrawReasons::RESERVE,
        );

        // 6. Store the user, add to existing names, and update total amount of users
        <RegisteredUsers<T>>::insert(&sender, user_metadata);
        <Names<T>>::insert(&name_bounded, sender.clone());

        // Note the use of 'unwrap_or_default' - this is better than just a plain 'unwrap()'
        // The default for 'u32' is 0, meaning an 'unwrap_or(0)' could also work here!

        let total_registered = <TotalRegistered<T>>::get().unwrap_or_default();

        // The use of checked_add() ensures 'safe math' is taking place.
        // Since we never want panic within a runtime, we have to ensure all *possible* errors
        // can be caught.

        <TotalRegistered<T>>::put(
            total_registered.checked_add(1).ok_or(Error::<T>::IntegerOverflow)?,
        );

        // 7. Emit an event to indicate a new user was added to the network
        Self::deposit_event(Event::Registered { id: sender });

        Ok(())
    }
```
