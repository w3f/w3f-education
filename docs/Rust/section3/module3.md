---
id: module3
sidebar_position: 1
---

# 3. Intro to Intermediate Rust

Structs. Enums. Methods. Packages and Crates.
Cargo feature - this will be important for the “std” features all over Substrate. “runtime-benchmarks” and “try-runtime”.

In this module we will begin to explore Rust's type system. We will create our own types and add methods to those types. We will also take our first look at Generics and Traits in Rust. There will be much more to cover about the type system later in the course, but in this module we will learn the most fundamental and common aspects.

Rust allows users to create two different broad categories of types. First, there are Structs which are sometimes known as "product types" or "each-of types" because a struct instance requires data in each of its fields. Second, there are Enums which are sometimes known as "sum types" or "one-of types" because an enum instance is one of multiple variants.

If you come from an object oriented programming background, structs will be familiar as they are pretty similar to the data fields on a class or object. If you come from an functional programming background, both structs and enums will likely be familiar, although the enum syntax is unlike that of OCaml or Haskell.

# Structs

Structs allow packaging multiple primitive data types together into a logical package. They are very similar to the tuples we saw previously, although they make the language much more programmer friendly.

When defining a struct, you provide a name for the type, which has a capital letter by convention. Then you provide a name for each field and a type for each field.

```rust
struct Fraction {
    numerator: u32,
    denominator: u32,
}
```

To create an instance of a struct, you use the name of the type and the name of each field as before. But instead of specifying a type for each field, which has already been defined, we supply a value for each field.

```rust
let one_half = Fraction {
    numerator: 1,
    denominator: 2,
}
```

Structs, like tuples, need to have a value for each and every field. It is not valid to omit one of the fields.

```rust
let one = Fraction {
    numerator: 1,
}
```

Similarly, each field must be of the type that was declared when the struct was defined.

```rust
let one_half = Fraction {
    numerator: 1u64,
    denominator: 2u64,
}
```

Now that we know how declare and instantiate structs, let's see how to access their fields. To access the inner data of a struct, we just use a dot operator and then the name of the field.

```rust
let my_frac = Fraction {
    numerator: 2,
    denominator: 3,
}

let my_bottom_value = my_frac.denominator;
assert!(my_bottom_value == 3);
```

Notice that here we have used simple integer literals like `3` as opposed to explicitly typed ones like `3u32`. This is allowed because the Rust compiler knows that the fields of the `Fraction` type are `u32` because they were declared as such. Similarly, the compiler can infer that the type of `my_bottom_value` is u32 so we don't need an explicit annotation.

We can use the same syntax to mutate the value of a field. But, as always in Rust, to make a value mutable it must be explicitly declared as such.

```rust
let mut f1 = Fraction {
    numerator: 1,
    denominator: 2,
};

let f2 = Fraction {
    numerator: 1,
    denominator: 2,
};

// here we can mutate the denominator of f1
f1.denominator = 3;

// but this line will not compile because f2 is immutable
f2.denominator = 4;
```

# Tuple Structs

In some cases you want to give your type a name like you can with structs, but you don't want to give each field a name. One such example would be storing a point on a 2D lattice.

So far we've learned two ways to store this data, both of which work, but neither of which are exactly what we want. We could simply use a tuple, but this does not allow us
to name the type, and could lead to confusion and even bugs if tuples are used in another context in the program.
Or we could use a struct, but this require repeating field names often when the position is a well-established mathematical convention.

```rust
// We could simply use a tuple.
let point = (2u32, 3u32);

// We could use a struct
struct Point {
    x_coord: u32,
    y_coord: u32,
}
```

For cases like this, Rust has the tuple struct. This allows us to name the type while referencing the fields positionally.

```rust
struct Point(u32, u32);
```

When using tuple structs, the fields are accessed with the dot operator and an integer index exactly like they are when working with tuples.

```rust
let buried_treasure = Point(4, 5);

let treasure_x_coord = buried_treasure.0;
```

It is also possible to create tuple structs with a single element inside. You may wonder why you would ever want to do this when you could simply use the underlying type directly, but in fact this is done frequently, and is often referred to as the "new type pattern". The new type pattern allows us the leverage Rust's type system to distinguish values of different semantic units even if they are represented digitally by the same underlying primitive type.

A typical example would be something like storing Temperature data when you want to be sure that the units are in Celsius as opposed to something like Kelvin or Fahrenheit.

```rust
/// A temperature value that is stored in the celsius units.
struct Celsius(u32);
```

As a side note, notice the comment starting with a triple slash here. This is known as a doc comment or a documentation comment. Doc comments can precede data types, functions, and many other pieces of code and be used to generate automated documentation. We will not explore this in depth here, but know that it is good practice to use doc comments when creating your own types.

Finally, it is possible to create unit structs that have no fields at all. They are analogous to Rust's built-in unit type `()`. This is useful when you want a type to declare static methods on. We will cover methods later in this module.

```rust
/// A unit type that has no data fields.
struct MyUnitType;
```

# Custom types in Functions and Other Types

Now that we've created some custom types of our own, let's see some ways that they can be used.

One way we can use our custom types is as parameters to functions. Let's define a function that allows us to multiply two fractions.

```rust
fn multiply_fractions(a: Fraction, b: Fraction) -> Fraction {
    Fraction {
        numerator: a.numerator * b.numerator,
        denominator: a.denominator * b.denominator,
    }
}
```

Now we are ready to see the value of the new type pattern we discussed previously. Consider steam engine control circuit with a function that determines whether the boiler has warmed up enough to start the engine.

```rust
/// First attempt that is subject to unit confusion
fn warm_enough(temp: u32) -> bool {
    temp > 100
}
```

In this naive function we run the risk of a user entering a Fahrenheit temperature by mistake, or interfacing with a temperature probe that is incorrectly configured to report Fahrenheit temperature.

We can make this function safer by using Rust's type system to insist that a Celsius temperate is entered. This program will not even compile if a plain u32 is passed.

```rust
struct Celsius(u32);

fn warm_enough(temp: Celsius) -> bool {
    temp.0 > 100
}
```

Another place we can use our custom types is as fields of other custom types. Consider a geometry program that builds up shapes from more fundamental primitive types.

```rust
struct Point(u32, u32);

/// We define a Rectangle by its two opposite corners
struct Rectangle {
    top_left: Point,
    bottom_right: Point,
}
```

# Enums

TODO

# Methods

We saw previously how we can write functions that take our custom data types as parameters or return our custom data types. Rust also supports the notion of a method. A method is a special function that is defined in the context of a particular type.

If you are familiar with Object Oriented languages like Java, methods will be very familiar. In Rust, methods are defined in a separate block than the type itself, unlike Java where the methods and data are all part of the same class. This adds some flexibility to Rust as we will see. Methods always take function

Methods are very similar to functions in syntax. The only difference is that they go in an `impl` block. As an illustrative example, lets re-write the `multiply_fraction` function the we looked at earlier as a method.

```rust
impl Fraction {
    /// Multiply two fractions together, and return the Product
    /// as a third new fraction
    fn multiply(self, other: Fraction) -> Fraction {
        Fraction {
            numerator: self.numerator * other.numerator,
            denominator: self.denominator * other.denominator,
        }
    }
}
```

This method is very similar to the function we wrote previously. The main difference is the first parameter, `self`. Notice that this `self` has a lowercase s like any other variable name and no type annotation. The first parameter of a method is always an instance of the type that the method is associated with, in this case Fraction, and it is always called `self`. Otherwise this method is the same as our previous standalone function.

To call this method, we call it _on_ an instance of the type using dot notation like in many other languages.

```rust
let f1 = Fraction {
    numerator: 1,
    denominator: 2,
};

let f2 = Fraction {
    numerator: 1,
    denominator: 2,
};

let f3 = f1.multiply(f2);
```

One weakness of the method as it is written above is that it takes ownership of both of the original fractions, and consequently, de-allocates them when it returns. A better signature would only borrow the two original fractions.

```rust
impl Fraction {
    /// Multiply two fractions together, and return the Product
    /// as a third new fraction
    fn multiply(&self, other: &Fraction) -> Fraction {
        Fraction {
            numerator: self.numerator * other.numerator,
            denominator: self.denominator * other.denominator,
        }
    }
}
```

In the previous two versions of this function, we've explicitly listed the type with which the function is associated, namely, `Fraction`, several times. While this is perfectly valid Rust, it is also possible to use the type `Self` which has a capital S like other types in Rust. The `Self` is only available in the context of an `impl` block, and it refers to whatever type the function is associated with. Here's how the function looks when we use the `Self` type.

```rust
impl Fraction {
    /// Multiply two fractions together, and return the Product
    /// as a third new fraction
    fn multiply(self, other: Self) -> Self {
        Self {
            numerator: self.numerator * other.numerator,
            denominator: self.denominator * other.denominator,
        }
    }
}
```

It is also valid, although not particularly idiomatic, to mix some uses of `Self` with some uses of `Fraction`.

## API Methods

We've seen already that we can access fields of our `Fraction` type by using the dot operator and the name of the field. However, this only works if we are in the same module that defines the struct, or if their fields are declared as public with the `pub` keyword. We will discuss visibility and API design later in this unit. But for now, know that it is often not possible to access the fields of types that are defined in foreign code.

Rather, it is often the case that a programmer-friendly API is defined on the types to prevent accidentally introducing inconsistent data. Some of the most common such methods are accessor and modifier methods aka "getters" and "setters".

Continuing the example of our `Fraction` type, such methods would look like this.

```rust
impl Fraction {
    /// Access the numerator of a given fraction
    fn get_numerator(&self) -> u32{
        self.numerator
    }

    /// Change the numerator of a given fraction
    fn set_numerator(&mut self, new_numerator: u32) {
        self.numerator = new_numerator
    }
}
```

The getter method should contain no surprises as all the relevant concepts were already introduced in our multiply fractions example. The setter however demonstrates that methods can borrow the `self` parameter mutably. Because the `set_numerator` method will mutate the fraction on which it is called, it can only be called if the fraction was defined as mutable with the `mut` keyword.

The setter and getter methods very common and very important, but they are also somewhat trivial. Let's consider a more interesting method, one to reduce a fraction to its simplified form. Here we will focus on the signature of the function, and leave the implementation to you, the learner, as an exercise. Notice that it is perfectly acceptable to have multiple `impl` blocks for the same type.

```rust
impl Fraction {
    /// Reduce a Fraction in-place by mutating its numerator and denominator.
    fn reduce(&mut self) {
        // Implementation left as an exercise.
    }
}
```

Like the setter, this method may mutate the fields of the fraction, and thus the signature indicates a mutable borrow.

## Associated Functions

Finally we will discuss the concept of associated function. In fact, all methods are associated functions. But not all associated functions are methods. You may remember I said previously that all methods take an instance of the type called `self` as the first parameter. Well a function may still appear in an `impl` block without this `self` parameter, and such functions are called associated functions, but they are not called method.

CAUTION: The jargon here is different than Java. In Java, methods without the `this` (analogous to `self`) parameter are still called methods. In fact they are called static methods. Although the language is different, the concepts are still the same. And if you use the term "static method" Rust programmers are likely to know what you mean, although doing so is technically incorrect.

As an example of a static method, let's consider the API we might provide for a consumer of our Fraction library to create a new fraction.

```rust
impl Fraction {
    fn new(numerator: u32, denominator: u32) -> Self {
        Self{
            numerator: numerator,
            denominator: denominator,
        }
    }
}
```

This function is very straight forward, and simply puts the supplied data into the appropriate fields.

I'll take this opportunity to mention a short-hand syntax that is available in Rust and makes the life of the programmer a little nicer. In our new function, we had local variables called `numerator` and `denominator` and we put them into fields with exactly the same names. When assigning a field from a local variable with exactly, the same name, it is valid Rust to elide the field name entirely, and only put the value. The compiler knows what field you are using based on the variable name.

```rust
impl Fraction {
    fn new(numerator: u32, denominator: u32) -> Self {
        Self{
            numerator,
            denominator,
        }
    }
}
```

# Generics

Many of the types we've defined in this module are more restrictive than they need to be. For example, our Fraction type insists that its inner values be of type `u32`. It may be that in some cases, programmers want more precision and prefer to use `u64` instead. It would be a shame to have to re-write the entire struct and all of its methods just to change all the `u32` to `u64`.

To address this problem, Rust's Type system has a notion of Generic types, or "generics" for short. Code that uses generics and related concepts can become quite complex, and we will dive into that full complexity in due course, but for now, let's take a look at a simple use of generic types.

```rust
/// A fraction type that allows arbitrarily large or small numerators and denominators
struct Fraction<T> {
    numerator: T,
    denominator: T,
}
```

In this improved definition of our Fraction type, we do not explicitly define the type that the numerator and denominator field will be. Rather we say they will be some generic type `T`. We define the single generic type in angle brackets after the name of the struct, `Fraction`. This means that `T` can be replaced by any type we may wish to use. While `T` can indeed be any type, because both `numerator` and `denominator` are given the type `T`, that means that they must be the _same_ type. They cannot be two different types; that would require two generic parameters.

When we create instances of our new generic fraction type, we must fill in the generic type.

```rust
let my_precise_fraction = Fraction<u128> {
    numerator: 236,
    denominator: 473,
}

let my_low_memory_fraction = Fraction<u8> {
    numerator: 1,
    denominator: 4,
}
```

We have succeeded in creating a Fraction type that allows us to use any precision integer wa want! But we have also introduced a few problems here. For example, it is now possible to create fractions with data types that don't make any sense at all. Consider this example.

```rust
let silly_fraction = Fraction<bool> {
    numerator: true,
    denominator: false,
}
```

Not only does this bool fraction not make any sense, we also won't be able to multiply bool fractions together because booleans themselves can't be multiplied. In the next video we will see how Rust's traits solve this problem.

# Traits

Traits are Rusts way of allowing programmers to define shared abstract behavior that may exist on multiple types. This concept is present in most modern programming languages. For example it manifests as `interface`s in Java, type classes in Haskell, and mix-ins in Ruby.

## Area Example

As a first example, let's consider a few 2D geometry types. Each of these types has different fields, but all of them are have some area, and it is valid to expect that their area can be calculated from their fields. Let's consider a Square and a Circle for example

```rust
struct Square {
    side_length: u32,
}

struct Circle {
    radius: u32,
}
```

Any geometry program is likely to want to know the area of these various shapes. We already know how to implement an `area` method on each of them. But implementing a one-off method on each type is problematic.

One surface-level problem is that programmers might choose slightly different names for the area method on each struct.

```rust
impl Square {
    fn get_area(&self) -> u32 {
        //--snip--
    }
}

impl Circle {
    fn calculate_area(&self) -> u32 {
        //--snip--
    }
}
```

A second, more fundamental, problem is that we may want to write a function that can work with _any_ object whose area can be calculated, and we need a way to express to the compiler that a particular type can have its area calculated. Traits solve both of these problems.

Let's define a trait for any type that can have its area calculated.

```rust
trait Area {
    fn area(&self) -> u32;
}
```

To do this, we use the keyword `trait` and then the name of the trait which starts with a capital letter, just like types do. Inside the body of the trait, we list some function signatures, but we do not include the body. Rather we just end the signature with a semicolon. The body of the function can be different for each type that implements the trait. The concept of writing the function signature without the body should be familiar to C and C++ developers as it is similar to how header files work in those languages.

There are a few items other than just function signatures that can go inside a trait definition, but we will save that discussion for later in the course.

Let's implement this trait for our two structs.

```rust
impl Area for Square {
    fn area(&self) -> u32 {
        self.side_length * self.side_length
    }
}

impl Area for Circle {
    fn area(&self) -> u32 {
        const PI: u32  = 3; // LOL. This is a good approximation, right?
        PI * self.radius * self.radius
    }
}
```

We can see here that we have solved the shallower naming problem because the trait defines the name of the area function once for every type that implements it.

## Trait Bounds for Function parameters

Now let's see how we can solve the deeper problem of writing a function that works with any shape that can have it's area calculated. Imagine that we want to know how many cans of paint we will need to cover a particular shape. For this we use a feature of Rust called a trait bound.

```rust
fn how_many_cans<T: Area>(shape: T) -> u32 {
    /// Each can of paint covers 4 units (eg m^2)
    const one_can: u32 = 4;

    // Get the area of the shape in question
    let area_to_paint = shape.area();

    // We basically just divide. But we need to be sure there is
    // extra paint, not slightly too little paint.
    (area_to_paint + one_can - 1) / one_can
}
```

There are a few new things happening in this function signature. The first is the presence of the generic parameter `T` in a function. We previously saw how to declare generics on a struct, and it is quite similar for functions. Any generic types go in angle brackets immediately after the name of the function. But it is more than just a generic parameter. This time we also introduce a trait bound. That's the `: Area` part. This syntax says that while the `how_many_cans` function can be used with multiple different types, it can't be used with just any old type. It must be used with a type that implements our `Area` trait.

By using this trait bound, we ensure that any type passed to this function implements the necessary area trait. And if you try to pass a different type, for example `bool`, then your code won't compile.

## Conditional Method Implementation

It turns out that trait bounds are the exact tool we need to make our generic Fraction type work. Let's take a look at how we can use trait bounds here.

As a reminder, here's where we left our Fraction type.

```rust
struct Fraction<T> {
    numerator: T,
    denominator: T,
}
```

We discussed that leaving the type `T` unbounded is a problem because a user could try to use the type `bool`. Such a fraction does not make any sense at all, but concretely it doesn't make sense because bools, can't be multiplied. Let's see if the compiler can tell us that itself.

```rust
impl<T> Fraction<T> {
    /// Multiply two fractions together, and return the Product
    /// as a third new fraction
    fn multiply(&self, other: &Self) -> Self {
        Self {
            numerator: self.numerator * other.numerator,
            denominator: self.denominator * other.denominator,
        }
    }
}
```

First notice the syntax for implementing a method on a struct that has generics. we start with `impl<T>` which can be understood as "for all types, `T`, implement the following. Then, as before, we name the type that we are associating this method with.

```text
error[E0369]: cannot multiply `T` by `T`
  --> src/main.rs:10:39
   |
10 |             numerator: self.numerator * other.numerator,
   |                        -------------- ^ --------------- T
   |                        |
   |                        T
   |
help: consider restricting type parameter `T`
   |
5  | impl<T: std::ops::Mul<Output=T>> Fraction<T> {
   |       +++++++++++++++++++++++++

```

Indeed, the compiler tells us that we "cannot multiply `T` by `T`". It also offers a very helpful suggestion using the `Mul` trait from the standard library. The compiler's suggestion will work here, and I encourage you to confirm that by making the suggested change. However, the understand the `Mul` trait, we need to first learn about associated types, which we will not cover until later in the course. So for now, let's invent our own `Multiply` trait for any type that can be multiplied together, and implement it for a few primitive unsigned integer types.

```rust
trait Multiply {
    fn multiply(&self, other: &Self) -> Self;
}

impl Multiply for u8 {
    fn multiply(&self, other: &Self) -> Self {
        self * other
    }
}

impl Multiply for u16 {
    fn multiply(&self, other: &Self) -> Self {
        self * other
    }
}

impl Multiply for u32 {
    fn multiply(&self, other: &Self) -> Self {
        self * other
    }
}

// Could also so u64, u128, but the point is made.
```

We can now tell the compiler that our fraction multiplication method can be used for any fraction whose inner values implement this `Multiply` trait.

```rust
impl<T: Multiply> Fraction<T> {
    /// Multiply two fractions together, and return the Product
    /// as a third new fraction
    fn multiply(&self, other: &Self) -> Self {
        Self {
            numerator: self.numerator.multiply(&other.numerator),
            denominator: self.denominator.multiply(&other.denominator),
        }
    }
}
```

Of course, we now need to call the `multiply` method instead of just using the `*` operator. But the more interesting difference is the trait bound `T: Multiply`. This can be understood as "For all types `T` that implement the `Multiply` trait, implement this method".

Our fraction type is now able to support multiplication as long as the inner data type also supports it, and we communicate that through a trait bound.

# Trait Bounds on Type Definitions

In the previous video we showed how to use a trait bound on the `impl` block where we associated the `multiply` method with our Fraction type. In this video I want to dig on on what _exactly_ we did there, and what we didn't do yet.

In fact, we did _not_ prohibit creating instances of type `Fraction<bool>`. With the code from the previous video it is still perfectly possible to create such bool fractions. But what we did do is express to the compiler that for certain generic types, it is now possible to multiply fractions together. This is an interesting and powerful feature of Rust. We were able to conditionally associate a method with our `Fraction<T>` type depending on whether or not its generic types meets a particular trait bound. If the generic type implements the `Multiply` trait, the the instance has a `multiply` method. But if the generic type does not implement this trait, then the method will not be associated.

Having observed this powerful aspect of Rust, you may be thinking, "Yeah, that is useful and interesting, but in this case, do we really want to allow even creating weird fractions that can't be multiplied? Well if you don't we can express that in Rust as well. All we have to do is add... you guessed it, a trait bound... to the struct definition.

```rust
struct Fraction<T: Multiply> {
    numerator: T,
    denominator: T,
}
```

By adding the trait bound to the struct definition, we have now made it impossible to even create a Fraction whose generic type cannot be multiplied. We do still need to leave the bound on the impl block as well though.

## Implementing Multiply for our Fraction type

It may have occurred to you that since our Fraction type is able to be multiplied now, perhaps we should implement our Multiply trait for it rather than just associating a one-off method. I totally agree, so let's do it. It actually only takes a small adjustment to our previous impl block.

```rust
impl<T: Multiply> Multiply for  Fraction<T> {
    /// Multiply two fractions together, and return the Product
    /// as a third new fraction
    fn multiply(&self, other: &Self) -> Self {
        Self {
            numerator: self.numerator.multiply(&other.numerator),
            denominator: self.denominator.multiply(&other.denominator),
        }
    }
}
```

All we had to do was change the impl block to `impl` block. We still have the same trait bound as before, but we've added `Multiply for` indicating we're now implementing a trait. Since our function signature already matched the trait's expected signature, we are done. If we had previously called out one-off method something different like "times" or something, we would have to make minor adjustments there as well.

## Limitation

As a final note, I'll mention one property of Rust's type system that sometimes feels like a limitation. You can only implement a trait for a type if _either_ the trait or the type (or both) are defined in the same crate as the implementation. While this can sometimes feel like a limitation, it is actually very important to prohibit this. If we allowed implementing Foreign traits on Foreign types, then it may be that multiple conflicting implementation exist in different crates, and the compiler would be unable to catch this because it checks one crate at a time.

It is unlikely that you'll encounter this limitation until you have a little more rust experience under your belt. But when you do encounter it, know that there is a work around, and it is to use the new type pattern that we discussed previously, and then implement the trait on your new type.

# Some Common Traits and Collections

In this module we have discussed how to create your own types, both structs and enums, create your own traits for abstracting shared behavior, and implement your traits on your types. In this final video, we'll take a look through some of the most common types and traits that are defined in the standard library and how you might encounter them.

TODO flesh this out.

Types
------

Vec
String
BTreeMap
BTreeSet - Note there are also hashtable based maps and sets with similar interfaces, but we will not be looking at them because they are not available in the Substrate Runtime.

Traits
------

Iterator
Display
Debug
Default
