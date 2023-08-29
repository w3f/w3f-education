---
id: how-to-test-frame
title: How to approach testing in FRAME
sidebar_label: How to approach testing in FRAME
description:
  How to correctly approach testing in FRAME and a deeper look at how to mock types properly.
---

In [Module 5](../section5/unit-tests.md), we briefly reviewed a basic unit test implementation for
our pallet. This section will provide more depth to testing a pallet in Substrate and how to
approach it in general.

## Good Practices - Test Everything

As discussed in [Runtime Panics & FRAME Best Practices](./runtime-panics.md), your pallet should
never explicitly panic due to something like `unwrap()`-ing an invalid value or even accounting for
edge cases like integer overflows by using
[safe arithmetic](./runtime-panics.md#using-safe-arithmetic).

The same approach of ensuring **any** edge case is covered in the runtime can be reinforced in unit
tests. Ideally, every error should have an accompanying (or inclusive) unit test to ensure the error
is correctly handled.

## Mocking Types and Pallets

Unit tests require a mock runtime environment to be defined. Because using actual primitives could
be prohibitive in testing, types are mostly mocked.

If you go back to the `substrate-mooc-node/pallets/connect/src/mock.rs` and observe the mock runtime
called `Test`, `AccountId` is a prime example of a simple, mock primitive as `u64`:

```rust
impl frame_system::Config for Test {
    ...
    type AccountId = u64;
    ...
}
```

An account id is simply a number versus a more complex type in testing. You may also notice many
types in this configuration are merely just the Rust unit type, as they aren't relevant in the
context of this mock environment (at least for our specific pallet) as denoted by
`SomeConfigParam = ()`.

Other types, such as a `Block` within the runtime, are helpfully defined via
`frame_system::mocking::MockBlock<Test>`.

### Mocked Pallets

Because pallets are external modules that expose several traits and their respective `struct`, they
can also be configured via these mock types. Take a look at `pallet_balance`, which is defined
within `mock.rs`:

```rust
impl pallet_balances::Config for Test {
    type Balance = u128;
    type RuntimeEvent = RuntimeEvent;
    type ExistentialDeposit = ExistentialDeposit;
    type AccountStore = System;
    type ReserveIdentifier = [u8; 8];
}
```

Again, notice how `Balance` is defined as a primitive Rust `u128` type.

### Case Study: Randomness

For some other traits/pallets, it's possible that `frame_support_test` can provide extra mock and
testing-related crates. For example, `TestRandomness<T>` is a mock type for randomness since we
don't have a running chain to generate the traditional entropy. For this reason, it also makes our
tests much more predictable (because it's a predictable source of randomness for testing), which is
ideal:

```rust
/// These values will always be the same
#[test]
fn generate_gradient_with_correct_length() {
    let hex = Connect::generate_hex_values(H256([0; 32]));
    println!("{:?}", hex);
    assert_eq!(hex.0, [8, 48, 48]);
    assert_eq!(hex.1, [8, 48, 48]);
}
```

It's also possible to define your types for this substitution.
