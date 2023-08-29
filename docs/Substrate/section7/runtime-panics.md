---
id: runtime-panics
title: Runtime Panics & FRAME Best Practices
sidebar_label: Runtime Panics & FRAME Best Practices
description:
  Learn how to solidify safe programming practices using Rust error handling to avoid panicking in
  the runtime.
---

If there is one "rule of thumb" in developing in a runtime environment, is to **avoid runtime
panics** at all costs. With the premise that a blockchain should never cease to operate, abusing the
notion of `panic!`(king) in Rust should never be used.

## Avoiding runtime panics - Defensive Programming

Avoiding runtime panics is done by implementing some concepts of **defensive programming**. Here is
a checklist of some common things to avoid and do in order to avoid panicking:

1. Account for any and all edge cases in terms of what _could_ panic.
2. Do not use `panic!()`.
3. Do not use `unwrap()`.
4. Handle all possible `None` or `Err` values with proper error handling.
5. When indexing collections, use `Vec` methods like `get()` and handle appropriately.
6. Mathematically impossible operations, such as dividing by zero, or overflow scenarios.

In some cases, using `unwrap_or_default()` is appropriate, but only if a `Default` implementation
exists for that particular type. Generally, you do not want to _throw_ errors, rather you want to
log and return them.

:::caution Logging has a cost in the runtime.

Keep in mind that logging has a computational cost in the runtime environment.

:::

### Using safe arithmetic

In the previous modules, we used a function - `checked_add()`. This is part of defensive
programming, as we even negate the chance of an overflow of an integer. Substrate provides a number
of ways to handle not only adding or subtracting numbers, but also floating point numbers (and
subsequently, percentages).

### Accounting for all errors

As mentioned, every single error should be accounted for - even if logically, that error cannot be
reached. This is part of ensuring that any functions that can panic `unwrap()`, have even a chance
to panic. Whether it's for casting to a different type, user-induced errors, or the like - all
branched paths should be covered.
