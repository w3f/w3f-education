---
id: structs
title: Data Structs in rust
sidebar_label: Data Structs
description: Learn what data structs are in Rust.
---

A **struct**, sometimes called a **data structure**, is a collection of multiple types into a single data type.  It's similar to tuples in concept, however provides a number of ways to expand and define custom behavior for structs.  Structs, like any other type, abide by Rust's strict typing system, and allow for a plethora of expansion when it come to programming in Rust.

## Creating Structs

To create a struct, the `struct` keyword is used, followed by the name, then a series of fields in between curly brackets.  Each field is akin to a key-value pair, and must specify a type:

```rust
struct Person {
    age: u32,
    name: String,
}
```

In this specific example, we declared a struct called `Person` that has two fields - a `name` and an `age`.  To actually use this struct, you must create an **instance** of it by setting it equal to some variable - pay attention to its syntax:

```rust
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};
```

Notice that each field *must* abide by the type set when the struct was originally defined.  Structs are instantiated by declaring the name (`Person`) followed by curly brackets, with the key-value representations of the fields specified (`age: 22`).

### Accessing Fields

Once we've created an instance of a struct, we can use the dot operator (`.`) to access the values within: 

```rust
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

println!("The age of the person is: {a_person.age}"); // 22
```

Just like any other variable in Rust, this one can also be declared as mutable, making it possible to change the value of the struct's inner fields if desired.

### Shorthand Syntax

It's rare to construct structs using this syntax. Oftentimes, a function that acts as a "blueprint" is ideal: 

```rust
// A function that asks for two parameters: an age, and name.
// It returns a `Person` from this information.
fn create_person(age: u32, name: String) -> Person {
    // Notice we can use the expression as the last expression
    // to return a new instance of `Person`
    Person {
        age: age,
        name: name
    }
}

// Now we can use the function instead!
// It is of type 'Person', which is inferred without being explicitly defined.
let a_person: Person = create_person(22, String::from("Bader"));
```

It's also possible to have a "shorthand" way of representing struct fields if both the parameters and field names are the same, rather than using the `key: value` format:

```rust
// A function that asks for two parameters: an age, and name.
// It returns a `Person` from this information.
fn create_person(age: u32, name: String) -> Person {
    // Because both the parameters and struct fields are the same name, 
    // it's possible to write them shorthanded.
    Person {
        age,
        name
    }
}
```

## Different type of Structs

Structs can take a couple different forms syntactically.  All are valid structs, and can utilize traits and methods, just with different syntax. 

### Updatable Structs

If you've ever used Javascript, then you may be familiar with the spread operator: `..`.  In Rust, you can use this to create a new struct from an old one with values changed as needed: 

```rust
// Instead of doing this:
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

let older_person_same_name = Person {
    age: 23,
    name: a_person.name,
};

// You can use `..` to make it more concise:
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

let older_person_same_name = Person {
    age: 23,
    // This operator now allowed for this instance of `Person`
    // to inherit all attributes except age, because we specified it.
    ..a_person
};
```

The `..` syntax will assume all other fields as the previous struct, except for the ones which you have specified explicitly.

### Tuple & Unit Structs

Structs may also be expressed in a tuple-like format:

```rust
// A struct that represents RGB color values.
struct RGB(u32, u32, u32);
let black = RGB(0, 0, 0);
```
The difference between this, and a tuple, is that this is still a struct with a unique type - meaning it's possible to implement any traits or functionality.

The same logic applies to the "unit-type" struct, which is just a struct that contains no fields at all.  These are mostly used as a sort of marker to dictate what types the program should expect (and that doesn't require any sort of data): 

```rust
// A struct which has no fields
struct AlwaysEqual;
```

## Ownerships in Structs

If you observed, we used `String`, an ownable data type, versus `&str` in our struct.  This was for a reason - as we want the fields within to be owned for as long as the struct lives.  It is possible for structs to store references to data owned elsewhere, but only with the use of lifetimes - which will be discussed later.

## Try it yourself!

## What's happening here?