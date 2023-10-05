# Doc 2

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
