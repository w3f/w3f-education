---
id: struct-methods
title: Defining Methods for Structs
sidebar_label: Defining Methods for Structs
description: Learn how to define methods for structs in Rust.
---

**Methods** are very similar to **functions** - the difference here being that **methods** are
applied to structs. They breathe life into structs by providing associated logic that often utilizes
its inner fields and represents an instance of that struct.

The syntax is nearly identical to a function, with the exception that its part of the
**implementation** of the struct:

```rust
struct Person {
    age: i32,
    name: String,
}

// This is an implementation of 'Person'
// We can add methods on each instance of the struct
impl Person {
    fn print_person(&self) {
        println!("This person's name is {} and is {} years old.", self.name, self.age);
    }
}
let a_person = Person {
    age: 22,
    name: String::from("Bader"),
};

a_person.print_person();
// This person's name is Bader and is 22 years old
```

In the above **implementation**, we defined a method, `print_person`, which takes `&self` as a
parameter. `&self` is an immutable reference to that specific instance, in this case, `a_person`. To
access these methods, we must first have an instance of the struct defined, then use the dot
operator (`.`) to access the method. The `&self` parameter is actually a shorthand way of saying:

```rust
self: &Self -> person: &Person
```

`Self`, with a capital `S`, is an alias for the struct's type, whereas `self` with a lowercase `s`,
refers to the actual instance with its initialized fields.

:::info

We borrowed `&self` - can you think of why?

:::

It's also possible to accept more parameters of the same type as part of the method, for example:

```rust
impl Person {
    fn print_person(&self) {
        println!("This person's name is {} and is {} years old.", self.name, self.age);
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

All functions under the `impl` (implementation) block are considered "associated" because they
effectively become part of the type. Until now, you've seen all methods take `self` as a parameter -
but it is possible to have a function that doesn't require an existing instance of the struct. They
are often used as constructors to create new instances of that struct, as seen below:

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

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=struct+Person+%7B%0A++++age%3A+i32%2C%0A++++name%3A+String%2C%0A%7D%0A%0Aimpl+Person+%7B%0A++++%2F%2F+Notice+the+return+type+is+%60Self%60%3A%0A++++fn+new%28age%3A+i32%2C+name%3A+String%29+-%3E+Self+%7B%0A++++++++%2F%2F+Shorthand+syntax+for+struct+fields+from+the+previous+lesson%21%0A++++++++Person+%7B+age%2C+name+%7D%0A++++%7D%0A%0A++++%2F%2F+Prints+a+person%0A++++fn+print_person%28%26self%29+%7B%0A++++++++println%21%28%22This+person%27s+name+is+%7B%7D+and+is+%7B%7D+years+old.%22%2C+self.name%2C+self.age%29%3B%0A++++%7D%0A%0A++++fn+is_older%28%26self%2C+other%3A+%26Person%29+-%3E+bool+%7B%0A++++++++%2F%2F+Return+if+the+other+person+is+older+or+not+as+an+expression%0A++++++++other.age+%3E+self.age%0A++++%7D%0A%7D%0A%0A%0Afn+main%28%29+%7B%0A++++let+a_person+%3D+Person+%7B%0A++++++++age%3A+22%2C%0A++++++++name%3A+String%3A%3Afrom%28%22Bader%22%29%2C%0A++++%7D%3B%0A%0A++++let+another_person_who_is_older+%3D+Person%3A%3Anew%2825%2C+%22Johnny%22.to_string%28%29%29%3B%0A%0A++++a_person.is_older%28%26another_person_who_is_older%29%3B+%2F%2F+false%0A++++%0A++++a_person.print_person%28%29%3B%0A++++another_person_who_is_older.print_person%28%29%3B%0A%7D%0A"></iframe>

## What's happening here?

This example showcases how a `Person` can be printed, compared against other borrowed `Person`(s),
and how an associated function can be used to create a new `Person`.
