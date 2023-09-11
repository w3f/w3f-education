---
id: origins-calls
title: Origins (Privileged Calls) in FRAME
sidebar_label: Origins (Privileged Calls) in FRAME
description: Learn how origins and calls work in Substrate and FRAME.
---

In [Module 5](../section5/dispatchable.md), you created a dispatchable function called `register`
that defined an extrinsic. The first parameter in that function, `OriginFor<T>`, enabled you also to
interpret the call's sender, or **origin**. There are different types of origins, which can be used
in various ways to filter out where a call should come from.

## Origin Overview

A **runtime origin** defines where a call came from and can be used to check its type. In our
dispatchable code, we used the macro `ensure_signed!()` to verify that whoever sent this transaction
signed the payload. Without this check in place, this would mean that anyone could submit a payload,
regardless of whether it is cryptographically signed or not.

This allows us to authenticate the user and gain access to necessary metadata, such as the account
address.

## Origin Types (Raw Origins)

The above is known as a **signed** origin, and several types are included by default in Substrate
(see:
[RawOrigin](https://paritytech.github.io/substrate/master/frame_support/dispatch/enum.RawOrigin.html)):

- **Root** - Similar to using "**sudo**", known as the highest privilege level. The root origin is
  utilized in scenarios like upgrading the runtime.
- **Signed** - Some payload is signed by a private/public key pair and provides an `AccountId`.
- **None** - Signed by nobody. Unsigned transactions are rarely used, except in cases like off-chain
  workers or where charging an account with fees is unreasonable.

### Custom Origins

Besides the default `RawOrigin` types, custom origins can be defined and used within a pallet.
Custom origins allow a developer to define a stringent set of requirements for what a call should
contain to be valid for that specific use case.

For example, the `pallet_collectives` defines custom origins that represent a
[`Member(AccountId)`](https://github.com/paritytech/polkadot-sdk/blob/2c8021f998a4b3f3e9c0416c7886ef05803aba9d/substrate/frame/collective/src/lib.rs#L141)
of a particular collective. In the pallet's context, a call containing this origin would imply that
a member of that collective condoned that action.
