---
id: benchmarking
title: Introduction to Benchmarking
sidebar_label: Introduction to Benchmarking
description: A basic introduction to benchmarking in FRAME
---

This section will touch briefly on the concept weights and benchmarking in Substrate.  While this will not go into great depth, it is something any Substrate developer should be aware of when developing a pallet.  In the long run, producing production-ready pallets will become crucial.

## Weights in Substrate

Up until now, fees have not been a concern for our Connect pallet.  This is mostly due to us being in `dev_mode`, however, fees are very much a reality within the realm of pallet development. 

**Weight** in Substrate refers to the overall computational, storage, and execution cost of a particular extrinsic (state change).  Weight is the measurement of the amount of the time that a state change takes to fully execute.  One unit of weight is equal to one picosecond of execution time on reference hardware.  

It is based off of this weight that a fee is charged to the sender of the extrinsic.

## An Introduction to Benchmarking

In order to calculate an appropriate weight for an extrinsic, Substrate's benchmarking suite can test each extrinsic load to estimate how much weight each state change would take.  A `weights.rs` file is generated via the included CLI, and exposes a set of pre-defined weights to use as part of the dispatchable function declaration.

Similar to unit testing, each extrinsic should have a corresponding benchmarking function, located within `benchmarking.rs`.

:::note

As a general note, we are using Benchmarking V2 within this course, which use prodcedural macros to declare benchmarking tests

:::

### Example: Benchmarking `register`

