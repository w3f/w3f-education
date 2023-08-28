---
id: associated-generics
title: Associated Types vs Generic Types
sidebar_label: Associated Types vs Generic Types
description: Learn the difference between associated types vs generic types.
---

Associated types are an abstract way to define a name for what a type should be.

In the [Generics](./generics.md) section, we encountered an associated type when we defined the
`Mul` trait as a bound:

```rust
fn square<T: Mul<Output = T> + Copy>(x: T)...
```

A closer look reveals an additional parameter in our trait bound declaration - `Output`. `Output` is
an **associated type**, sometimes called an **associated item**, and is another feature of Rust.

## Associated Types in Use

Associated types are specified as part of a trait. They are defined by moving `type` declarations
within the trait as an Output type.

A prime example is `Mul` specifying any Output. Contrary to generics, this is not required to be
enforced to a specific type by the compiler.

```rust
pub trait Mul<RHS = Self> {
    type Output;
    fn mul(self, rhs: RHS) -> Self::Output;
}
```

## Associated Types vs Generics

While associated types and generics are used similarly and generate scalable code, there are some
key differences between the two:

- Associated types generally provide more flexibility than generics, but only within their specific
  trait's scope.

- Associated types specify a trait's expected _output_'s type, whereas generics are more the _input_
  types for a trait. Associated types represent the result of the trait's behavior on a given type.
