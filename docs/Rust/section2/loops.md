---
id: loops
title: Loops & Basic Logic Flows
sidebar_label: Loops & Basic Logic Flows
description: Learn how to construct loops, if statements, and when to use the two.
---

This section will cover two foundational parts of Rust and programming in general: loops and logic flow.

# Basic Logic Flows

Logic flows, sometimes called control flows, allow for conditional statements, such as `if`, to be possible.  It allows for branching logic to be implemented for a program based on `boolean` values.

## Using `if`

As said before, implementing logic based on whether something is true or not would be very useful `if` statements are the cornerstone of conditional logic.

```rust
let this_is_true: bool = true;

if this_is_true {
    println!("Less trust, more truth!");
}
```

The above code showcases a very simple example.  The statement `this_is_true` is set to a boolean value, `true`, which will execute the code within the brackets when evaluated by the `if` statement.

It's also possible to use an exclamation mark (`!`) to further diverge logic:

```rust
let this_is_true: bool = true;
if !this_is_true {
    println!("Less trust, more truth!");
}

```

This no longer prints, as it looks for the opposite of `true` - `false`.

A more realistic example is checking if a number is higher or lower than expected, like seeing if a bank balance is over $100.

```rust
let bank_balance = 101;
if bank_balance >= 100 {
    println!("More than 100 dollars");
}
```

## Using `else if` and `else`

A single `if` statement can only be used so much.  Using `else if`, we can create branches of logic within a program:

```rust
let bank_balance = 56;

if bank_balance >= 100 {
    println!("More than, equal to, 100 dollars");
} else if bank_balance % 2 == 0 {
    println!("You have an even balance!");
} else if bank_balance <= 0 {
    println!("Uh oh, it appears you're in debt!");
} else {
    println!("More than 0, but less than 100!");
}
```

## Using `match`

You can also use a match statement to perform similar logic, which we will investigate later.  A `match` statement is the most basic form of pattern matching:

```rust 
let age = 18;

match age {
    16 => println!("Old enough to drive"),
    18 => println!("An adult"),
    _ => println!("Irrelevant age")
}

```

# Iterating with loops

Loops in Rust are very useful *expressions*, which, if you recall, produce a value as a result of some operation.

Although Rust supports [five types of loops](https://doc.rust-lang.org/reference/expressions/loop-expr.html), we will go over the most common types:

- The `loop` expression - an infinite loop which goes till `break` is called.
- The `while` expression - a loop that continues until a condition is true or false.
- The `for` expression - a loop that is useful for iterating over a collection of items.

## Infinite loops: `loop`

Using the `loop` keyword, we can define an expression that iterates, or loops, infinitely: 

```rust
fn main() {
    loop {
        println!("Print forever!");
    }
}
```

This type of loop is typically used to keep trying some operation until a condition has been fulfilled.

## Conditional loops: `while`

A `while` loop will automatically stop once a condition has been fulfilled.  An example would be looping until a number has reached a certain limit:

```rust

fn main() {
    let mut x = 0;
    while (x <= 10) {
        println!("x is now: {x}");
        x += 1;
    }
}

```

In this case, we define a mutable variable `x`.  The while loop, which defines a condition while x is less than or equal to `10` (`x <= 10`), executes the logic until the condition for `x` is met.

A while loop could also iterate over a collection if needed: 

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

This is a bit clumsy, not to mention not friendly to any updates to the `months` array - an index could be out of bounds if we add or take away any elements from the array.  Luckily, there is a better way to accomplish this.

## Looping over collections: `for`

The `for` loop is primarily used for looping over a collection of items, such as an array.  You may recall that we used a `for` loop to loop over several course modules. 

Let's refactor the code from `while` to `for`:

```rust

fn main() {
    let months = ["Jan", "Feb", "Mar", "Apr"];
    for month in months{
        println!("The month is now: {}", month);
    }
}

```

Besides being much more concise, there is no worry about having an `index out of bounds` error.  


## Try it out!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+months+%3D+%5B%22Jan%22%2C+%22Feb%22%2C+%22Mar%22%2C+%22Apr%22%5D%3B%0A%0A++++%2F%2F+An+infinite+loop+-+comment+this+out+to+let+the+program+run%21%0A++++loop+%7B%0A++++++++println%21%28%22Print+forever%21..+Or+not+because+we+break.%22%29%3B%0A++++++++%2F%2F+Notice+the+use+of+break%2C+so+we+don%27t+%27break%27+the+playground%0A++++++++break%3B%0A++++%7D%0A%0A++++%2F%2F+A+conditional+while+loop%0A++++let+mut+x+%3D+0%3B%0A++++while+x+%3C%3D+10+%7B%0A++++++++println%21%28%22x+is+now%3A+%7Bx%7D%22%29%3B%0A++++++++x+%2B%3D+1%3B%0A++++%7D%0A++++%0A++++%0A++++%2F%2F+A+while+loop+acting+as+a+for+loop%0A++++let+mut+index+%3D+0%3B%0A++++while+index+%3C%3D+months.len%28%29+-+1+%7B%0A++++++++println%21%28%22The+month+is+now%3A+%7B%7D%22%2C+months%5Bindex%5D%29%3B%0A++++++++index+%2B%3D+1%3B%0A++++%7D%0A++++%0A++++%0A++++%2F%2F+A+for+loop+in+action.+%0A++++for+month+in+months%7B%0A++++++++println%21%28%22The+month+is+now%3A+%7B%7D%22%2C+month%29%3B%0A++++%7D%0A++++%0A%7D%0A"></iframe>

## What is happening here?

A the core loops are illustrated above.  Notice the `break` keyword being used within `loop`, so the playground does not run infinitely (and so other loops can run!).



