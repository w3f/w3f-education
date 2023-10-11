---
id: unit-tests
title: Writing unit tests for pallets
sidebar_label: Writing unit tests for pallets
description: Learn how to unit test your pallet.
---

With our dispatchable function written, it's time to ensure we understand how to unit test it.
Substrate and FRAME provide tools for unit tests without spinning up a local chain, including a mock
environment and traditionally written unit tests.

## Overview of `mock.rs`

The purpose of `mock.rs` is to mock a runtime configuration. Upon observing it, you can notice that
most types are regular, primitive types that are in place of the more abstract types inside of
`runtime/lib.rs`:

```rust
impl frame_system::Config for Test {
    ...
    type Index = u64;
    type BlockNumber = u64;
    type Hash = H256;
    type Hashing = BlakeTwo256;
    type AccountId = u64;
    ...
}
```

For example, `AccountId` is `u64`, meaning a valid account address can be an unsigned integer, i.e.,

```rust
let bob_account: u64 = 1;
```

The simplification of types is for simplifying the testing process.

### Test Externalities

To configure and produce an environment, notice the function at the bottom of `mock.rs`:

```rust
// Build genesis storage according to the mock runtime.
pub fn new_test_ext() -> sp_io::TestExternalities {
    frame_system::GenesisConfig::default().build_storage::<Test>().unwrap().into()
}
```

This function defines a 'testbed' for your tests to simulate aspects like the storage layer.

## Writing a unit test for `register`

:::info

Navigate to `pallets/connect/src/tests.rs`

:::

Unit tests are placed within `tests.rs`. They utilize the mock environment and configuration to test
various scenarios with the pallet. These are constructed like traditional Rust unit tests, with the
caveat that these tests must be run within the `TestExternalities` instance defined in `mock.rs`.

Using unit tests, we can test extrinsics, storage, errors, and events using our mock environment.

### Unit Test Cheatsheet

For testing, there are numerous macros and APIs one could call:

- `assert!`, `assert_ok!`, and `assert_eq!` work as per normal unit testing in Rust.
- To check if an event has been emitted, use `System::assert_last_event()` with the Event as the
  parameter. You may need to use `.into()`.
- To check if an error has been emitted, use `assert_noop!(call, Error::<Test>::SomeError);`. Notice
  the `::<Test>::` turbofish syntax used to call the error with the Test config as the generic
  parameter.
- If events aren't seemingly emitted within tests, be sure to set the testing environment to a
  height of at least **one**: `System::set_block_number(1);`

### Low balance test example

While all the tests are in `tests.rs`, here is an example of a unit test. FRAME provides numerous
helper APIs, such as `System`, to perform actions like setting the block height for the test
environment. See it in action below:

```rust
#[test]
fn balance_too_low() {
	new_test_ext().execute_with(|| {
		let name = b"polkadot".to_vec();
		let bio = b"A heterogeneous, sharded network.".to_vec();
		// Go past genesis block so events get deposited
		System::set_block_number(1);
		// Set the balance to 9 DOT - too low
		assert_ok!(Balances::force_set_balance(RuntimeOrigin::root(), 1, 9));
		// Dispatch a signed extrinsic.
		assert_noop!(
			Connect::register(RuntimeOrigin::signed(1), name.clone(), bio),
			Error::<Test>::LowBalance
		);
	});
}
```
