---
id: module2
sidebar_position: 1
---

# 2. Intro to Basic Rust

Variable Scope. Memory management. How variables interact. References. Background on Programming
Safety and why it is critical for Blockchain development. Substrate introduction.

# Variables and Data Types

Like other programming languages, Rust has variables which allow binding names to data. The syntax
for declaring a variable is

```rust
let x = 5;
```

The keyword `let` creates a new variable and the assignment operator, `=`, stores a value in the
variable.

Rust is a statically typed language like Java, Haskell, or Typescript, unlike Python, Javascript, or
Ruby. This means that every expression in a Rust program has a data type, and that type is known at
the time the program is compiled. Statically typed languages prevent many common classes of
programming errors such as comparing two values that can't be compared. When you create a variable
as we did in the above expression, the Rust compiler infers the data type. In this case it inferred
the type `i32` which means a signed 32-bit integer. When integers appear in Rust code without any
more type information, `i32` is the default type. But there are many other numerical data types in
Rust, and we can use them by adding type annotations.

```rust
let x: u32 = 5;
```

By adding a type annotation, `:u32`, we are telling the compiler that we want this variable, `x`, to
be of type `u32`, an unsigned 32-bit integer. Another way to express this line of code is by using a
more specific integer literal.

```rust
let x = 5u32;
```

Here we have assigned the value `5u32`. This is the preferred way to unambiguously express the value
five as the `u32` type. Since we have assigned a value of type `u32`, the compiler is able to infer
that the variable should also be of type `u32`.

# Mutability

By default, variables are immutable in Rust, which means that the value assigned to the variable
can't be changed later on in the program.

```rust
let x = 5u32;
x = 6u32;
```

Here we have tried to change the value of an immutable variable. The compiler will complain about
this.

```
TODO error
```

Different languages have different approaches to mutability. In functional languages like Haskell or
OCaml, it is common for all variables to be immutable. Other languages like Python or Java have some
variable immutable and others mutable and you have to remember which is which on a per-type basis.

Rust allows both mutable and immutable variables, and requires that the programmer specify
explicitly when a variable is mutable. This allows maximum flexibility without the overhead of
having to remember details about each and every type. To make a variable mutable, use the `mut`
keyword.

```rust
let mut x = 5u32;
x = 6u32;
println!("{}", x);
```

When writing your own programs, you should only make variables mutable when you specifically expect
them to change value. This way the Rust compiler can help you detect potential errors in your
program if you try to change a variable that was never expected to change.

# Shadowing and Scope

On concept that is often confused with mutability is shadowing. In fact shadowing is a completely
different concept, and we'll dive into it now.

```rust
let x = 5u32;
let x = 6u32;
```

If we compile this program, the compiler allows it without complaining. But why? `x` is declared as
immutable, and we saw earlier that the compiler should not let us change an immutable variable. If
you don't see it already, I encourage you to pause the video, and look back to see how this code
differs from our previous example where the compiler did complain about changing an immutable
variable.

<!--pause for a second for learners to consider -->

The difference is that we have used the `let` keyword a second time. This declares an entirely
separate variable, that just happens to have the same name as the original variable. When a second
variable with the same name is created, it is said to shadow the first one.

Consider whether this program will compile successfully.

```rust
let mut x = 5u32;
let x = 6u32;
x = 7u32;
```

<!-- pause -->

The answer is that this program does not compile. The original variable `x` is mutable, but that
variable is shadowed by the second variable which is also named `x`. When we finally try to mutate
`x`, is is the second, immutable variable that is still in scope, and thus it can't be changed.

It is uncommon to use shadowing in the trivial way I've demonstrated here and in fact it is not a
good practice in real-world programs because it leads to confusing scenarios like the ones we just
seen. I've done it here only because it illustrates shadowing well for _learning_.

But shadowing is common in real programs, just in a slightly more complex scenario. Consider this
code.

```rust
let x = 5u32;

{
    let x = 6u32;
    println!("x is {}", x);
}

println!("x is {}", x);
```

Take a moment to predict the output of this program.

```
x is 6
x is 5
```

In Rust variables have lexical scope. That is to say that the variable is in scope in the entirety
of the curly braces in which it is defined. In this code, we create `x` in the outer scope. Then we
create another `x` in the inner scope that shadows the original. We see the shadowing from the first
println. But after the inner scope ends, the second `x` no longer exists and the outer `x` is no
longer shadowed. We see this from the second println.

Scoping rules are closely related to Rust's lifetime rules which we will explore in the next module
about borrowing and the borrow checker.

# More Simple Data Types

Rust has many simple, or "scalar", data types built into the language. There are signed and unsigned
integer types of many fixed sizes, like the `i32`, and `u32` we saw above.

| Size    | Unsigned | Signed |
| ------- | -------- | ------ |
| 8-bit   | i8       | u8     |
| 16-bit  | i16      | u16    |
| 32-bit  | i32      | u32    |
| 64-bit  | i64      | u64    |
| 128-bit | i128     | u28    |

There are also the `isize` and `usize` data types that are fixed width for a particular
architecture. If your PC is using the AMD64 architecture, these types will be 64 bits.

There are also floating point numerical types `f32` and `f64`. If you are familiar with floating
point arithmetic from other languages, Rust's will likely work exactly how you expect. We will not
dig into the floating point types in detail in this course because floating point arithmetic is
non-deterministic. That means that you may not get the _Exact_ same result for a given operation
when you run it on multiple different systems (although you will certainly get a very close result).
this property makes floating point math unsuitable for distributed systems such as those built with
Substrate. Later in the course we will explore an alternative called fixed point and you will
implement it as an assignment.

Of course Rust has the familiar `bool` type which can have values `true`, and `false`.

```rust
let b = true;
let mut b2 = false;
b2 = true;
```

Rust also has the `char` type for storing a single character. Character literals are denoted with
single quotes.

```rust
let c: char = 'a';
```

Finally, Rust has the unit type, sometimes referred to as the empty tuple. This type has only a
single value.

```rust
let unit: () = ();
```

# Compound Data Types

Like many languages, Rust supports compound types that store multiple scalar values. The two that
are most common are tuples and arrays.

TODO Tuples use parentheses, each value has its own type, types may be of different values. accessed
with dot operator.

TODO Arrays use square brackets, have fixed length, each value is of the same type. accessed with
indices of type usize.

It is also possible to make your own data types. We will cover making custom types later in the
course. For example, if you need larger integers than the built-in types allow, Substrate includes
`U256`, and `U512` types for this purpose. If you want arbitrarily large integers like the ones
found in Python and other programing languages, you can consider using the
[num-bigint](https://crates.io/crates/num-bigint) crate.

## Rust Operators

- Arithmetic - addition, subtraction, multiplication, division, remainder, exponent
- Boolean - and, or, not
- Comparison
- Bitwise
