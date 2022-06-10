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

<iframe width="560" height="315" src="https://www.youtube.com/embed/AlnjFIfwOH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>