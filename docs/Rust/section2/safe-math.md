---
id: safe-math
title: Using Substrate Arithmetic for Safe Math
sidebar_label: Using Substrate Arithmetic for Safe Math
description:
  Learn how math can be dangerous in the context of blockchain runtimes, and why floating point
  numbers are not always accurate.
---

<!-- prettier-ignore -->
:::warning This page is under construction

:::

Seemingly small things like adding or substracting numbers can present some novel scenarios. As our
runtime should _never_ panic, this includes eliminating the possibility of integer overflows,
converting between number types, or even handling 'currency' math.

:::tip To follow along, use `sp_runtime` and `sp_arithmetic`

The following code may use types that Substrate provides. Feel free to follow along by including
these crates in your `Cargo.toml` as follows:

```toml
sp-arithmetic = "19.0.0-dev.1"
sp-runtime = "19.0.0-dev.1"
```

:::

## Integer Overflow

In Rust, integer overflow is possible in **debug** mode, where the compiler would panic. In release
mode, it resorts to wrapping the overflowed amount in a modular fashion:

```rust
let max = u8::MAX + 10; // In debug mode, this would panic. In release, max would simply be 9.
```

## Safe Math

Our primary goal is to reduce any point of failure within our blockchain runtime. Both Rust and
Substrate both provide safe ways to deal with numbers, alternatives to floating point arithmetic,
and currency math.

### Saturated Conversions

```rust
  #[test]
  fn saturated_add_example() {
      // Saturating add simply 'saturates' to the numeric bound of that type if it overflows.
      // Typically, this is only useful
      let add = u32::MAX.saturating_add(10);
      assert_eq!(add, u32::MAX)
  }
```

### Checked Conversions

```rust
    #[test]
    fn checked_add_handle_error_example() {
        let add = 10u32.checked_add(10);
        assert_eq!(add, Some(20))
    }
```

### Wrapped Conversions

```rust
    #[test]
    fn wrapped_add_example() {
        // Wrapping add wraps around the difference of the overflow.
        // For example, the overflow here is 9 over (since adding 1 would cause the overflow)
        let add = u32::MAX.wrapping_add(10);
        assert_eq!(add, 9)
    }
```

## Currency Math

### Using 'PerThing'

### Fixed Point Arithmetic
