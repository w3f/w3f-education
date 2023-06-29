---
id: origins-calls
title: Origins (Privileged Calls) in FRAME
sidebar_label: Origins (Privileged Calls) in FRAME
description: Learn how origins and calls work in Substrate and FRAME.
---

In [Module 5](../section5/dispatchable.md), you created a dispatchable function called `register` that defined an extrinsic.  The first parameter in that function, `OriginFor<T>`, enabled you to also interpret the sender, or **origin**, of the call.  There are different types of origins, and they can be used in various ways to filter out where a call should come from.

## Origin Overview

A **runtime origin** defines where a call came from and can be used to check what type it is.  In our dispatchable code, we used the macro `ensure_signed!()` to verify that whoever sent this transaction signed the payload.  Without this check in place, this would mean that anyone could submit a payload, regardless of it is cryptographically signed or not.

This allows us to authenticate the user and gain access to important metadata, such as the account address.

## Origin Types (Raw Origins)

The above is known as a **signed** origin, and there are several types that are included by default in Substrate (see: [RawOrigin](https://paritytech.github.io/substrate/master/frame_support/dispatch/enum.RawOrigin.html)):

- **Root** - Similar to using "**sudo**", known as the highest privilege level.  The root origin is used in scenarios like upgrading the runtime.
- **Signed** - Some payload which is signed by a private/public keypair and provides an `AccountId`. 
- **None** - Signed by nobody.  Unsigned transactions are rarely used, expect in cases like off-chain workers, or in other cases where charging an account with fees is unreasonable.

### Custom Origins

Besides the default `RawOrigin` types, custom origins can also be defined and used within a pallet. Custom origins allow for a developer to define a stringent set of requirements for what a call should contain in order to be valid for that specific use case.

For example, the `pallet_collectives` defines custom origins that represent a [`Member(AccountId)`](https://github.com/paritytech/substrate/blob/master/frame/collective/src/lib.rs#L139) of a particular collective.  In the context of the pallet, a call that contains this origin would imply that a member of that collective condoned that an action.