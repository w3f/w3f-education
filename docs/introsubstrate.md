---
id: introsubstrate
sidebar_position: 1
---

# Introduction to Substrate & FRAME

Developed by the Technical Education team at the Web3 Foundation, this course provides a comprehensive overview of the Substrate blockchain framework and building blockchains. 
 
It is not meant to be wholly in-depth, but rather provide a solid foundation in navigating the creation and modification of custom blockchain modules, called **pallets**.  This course will serve as an introduction into becoming a Substrate developer, the factors involved, as well as a guided, hands on portion to building a custom FRAME pallet. 

### Objectives

- Learn about FRAME, the primary mode of implementation for Substrate
- Learn at high-level how storage, the runtime, and pallets work in FRAME
- Learn how to build a basic pallet and run a custom blockchain via a template
- Learn basic testing of a FRAME pallet
- Learn best practices and important considerations when building a FRAME pallet
- Build and deploy a basic, social-network like blockchain pallet called `connect`

### Prerequisites

- Experience with Rust, or have taken our [Intro to Rust course](introrust.md).


## [Module 1 - Why Learn Substrate?](./Substrate/section1/intro.md)

- [Why Learn Substrate?](./Substrate/section1/intro.md)
- [What is Substrate?](./Substrate/section1/what-is-substrate.md)
- [History Behind Substrate](./Substrate/section1/substrate-history.md)
- [Substrate’s Design Choices](./Substrate/section1/substrate-design.md)

## [Module 2 - Substrate 101 - Overview of the Substrate Framework](/Substrate/section2/intro.md)

- [Substrate 101 - Overview of the Substrate Framework](./Substrate/section2/intro.md)
- [FRAME Runtime](./Substrate/section2/substrate-runtime.md)
- [FRAME Storage](./Substrate/section2/substrate-storage.md)
- [FRAME Pallets](./Substrate/section2/substrate-pallets.md)

## [Module 3 - Installing Dependencies & Node Template](/Substrate/section3/intro.md)

- [Installing Dependencies & Node Template](./Substrate/section3/install-deps.md)
- [Install, configure, and run the Node Template](./Substrate/section3/node-template-tour.md)
- [Node Template Tour & Overview](./Substrate/section3/explore-pallet-template.md)
- [Installing & exploring the frontend template](./Substrate/section3/install-explore-frontend.md)

## [Module 4 - Intro to Building a Custom FRAME Pallet](/Substrate/section4/intro.md)

- [Structuring our project](./Substrate/section4/project-structure.md)
- [Adjusting Pallet Config & Runtime Overview](./Substrate/section4/pallet-config.md)
- [Creating storage maps](./Substrate/section4/create-storage-map.md)
- [Events & Errors](./Substrate/section4/events-errors.md)

## [Module 5 - Building a Custom FRAME Pallet - Making our pallet actionable](/Substrate/section5/intro.md)

- [Creating dispatchable functions](./Substrate/section5//dispatchable.md)
- [Writing unit tests for pallets](./Substrate/section5/unit-tests.md)
- [Using the Balance pallet](./Substrate/section5/coupling-balances.md)

## [Module 6 - Building a Custom FRAME Pallet - Deploying & Testing](/Substrate/section6/intro.md)

- [Running the node template](./Substrate/section6/run-node.md)
- [Use the frontend-template to test your pallet](./Substrate/section6/test-frontend.md)
- [Using Polkadot.js to explore your storage](./Substrate/section6/use-polkadotjs.md)

## [Module 7 - Building a Custom FRAME Pallet - FRAME Best Practices](/Substrate/section7/intro.md)

- [Thinking in terms of blockchain development](./Substrate/section7/blockchain-dev.md)
- [Runtime Panics & FRAME Best Practices](./Substrate/section7/runtime-panics.md)
- [How to approach testing in FRAME](./Substrate/section7/how-to-test-frame.md)

## [Module 8 - Substrate Deepdive](/Substrate/section8/intro.md)

- [Origins / Privileged Calls](./Substrate/section8/origins-calls.md)
- [Chain & Genesis specification](./Substrate/section8/chain-genesis-spec.md)
- [Pallet coupling (loose vs tight)](./Substrate/section8/pallet-coupling.md)
- [Introduction to benchmarking](./Substrate/section8/benchmarking.md)





