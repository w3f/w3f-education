---
id: enums
title: Enums in Rust
sidebar_label: Enums
description: Learn what enums are and how to use them in Rust.
---

Enumerations, or **enums** are data structures that allow for a list of pre-defined options in Rust.
They are useful for pattern matching, defining expected conditions, errors, and more.

An example of enums in use would be defining different types of animal classes. An enum's values are
called _variants_:

```rust
// Use the `enum` keyword to define an enum
// This derive statement is a macro that ensures we can use the `==` to compare enum values
// Here, we can see there are four variants that belong inside of the `AnimalType` enum.
#[derive(PartialEq)]
enum AnimalType {
    Mammal,
    Reptile,
    Birds,
    Fish
}

```

In a function, we can, for example, take any type that is `AnimalType`, which in turn means there
are four possible values as to what it can be. The program can choose to implement different
behavior based on the value of the enum:

:::note

This is where a match statement from the previous module would be ideal to use, as it will allow us
to specify a case for each possible value in the `AnimalType` enum.

:::

```rust

fn take_animal(name: &str, animal_type: AnimalType) {
    if animal_type == AnimalType::Mammal {
        println!("{name} is a mammal!");
    }
}

```

This function takes a string literal as a name, `&str`, and specifically looks for whether the
passed in `AnimalType` is a mammal or not. Enum values are accessed using a double colon, `::`, and
can be checked as a conditional statement if needed.

However, this function is rather bland and doesn't account for the other possibilities of
`AnimalType`.

## Basic Pattern Matching with Enums

If you recall, we used a `match` statement in the last module to cover a case where a variable could
either be `true` or `false`. Applying this same concept with enums, we can ensure that all possible
cases are covered.

This concept of matching a case to an outcome is called **pattern matching**, and is a very common
design pattern in Rust.

```rust
// Same function, but expanded to cover all cases with `match`
fn take_animal(name: &str, animal_type: AnimalType) {
    // The match state
    match animal_type {
        // The animal is a mammal!
        AnimalType::Mammal => println!("{name} is a mammal!"),
        // The animal is a reptile!
        AnimalType::Reptile => println!("{name} is a reptile!"),
        // The animal is a bird!
        AnimalType::Birds => println!("{name} is a bird!"),
        // The animal is a fish!
        AnimalType::Fish => println!("{name} is a fish!"),
    };
}

```

While this is entirely possible with a series of `if` and `else if` statements, using `match` is a
more concise and powerful way to pair a specific input to a particular output. The value of
`animal_type`, the `match` statement will print a line appropriate to that specific input.

:::info

Anything that is 'conditional', i.e., true or false, can be pattern matched. In future modules, you
will see more examples of advanced pattern matching that take advantage of this powerful feature.

:::

The syntax for specifying a `match` pattern starts with the keyword `match`, followed by the name of
the value you wish to pattern match. Each possibility is then paired with a specific output using an
arrow (`=>`):

```rust
// The possibility => output
 AnimalType::Mammal => println!("{name} is a mammal!"),
```

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Use+the+%60enum%60+keyword+to+define+an+enum%0A%2F%2F+This+derive+statement+is+a+macro+that+ensures+we+can+use+the+%60%3D%3D%60+to+compare+enum+values%0A%2F%2F+Here%2C+we+can+see+there+are+four+variants+that+belong+inside+of+the+%60AnimalType%60+enum.%0A%23%5Bderive%28PartialEq%29%5D%0Aenum+AnimalType+%7B%0A++++Mammal%2C%0A++++Reptile%2C%0A++++Birds%2C%0A++++Fish%0A%7D%0A%0Afn+main%28%29+%7B%0A++++%2F%2F+Each+variant+of+%60AnimalType%60+can+now+be+properly%0A++++%2F%2F+matched+and+handled.%0A++++take_animal%28%22Cat%22%2C+AnimalType%3A%3AMammal%29%3B%0A++++take_animal%28%22Komodo+Dragon%22%2C+AnimalType%3A%3AReptile%29%3B%0A++++take_animal%28%22Chicken%22%2C+AnimalType%3A%3ABirds%29%3B%0A++++take_animal%28%22Swordfish%22%2C+AnimalType%3A%3AFish%29%3B%0A%0A%7D%0A%0A%2F%2F+Same+function%2C+but+expanded+to+cover+all+cases+with+%60match%60%0Afn+take_animal%28name%3A+%26str%2C+animal_type%3A+AnimalType%29+%7B%0A++++%2F%2F+The+match+state%0A++++match+animal_type+%7B%0A++++++++%2F%2F+The+animal+is+a+mammal%21%0A++++++++AnimalType%3A%3AMammal+%3D%3E+println%21%28%22%7Bname%7D+is+a+mammal%21%22%29%2C%0A++++++++%2F%2F+The+animal+is+a+reptile%21%0A++++++++AnimalType%3A%3AReptile+%3D%3E+println%21%28%22%7Bname%7D+is+a+reptile%21%22%29%2C%0A++++++++%2F%2F+The+animal+is+a+bird%21%0A++++++++AnimalType%3A%3ABirds+%3D%3E+println%21%28%22%7Bname%7D+is+a+bird%21%22%29%2C%0A++++++++%2F%2F+The+animal+is+a+fish%21%0A++++++++AnimalType%3A%3AFish+%3D%3E+println%21%28%22%7Bname%7D+is+a+fish%21%22%29%2C%0A++++%7D%3B%0A%7D"></iframe>

## What's happening here?

This code defines an enum, `AnimalType`, with **four** variants. A function is defined,
`take_animal`, that calls for a string literal and `AnimalType` as parameters. A `match` statement
then matches the input of `AnimalType` to the desired outcome.
