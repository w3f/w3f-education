---
id: consensus
---


# Polkadot Network Consensus

We need to be able to revert the chain until we know with good probability
that all parachains are correct. This means that we need to be able to reorganise the chain and
for that the chain needs to be capable of forking. Thus we use a block production mechanism,
BABE, that while run by validators, has similar properties to proof-of-work chains.
Specifically, we can use the longest chain rule as part of our consensus, and the next block producer
is not known in advance. On its own BABE would require us to wait a long time from the moment
a block is produced to the moment it is finalised, i.e. when we can be confident that with high
probability the block will never be reverted. Slow finality is required in some circumstances to
deal with challenges to availability. Most of the time, however, we would prefer to finalise blocks
much faster. For this purpose, validators finalise blocks using GRANDPA, a finality
gadget that is cleanly separated from block production. This separation makes it very adaptive
and here allows us to delay finalising blocks until challenges are dealt with, without slowing down
block production. GRANDPA gets Byzantine agreement on finalised blocks and will allow us to
prove to an entity that keeps track of the validator set which blocks are finalised, which will be
important for bridges.

## BABE

In Polkadot, we produce relay chain blocks using our Blind Assignment for Blockchain Extension
protocol (BABE). BABE assigns validators randomly to block production slots using the random-
ness generated with blocks. A block production slot is a division of time when a block producer may
produce a block. Note, that time is not universally agreed on, which we will address later. These
assignments are completely private until the assigned validators produce their blocks. Therefore,
we use \Blind Assignment" in the protocol name. BABE is similar to Ouroboros Praos with
some significant differences in the chain selection rule and timing assumptions.
In BABE, we may have slots without any assignment which we call empty slot. In order to fill
the empty slots, we have a secondary block production mechanism based on Aura that assigns
validators to slots publicly. We note that these blocks do not contribute to the security of BABE
since the best chain selection and the random number generation algorithms work as if Aura blocks
do not exist. Therefore, next we only describe BABE together with its security properties.

### Relative Time Protocol

Relative Time Protocol: The elected validators for a slot need to know when the right time
is to produce a block for the consistency and the security of BABE. For this, validators uses their
local computer clock which is not adjusted by any centralized clock adjustment protocols such
as the Network Time Protocol. Instead, they keep their clock synchronised with the other
validators with the relative time protocol.

In BABE, we assume that after the genesis block is released, elected validators of the first epoch
store the arrival time of the genesis block with respect to their local clock. Then, they mark the
beginning time of the first slot and increment the slot number every T seconds. After this point,
they periodically run the relative algorithm not to lose the synchronisation with others because of
their local clock drifts. In addition to this, a validator who joins after the genesis block runs the
relative time algorithm to be synchronised with the other validators.

As mentioned above, we want a finalisation mechanism that is
exible and separated from block
production, which is achieved by GRANDPA. The only modification to BABE required for it to
work with GRANDPA is to change the fork-choice rule: instead of building on the longest chain,
a validator producing a block should build on the longest chain including all blocks that it sees as
finalised. GRANDPA can work with many different block production mechanisms and it will be
possible to switch out BABE with another.
Intuitively GRANDPA is a Byzantine agreement protocol that works to agree on a chain,
out of many possible forks, by following some simpler fork choice rule, which together with the
block production mechanism would give probabilistic finality if GRANDPA itself stopped finalising
blocks. We want to be able to agree on many blocks at once, in contrast to single-block Byzantine
agreement protocols.
We assume that we can ask the fork choice rule for the best block given a particular block. The
basic idea is that we want to reach Byzantine agreement on the prefix of the chain that everyone
agrees on. To make this more robust, we try to agree on the prefix of the chain that 2/3 of
validators agree on.

## GRANDPA Finality Gadget

<iframe width="560" height="315" src="https://www.youtube.com/embed/0shPS6SXPKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
