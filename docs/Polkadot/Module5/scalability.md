---
id: scalability
---

# Scalability

## Validity and Availability

Once a parachain block is created it is important that the parachain blob consisting of the PoV
block and set of outgoing messages from the parachain is available for a while. The naive solution
for this would be broadcasting/gossip the parachain blobs to all relay chain nodes, which is not a
feasible option because there are many parachains and the PoV blocks may be big. We want to find an
efficient solution to ensure PoV blocks from any recently created parachain blocks are available.

For a single chain, such as Bitcoin, as long as 51% of hash power is honest, not making block data
available ensures that no honest miner builds on it so it will not be in the final chain. However,
parachain consensus in Polkadot is determined by relay chain consensus. A parachain block is
canonical when its header is in the relay chain. We have no guarantees that anyone other than the
collator and parachain validators have seen the PoV block. If these collude then the rest of the
parachain network need not have the parachain block and then most collators cannot build a new block
and this block's invalidity may not be discovered. We would like the consensus participants, here
the validators, to collectively guarantee the availability rather than relying on a few nodes. To
this end we designed an availability scheme that uses erasure coding to distribute the PoV block to
all validators. When any misbehaviour, particularly in relation to invalidity, is detected, the blob
can be reconstructed from the distributed erasure coded pieces. If a block is available then full
nodes of the parachain, and any light client that has the PoV block, can check its validity. We have
three-level of validity checks in Polkadot. The first validity check of a PoV block is executed by
the corresponding parachain validators. If they verify the PoV block then they sign and distribute
the erasure codes of the blob, including the PoV block, to each validator. We rely on nodes acting
as fishermen to report the invalidity of a blob as a second level of validity checking. They would
need to back any claim with their own stake in DOTs. We would assume that most collators will be
fishermen, as they have a stake in continued validity of the chain and are already running full
nodes, so all they need is stake in DOTs. The third level of validity checking is executed by a few
randomly and privately assigned validators. We determine the number of validators in the third level
of validity checking considering the amount of invalidity reports given by fishermen and
unavailability reports given by collators. If an invalid parachain block is detected, the validators
who signed for its validity are slashed. We wait for enough of these randomly assigned checkers to
check the block before voting on it in GRANDPA. We also want to ensure that the block is available
before selecting the randomly assigned validators. This means that the parachain validators have to
commit running a high risk of being slashed for a small probability of getting an invalid block
finalised. This means that the expected cost of getting an invalid block into Polkadot is higher
than the amount of stake backing a single parachain. The security of our availability and validity
scheme is based on the security of the GRANDPA finality gadget and the quality of randomness
generated in each BABE epoch.
