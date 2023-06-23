---
id: unit-tests
title: Writing unit tests for pallets
sidebar_label: Writing unit tests for pallets
description: Learn how to unit test your pallet.
---

With our dispatchable function written, it's time to ensure we understand how to unit test it.  Substrate and FRAME provide tools to unit test without having to spin up a local chain, including a mock environment along with traditionally written unit tests.

## Overview of `mock.rs`

The purpose of `mock.rs` is to mock a runtime configuration.  Upon observing it, you can notice that most types are regular, primitive types that are in place of the more abstract types inside of `runtime/lib.rs`:

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

For example, `AccountId` is `u64`, meaning a valid accoutn address can be an unsigned integer, i.e.,

```rust
let bob_account: u64 = 1;
```

This is for simplifying the testing process.


## Writing a unit test for `register`

:::info 

Navigate to `pallets/connect/src/tests.rs`

:::

Unit tests are placed within `tests.rs`.  They utilize the mock environment and configuration to test various scenarios with the pallet. These are constructed very much like a traditional Rust unit tests, with the caveat that these tests must be ran within the `TestExternalities` instance defined in `mock.rs`.

Using unit tests, we can test extrinsics, storage, errors, and events using our mock environment.

### Low balance test

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