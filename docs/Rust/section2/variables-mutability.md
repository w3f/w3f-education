---
id: variables-mutability
title: Variables & Mutability
sidebar_label: Variables & Mutability
description: How variables and mutability works in Rust.
---

If you have ever used another programming language, the concept of **variables** should not be too foreign. 


```rust
// A couple Rust variables. 
// The first holds a name (a slice of text), and the other, an age (a number).
let my_name: &str = "Bader";
let age: u32 = 22;
// We'll dive more into this line later, but just know that it is a way to print information.
println!("My name is {my_name} and I am {age} years old.");
```

As in other languages, variables in Rust behave mostly the same with the exception of a few unique properties the most prominent being **mutability** and **shadowing** .

:::info

All variables in Rust are immutable by default. Immutable variables cannot be changed, unless explicitly declared as mutable.  This prevents unwanted changes to values in code.  

:::

## Immutability in Rust

As mentioned before, by default, all variables in Rust are immutable.  This means that once a variable has been declared, the value within cannot be changed.

```rust
// The compiler won't allow this to be changed. 
// This code would throw an error!

let age: u32 = 22;
// Increment the age by one.
age += 1;

======

error[E0384]: cannot assign twice to immutable variable `age`
  --> src/main.rs:26:1
   |
24 | let age: u32 = 22;
   |     ---
   |     |
   |     first assignment to `age`
   |     help: consider making this binding mutable: `mut age`
25 | // Increment the age by one.
26 | age += 1;
   | ^^^^^^^^ cannot assign twice to immutable variable
```

This is yet another example of how the Rust compiler prevents any illegal operations, along with a descriptive way of letting the developer know.  The most interesting line to note is `cannot assign twice to immutable variable`, as this clearly shows the immutability property of the variable.

It's this very error that actually is incredibly useful, as in some cases, we don't always want to change the value of a variable.  The Rust compiler, by default, keeps this *safe* by keeping it immutable. There are many practical reasons for this, i.e., multi-developer projects, where one developer can clearly see the intentions of the program by whether a variable is mutable or not.  

A variable's value changing unintentionally can also be the cause of trivial bugs, but luckily the Rust compiler deals with it quite elegantly using immutability.

Of course, variables aren't always meant to be immutable.  To allow a variable to become mutable, simply use the `mut` keyword before the variable name when declaring it:

```rust
// This works now! Notice the `mut`, short for mutable, after `let`
let mut age: u32 = 22;
// Increment the age by one.
age += 1;
```

## Shadowing in Rust

Along with variability, Rust introduces the concept of **shadowing**.  Take a look at this example:

```rust
let x = 10u32;
let x: &str = "Hello!";

// Prints "Hello!"
println!("{x}");
```

At first glance, this may seem odd - why are there two variables with the same name *and* different type? Shouldn't Rust's type system prevent this from occurring?

This is what's called shadowing.  The Rust compiler will take the latest value assigned to that variable name, in this case from the number `10` to `Hello!`, and utilize that until either the scope ends or it is shadowed again.

Shadowing is not the same as declaring a variable as mutable with `mut`, as it still remains immutable after it has been shadowed.  The `let` keyword must also be used to shadow a variable, take a look at the following example: 

```rust

let x = 10u32;
x = "Hello!";

```

The above code will fail to compile, as no new assignment is being made via `let`.  It is trying, in essence, to assign a number of type `u32` to a slice of text.

```rust

Compiling playground v0.0.1 (/playground)
error[E0308]: mismatched types
 --> src/main.rs:3:5
  |
2 | let x = 10u32;
  |         ----- expected due to this value
3 | x = "Hello!";
  |     ^^^^^^^^ expected `u32`, found `&str`

  ```

Shadowing with `let` completely reassigns the variable to a new type and value, as it essentially redefines it completely.

## Constants in Rust

As with traditional, immutable variables in Rust, **constants** are also immutable - permanently. Constants in Rust cannot be made into mutable variables with `mut`.  Another difference is that constants only may be set to a constant expression, meaning the value is hardcoded and not calculated as the result of some function in runtime.

```rust

const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

```

The naming convention for constants is all uppercase, with underscores between each word.  They can be used for declaring some common, global, and constant variables within your Rust program.


## Try it out!

Try out some of these concepts yourself! There are a few things which may seem unfamiliar here, which will be covered in the next page, however - have a look at the code and familiarize yourself:

- `u32` means that the variable is a number.
- `&str` means that the variable is a string of text, called a `slice` in Rust.

<iframe width="100%" height="580" src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+%0Afn+main%28%29+%7B%0A%0A%2F%2F+We+start+by+creating+two+variables+-+one+is+mutable.%0A%2F%2F+In+the+context+of+this+program%2C+it+makes+sense+-+an+age+can+change%2C%0A%2F%2F+but+a+name+never+usually+changes.%0A%0Alet+mut+age%3A+%26str+%3D+%2222%22%3B%0Alet+name%3A+%26str+%3D+%22Bader%22%3B%0A%0Aprintln%21%28%22%7Bname%7D%3A+%7Bage%7D%22%29%3B%0A%0A%2F%2F+Seems+there+is+a+problem.+Notice+the+age+isnt%27+a+number%2C+but+a+string+of+text%21%0A%2F%2F+It%27s+rather+cumbersome+to+have+to+add+numbers+to+strings+-+not+to+mention+very+impractical.%0A%2F%2F+How+can+we+change+that%3F%0A%0A%2F%2F+To+turn+a+string+into+a+number%2C+we+can+use+the+following+syntax%3A+%0A%2F%2F+age.parse%28%29.unwrap%28%29%3B%0A%2F%2F+Write+a+variable+that+shadows+the+existing+%60age%60+variable+as+a+number.%0A%2F%2F+Make+sure+you+declare+it+as+mutable.%0A%2F%2F+Lastly%2C+add+one+to+it+to+increment+the+age+%28one+year+as+passed%21%29%0A%0Alet+mut+age%3A+u32+%3D+age.parse%28%29.unwrap%28%29%3B%0Aage+%2B%3D+1%3B%0Aprintln%21%28%22%7Bname%7D%3A+%7Bage%7D%22%29%3B%0A%0A%2F%2F+What+has+changed+here%3F+Hint%3A+Take+a+look+at+age+and+see%21%0A%0A%7D"></iframe>

## What is happening here?


Three primary concepts are being put to use here - namely, **immutability** and **shadowing**.  Initially, we declare two variables - `name` and `age`. `age` is mutable, as an age is expected to change, however a name is meant to be immutable.  However, `age` is set to a type that we can't add to easily.

This is where shadowing comes into play. Using shadowing, redefine `age` to be a number of type `u32` instead.  This allows us to add to the age easily.


