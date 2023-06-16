---
id: substrate-storage
title: Storage
sidebar_label: Storage
description: Learn how storage works in Substrate, and how it is crucial for managing state.
---

When building a custom pallet, **storage** of some kind will be needed.  As any other application, we need a place to store information after submitting state changes to the network.  Whether we’re looking to store a simple value, or complex data structures with mappings, a set of APIs are provided to implement it accordingly.

Storage items in FRAME allow for a developer to define and store new items in our blockchain’s state. Substrate's underlying `sp_io` are responsible, where they make calls accordingly to the storage layer of Substrate. 

## Substrate Storage Overview

### Substrate Storage Abstractions