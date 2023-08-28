---
id: benchmarking
title: Introduction to Benchmarking
sidebar_label: Introduction to Benchmarking
description: A basic introduction to benchmarking in FRAME
---

This section will touch briefly on the concept weights and benchmarking in Substrate. While this
section will not go in-depth, any Substrate developer should know it when developing a pallet. In
the long run, producing production-ready pallets will become crucial.

## Weights in Substrate

Until now, fees have not been a concern for our Connect pallet because we are in `dev_mode`.
However, fees are a reality within the realm of pallet development.

**Weight** in Substrate refers to the overall computational, storage, and execution cost of a
particular extrinsic (state change). Weight is the measurement of the amount of time that a state
change takes to execute fully. One unit of weight is equal to one picosecond of execution time on
reference hardware.

Based on this weight, a fee is charged to the sender of the extrinsic.

## An Introduction to Benchmarking

To calculate an appropriate weight for an extrinsic, Substrate's benchmarking suite can test each
extrinsic load to estimate how much weight each state change would take. A `weights.rs` file is
generated via the included CLI and exposes a set of pre-defined weights to use as part of the
dispatchable function declaration.

Like unit testing, each extrinsic should have a corresponding benchmarking function within
`benchmarking.rs`.

:::note

As a general note, we are using **Benchmarking V2** within this course, which uses procedural macros
to declare benchmarking tests.

:::

### Example: Baseline Benchmark for `register`

The following test is a simple benchmark that uses several features. Usually, the idea is to
**benchmark each logical execution path** for your extrinsic. When calling the extrinsic, we utilize
the `#[extrinsic_call]` macro within our benchmarking function.

Because our function is quite simple, we only have a single baseline benchmark for our function,
`register`:

```rust
#[benchmark]
fn register_an_account() {
    let caller: T::AccountId = whitelisted_caller();

    T::Currency::make_free_balance_be(&caller, 10u32.into());

    let very_long_name = b"123456789".to_vec();
    let very_long_bio = b"USOsEy3cAmZudmWyUEMdlU6wVXsZeMj7Ts8rh7Laur3L1ZpvvorGOcZw17mDGtNhmxqYRnANsOxhhfauuRxJhz1PRtHKoXai0i3lT0cTFqpCGODLvRxk8MOiMmVMdoylxwXYMVMwoYuZJQStM9t8k4m9aESUQ5rcCkH408t9s4Yz3WfyvbZfF5bROFgrHug9uk4Iar7Q".to_vec();

    #[extrinsic_call]
    register(RawOrigin::Signed(caller.clone()), very_long_name, very_long_bio);
    assert!(<RegisteredUsers<T>>::get(&caller).is_some());
}
```
