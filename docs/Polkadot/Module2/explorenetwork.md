---
id: explorenetwork
---

# Exploring Polkadot Network


## Polkadot as a State Machine

Polkadot is a replicated sharded state machine where shards are the parachains and the
Polkadot relay chain is part of the protocol ensuring global consensus among all the parachains.
Therefore, the Polkadot relay chain protocol, can itself be considered as a replicated state machine
on its own. In this sense, this section describes the relay chain protocol by specifying the state
machine governing the relay chain. To that end, we describe the relay chain state and the detail
of state transition governed by transactions grouped in the relay chain blocks.

## State

The state is represented through the use of an associative array data structure composed
by a collection of (key; value) pairs where each key is unique. There is no assumption on the
format of the key or the value stored under it besides the fact that they both the key and the value
need to be  nite byte arrays.
The (key; value) pairs which comprise the relay chain state are arranged in a Merkle radix-16
tree. The root of this tree canonically identi es the current state of the relay chain. The Merkle
tree also provides an e cient mean to produce the proof of inclusion for an individual pair in the
state.
To keep the state size in control, the relay chain state is solely used to facilitate the relay chain
operations such as staking and identifying validators. The Merkle Radix tree is not supposed to
store any information regarding the internal operation of the parachains.

## State Transitions

Like any transaction-based transition system, Polkadot state changes via an
executing ordered set of instructions, known as extrinsics. These extrinsics include transactions
submitted by the public. They cover any data provided from \outside" of the machine's state which
can a ect state transition. Polkadot relay chain is divided into two major components, namely the
\Runtime" and the \Runtime environment". The execution logic of the state-transition function
is mainly encapsulated in the Runtime while all other generic operations, commonly shared among
modern blockchain-based replicated state machines, are embedded into the Runtime environment.
In particular, the latter is in charge of network communication, block production and consensus
engines. Runtime functions are compiled into a WebAssembly module and are stored as part of the
state. The Runtime environment communicates the extrinsics to the Runtime and interacts with
it to execute the state transition. In this way, the state transition logic itself can be upgraded as
a part of the state transition.

## Extrinsics

Extrinsics are the input data supplied to the Polkadot relay-chain state machine to
transition to new states. Extrinsics need to be stored into blocks of the relay chain in order to
achieve consensus among the state machine replica. Extrinsics are divided into two broad categories
namely: transactions and "inherents" which represent data that is inherent to a relay chain block.
The timestamp t of a block is an example of inherent extrinsics which must be included in each
Polkadot relay chain block.

Transactions are signed and are gossiped around on the network between nodes. In contrast,
inherents are not signed and are not gossiped individually but rather only when they are included
in a block. The inherents in a block are assumed to be valid if a supermajority of validators
assumes so. Transactions on the relay chain are mainly concerned with the operation of the relay
chain and Polkadot protocol as a whole, such as set code, transfer, bond, validate, nominate,
vote.

Relay chain block producers listen to all transaction network messages. Upon receiving a
transaction message, the transaction(s) are validated by the Runtime. The valid transactions then
are arranged in a queue based on their priority and dependency and are considered for inclusion
in future blocks accordingly.

## Transaction Fees

We use the model described above to set the fee level of a transaction based
on three parameters: its type, its on-chain length, and its expected resource usage. This fee
differentiation is used to reflect the different costs that a transaction incurs on the network and
on the state, and to encourage the processing of certain types of transactions over others. A
fraction of every transaction fee is paid to the block producer, while another fraction goes to
 nance the Treasury. We highlight that, for a block producer, the rewards coming
from transaction fees may constitute only a small fraction of their overall revenue, just enough to
incentivise inclusion on the block.
We also run an adaptive transaction fee schedule that reacts to the traffic level, and ensures
that blocks are typically far from full, so that peaks of activity can be dealt with e ectively and
long inclusion times are rare. In particular, the fee of each transaction is multiplied by a parameter
that evolves over time depending on the current network traffic.
We make fees evolve slowly enough, so that the fee of any transaction can be predicted accu-
rately within a frame of an hour. In particular, we do not intend for transaction fees to be the
main source of income for stakers.