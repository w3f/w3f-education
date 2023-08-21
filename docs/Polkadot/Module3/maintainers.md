---
id: maintainers
---


# Validators and Nominators

Beyond distributing data, relay-chain nodes may perform certain protocol-level roles listed
here. Some of these roles have restrictions and conditions associated with them:

- Validator: performs the bulk of the security work. Must be a full node of the relay chain.
Interacts with parachain collators, but need not participate in a parachain as a full node.

- Nominator: stakeholder who backs and selects validator candidates. This can
be done from a light client, and they need not have any awareness of parachains.

- Collator: collects and submits parachain data to the relay chain, subject to protocol rules
described below. They are chosen as defined by the parachain, and must be full nodes of it.

## Validators

A validator is the highest in charge and helps seal new blocks on the Polkadot
network. The validators role is contingent upon a sufficiently high bond being deposited, though
we allow other bonded parties to nominate one or more validators to act for them and as such
some portion of the validators bond may not necessarily be owned by the validator itself but
rather by these nominators. A validator must run a relay-chain client implementation with high
availability and bandwidth. At each block the node must be ready to accept the role of ratifying
a new block on some parachain, and may be required to double check a few more. This process
involves receiving, validating and republishing candidate blocks. The parachain assignment is
random and changes frequently. Since the validator cannot reasonably be expected to maintain a
fully-synchronised database of all parachains, the task of devising a suggested new parachain block
will be delegated to a third-party, known as a collator. Once all new parachain blocks have been
properly ratified by their appointed validator subgroups, validators must then ratify the relay-chain
block itself. This involves updating the state of the transaction queues (essentially moving data
from a parachains output queue to another parachains input queue), processing the transactions of
the ratified relay-chain transaction set and ratifying the final block, including the final parachain
changes. A validator provably not fulfilling their role will be slashed i.e. part or all of their bond
will be taken. In some sense, validators are similar to the mining pools of current PoW blockchains.

## Nominators

A nominator is a stake-holding party who contributes to the security bond of a
validator. They have no additional role except to place risk capital and as such to signal that they
trust a particular validator (or set thereof) to act responsibly in their maintenance of the network.
They receive a pro-rata increase or reduction in their deposit according to the bonds growth to
which they contribute. Together with collators, next, nominators are in some sense similar to the
miners of the present-day PoW networks.

## Collators

Transaction collators (collators for short) are parties who assist validators in producing valid parachain blocks.
They maintain a full-node for a particular parachain; meaning that
they retain all necessary information to be able to author new blocks and execute transactions in
much the same way as block producers do on current blockchains. Under normal circumstances,
they will collate and execute transactions to create an unsealed block, and provide it, together
with a proof of validity, to one or more validators presently responsible for proposing a parachain
block.
