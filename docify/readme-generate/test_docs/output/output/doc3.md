# Doc 3

```rust
#[test]
#[should_panic(
	expected = "Timestamp must increment by at least <MinimumPeriod> between sequential blocks"
)]
fn block_period_minimum_enforced() {
	new_test_ext().execute_with(|| {
		crate::Now::<Test>::put(44);
		let _ = Timestamp::set(RuntimeOrigin::none(), 46);
	});
}
```
