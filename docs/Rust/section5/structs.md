---
id: structs
title: Data Structs in rust
sidebar_label: Data Structs
description: Learn what data structs are in Rust.
---

A **struct**, sometimes called a **data structure**, is a collection of multiple types into a single
data type. It's similar to tuples in concept but provides several ways to expand and define custom
struct behavior. Structs, like any other type, abide by Rust's strict typing system and allow for a
plethora of expansion when it comes to programming in Rust.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RBjaBImXdoA?si=JB2WrDygv_1ziBtn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Creating Structs

The `struct` keyword is used to instantiate struct, followed by the name, then a series of fields
between curly brackets. Each field is akin to a key-value pair and must specify a type:

```rust
struct Person {
    age: i32,
    name: String,
}
```

In this example, we declared a struct called `Person` with two fields - a `name` and an `age`. To
use this struct, you must create an **instance** of it by setting it equal to some variable - pay
attention to its syntax:

```rust
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};
```

Notice that each field _must_ abide by the type set when the struct was defined initially. Structs
are instantiated by declaring the name (`Person`) followed by curly brackets, with the key-value
representations of the fields specified (`age: 22`).

### Accessing Fields

Once we've created an instance of a struct, we can use the dot operator (`.`) to access the values
within:

```rust
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

println!("The age of the person is: {a_person.age}"); // 22
```

Like any other variable in Rust, this one can also be declared mutable, making it possible to change
the value of the struct's inner fields if desired.

### Shorthand Syntax

It's rare to construct structs using this syntax. Oftentimes, a function that acts as a "blueprint"
is ideal:

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

It's also possible to have a "shorthand" way of representing struct fields if both the parameters
and field names are the same, rather than using the `key: value` format:

```rust
// A function that asks for two parameters: an age and name.
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

## Different types of Structs

Structs can take a couple of different forms syntactically. All are valid structs and can utilize
traits and methods, just with different syntax.

### Updatable Structs

If you've ever used Javascript, then you may be familiar with the spread operator: `..`. In Rust,
you can use this to create a new struct from an old one with values changed as needed:

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
    // to inherit all attributes except age because we specified it.
    ..a_person
};
```

The `..` syntax will assume all other fields as the previous struct, except for the ones which you
have specified explicitly.

### Tuple & Unit Structs

Structs may also be expressed in a tuple-like format:

```rust
// A struct that represents RGB color values.
struct RGB(u32, u32, u32);
let black = RGB(0, 0, 0);
```

The difference between this and a tuple is that this is still a struct with a unique type - meaning
it's possible to implement any traits or functionality.

The same logic applies to the "unit-type" struct, which is just a struct that contains no fields at
all. These are mostly used as a sort of marker to dictate what types the program should expect (and
that doesn't require any sort of data):

```rust
// A struct that has no fields
struct AlwaysEqual;
```

## Ownerships in Structs

If you observed, we used `String`, an ownable data type, versus `&str` in our struct. This was for a
reason - as we want the fields within to be owned for as long as the struct lives. It is possible
for structs to store references to data owned elsewhere, but only with the use of lifetimes - which
will be discussed later.

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Defining+a+struct+that+represents+a+Person%0Astruct+Person+%7B%0A++++age%3A+u32%2C%0A++++name%3A+String%2C%0A%7D%0A%0A%2F%2F+Example+of+a+%22tuple-like%22+struct%0Astruct+RGB%28u32%2C+u32%2C+u32%29%3B%0A%0A%2F%2F+A+%22unit-type%22+struct%2C+which+has+no+fields%0Astruct+AlwaysEqual%3B%0A%0A%2F%2F+A+function+that+asks+for+two+parameters%3A+an+age%2C+and+name.%0A%2F%2F+It+returns+a+%60Person%60+from+this+information.%0Afn+create_person%28age%3A+u32%2C+name%3A+String%29+-%3E+Person+%7B%0A++++%2F%2F+Notice+we+can+use+the+expression+as+the+last+expression%0A++++%2F%2F+to+return+a+new+instance+of+%60Person%60%0A++++%2F%2F+Note+the+shorthand+syntax%21%0A++++Person+%7B%0A++++++++age%2C%0A++++++++name%0A++++%7D%0A%7D%0A%0Afn+main%28%29+%7B%0A++++%2F%2F+Defining+a+struct%2C+where+it+takes+%27age%27+as+an+i32+and+%27name%27+as+a+String%0A++++let+a_person+%3D+Person+%7B%0A++++++++age%3A+22%2C%0A++++++++name%3A+String%3A%3Afrom%28%22Bader%22%29%2C%0A++++%7D%3B%0A++++%0A++++%2F%2F+Using+the+dot+operator+to+access+the+%27age%27+field+of+the+struct%0A++++println%21%28%22The+age+of+the+person+is%3A+%7B%7D%22%2C+a_person.age%29%3B+%2F%2F+22%0A++++%0A++++let+other_bader%3A+Person+%3D+create_person%2825%2C+String%3A%3Afrom%28%22OtherBader%22%29%29%3B%0A++++%0A++++%2F%2F+Using+the+%27spread-like-operator%27+to+inherit+previous+struct+values%0A++++let+older_person_same_name+%3D+Person+%7B%0A++++age%3A+23%2C%0A++++%2F%2F+This+operator+now+allowed+for+this+instance+of+%60Person%60%0A++++%2F%2F+to+inherit+all+attributes+except+age%2C+because+we+specified+it.%0A++++..a_person%0A%7D%3B%0A++++%0A%7D%0A"></iframe>

## What's happening here?

A struct is defined with two fields, `age` and `name`. Several instances are constructed, as well as
an updated version which uses some of the previous values to create a new struct. Several other
concepts are also illustrated, such as the use of the "tuple" and "unit" like structs.
