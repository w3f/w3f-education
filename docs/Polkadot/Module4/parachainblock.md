---
id: parachainblock

---

# Path of a Parachain Block

Collators watch the progress of the block-producing and consensus protocols, e.g. by participating 
in the relay chain as a full node. Based on what they think is the latest relay chain block that will 
most likely be  nalised, they build on top of the latest parachain block (or other data) that would be  
finalised by it.

Collators sign data building on top of said latest parachain block, and submit it possibly
indirectly, to the validators assigned to their parachain (parachain validators for short),
for inclusion in the relay chain. Ideally they submit a unique one, to help performance.

The parachain validators decide which parachain block to support, and presents relevant
data of it as a parachain's next candidate to be added to the next relay chain block.

A block-producing validator collects candidates from all parachains, and puts this collection
along with any recent relay chain extrinsics into a relay chain head block.
For performance, this does not contain the full data from all parachains, but only metadata
and partial data, including security-related metadata.

In the unfavourable case, this can result in forks, resolved later. This subprotocol
is designed so that even with forks, participants have an idea of the block most likely to be
finalised, similar to Proof-of-Work protocols.

A subprotocol is run to ensure that the full data is indeed available, including and distributing
it to various other relay-chain nodes.

Data submitted from a parachain might include indications that they are sending messages
to another parachain, including metadata to facilitate this. This is now included on the relay
chain head(s), so recipient parachains are aware of which new messages have been sent to
them. They now retrieve the message bodies from the sending parachains.

Validators submit their votes on the block and  nalises it, resolving any forks to a single
head. These votes are added to the relay chain blocks.

## Parachains in Action


In outline, a collator produces a parachain block, sends it to the parachain validators, who sign
its header as valid, and the header with enough signatures is placed on the relay chain. At this
point, the parachain block is as canonical as the relay chain block its header appeared in. If this
relay chain block is in the best chain according to BABE, so is the parachain
block and when this relay chain block is  nalised, so is the parachain block.
Because the parachain validators switch parachains frequently, they are stateless clients of
the parachain. Thus we distinguish between the parachain block B, which is normally enough
for full nodes of the parachain such as collators to update the parachain state, and the Proof of
Validity(PoV) block BPoV , which a validator who does not have the parachain state can verify.
Any validator should be able to verify BPoV given the relay chain state using the parachain's
parachain validation function (PVF), the Web assembly code for which is stored on the
relay chain in a similar way to the relay chain's runtime. The STVF takes as an input the PoV
block, the header of the last parachain block from this parachain and a small amount of data from
the relay chain state.
The STVF outputs the validity of the block, the header of this block and its outgoing mes-
sages. The PoV block contains any outgoing messages and the parachain block B. The parachain
validators should gossip the parachain block to the parachain network, as a back up to the collator
itself doing so.
The PoV block will be the parachain block, its outgoing messages, its header and light client
proof witnesses. These witnesses are Merkle proofs that give all elements of the input and output
state that are used or modi ed by the state transition from the input and output state roots.
To aid in censorship resistance, a parachain may want to use proof of work or proof of stake to
select collators, where the selection strategy is up to the given parachain. This can be implemented
in the STVF and need not be a part of the Polkadot protocol. So for proof of work, the STVF would
check that the hash of the block is su ciently small. However, for speed, it would be useful to
ensure that most relay chain blocks can include a parachain block. For PoW, this would necessitate
it being probable that multiple collators are allowed to produce a block. As such we will still need
a tie-breaker for the parachain validators to coordinate on validating the same parachain block
 rst. This may be the golden ticket scheme of. For proof of stake this may not be necessary.


<iframe width="560" height="315" src="https://www.youtube.com/embed/AlnjFIfwOH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>