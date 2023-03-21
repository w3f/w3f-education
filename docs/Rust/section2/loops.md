---
id: loops
title: Loops
sidebar_label: Loops 
description: Learn how to construct loops, and when to use different loops.
---

Loops in Rust are very useful *expressions*, which if you recall, produce a value as a result of some operation.

Although Rust supports [five types of loops](https://doc.rust-lang.org/reference/expressions/loop-expr.html), we will go over the most common types:

- The `loop` expression - an infinite loop which goes till `break` is called.
- The `while` expression - a loop which continues until a condition is true or false.
- The `for` expression - a loop which is useful for iterating over a collection of items.

## Infinite loops: `loop`

Using the `loop` keyword, we can define an expression which iterates, or loops, infinitely: 

```rust
fn main() {
    loop {
        println!("Print forever!");
    }
}
```

This type of loop is typically used to keep trying some operation until a condition has been fulfilled.

## Conditional loops: `while`

Using a `while` loop, it will automatically stop once a condition has been fulfilled. An example would be looping until a number has reached a certain limit:

```rust

fn main() {
    let mut x = 0;
    while (x <= 10) {
        println!("x is now: {x}");
        x += 1;
    }
}

```

In this case, we define a mutable variable `x`.  The while loop, which defines a condition while x is less than or equal to `10` (`x <= 10`), keeps executing the logic within until the condition for `x` is met.

A while loop could also iterate over a collection, if needed: 

```rust

fn main() {
    let months = ["Jan", "Feb", "Mar", "Apr"];
    let mut index = 0;
    while (index <= months.len() - 1) {
        println!("The month is now: {}", months[index]);
        index += 1;
    }
}

```

This is a bit clumsy, not to mention not friendly to any updates to the `months` array - an index could be out of bounds if we add or take away any elements from the array. Luckily, there is a better way to accomplish this.

## Looping over collections: `for`

The `for` loop is primarily used for looping over a collection of items, such as an array.  You may recall that we used a `for` loop to loop over a number of course modules. 

Let's refactor the code from `while` to `for`:

```rust

fn main() {
    let months = ["Jan", "Feb", "Mar", "Apr"];
    for month in months{
        println!("The month is now: {}", month);
    }
}

```

Besides it being much more concise, there is no worry about having an `index out of bounds` error.  


