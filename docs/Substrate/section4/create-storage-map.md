---
id: create-storage-map
title: Creating storage maps
sidebar_label: Creating storage maps
description: Define and create storage maps for our pallet.
---

:::info

For this section, you should be in: `pallets/connect/lib.rs` to follow along.

:::

This section will focus on adding a new FRAME storage item to `pallet_connect`. With our events and
errors defined, we have two items left on our action list:

1.  Implement events and errors
2.  **Implement storage items**
3.  Implement dispatchable functions (extrinsics)

## Defining a Storage Item

While we have errors to define **user** as out of bounds and events that emit when someone
successfully registers, there is currently no place to store the data about the user in underlying
storage.

There are several types of storage items in FRAME. We will use a `StorageMap`, which works similarly
to a `HashMap` in principle. Navigate to the struct called `UserMetadata`, and right under it, add
this type alias:

```rust
    /// Registered users mapped by address
    #[pallet::storage]
    #[pallet::getter(fn registered_users)]
    pub type RegisteredUsers<T: Config> =
        StorageMap<_, Blake2_128Concat, T::AccountId, UserMetadata<T>, OptionQuery>;
```

This storage item maps the `AccountId` from Config (hence `T::AccountId`) to the struct
`UserMetadata`. The `#[pallet::storage]` defines and expands this type alias for us.

A few notes about this storage item:

- `Blake2_128Concat` refers to how the keys are hashed, referring to the `Blake2_128` hashing
  algorithm. This is a **secure** hashing algorithm.
- `T::AccountId` is the key to access the value, `UserMetadata<T>`.
- The generic `T` must implement the `Config` trait. This gives it access to overarching types, such
  as core primitives (i.e., `AccountId`).
- `OptionQuery` refers to how to handle when the value is retrieved. `OptionQuery` works by
  returning an `Option<T>`, meaning a user can either be `Some(UserMetadata)` or `None`.
