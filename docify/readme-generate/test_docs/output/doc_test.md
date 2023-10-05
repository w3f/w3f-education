# Doc 1

```rust
#[test]
#[should_panic(expected = "Timestamp must be updated only once in the block")]
fn double_timestamp_should_fail() {
	new_test_ext().execute_with(|| {
		Timestamp::set_timestamp(42);
		assert_ok!(Timestamp::set(RuntimeOrigin::none(), 69));
	});
}
```

```rust
#[test]
fn sudo_basics() {
	// Configure a default test environment and set the root `key` to 1.
	new_test_ext(1).execute_with(|| {
		// A privileged function should work when `sudo` is passed the root `key` as `origin`.
		let call = Box::new(RuntimeCall::Logger(LoggerCall::privileged_i32_log {
			i: 42,
			weight: Weight::from_parts(1_000, 0),
		}));
		assert_ok!(Sudo::sudo(RuntimeOrigin::signed(1), call));
		assert_eq!(Logger::i32_log(), vec![42i32]);

		// A privileged function should not work when `sudo` is passed a non-root `key` as `origin`.
		let call = Box::new(RuntimeCall::Logger(LoggerCall::privileged_i32_log {
			i: 42,
			weight: Weight::from_parts(1_000, 0),
		}));
		assert_noop!(Sudo::sudo(RuntimeOrigin::signed(2), call), Error::<Test>::RequireSudo);
	});
}
```

```rust
#[test]
fn append_many_works() {
	test_closure(|| {
		PagedList::append_many(0..3);

		assert_eq!(PagedList::iter().collect::<Vec<_>>(), vec![0, 1, 2]);
	});
}
```
