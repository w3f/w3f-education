---
id: variables-mutability-more
title: More Variables & Mutability
sidebar_label: More Variables & Mutability
description: How variables and mutability can be used in blockchain.
---

Now that you are familiar with variables and mutability in Rust, let's see the kind of tools and
techniques you can use to write high quality code, relevant for your blockchain journey.

While making variables `mut` is totally okay, it is always best practice to think about ways you can
avoid it, and gain the default safety provided by Rust to ensure the variable is not modified from
underneath you.

Here are some patterns you can try to avoid even needing to make a variable mutable.

## Just Use Another Variable

You might start by asking yourself if the variable needs to be mutable to begin with, or if you
could simply use a second variable. Often times the performance tradeoff is negligible, but can make
code much more clear to read and audit.

For example, if I need to double a variable, rather than making the variable mutable, I could just
create a new variable:

```rust
fn main() {
	let result = my_function();
	assert!(result == 6);
}

fn my_function() -> u8 {
	// Here we can keep `some_variable` immutable, because we simply declare a
	// new variable below.
	let some_variable = 3u8;
	let double_some_variable = some_variable * 2;
	return double_some_variable
}
```

In this case, no variables need to be made mutable, and thanks to a new variable name, the contents
of that variable is perfectly clear.

## Declaration Without Assignment

If you know a variable might be assigned different values based on some conditions, then you can
keep the variable unassigned, and assign it later in your logic.

For example, here is a naive approach using a mutable variable:

```rust
fn main() {
	let result = my_function(true);
	assert!(result == 6);
}

fn my_function(condition: bool) -> u8 {
	// We made this variable mutable so that it could potentially change.
	let mut some_variable = 1u8;

	if condition {
		// We change it here if `condition` is true.
		some_variable = 3u8;
	}

	let double_some_variable = some_variable * 2;
	return double_some_variable
}
```

```rust
fn my_function(condition: bool) -> u8 {
	// Instead we can keep the variable immutable, and unassigned.
	let some_variable;

	// Then assign it a single time based on the condition.
	if condition {
		some_variable = 3u8;
	} else {
		some_variable = 1u8;
	}

	let double_some_variable = some_variable * 2;
	return double_some_variable
}
```

## Logic Flow Assignment

The specific example above can be made even simpler using assignment directly within the `if..else`
statement.

```rust
fn my_function(condition: bool) -> u8 {
	// You can directly assign a variable from the `if...else` statement.
	// Make note of where the semicolon is when using this syntax.
	let some_variable = if condition {
		3u8
	} else {
		1u8
	}; // <-- semicolon here

	let double_some_variable = some_variable * 2;
	return double_some_variable
}
```

This also works for `match` statements, and other logic flows that Rust provides.

```rust
pub enum Options {
    One,
    Two,
    Three,
}

fn main() {
   let result = my_function(Options::Three);
   assert!(result == 6);
}

fn my_function(option: Options) -> u8 {
	// You can directly assign a variable from a match, again avoiding the need for `mut` statement.
	let some_variable = match option {
	    Options::One => 1u8,
	    Options::Two => 2u8,
	    Options::Three => 3u8,
	};

	let double_some_variable = some_variable * 2;
	return double_some_variable
}
```
