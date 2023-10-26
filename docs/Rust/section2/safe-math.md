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

As our runtime should _never_ panic; this includes eliminating the possibility of integer overflows,
converting between number types, or even handling floating point usage with fixed point arithmetic
to mitigate issues that come with floating point calculations.

## Integer Overflow

The Rust compiler prevents any sort of static overflow from happening at compile time, for example:

```rust
let overflow = u8::MAX + 10;

// Results in:
error: this arithmetic operation will overflow
   --> src/main.rs:121:24
    |
121 |         let overflow = u8::MAX + 10;
    |                        ^^^^^^^^^^^^ attempt to compute `u8::MAX + 10_u8`, which would overflow
    |
```

However in runtime, we don't always have control over what is being supplied as a parameter. For
example, this counter function could present one of two outcomes depending on whether it is in
**release** or **debug** mode:

```rust
fn naive_add(x: u8, y: u8) -> u8 {
    x + y
}
// highlight-next-line
count(250u8, 10u8); // In debug mode, this would panic. In release, this would return 4.
```

The Rust compiler would panic in **debug** mode in the event of an integer overflow. In **release**
mode, it resorts to silently _wrapping_ the overflowed amount in a modular fashion, (hence returning
`4`).

It is actually the _silent_ portion of this behavior that presents a real issue - as it may be an
unintended, but also a very _silent killer_ in terms of producing bugs. In fact, it may have been
better for this type of behavior to produce some sort of error, or even `panic!`, as in that
scenario, at least such behavior could become obvious. Especially in the context of blockchain
development, where unsafe arithmetic could produce unexpected consequences.

A quick example is a user's balance overflowing: the default behavior of wrapping could result in
the user's balance starting from zero, or vice versa, of a `0` balance turning into the `MAX` of
some type. Naturally, this could lead to various exploits and issues down the road, which if failing
silently, would be difficult to trace and rectify.

Luckily, there are ways to both represent and handle these scenarios depending on our specific use
case natively built into Rust, as well as libraries like `sp_arithmetic`.

## Safe Math

Our main objective is to reduce the likelihood of any unintended or undefined behavior within our
blockchain runtime. Intentional and predictable design should be our first and foremost property for
ensuring a well running, safely designed system. Both Rust and Substrate both provide safe ways to
deal with numbers and alternatives to floating point arithmetic.

:::info Defensive, or safe math, isn't just useful for blockchain development.

Traditional banking also needs to utilize such practices within its codebase. Rather than use purely
primitive, native types, **fixed-point arithmetic** usually involves abstracting such operations
into more controlled, fixed-point types.

A prime example is that banking also doesn't use floating point numbers. Rather they use fixed-point
arithmetic to mitigate the potential for inaccuracy, rounding errors, or other unexpected behavior.
For more on the specifics of why this is,
[watch this video by the Computerfile](https://www.youtube.com/watch?v=PZRI1IfStY0).

Using **primitive** floating point number types in a blockchain context should also be avoided, as a
single nondeterministic result could cause chaos for consensus along with the aforementioned issues.

:::

The following methods represent different ways one can handle numbers safely natively in Rust,
without fear of panic or unexpected behavior from wrapping.

### Checked Operations

**Checked operations** utilize a `Option<T>` as a return type. This means that if the resulting
operation is invalid, i.e., an integer overflow, it will return `None`, and if successful, then
`Some`. The only downside of using this type is the need to handle the `Option` type accordingly.

This is an example of a valid operation:

```rust
#[test]
fn checked_add_example() {
    // This is valid, as 20 is perfectly within the bounds of u32.
    let add = 10u32.checked_add(10);
    assert_eq!(add, Some(20))
}
```

This is an example of an invalid operation, in this case, a simulated integer overflow, which would
simply result in `None`:

```rust
#[test]
fn checked_add_handle_error_example() {
    // This is invalid - we are adding something to the max of u32::MAX, which would overflow.
    // Luckily, checked_add just marks this as None!
    let add = u32::MAX.checked_add(10);
    assert_eq!(add, None)
}
```

Typically, if you aren't sure about which operation to use for runtime math, **checked** operations
are a safe bet, as it presents two, predictable (and _erroring_) outcomes that can be handled
accordingly (`Some` and `None`).

In a practical context, the resulting `Option` should be handled accordingly. The following
conventions can be seen from the within the Polkadot SDK, where an `Option` can be handled in one of
two ways:

- As an `Option`, using the `if let` / `if` or `match`
- As a `Result`, via `ok_or` (or similar conversion to `Result` from `Option`)

#### Handling via Option - More Verbose

Because wrapped operations return `Option<T>`, you can use a more verbose/explicit form of error
handling via `if` or `if let`:

```rust
fn increase_balance(account: Address, amount: u64) -> Result<(), BlockchainError> {
    // Get a user's current balance
    let balance = Runtime::get_balance(account)?;
    // highlight-start
    // SAFELY increase the balance by some amount
    if let Some(new_balance) = balance.checked_add(amount) {
        Runtime::set_balance(account, new_balance);
        return Ok(());
    } else {
        return Err(BlockchainError::Overflow)
    }
    // highlight-end
}
```

Optionally, `match` may also be directly used in a more concise manner:

```rust
fn increase_balance(account: Address, amount: u64) -> Result<(), BlockchainError> {
    // Get a user's current balance
    let balance = Runtime::get_balance(account)?;
    // highlight-start
    // SAFELY increase the balance by some amount
    let new_balance = match balance.checked_add(amount) {
        Some(balance) => balance,
        None => return Err(BlockchainError::Overflow),
    };
    // highlight-end
    Runtime::set_balance(account, new_balance);
    Ok(())
}
```

This is generally a useful convention for handling not only checked types, but most types that
return `Option<T>`.

#### Handling via Result - Less Verbose

In the Polkadot SDK codebase, you may see checked operations being handled as a `Result` via
`ok_or`. This is a less verbose way of expressing the above, and which to use often boils down to
the developer's preference:

```rust
fn increase_balance(account: Address, amount: u64) -> Result<(), BlockchainError> {
    // Get a user's current balance
    let balance = Runtime::get_balance(account)?;
    // highlight-start
    // SAFELY increase the balance by some amount - this time, by using `ok_or`
    let new_balance = balance
        .checked_add(amount)
        .ok_or(BlockchainError::Overflow)?;
    // highlight-end
    Runtime::set_balance(account, new_balance);
    Ok(())
}
```

At a glance, this may seem confusing, as we just got done explaining how to handle a `Option`, not
`Result`. `Result` may be used as an alternative to `Option` where it ergonomically makes sense to
let the user know that something unexpected has happened. This is particularly useful in the context
of dispatchables within a Substrate pallet, for example, where information about a failure to
perform some action matters in the context of the application.

:::tip `ok_or` or `ok_or_else`?

You may see `ok_or` and `ok_or_else` being used interchangeably. In reality, they have the same
functionality with one caveat - `ok_or` is _eagerly_ evaluated, versus `ok_or_else` is _lazily_
evaluated. Using `ok_or_else` is more performant, as if the `Option` is `Some()`, there is no need
to actually run the closure. `ok_or` is eager to make new allocations - regardless of whether it is
relevant or not, thereby making it slightly more expensive.

[See more here.](https://rust-lang.github.io/rust-clippy/master/index.html#/or_fun_call)

:::

### Saturated Operations

Saturating a number limits it to the type's upper or lower bound, no matter the integer would
overflow in runtime. For example, adding to `u32::MAX` would simply limit itself to `u32::MAX`:

```rust
#[test]
fn saturated_add_example() {
    // Saturating add simply 'saturates' to the numeric bound of that type if it overflows.
    let add = u32::MAX.saturating_add(10);
    assert_eq!(add, u32::MAX)
}
```

Saturating calculations can be used if one is very sure that something won't overflow, but wants to
avoid introducing the notion of any potential-panic or wrapping behavior.

### Mathematical Operations in Substrate Development - Further Context

As a recap, we covered the following concepts:

1. **Checked** operations - using `Option` or `Result`,
2. **Saturated** operations - limited to the lower and upper bounds of a number type,
3. **Wrapped** operations (the default) - wrap around to above or below the bounds of a type,

:::info The problem with 'default' wrapped operations

**Wrapped operations** cause the overflow to wrap around to either the maximum or minimum of that
type. Imagine this in the context of a blockchain, where there are balances, voting counters, nonces
for transactions, and other aspects of a blockchain.

Some of these mechanisms can be more critical than others. It's for this reason that we may consider
some other ways of dealing with runtime arithmetic, such as saturated or checked operations, that
won't carry these potential consequences.

:::

While it may seem trivial, choosing how to handle numbers is quite important. As a thought exercise,
here are some scenarios of which will shed more light on when to use which.

#### Bob's Overflowed Balance

**Bob's** balance exceeds the `Balance` type on the `EduChain`. Because the pallet developer did not
handle the calculation to add to Bob's balance with any regard to this overflow, **Bob's** balance
is now essentially `0`, the operation **wrapped**.

<details>
    <summary><b>Solution: Saturating or Checked</b></summary>
    For Bob's balance problems, using a saturated_add or checked_add could've mitigated this issue.  They simply would've reached the upper, or lower bounds, of the particular type for an on-chain balance.  In other words: Bob's balance would've stayed at the maximum of the Balance type.
</details>

#### Alice's 'Underflowed' Balance

**Alice's** balance has reached `0` after a transfer to `Bob`. Suddenly, she has been slashed on
`EduChain`, causing her balance to reach near the limit of `u32::MAX` - a very large amount - as
_wrapped operations_ can go both ways. **Alice** can now successfully vote using her new,
overpowered token balance, destroying the integrity of the chain.

<details>
    <summary><b>Solution: Saturating</b></summary>
    For Alice's balance problem, using saturated_sub could've mitigated this issue.  As debt or having a negative balance is not a concept within blockchains, a saturating calculation would've simply limited her balance to the lower bound of u32.  
    
    In other words: Alice's balance would've stayed at "0", even after being slashed.  
    
    This is also an example that while one system may work in isolation, shared interfaces, such as the notion of balances, are often shared across multiple pallets - meaning these small changes can make a big difference in outcome.
</details>

#### Proposals' ID Overwrite

The type for counting the number of proposals on-chain is represented by a `u8` number, called
`proposals_count`. Every time a new proposal is added to the system, this number increases. With the
proposal pallet being high in usage, it has reached `u8::MAX`'s limit of `255`, causing
`proposals_count` to go to `0`. Unfortunately, this resulted in new proposals overwriting old ones,
effectively erasing any notion of past proposals!

<details>
    <summary><b>Solution: Checked</b></summary>
For the proposal IDs, proper handling via `checked` math would've been much more suitable,  Saturating could've been used - but it also would've 'failed' silently.  Using `checked_add` to ensure that the next proposal ID would've been valid would've been a viable way to let the user know the state of their proposal:

```rust
let next_proposal_id = current_count.checked_add(1).ok_or_else(|| Error::TooManyProposals)?;
```

</details>

---

From the above, we can clearly see the problematic nature of seemingly simple operations in runtime.
Of course, it may be that using checked math is perfectly fine under some scenarios - such as
certain balance being never realistically attainable, or a number type being so large that it could
never realistically overflow unless one sent thousands of transactions to the network.

### Decision Chart: When to use which?

```mermaid
flowchart LR
    CH["Checked"]
    ST["Saturated"]

    CH-->NEED["The user needs to know that the operation failed - and why"]
    CH-->DOUBT["Unsure whether this operation could fail/overflow"]
    ST-->SILENT["Silently reaching upper/lower bound will not result in any damage"]
    ST-->REASON["In all reasonable circumstances, the number will not overflow"]
```

## Fixed Point Arithmetic

:::tip To follow along, you can use `sp_arithmetic`

The following code may use types that Substrate provides. Feel free to follow along by including
these crates in your `Cargo.toml` as follows:

```toml
sp-arithmetic = "19.0.0-dev.1"
```

:::

Fixed point arithmetic solves the aforementioned problems of dealing with the (sometimes) uncertain
nature of floating point numbers. Rather than use a radix point (`0.80`), a type which _represents_
a floating point number in base 10 can be used instead.

**Example - Perbill, parts of a billion**

```rust
#[test]
fn perbill_example() {
    //highlight-start
    let p = Perbill::from_percent(80);
    // 800000000 bil, or a representative of 0.800000000. Precision is in the billions place.
    assert_eq!(p.deconstruct(), 800000000);
     //highlight-end
}
```

**Example - Percent, parts of a hundred**

```rust
#[test]
fn percent_example() {
    //highlight-start
    let percent = Percent::from_rational(190u32, 400u32);
    assert_eq!(percent.deconstruct(), 47)
    //highlight-end
}
```

Note that `190 / 400 = 0.475`, and that `Percent` represents it as a _rounded down_, fixed point
number (`47`). Unlike primitive types, types that implement `PerThing` will also not overflow, and
are therefore safe to use. They adopt the same behavior that a saturated calculation would provide,
meaning that if one is to go over "100%", it wouldn't overflow, but simply stop at the upper or
lower bound.

### Using 'PerThing'

[`sp_arithmetic`](https://paritytech.github.io/polkadot-sdk/master/sp_arithmetic/) contains a trait
called
[`PerThing`](https://paritytech.github.io/polkadot-sdk/master/sp_arithmetic/per_things/trait.PerThing.html),
allowing a custom type to be implemented specifically for fixed point arithmetic. While a number of
fixed-point types are introduced, let's focus on a few specific examples that implement `PerThing`:

- `Percent` - parts of one hundred.
- `Permill` - parts of a million.
- `Perbill` - parts of a billion.

Because each of these implement the same trait, `PerThing`, we have access to a few widely used
methods:

- `from_rational()`
- `from_percent()`
- `from_parts()`

Each of these can be used to construct and represent ratios within our runtime.

#### Fixed Point Arithmetic with `PerThing`

As stated, one can also perform mathematics using these types directly. For example, finding the
percentage of a particular item via multiplication:

```rust
#[test]
fn percent_mult() {
    let percent = Percent::from_rational(5u32, 100u32); // aka, 5%
    let five_percent_of_100 = percent * 100u32; // 5% of 100 is 5.
    assert_eq!(five_percent_of_100, 5)
}
```

With the knowledge of how these types operate in relation to other numbers, let's explore how
they're used in Substrate development.

### Fixed Point Math in Substrate Development - Further Context

<!-- todo - add examples -->

Let's examine the usage of `Perbill` and how exactly we can use it as an alternative to floating
point numbers in Substrate development. For this scenario, let's say we are demonstrating a _voting_
system which depends on reaching a certain threshold, or percentage, before it can be deemed valid.

For most cases, `Perbill` gives us a reasonable amount of precision for most applications, which is
why we're using it here.

Later, in the context of a FRAME pallet, the usage of these types and calculations will start to
make more sense when dealing with mathematics in the runtime.
