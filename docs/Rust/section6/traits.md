---
id: traits
title: Defining behavior with Traits
sidebar_label: Traits
description: Learn how to bring data structs to life with traits in Rust.
---

There is no genuine concept of object-oriented-style inheritance in Rust. **Traits** introduce the
notion of defining shared behavior for data structures. A trait defines a set of shared functions,
expectations, and behavior that can be used for an indefinite number of types.

## Creating a Trait

Defining a trait utilizes the `trait` keyword, followed by the name of the trait. In this example,
notice the use of the `pub` (public) keyword. This exposes the trait to any external files within a
Rust crate and project to utilize:

```rust
pub trait Transferrable {
    fn transfer(&mut self, who: &mut Self, amount: i32) -> i32;
}
```

This function defines a trait `Transferrable`, which also defines a **method signature**, called
`transfer`. This signature is a blueprint for what we expect from any type that _implements_
`Transferrable` as a trait. As implied by the name, this trait would allow a type to send currency
from the caller to `who`. The use of this trait would allow for a particular type to now possess
these methods in order to achieve this functionality.

In order these methods to be used, however, they must be implemented on that specific type.

:::info

Take note of the difference of usage between `self` and `Self`. Remember, `self` refers to an
already _instantiated_ instance of that type, whereas `Self` refers to simply that type. The use of
`Self` here allows for this trait to look for the specific type being implemented when it comes to
`who` should receive currency.

:::

## Common Traits in Rust

As you may have already seen, there are quite a few traits that are used in Rust. A few common
traits are:

- [Debug](https://doc.rust-lang.org/std/fmt/trait.Debug.html) - formats the output in a debugging
  context.
- [PartialEq](https://doc.rust-lang.org/std/cmp/trait.PartialEq.html) - A trait for equality
  comparisons.
- [Clone](https://doc.rust-lang.org/std/clone/trait.Clone.html) - Describes how a new value can be
  created, or "Cloned".

There are many more, but these, when used in conjunction with the `derive` macro with structs, can
be very useful in making structs more pleasant to handle.

### Using the derive macro

A line you may have encountered above a `struct` declaration is `#[derive()]`. This is what is
called a **procedural macros**, which create a sort of auto-implementation for a set of compatible
traits. Between the parentheses, any traits compatible with this macro, along with the struct's
fields within can be implemented:

```rust
#[derive(PartialEq)]
struct Stormtrooper {
    name: String
}
```

Because `String` also implements `PartialEq`, this is perfectly acceptable and easier than fully
writing out the implementation for this particular trait. It's a shorthand way of implementing
common traits within the standard library. Without `PartialEq` in this context, we wouldn't be able
to utilize the equality operator (`==`).

```rust
let stormtrooper_one = StormTrooper { "Stormtrooper 1".to_string() };
let stormtrooper_two = StormTrooper { "Stormtrooper 2".to_string() };

// Possible due to PartialEq! No need for a full trait implementation.
println!("Is Stormtrooper One equal to Stormtrooper Two: {}", stormtrooper_one == stormtrooper_two);
```

## Implementing a Trait on an "Account" struct

To implement (`impl`) this trait, we will create a struct called `Account`, which will also be
marked as `pub`:

:::note

Here, the concept of an `Account` is more in the context of a blockchain, where an account has some
identification (`id`, in this case, although this could also be an address) and a monetary balance.
This theme will become more present throughout the course, as these terms will become more prevalent
when learning more about developing with [Substrate](https://substrate.io/).

:::

```rust
pub struct Account {
   pub id: i32,
   pub balance: i32,
   pub is_legit: bool,
}

impl Transferrable for Account {}
```

If the above code was run, we'd be presented with this error:

```rust
error[E0046]: not all trait items implemented, missing: `transfer`
  --> src/main.rs:11:1
   |
8  |     fn transfer(&mut self, who: &mut Self, amount: i32) -> i32;
   |     ------------------------------------------- `transfer` from trait
...
11 | impl Transferrable for Account {}
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `transfer` in implementation

For more information about this error, try `rustc --explain E0046`.
```

As the compiler clearly says - we must implement all method signatures for this implementation!

Now, we may implement our `Transferrable` trait to properly reflect the method signatures:

```rust
impl Transferrable for Account {
    fn transfer(&mut self, who: &mut Self, amount: i32) -> i32 {
        // Take from our (self) balance,
        self.balance = self.balance - amount;
        // Add that amount to someone else's balance,
        who.balance = who.balance + amount;
        // return our remaining balance.
        self.balance
    }
}
```

Because we implemented `Transferrable` with this type, now any instance of the account struct can
utilize the `transfer()` method and ensure **shared** behavior:

```rust
    let mut alice = Account {
        id: 1,
        balance: 100,
        is_legit: true,
    };

    let mut bob = Account {
        id: 2,
        balance: 200,
        is_legit: true,
    };

    // In theory, account two could also easily call this!
    alice.transfer(&mut bob, 50);

    println!(
        "Account One Balance: {}, Account Two Balance: {}",
        alice.balance, bob.balance
    );
```

In fact, _any_ type that `impl`s `Transferrable` can now transfer funds, so long as it's implemented
correctly as per the method and trait signatures.

To illustrate this let us add a method signature to `Transferrable` to drain all funds from an
`Account`:

```rust
pub trait Transferrable {
    fn transfer(&mut self, who: &mut Self, amount: i32) -> i32;
    /// New method signature!  Now we *have* to implement it.
    fn drain_funds(&mut self) -> bool;
}

impl Transferrable for Account {
    fn transfer(&mut self, who: &mut Self, amount: i32) -> i32 {
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

:::note

While `drain_funds` returns a `bool` for simplicity, a `Result<T, E>` would be more appropriate
here, along with more robust checking on if the user is allowed to drain their funds or not.

:::

And as before, it's as simple as calling the `drain_funds` on any type, in this case, `Account`,
that implements the `Transferrable`trait:

```rust
// Account two's balance is now 0
bob.drain_funds();
```

Feel free to define more types and implement, or even expand `Transferrable` with more methods as
you see fit.

## Trait Parameters & Bounds

A common use of traits is their use as **bounds** in functions, which can then be used to define
**parameters** that abide by these bounds. With generics, this becomes possible and produces very
reusable code:

:::info

For this scenario, we added an additional method to the `Transferrable` trait - `is_legit()`, which
verifies the legitimacy of a particular entity. This entity could be an `Account`, or even something
like a `SmartContract` type.

:::

```rust
fn verify_entity(entity: &impl Transferrable) {
    if entity.is_legit() {
        println!("Entity is legit!");
    } else {
         println!("Entity is NOT legit!");
    }
}
```

The function's parameter, `entity`, is saying something very particular here: **any** type which
implements `Transferrable` as a trait is a valid parameter. If we were to define another type, say
`SmartContract`, that implemented `Transferrable`, then that would also be completely valid.

It can also be written using _trait bound syntax_, which allows for a better view of generics at
work:

```rust
fn verify_entity<T: Transferrable>(entity: &T) {
    if entity.is_legit() {
        println!("Entity is legit!");
    } else {
         println!("Entity is NOT legit!");
    }
}
```

To call a function like this would be quite interesting, as we would need to specify which type, so
long as it abides by the trait bound `Transferrable`:

```rust
let mut account = Account {
    id: 1,
    balance: 100,
};
// Account goes in the angled brackets, as it's a type 'T' that implements 'Transferrable':
verify_entity::<Account>(&account);
```

## Try it yourself!

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=pub+struct+Account+%7B%0A++++pub+id%3A+i32%2C%0A++++pub+balance%3A+i32%2C%0A%7D%0A%0Apub+trait+Transferrable+%7B%0A++++%2F%2F%2F+Return+the+new+balance.%0A++++fn+transfer%28%26mut+self%2C+who%3A+%26mut+Account%2C+amount%3A+i32%29+-%3E+i32%3B%0A++++fn+is_legit%28%26self%29+-%3E+bool%3B%0A++++fn+drain_funds%28%26mut+self%29+-%3E+bool%3B%0A%0A%7D%0A%0Aimpl+Transferrable+for+Account+%7B%0A++++fn+transfer%28%26mut+self%2C+who%3A+%26mut+Account%2C+amount%3A+i32%29+-%3E+i32+%7B%0A++++++++%2F%2F+Take+from+our+%28self%29+balance%2C%0A++++++++self.balance+%3D+self.balance+-+amount%3B%0A++++++++%2F%2F+Add+that+amount+to+someone+else%27s+balance%2C%0A++++++++who.balance+%3D+who.balance+%2B+amount%3B%0A++++++++%2F%2F+return+our+remaining+balance.%0A++++++++self.balance%0A++++%7D%0A%0A+++++fn+drain_funds%28%26mut+self%29+-%3E+bool+%7B%0A++++++++%2F%2F+Drain+it+all%21%0A++++++++self.balance+%3D+0%3B%0A++++++++%2F%2F+Really%2C+we+should+have+a+Result+that+ensures+that+the+account+was+successfully+drained.%0A++++++++true%0A+++++%7D%0A+++++%0A+++++fn+is_legit%28%26self%29+-%3E+bool+%7B%0A++++++++self.balance+%21%3D+0%0A+++++%7D%0A%7D%0A%0Afn+verify_entity%3CT%3A+Transferrable%3E%28entity%3A+%26T%29+%7B%0A++++if+entity.is_legit%28%29+%7B%0A++++++++println%21%28%22Entity+is+legit%21%22%29%3B%0A++++%7D+else+%7B%0A+++++++++println%21%28%22Entity+is+NOT+legit%21%22%29%3B%0A++++%7D%0A%7D%0A%0Afn+main%28%29+%7B%0A++++let+mut+alice+%3D+Account+%7B%0A++++++++id%3A+1%2C%0A++++++++balance%3A+100%2C%0A++++%7D%3B%0A++++let+mut+bob+%3D+Account+%7B%0A++++++++id%3A+2%2C%0A++++++++balance%3A+200%2C%0A++++%7D%3B%0A%0A++++alice.transfer%28%26mut+bob%2C+50%29%3B%0A%0A++++println%21%28%0A++++++++%22Account+One+Balance%3A+%7B%7D%2C+Account+Two+Balance%3A+%7B%7D%22%2C%0A++++++++alice.balance%2C+bob.balance%0A++++%29%3B%0A++++%0A++++bob.drain_funds%28%29%3B%0A++++%2F%2F+ALl+funds+are+gone%21%0A++++println%21%28%0A++++++++%22Account+One+Balance%3A+%7B%7D%2C+Account+Two+Balance%3A+%7B%7D%22%2C%0A++++++++alice.balance%2C+bob.balance%0A++++%29%3B%0A++++%0A++++let+mut+account+%3D+Account+%7B%0A++++id%3A+1%2C%0A++++balance%3A+100%2C%0A++++%7D%3B%0A++++%2F%2F+Account+goes+in+the+angled+brackets%2C+as+it%27s+a+type+%27T%27+that+implements+%27Transferrable%27%3A%0A++++verify_entity%3A%3A%3CAccount%3E%28%26account%29%3B%0A++++verify_entity%3A%3A%3CAccount%3E%28%26bob%29%3B%0A%7D%0A"></iframe>

## What's happening here?

In this example, we define a common trait `Transferrable`, which allows a struct to define and
access three methods: `transfer`, `is_legit`, and `drain_funds`. When a struct implements this
trait, it must specify the functionality for each method. A function, `verify_entity`, also
introduces a **trait bound** `T: Transferrable`. This bound ensures that only types that have
correctly implemented `Transferrable` are to be valid arguments.
