---
id: borrowing
title: Borrowing & References in Rust
sidebar_label: Borrowing & References
description: Learn how the borrowing model works in Rust, and how to utilize it properly.
---

The borrowing model in Rust is quite trivial. As mentioned, ownership issues may arise when dealing
with values stored on the heap (in other words, values that aren't of fixed size and are defined at
compile time).

While ownership does ensure that all memory will be allocated appropriately/deallocated, it does
introduce some complexity that references and borrowing solve.

## Problem: Heap-stored Values

Data types that aren't fixed size and have the potential to grow in size during runtime are stored
on the **heap**. Because the compiler can't tell what the value _could_ be at compile time, it's
managed during the runtime.

The primary issue with this is when a potential **move**, or change in ownership, occurs:

```rust

fn main() {
    // Create a String collection from a string literal (&str)
    let name = String::from("Bader");
    take_my_string(name);
    // Error!
    println!("{name}");
}

fn take_my_string(s: String) {
    // Prints a reverse string
    println!("{}", s.chars().rev().collect::<String>());
}

```

There is a problem with this code - that's that, in order to maintain memory safety and follow the
rules of ownership, the variable`name` was moved to the `fn take_my_string` function. In other
words, it owns it because it is stored on the heap.

Fixed-size variables are copied - as the compiler knows exactly _what_ to copy, whereas values on
the heap are _moved_. Once moved, they cannot be used within that context.

## Borrowing & Moving (Lack thereof)

The borrowing system in Rust solves this issue. Using **references**, which are denoted by `&,` we
can avoid moving the String directly and instead just use a reference to it. This references points
to where it exists in memory, in contrast to moving it all together:

```rust

fn main() {
    // Create a String collection from a string literal (&str)
    let name = String::from("Bader");
    // We allow the function to borrow our String as a reference.
    take_my_string(&name);
    // No longer an error!  The main function is to maintain ownership.
    println!("{name}");
}

// Now, instead of taking a String - we merely take a reference to it.
fn take_my_string(s: &String) {
    // Prints a reverse string
    println!("{}", s.chars().rev().collect::<String>());
}

```

Using a reference to `name`, we allow `take_my_string` to **borrow** the value versus taking
complete ownership. We can perform whatever we want with it, but as soon as the function is
complete, `name` returns back to main's ownership.

## Mutable & Immutable References

Mutable references are also possible - just be aware that like borrowing and references also have
several rules:

- Only one mutable reference is allowed at a time
- Any number of immutable references is allowed
- References must always be valid (no _dangling_ references: variables that return a reference that
  ends up getting dropped at the end of some scope).

As an example, let's modify the value of a variable, then give ownership back via borrowing:

```rust

fn main() {
    // Create a String collection from a string literal (&str)
    let mut name = String::from("Bader");
    // We allow the function to borrow our String as a reference - but mutable
    // Notice the `&mut` - this is necessary for any time we reference a mutable reference
    take_my_string_and_change_it(&mut name);
    // No longer an error!  The main function maintains ownership.
    // But we also modified the value 😎
    println!("{name}");
}

// Now, instead of taking a String - we merely take a reference to it.
// Again, we must use `&mut` to signal that we expect a mutable reference
fn take_my_string_and_change_it(s: &mut String) {
    s.push_str(" OOO");
}

```

### Mutable Reference Rules

The compiler looks for any instances where more than one mutable reference may exist at a time, but
more than one immutable references are fine. However, once an immutable reference is defined, no
mutable reference can be made:

```rust

let mut name = String::from("Bader");

// This is an immutable reference to a mutable variable
let ref_to_name = &name;
// This is *another* immutable reference to a mutable variable
let ref_to_name_2 = &name;
// And this is a mutable reference, denoted by `&mut`
let mut_ref_to_name = &mut name;

```

This is primarily to avoid _data races_ - going back to Rust's memory safety; it prevents multiple
pointers from attempting to modify the same value in the program.

```rust

let mut name = String::from("Bader");

// And this is a mutable reference, denoted by `&mut`
let mut_ref_to_name = &mut name;
// And this is ANOTHER mutable reference
let mut_ref_to_name_2 = &mut name;

println!("{mut_ref_to_name}, {mut_ref_to_name_2}");

```

This won't compile, as the compiler will recognize that we have two potentially modifiable
references to the same variable.

## Try it out!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++%2F%2F+Create+a+String+collection+from+a+string+literal+%28%26str%29%0A++++let+mut+name+%3D+String%3A%3Afrom%28%22Bader%22%29%3B%0A++++%2F%2F+We+allow+the+function+to+borrow+our+String+as+a+reference+-+but+mutable%0A++++%2F%2F+Notice+the+%60%26mut%60+-+this+is+necessary+for+any+time+we+reference+a+mutable+reference%0A++++println%21%28%22Before%3A+%7Bname%7D%22%29%3B%0A++++take_my_string_and_change_it%28%26mut+name%29%3B%0A++++%2F%2F+No+longer+an+error%21+The+main+function+maintains+ownership.%0A++++%2F%2F+But+we+also+modifed+the+value+%F0%9F%98%8E%0A++++println%21%28%22After%3A+%7Bname%7D%22%29%3B%0A%7D%0A%0A%2F%2F+Now%2C+instead+of+taking+a+String+-+we+merely+take+a+reference+to+it.%0A%2F%2F+Again%2C+we+must+use+%60%26mut%60+to+signal+that+we+expect+a+mutable+reference%0Afn+take_my_string_and_change_it%28s%3A+%26mut+String%29+%7B%0A++++s.push_str%28%22+OOO%22%29%3B%0A%7D"></iframe>

## What's happening here?

This example shows cases of a mutable variable being borrowed by a function, modified, then returned
to the scope of `main`. Notice we can still use the variable, even after it has been passed to the
function.
