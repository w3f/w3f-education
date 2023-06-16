---
id: substrate-storage
title: Storage
sidebar_label: Storage
description: Learn how storage works in Substrate, and how it is crucial for managing state.
---

When building a custom pallet, **storage** of some kind will be needed.  As any other application, we need a place to store information after submitting state changes to the network.  Whether we’re looking to store a simple value, or complex data structures with mappings, a set of APIs are provided to implement it accordingly.

Storage items in FRAME allow for a developer to define and store new items in our blockchain’s state. Substrate's underlying `sp_io` are responsible, where they make calls accordingly to the storage layer of Substrate. 

## Substrate Storage Overview

Although FRAME makes declaring and using different storage primitives trivial, it's important to understand some context for what is occurring at a slightly lower level.

If you recall, the `sp_io` crate handles any needed I/O operations for the runtime.  In a theoretical scenario, `sp_io` could actually be called directly if FRAME was not being used.  This crate is not just simply logging to some arbitrary data base - there are several layers to the storage of a Substrate node. This is out of scope for this course, but it is prudent to know that just how abstract some of the mechanisms in Substrate are.

### FRAME Storage Abstraction

There are several ways to declare storage using FRAME.  These are done by using several storage items, of which are summarized below:

- `StorageMap` - A type that allow to store value for given key. Allowing to insert/remove/iterate on values.
- `StorageValue` - A type that allow to store a single value.
- `StorageDoubleMap` - A type that allow to store values for (key1, key2) couple. Similar to `StorageMap` but allow to iterate and remove value associated to first key.
- `StorageNMap` - A type that allow to store values for an arbitrary number of keys in the form of `(Key<Hasher1, key1>, Key<Hasher2, key2>, ..., Key<HasherN, keyN>).`

For more information on their usage and APIs, take a look at the [Substrate Rust documentation](https://paritytech.github.io/substrate/master/frame_support) for further info.


Further in the course, you will see `StorageMap` and `StorageValue` being utilized.