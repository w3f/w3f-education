---
id: enums
title: Enums in Rust
sidebar_label: Enums
description: Learn what enums are and how to use them in Rust.
---

Enumerations, or **enums** are data structures that allow for a list of pre-defined options in Rust.  They are useful for pattern matching, defining expected conditions, errors, and more.  

An example of enums in use would be defining different types of animal classes.  An enum's values are called *variants*: 

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

In a function, we can for example take any type that is `AnimalType`, which in turn means there are four possible values as to what it can be.  The program can choose to implement different behavior based on the value of the enum:

:::note

This is where a match statement from the previous module would be ideal to use, as it will allow us to specify a case for each possible value in the `AnimalType` enum. which we'll dive into in the next section of this module.

:::

```rust

fn take_animal(name: &str, animal_type: AnimalType) {
    if animal_type == AnimalType::Mammal {
        println!("{name} is a mammal!");
    }
}

```

This function takes a string literal as a name, `&str`, and specifically looks for whether the passed in `AnimalType` is a mammal or not. Enum values are accessed using `::`, and can be checked as a conditional statement if needed.

 However, this function is rather bland, and doesn't account for the other possibilities of `AnimalType`.

## Basic Pattern Matching with Enums

If you recall, we used a `match` statement in the last module to cover a case where a variable could either be `true` or `false`. Applying this same concept with enums, we can assure that all possible cases are covered.

This concept of matching a case to an outcome is called **pattern matching**, and is a very common design pattern in Rust.

```rust
// Same function, but expanded to cover all cases with `match`
fn take_animal(name: &str, animal_type: AnimalType) {
    // The match state
    match animal_type {
        AnimalType::Mammal => println!("{name} is a mammal!"),
        AnimalType::Reptile => println!("{name} is a reptile!"),
        AnimalType::Birds => println!("{name} is a bird!"),
        AnimalType::Fish => println!("{name} is a fish!"),
    };
}

```

While this could've been done with a series of `if` and `else if` statements, using `match` is a more concise and powerful way to pair a specific input to a specific output.  Depending on the value of `animal_type`, the `match` statement will print a line appropriate to that specific input.

:::info

Anything that is 'conditional', i.e., true or false, can be pattern matched.  In future modules, you will see more examples of advanced pattern matching that takes advantage of this powerful feature.

:::

The syntax for specifying a `match` pattern starts with the keyword `match`, followed by the name of the value you wish to pattern match.  Each possibility is then paired with a specific output using an arrow (`=>`):

```rust
// The possiblity => output
 AnimalType::Mammal => println!("{name} is a mammal!"),
```


## Using `if let`




## Try it yourself!


## What's happening here?