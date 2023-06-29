---
id: capstone-project
title: Course Capstone Project
sidebar_label: Course Capstone Project
description: Learn the specification of what exactly you will build in this course.
---

The purpose of this capstone project is to bring something both engaging, yet informative to the student.  Using this project, a student should be able to build a Substrate pallet in the Substrate Node Template, run it, and be able to modify and view its state in real time.

As an honorable mention and inspiration behind this project is [Substrate Kitties](https://www.shawntabrizi.com/substrate-collectables-workshop/) by Shawn Tabrizi.  

## Required Functionality - What You Will Build

- Create a basic foundation for a  sybil-resistant social network, but with only profiles. The user must meet a set of prerequisites (namely, balance) in order to join.
- Teach how to count for sybil attacks through the use of other pallets.
- Generating random profile pictures in the runtime.
- Storing and managing user metadata and unique usernames.  All handles are unique - no two usernames can be the same.
- Learn only bound-constrained metadata for an account. Allow for a person to assign information about themselves, but limit how much information

## Project Components

The following will be created as a result of this project: 

1. A runtime pallet, which the student is free to publish, modify as they will.
2. An instance of the node-template with this pallet integrated.
3. A simple front end to display all profiles on a network.

## Student Objectives

Note: project should compile, even without these!

- Fill in a new event
- Fill in a new dispatchable function
  - Interact with a storage map, both get a value, then set a new one.
  - Use `ensure`
- Fill in a new error
- Write a simple unit test to cover new event
- Show, but not implement the use of Balances pallet

## Substrate Topics Covered

The following Substrate topics and nuances will covered as a result of this project: 

- Creating a FRAME pallet, adding it to a runtime, and configuring it for the runtime.
- Learning how different pallet macros operate and work (dispatch, errors, events, storage).
- Using the dev_mode macro to mitigate fees, but weight will be discussed.  
- Going over the Rust language for each pallet concept.
- Creating any storage mappings or associations for storing data to the chain
- Learn how to utilize BoundedVec, and the importance of bounded data in general in blockchain development.
- Learning safe math via the Like or Dislike mechanism to prevent integer overflows or similar. Explain the importance of safe math in the runtime.
- Creating events for each action taken by a user
- Learning the importance of error handling and not panicking within a FRAME pallet
- Interact with `pallet_balance` through its associated trait, `Currency`, to check the balance and lock balance if needed. Explain the use of `BalanceOf<T>` and how it works in terms of Rust.
- Loose coupling vs tight coupling, with loose coupling being used and prioritized.
- Think through a realistic, real world scenario of theory to pallet.

