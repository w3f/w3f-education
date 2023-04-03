---
id: generics
title: Generic Types in Rust
sidebar_label: Generic Types
description: Learn what generic types are and how to use them in Rust.
---

Generics are a powerful concept that allow for types to be "expected" or known, without knowing what they are.  Previously, you've encountered generics when dealing with the `Option<T>` enum, where `T` is a generic that can accept any type. They are **placeholder** types that optionally can use traits to define a set of expectations, while still being abstract and generic.

Generics can be used in traits, methods, functions, enums, and structs.

## Scenario: Why Generic Code is Useful

Let's assume that I wish to have a simple function which is meant to square two numbers, as we've previously done:

```rust
fn square(x: i32) -> i32 {
    x * x
}
```

This is very acceptable - however, there is a problem. What if other number types must be compared? After all, this same function *could* apply to `f32`, `f64`, `u32`, and so on.

Generics remove this redundancy by defining an abstract type, usually referred to as `T`, which allows for this function to be compatible with a multitude of types.

## Defining Generics: Functions

To convert the above function into a **generic** one, the following syntax must be applied:

```rust
fn square<T>(x: T) -> T {
    x * x
}
```

The most glaring difference is the introduction of `<T>`.  This syntax precedes the parameters list, and defines what the generic *is called* and *what properties it should entail in terms of traits (more on that next!).*

The type `T` in this context quite literally means *any type*, meaning the function can now be called as follows (note the use of `::` to define the type):

```rusts
let squared = square::<i32>(10); // 5
```

When we go to call this function, we replace the `<T>` with the type we wish to represent - in this case, `i32`.  Taking a closer look at the function's signature, it essentially converts from `T` to `i32` across the board:

```rust
fn square<i32>(square: i32) -> i32;
```

Now this is possible for any number! With one caveat - not all types can utilize the `*` operator. For example if I used a String, this function would panic, as it is not possible to compare Strings directly this way. In fact, the above code shouldn't work all together, as the compiler is not sure what to expect since it can expect *any* type.

### Adding Trait Bounds

Traits will be covered more in depth in the next section.  However, know that they can define certain behavior for generics to ensure the type is **compatible** with the function.  This particular trait, `Mul`, is a trait that ensures that a type can be multiplied.  By using the syntax `T: Mul`, we limit all possible types `T` could be to anything that implements `Mul`:

`Output` is an **assoicated type**, will be covered later as well.

```rust
fn square<T: Mul<Output = T> + Copy>(x: T) -> T {
    x * x
}
```

This translates into our code being compatible with a whole host of various types that already implement this trait, `Mul`, by default.  Trait bounds are very powerful, and will be covered more in depth in the next section of this module.

```rust
// 32 Bit Signed Integer, note how you can also use ::<type> to define what type to expect.
let squared_i32 = square::<i32>(10);
// 32 Bit Unsigned Integer
let squared_u32: u32 = square(10);
// Floating Point Number
let squared_f32: f32 = square(10.0);
```

## Defining Generics: Structs & Methods

As with functions, generics may be applied to structs, methods, and enums.

For structs, generics may be used to define abstract field types:

```rust
struct Point<T> {
    x: T,
    y: T
}
```

Multiple generics may be used, meaning the type of `x` must be different from `y`. Generic labels usually follow this convention, but in theory can be named anything:

```rust
struct Point<T, U> {
    x: T,
    y: U
}
```

`Point` now can be created with different types for both `x` and `y` fields.

If we were to define some methods for `Point`, generics may also be used to further provide type dynamism:

```rust
impl<T, U> Point<T, U> {
    fn x(&self) -> &T {
        &self.x
    }

    fn y(&self) -> &U {
        &self.y
    }
}
```

## Try it yourself!
<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=use+std%3A%3Aops%3A%3AMul%3B%0A%0Afn+square%3CT%3A+Mul%3COutput+%3D+T%3E+%2B+Copy%3E%28x%3A+T%29+-%3E+T+%7B%0A++++x+*+x%0A%7D%0A%0A%23%5Bderive%28Debug%29%5D%0Astruct+Point%3CT%2C+U%3E+%7B%0A++++x%3A+T%2C%0A++++y%3A+U%2C%0A%7D%0A%0Aimpl%3CT%2C+U%3E+Point%3CT%2C+U%3E+%7B%0A++++fn+x%28%26self%29+-%3E+%26T+%7B%0A++++++++%26self.x%0A++++%7D%0A%0A++++fn+y%28%26self%29+-%3E+%26U+%7B%0A++++++++%26self.y%0A++++%7D%0A%7D%0A%0Afn+main%28%29+%7B%0A++++%2F%2F+32+Bit+Signed+Integer%0A++++let+squared_i32+%3D+square%3A%3A%3Ci32%3E%2810%29%3B%0A++++%2F%2F+32+Bit+Unsigned+Integer%0A++++let+squared_u32%3A+u32+%3D+square%2810%29%3B%0A++++%2F%2F+Floating+Point+Number%0A++++let+squared_f32%3A+f32+%3D+square%2810.0%29%3B%0A%0A++++let+point+%3D+Point+%7B+x%3A+10%2C+y%3A+%2210%22+%7D%3B+%2F%2F+T+%3D+i32%2C+U+%3D+%26str%0A%0A++++println%21%28%22Point%3A+%7B%3A%3F%7D%22%2C+point%29%3B%0A++++println%21%28%22This+is+a+string+literal%3A+%7B%7D%22%2C+point.y%28%29%29%3B%0A++++println%21%28%22This+is+an+i32%3A+%7B%7D%22%2C+point.x%28%29%29%3B%0A%7D%0A"></iframe>

## What is happening here?
