---
id: struct-methods
title: Defining Methods for Structs
sidebar_label: Defining Methods for Structs
description: Learn how to define methods for structs in Rust.
---

**Methods** are very similar to **functions** - the difference here being that **methods** are applied to structs.  They breathe life into structs by provided associated logic that often utilizes its inner fields, and represents an instance of that struct.

The syntax is nearly identical to a function, with the exception that it's a part of the **implementation** of the struct:

```rust
struct Person {
    age: u32,
    name: String,
}

// This is an implementation of 'Person'
// We can add methods on each instance of the struct
impl Person {
    fn print_person(&self) {
        println!("This person's name is {self.name} and is {self.age} years old.");
    }
}
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

a_person.print_person();

// This person's name is Bader and is 22 years old
```

In the above **implementation**, we defined a method, `print_person`, which takes `&self` as a parameter.  `&self` is an immutable reference to that specific instance, in this case, `a_person`. To access these methods ,we must first have an instance of the struct defined, then use the dot operator (`.`) to access the method.  The `&self` parameter is actually a shorthand way of saying:

```rust
self: &Self -> person: &Person
```
`Self`, with a capital `S`, is an alias for the struct's type, whereas `self` with a lowercase `s`, refers to the actual instance with its initialized fields.

:::info 

We borrowed `&self` - can you think of why?

:::

It's also possible to accept more parameters of the same type as part of the method, for example:

```rust
impl Person {
    fn print_person(&self) {
        println!("This person's name is {self.name} and is {self.age} years old.");
    }

    fn is_older(&self, other: &Person) -> bool {
        // Return if the other person is older or not as an expression
        other.age > self.age
    }
}
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

let another_person_who_is_older = Person {
    age: 35,
    name: String::from("Johnny"),
};

a_person.is_older(&another_person_who_is_older); // false 

```

## Associated Functions

All functions under the `impl` (implementation) block are considered "associated" because they effectively become part of the type.  Up until now, you've seen all methods take `self` as as a parameter - but it is possible to have a function that doesn't require an existing instance of the struct to exist.  They are often used for constructors to create new instances of that struct, as seen below:

```rust
impl Person {
    // Notice the return type is `Self`:
    fn new(age: i32, name: String) -> Self {
       // Shorthand syntax for struct fields from the previous lesson!
       Person {
            age,
            name
        }
    }
}

// use the :: keyword/operator to access this method
let person = Person::new(22, String::from("Bader"));
```

## Try it yourself!

## What's happening here?
