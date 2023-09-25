---
id: data-types
title: Data Types in Rust
sidebar_label: Data Types
description: Learn what data types are and which basic ones exist.
---

As mentioned before in the introduction of this course, one of Rust's main objectives is to have a
robust, compile-time type system. Just as the immutability of variables helps with safety, having
types in Rust greatly aids in ensuring that data is flowing as it should throughout the program.

Rust has two kinds of **primitive**, or base, data types:

- Scalar - single point types, such as numbers and booleans (`true` or `false` statements)
- Compound - arrays and tuples

<iframe width="560" height="315" src="https://www.youtube.com/embed/G9I-HdPsLmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Scalar Types

Scalar types represent a single value, such as a number or boolean. Rust has four core Scalar types,
which you have most likely seen in other programming languages:

- Integers
- Floating-point numbers
- Booleans
- Characters

### Integers & Floating-point Types

An integer in Rust is the same as in mathematics - a non-fractional, whole number that can be either
positive or negative. There are two types of integers: _unsigned_ (positive numbers) and _signed_
(negative _or_ positive numbers).

- Signed integers are denoted by the `i`, followed by the length of the number: `i32`.
- Unsigned integers start with `u,` followed by the length of the number: `u32`.

The numeric characters `32` that follow whether an integer is signed or unsigned denotes the length
of the number. Take this table from the
[Rust Book](https://doc.rust-lang.org/book/ch03-02-data-types.html), which states all possible
integer variants:

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

The length or size of the integer is always explicitly declared. Rust has a set of defaults for
inferring types, such as integers defaulting to the `i32` type. `usize` and `isize` depend on your
machine's architecture, meaning they are either 32 or 64 bit in size.

Here are some common ways to declare an integer, some formats less traditional than others:

```rust

// Defaults to i32.
let default = 10;

// Explicitly declare this variable as an unsigned, 64-bit integer:
let sixty_four_bit_int: u64 = 10;

// You can also declare integer literals like so:
let big_number = 65_550; // 65,550

// Another way to specify the type can be done with this syntax, with the type following the number:
let short_hand = 455u32;

// Declaring a hex literal is possible!
let hex = 0x001;

// You can also represent characters as unsigned 8-bit numbers.  This will get very useful later on:
let word_as_bytes: u8 = b'F';

```

Lastly, as integers do have a size, integer overflow is possible if you exceed the limit of a given
type. For example, the type `u8` has a minimum of 0 and a maximum of 255, meaning 256 would cause a
panic. As the Rust compiler doesn't check for overflows, there are some additional functions you can
use to ensure that adding or subtracting is always safe and won't cause a runtime error. We'll learn
more about those later on.

#### Floating point numbers

Rust has two floating number types: `f32` (32-bit) and `f64` (64-bit). Floating point numbers,
unlike integers, are fractional, meaning they contain decimal points to represent parts of whole
numbers:

`f32` has single precision accuracy, whereas `f64` has double-precision accuracy. `f64` is the
default type for floating point numbers in Rust:

```rust

let floating_double: f64 = 1.11;

let floating_single: f32 = 1.4;

let also_floating_double = 1.45;

```

#### Operators

As in any other programming language, there are a set of operators that allow for basic mathematics
to be performed:

```rust

let addition = 1 + 1; // 2
let subtraction = 10 - 5; // 5
let division = 8 / 4; // 2
let multiplication = 4 * 4; // 16

```

Likewise, Rust also supports bitwise operators. A full list of Rust's operators and symbols may be
[found here.](https://doc.rust-lang.org/book/appendix-02-operators.html)

### Boolean Types

A boolean value can only have two possible states: `true` or `false`. Declaring a boolean in Rust is
simple:

```rust

let i_am_true = true;

// Usually, it's easy to infer a bool type; however good to show explicit type assignments.
let i_am_false: bool = false;

```

This opens up many possibilities for **branching logic** in our Rust programs, of which we'll cover
later.

### Character Type

The character, or `char` type in Rust is the basic building block for alphabetic values. It simply
declares a single character, which is encased by single quotes. At its core, it represents a
[Unicode Scalar Value](https://home.unicode.org/), supporting a plethora of characters as well as
zero-width spaces:

```rust
// Both are valid Unicode characters!
let the_letter_a = 'A';
let the_moon = '🌒';
```

## Compound Types

Scalar types define how variables can hold a single value at a time. Compound types can hold
multiple values under the same, unifying type.

There are two primary kinds of compound types - tuples and arrays.

### Tuples

A _tuple_ is a way to combine multiple values and types into a single, compound type. It can be
useful for describing a set of varying values which have some relationship to one another.

The syntax for writing a tuple is as follows. Note that the type annotations are optional:

```rust

let my_tuple: (u32, f32, char) = (5, 5.5, '🌒'); // The explicit type annotations here are optional,

```

There are a couple of ways to access the elements within a tuple. The first way merely involves
fetching them in order, starting at `0`:

```rust

let unsigned_32: u32 = my_tuple.0;
let floating_32: f32 = my_tuple.1;
let moon: char = my_tuple.2;

```

You may also use pattern matching to access these elements. The following syntax constructs a
pattern out of the above:

```rust

let my_tuple: (u32, f32, char) = (5, 5.5, '🌒'); // The explicit type annotations here are optional,

let (unsigned_32, floating_32, moon) = my_tuple;
```

Tuples can have elements that are of varying types, as seen above. They can be useful in describing
a set, fixed amount of elements, such as a set of coordinates:

```rust

let location: (i32, i32) = (10, 45);

```

### Arrays

An **array** is a collection of multiple values. Unlike tuples, these values must be the same type.
Arrays are like lists - and are useful for having a fixed amount of types and having data stored on
the **stack**.

Arrays are typically used less often than** vectors**, which is a type of collection that includes a
number of convenience methods for sorting and manipulating the values within the collection. Vectors
can grow and shrink in size, as the data is managed by the **heap**, whereas arrays are fixed-length
and stored on the stack.

```rust

let my_pets_ages: [i32; 3] = [4, 5, 3];

```

Notice in the type declaration, `[i32; 3]`, that the first part denotes the type of **each element**
within the array with each type being an `i32`. The second portion within the square brackets, `3`,
denotes the **maximum amount of elements an array can hold**. It's possible to do without this
explicit declaration, as the compiler will interpret it as it stands.

To access specific elements within an array is done using square brackets, along with the index of
the element you wish to access. As with tuples, all arrays start at index `0`:

```rust

let course_modules = ["Module 1", "Module 2", "Module 3","Module 4", "Module 5"];
// Use the [ index ] syntax to access a particular element.
let module_one = course_modules[0];
```

Be forewarned - it's possible to access an element that doesn't exist, which would cause a runtime
error.

```rust

error: this operation will panic at runtime
  --> src/main.rs:32:18
   |
32 | let module_six = course_modules[5];
   |                  ^^^^^^^^^^^^^^^^^ index out of bounds: the length is 5 but the index is 5
   |
   = note: `#[deny(unconditional_panic)]` on by default

```

:::info

How can the Rust compiler know when a runtime error will occur? Because an array is fixed length, it
knows the maximum index that can be accessed, in this case, `4`. The compiler disallows it before
the program is even compiled. However, if this index is a user-generated value, which can only exist
at runtime, then a panic will occur and the program will stop. The fact that the program stops is a
security measure as it prevents any possibly invalid memory from being accessed and exploited.

:::

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+As+always%2C+start+with+an+entry+point+into+our+program%0Afn+main%28%29+%7B%0A%0A%2F%2F+Let%27s+start+by+creating+a+list%2C+or+an+array+of+the+course%27s+modules%3A%0A%0Alet+course_modules+%3D+%5B%22Module+1%22%2C+%22Module+2%22%2C+%22Module+3%22%2C%22Module+4%22%2C+%22Module+5%22%5D%3B%0A%0A%2F%2F+Next%2C+let%27s+print+each+one+out+till+it+reaches+the+end.+You%27ll+learn+about+loops%2C+but+just%0A%2F%2F+know+that+this+goes+over+each+element+within+the+array+until+it%27s+finished.%0A++++for+module+in+course_modules+%7B%0A++++++++println%21%28%22%7Bmodule%7D%22%29%0A++++%7D%0A%2F%2F+Great%2C+it+prints%21+Now%2C+suppose+we+try+to+add+another+element+to+the+array.%0A%2F%2F+This+is+done+using+the+%60.push%60+method+to+append%2C+or+push+another+element.%0A%2F%2F+course_modules.push%28%22Module+6%22%29%3B%0A%0A%2F%2F+It+doesn%27t+compile%21+Can+you+read+the+message+and+figure+out+why%3F%0A%0A%2F%2F+Lets+use+our+knowledge+of+shadow+variables+and+remake+this+array.%0A%2F%2F+We+can+see+that+the+compiler+states+that+it+is+%60%5B%26str%3B+5%5D%60%2C+meaning%0A%2F%2F+It+was+expecting+5+elements%2C+not+6%2C+hence+it+panicked+when+we+added+the+sixth+module.%0A%0A%2F%2F+Try+creating+an+array+of+tuples%2C+and+printing+them+as+we+did+above.+%0A%2F%2F+Don%27t+forget+to+comment+out+or+remove+the+line+that+breaks+the+program%0A%0Alet+tuple_array+%3D+%5B%28%22hi%22%2C+3%29%5D%3B%0A+++for+tuple+in+tuple_array+%7B%0A++++++++println%21%28%22%7B%3A%3F%7D%22%2C+tuple%29%0A++++%7D%0A%7D"></iframe>

## What is happening here?

We define an array a fixed-length list of values of the same type stored on the stack. We can
successfully access and print the items in this list; however, the compiler prevents any
out-of-bounds access. It also prevents any additional items from being appended, as the array has a
fixed length in memory.

Next, we create an array of _tuples_, which would look like:

```rust

let tuple_array = [("hi", 3), ("hello", 1)];
   for tuple in tuple_array {
        println!("{:?}", tuple)
    }

```
