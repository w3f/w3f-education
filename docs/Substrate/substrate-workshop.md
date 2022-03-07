---
id: workshop
sidebar_position: 1
---

# Innovating with Substrate FRAME

Substrate is a modular framework that enables you to create purpose-built blockchains by composing custom or pre-built components. The Framework for Runtime Aggregation of Modularized Entities (FRAME) is a set of modules and support libraries that simplify runtime development. In Substrate, these modules are called Pallets, each hosting domain-specific logic to include in a chain's runtime.

In order to get the most out of Substrate, you should have a good knowledge of computer science and basic blockchain concepts. Terminology like header, block, client, hash, transaction and signature should be familiar. Substrate is built on the [Rust Programming language](https://www.rust-lang.org/), which makes use of novel design patterns to enable development of code that is safe and fast. Although you don't need to know Rust to get started with Substrate, a good understanding of Rust will allow you to become a better Substrate developer.

In this workshop, you will get a glimpse of the modularity and flexibility Substrate offers for developers!

## Substrate Template Node

_A fresh FRAME-based Substrate node, ready for hacking_

### Substrate Playground

- Create an account on [GitHub](https://github.com/). If you already have an account, just login.

- Follow the signup instructions on [Substrate Playground](https://playground.substrate.dev/)

- Do not click on any template yet! Check out the overview of all the templates provided

- Open the Substrate Node Template, observe the blockchain node in action and wait for the rest of the participants to catch up with you

By default, the node template is initialized with this command

    ./target/debug/node-template --dev --ws-external

You can interact with the node using Polkadot JS by clicking on Playground -> Open Polkadot JS Apps

![Docusaurus](/img/workshop/playground1.png)


If Substrate Playground crashes or has issues with the load balancing multiple sessions, here are the instructions on setting up Substrate Development environment on your machine - [Create your first Substrate chain](https://docs.substrate.io/tutorials/v3/create-your-first-substrate-chain)

_It is recommended that you setup the local development environment after the workshop session_

## Running a Multi-Node Blockchain (_Skip this during the live session_)

_Skip this section during the workshop as it takes a lot of time compile the node from scratch. You can try this later_

After successfully starting the substrate node template, press CTRL + C on the terminal to stop the execution of the node. Remove the previously built artifacts by running the below command

    cargo clean

Now, run an instance of Local Testnet that allows you to run a Validator Node. This will take a while as Rust compiles the entire node from scratch. Observe the command prompt to see all the libraries that make a node template work.

    cargo run -- --base-path data/node1 --chain local --alice  --name radha --validator

Open a new terminal (At the top of the page, click on Terminal). Here, we will run another instance of the node. As we are running on the same machine, we will supply different ports for networking.

    cargo run -- --base-path data/node2 --chain local --bob  --port 30334 --ws-port 9945 --name dasari --validator

If everything goes well, you should be able to see a multi-node blockchain in action!

## Innovating with FRAME on substrate

_Main focus of this workshop_

Let us add some nick names to the accounts on-chain! We will be following the instructions from the tutorial below to see what it takes to add nicks pallet to the blockchain runtime

[Add a pallet to Substrate](https://docs.substrate.io/tutorials/v3/add-a-pallet) - highly recommended to read this thoroughly after the workshop.

To make it easy for you during the workshop session, the code updates you need to make are given below

In ```runtime/Cargo.toml``` add the code below. Make sure you update the tag to match the other dependencies listed in the file.

    [dependencies.pallet-nicks]
    default-features = false
    git = 'https://github.com/paritytech/substrate.git'
    tag = 'monthly-YYYY-MM'
    version = '4.0.0-dev'

Scroll down in ```runtime/Cargo.toml``` and add this line of code ```'pallet-nicks/std',``` in the features code block

    [features]
    default = ["std"]
    std = [
      #--snip--
      'pallet-nicks/std',
      #--snip--
      ]

Before moving on, check that the new dependencies resolve correctly by running:

    cargo check -p node-template-runtime

Now, we will move to the runtime ```lib.rs``` file.

```runtime/src/lib.rs```

    /// Add this code block to your template for Nicks right below the implementation of pallet_balances:
    parameter_types! {
      // Choose a fee that incentivizes desireable behavior.
      pub const NickReservationFee: u128 = 100;
      pub const MinNickLength: u32 = 8;
      // Maximum bounds on storage are important to secure your chain.
      pub const MaxNickLength: u32 = 32;
    }

    impl pallet_nicks::Config for Runtime {
      // The Balances pallet implements the ReservableCurrency trait.
      // `Balances` is defined in `construct_runtimes!` macro. See below.
      // /rustdocs/latest/pallet_balances/index.html#implementations-2
      type Currency = Balances;

      // Use the NickReservationFee from the parameter_types block.
      type ReservationFee = NickReservationFee;

      // No action is taken when deposits are forfeited.
      type Slashed = ();

      // Configure the FRAME System Root origin as the Nick pallet admin.
      // /rustdocs/latest/frame_system/enum.RawOrigin.html#variant.Root
      type ForceOrigin = frame_system::EnsureRoot<AccountId>;

      // Use the MinNickLength from the parameter_types block.
      type MinLength = MinNickLength;

      // Use the MaxNickLength from the parameter_types block.
      type MaxLength = MaxNickLength;

      // The ubiquitous event type.
      type Event = Event;
    }

Then we can add Nicks to the ```construct_runtime!``` Macro in the same file. You just need to add this one line ```Nicks: pallet_nicks::{Pallet, Call, Storage, Event<T>},``` in the location specified below

    construct_runtime!(
      pub enum Runtime where
          Block = Block,
          NodeBlock = opaque::Block,
          UncheckedExtrinsic = UncheckedExtrinsic
          {
            /* --snip-- */
            Balances: pallet_balances::{Pallet, Call, Storage, Config<T>, Event<T>},

            /*** Add This Line ***/
            Nicks: pallet_nicks::{Pallet, Call, Storage, Event<T>},
          }
          );

Compile the node in release mode

    cargo build --release

After the build succeeds, you can start the node

    # Run a temporary node in development mode
    ./target/release/node-template --dev --tmp --ws-external

Now, navigate to the menu items at the top. click on Playground -> Open Polkadot JS Apps. You should now be able to access all the functionalities offered by Nicks pallet. Go to developer -> extrinsics and test it out

![Docusaurus](/img/workshop/sub0workshop2.png)

![Docusaurus](/img/workshop/sub0workshop3.png)
