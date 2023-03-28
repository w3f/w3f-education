---
id: slices
title: Slices in Rust
sidebar_label: Slices 
description: Learn what slices are, how they work, and why they are useful.
---

Slices are another type of reference.  As the name implies, they *refer* to a *slice* of information, in bytes, to an existing variable in memory.  

Instead of handling an entire collection, which could be costly performance-wise, we can use slices to handle a *reference* to those items.  These slices can be modified in place or returned as immutable as part of a function.

## String slices

Working with string and byte slices is one of the most common tasks when working with Rust, especially at a lower level.

A String slice is simply a reference to a part, or slice, of a String:

```rust

let name = String::from("Bader");
// We can use the `..` operator to specify a range for the slice to cover
// In this case, we want the 'Bad' from Bader
let bad_slice = &name[0..3];
println!("{bad_slice}"); // Prints "Bad"

```

The double period syntax (`..`) signifies a range.  It creates a variable that represents that specific String in memory from those specified positions (`[starting_index..ending_index]`).


## Modifying a slice in-place

It's possible to modify a mutable slice.  This is also called changing it 'in place', as you are manipulating the data within that specific starting and ending index. 

```rust

fn main() {
    let mut name = String::from("Bader");
    // Pass in a mutable reference, where this function will
    // Borrow the value, clear it, then return ownership
    // Back to the main function's scope.
    modify_in_place(&mut name);
    println!("{name}"); // Prints nothing! the String is empty.
}


fn modify_in_place(s: &mut String) {
    s.clear();
}

```

We can define simply a slice versus the entire String.  This way, we can only act on the part of the data given.


## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+name+%3D+String%3A%3Afrom%28%22Bader%22%29%3B%0A++++%2F%2F+We+can+use+the+%60..%60+operator+to+specify+a+range+for+the+slice+to+cover%0A++++%2F%2F+In+this+case%2C+we+just+want+the+%27Bad%27+from+Bader%0A++++let+bad_slice+%3D+%26name%5B0..3%5D%3B%0A++++println%21%28%22%7Bbad_slice%7D%22%29%3B+%2F%2F+Prints+%22Bad%22%0A%7D%0A%0A%0A%2F%2F+A+function+that+does+the+same+as+above%2C+only+specifies+a+the+return+type+as+%0A%2F%2F+a+string+slice%0Afn+take_slice%28s%3A+%26String%29+-%3E+%26str+%7B%0A++++%26s%5B0..3%5D%0A%7D%0A%0A"></iframe>


## What's happening here?

The code above illustrates how to construct a basic string slice as well as return it in a function.  To make it interesting, try to pass `name` as a mutable reference - does it work?  Why and why not?



