---
id: traits
title: Defining behavior with Traits
sidebar_label: Traits
description: Learn how to bring data structs to life with traits in Rust.
---

As there is no real concept of object-oriented-style inheritance in Rust **traits** introduce the notion of defining shared behavior for data structures.  A trait defines a set of shared functions, expectations, and behavior that can be used for an indefinite number of types.

## Creating a Trait

Defining a trait utilizes the `trait` keyword, followed by the name of the trait.  In this example, notice the use of the `pub` (public) keyword.  This exposes the trait to any external files within a Rust crate and project to utilize: 

```rust
pub trait DigitalBank {
    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32;
}
```

This function defines a trait `DigitalBank`, which also define a **method signature**, called `transfer`.  This signature is a blueprint for what we expect any type that *implements* `DigitalBank` as a trait.

## Common Traits in Rust

As you may have already seen, there are quite a few traits which are used in under-the-hood in Rust. A few common traits are: 

- [Debug](https://doc.rust-lang.org/std/fmt/trait.Debug.html) - formats the output in a debugging context.
- [PartialEq](https://doc.rust-lang.org/std/cmp/trait.PartialEq.html) - A trait for equality comparisons.
- [Clone](https://doc.rust-lang.org/std/clone/trait.Clone.html) - Describes how a new value can be created, or "Cloned".

There are many more, but these when used in conjunction with the `derive` macro with structs can be very useful in making structs more pleasant to handle.

### Using the derive macro

A line you may have encountered above a `struct` declaration is `#[derive()]`.  This is what is called a **procedural macros**, which create a sort of auto-implementation for a set of compatible traits.  Between the parentheses, any traits compatible with this macro along with the struct's fields within can be implemented: 

```rust
#[derive(Clone)]
struct Stormtrooper {
    name: String
}
```

Because `String` also implements `Clone`, this is perfectly acceptable and easier than fully writing out the implementation for this particular trait.


## Implementing a Trait on an "Account" struct

To implement (`impl`) this trait, we will create a struct called `Account`, which will also be marked as `pub`:

```rust
pub struct Account {
   pub id: i32,
   pub balance: i32,
   pub is_legit: bool,
}

impl DigitalBank for Account {}
```
If the above code was ran, we'd be presented with this error: 

```rust
error[E0046]: not all trait items implemented, missing: `transfer`
  --> src/main.rs:11:1
   |
8  |     fn transfer(&mut self, who: &mut Account, amount: i32) -> i32;
   |     ------------------------------------------- `transfer` from trait
...
11 | impl DigitalBank for Account {}
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `transfer` in implementation

For more information about this error, try `rustc --explain E0046`.
```

As the compiler clearly says - we must implement all method signatures for this implementation!

Now, we may implement our `DigitalBank` trait to properly reflect the method signatures:

```rust
impl DigitalBank for Account {
    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32 {
        // Take from our (self) balance,
        self.balance = self.balance - amount;
        // Add that amount to someone else's balance,
        who.balance = who.balance + amount;
        // return our remaining balance.
        self.balance
    }
}
```

Because we implemented `DigitalBank` with this type, now any instance of the account struct can utilize the `transfer()` method and ensure **shared** behavior:

```rust
    let mut account_one = Account {
        id: 1,
        balance: 100,
        is_legit: true,
    };
    let mut account_two = Account {
        id: 2,
        balance: 200,
        is_legit: true,
    };

    // In theory, account two could also easily call this!
    account_one.transfer(&mut account_two, 50);

    println!(
        "Account One Balance: {}, Account Two Balance: {}",
        account_one.balance, account_two.balance
    );
```

In fact, *any* type that `impl`s `DigitalBank` now can transfer funds, so long as it's implemented correctly as per the method and trait signatures.

To illustrate this, lets add a method signature to `DigitalBank` to drain all funds from an `Account`:

```rust 
pub trait DigitalBank {
    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32;
    /// New method signature! Now we *have* to implement it.
    fn drain_funds(&mut self) -> bool;
}

impl DigitalBank for Account {
    fn transfer(&mut self, who: &mut Account, amount: i32) -> i32 {
        // Take from our (self) balance,
        self.balance = self.balance - amount;
        // Add that amount to someone else's balance,
        who.balance = who.balance + amount;
        // return our remaining balance.
        self.balance
    }

     fn drain_funds(&mut self) -> bool {
        // Drain it all!
        self.balance = 0;
        // Really, we should have a Result that ensures that the account was successfully drained.
        true
     }
}
```

And as before, it's as simple as calling the `drain_funds` on any type, in this case `Account`, that implements the `DigitalBank`trait:

```rust
// Account two's balance is now 0
account_two.drain_funds();
```

Feel free to define more types and implement, or even expand `DigitalBank` with more methods as you see fit.

## Trait Parameters & Bounds

A common use of traits is their use as **bounds** in functions, which can then be used to define **parameters** that abide by these bounds.  With generics, this becomes very possible and produces very reusable code:

:::info

For this scenario, we added an additional method to the `DigitalBank` trait - `is_legit()`, which verifies the legitimacy of a particular entity.  This entity could be an `Account`, or even something like a `SmartContract` type.

:::

```rust
fn verify_entity(entity: &impl DigitalBank) {
    if entity.is_legit() {
        println!("Entity is legit!");
    } else {
         println!("Entity is NOT legit!");
    }
}
```

The function's parameter, `entity` is saying something very particular here: **any** type which implements `DigitalBank` as a trait is a valid parameter.  If we were to define another type, say `SmartContract`, that implemented `DigitalBank`, then that would also be completely valid.

It can also be written using *trait bound syntax*, which allow for a better view of generics at work:

```rust
fn verify_entity<T: DigitalBank>(entity: &T) {
    if entity.is_legit() {
        println!("Entity is legit!");
    } else {
         println!("Entity is NOT legit!");
    }
}
```

To call a function like this would be quite interesting, as we would need to specify which type, so long as it abides by the trait bound `DigitalBank`:

```rust
let mut account = Account {
    id: 1,
    balance: 100,
};
// Account goes in the angled brackets, as it's a type 'T' that implements 'DigitalBank':
verify_entity::<Account>(&account);
```

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=pub+struct+Account+%7B%0A++++pub+id%3A+i32%2C%0A++++pub+balance%3A+i32%2C%0A%7D%0A%0Apub+trait+DigitalBank+%7B%0A++++%2F%2F%2F+Return+the+new+balance.%0A++++fn+transfer%28%26mut+self%2C+who%3A+%26mut+Account%2C+amount%3A+i32%29+-%3E+i32%3B%0A++++fn+is_legit%28%26self%29+-%3E+bool%3B%0A++++fn+drain_funds%28%26mut+self%29+-%3E+bool%3B%0A%0A%7D%0A%0Aimpl+DigitalBank+for+Account+%7B%0A++++fn+transfer%28%26mut+self%2C+who%3A+%26mut+Account%2C+amount%3A+i32%29+-%3E+i32+%7B%0A++++++++%2F%2F+Take+from+our+%28self%29+balance%2C%0A++++++++self.balance+%3D+self.balance+-+amount%3B%0A++++++++%2F%2F+Add+that+amount+to+someone+else%27s+balance%2C%0A++++++++who.balance+%3D+who.balance+%2B+amount%3B%0A++++++++%2F%2F+return+our+remaining+balance.%0A++++++++self.balance%0A++++%7D%0A%0A+++++fn+drain_funds%28%26mut+self%29+-%3E+bool+%7B%0A++++++++%2F%2F+Drain+it+all%21%0A++++++++self.balance+%3D+0%3B%0A++++++++%2F%2F+Really%2C+we+should+have+a+Result+that+ensures+that+the+account+was+successfully+drained.%0A++++++++true%0A+++++%7D%0A+++++%0A+++++fn+is_legit%28%26self%29+-%3E+bool+%7B%0A++++++++self.balance+%21%3D+0%0A+++++%7D%0A%7D%0A%0Afn+verify_entity%3CT%3A+DigitalBank%3E%28entity%3A+%26T%29+%7B%0A++++if+entity.is_legit%28%29+%7B%0A++++++++println%21%28%22Entity+is+legit%21%22%29%3B%0A++++%7D+else+%7B%0A+++++++++println%21%28%22Entity+is+NOT+legit%21%22%29%3B%0A++++%7D%0A%7D%0A%0Afn+main%28%29+%7B%0A++++let+mut+account_one+%3D+Account+%7B%0A++++++++id%3A+1%2C%0A++++++++balance%3A+100%2C%0A++++%7D%3B%0A++++let+mut+account_two+%3D+Account+%7B%0A++++++++id%3A+2%2C%0A++++++++balance%3A+200%2C%0A++++%7D%3B%0A%0A++++account_one.transfer%28%26mut+account_two%2C+50%29%3B%0A%0A++++println%21%28%0A++++++++%22Account+One+Balance%3A+%7B%7D%2C+Account+Two+Balance%3A+%7B%7D%22%2C%0A++++++++account_one.balance%2C+account_two.balance%0A++++%29%3B%0A++++%0A++++account_two.drain_funds%28%29%3B%0A++++%2F%2F+ALl+funds+are+gone%21%0A++++println%21%28%0A++++++++%22Account+One+Balance%3A+%7B%7D%2C+Account+Two+Balance%3A+%7B%7D%22%2C%0A++++++++account_one.balance%2C+account_two.balance%0A++++%29%3B%0A++++%0A++++let+mut+account+%3D+Account+%7B%0A++++id%3A+1%2C%0A++++balance%3A+100%2C%0A++++%7D%3B%0A++++%2F%2F+Account+goes+in+the+angled+brackets%2C+as+it%27s+a+type+%27T%27+that+implements+%27DigitalBank%27%3A%0A++++verify_entity%3A%3A%3CAccount%3E%28%26account%29%3B%0A++++verify_entity%3A%3A%3CAccount%3E%28%26account_two%29%3B%0A%7D%0A"></iframe>


## What's happening here?

