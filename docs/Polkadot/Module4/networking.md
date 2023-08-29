---
id: networking
---

# Networking

All validators have their own local clock and their clocks do not rely on any central clock. We
assume that validators and collators are in a partially synchronous network. It means that a message
sent by a validator or a collator arrives at all parties in the network at most _d_ units of time
later where _d_ is an unknown parameter. So, we assume an eventual delivery of a message in
Polkadot.

Polkadot's networking needs to extend the peer-to-peer gossip network that is standard in single
chain permissionless blockchains to a multi-chain system, where any nodes network traffic should not
scale with the total data of the system.

## Gossipping

This subprotocol is used for most relay-chain artefacts, where everyone needs to see more-or-less
the same public information. Part of its structure is also used for when a node goes offline for a
long time and needs to synchronise any newer data it hasn't seen before. The Polkadot relay chain
network forms a gossip overlay network on top of the physical commu- nications network, as an
efficient way to provide a decentralised broadcast medium. The network consists of a known number of
trusted nodes (validators) who have been permissioned via staking, and an unknown number of
untrusted nodes (full nodes that don't perform validation) from the permissionless open internet.
(As an aside, recall that some of the untrusted nodes may have other roles as defined earlier, e.g.
parachain collator, fishermen, etc.) A simple push-based approach is implemented currently, with
hash-based tracker caches to avoid sending duplicates to peers, and a few restrictions to avoid the
most common spam attacks:

- Artefacts may only be received in dependency order; peers are not allowed to send them out-
  of-order. Though this decreases network-level efficiency, it is straightforward to implement and
  provides a healthy level of security.

- To efficiently communicate to sending peers what they are allowed to send in dependency order,
  periodically peers update each other with their view of the latest heads of the chain.

There are also more specific constraint rules applied to artefacts belonging to the various higher-
level subprotocols using the gossip protocol, to avoid broadcasting obsolete or otherwise unneeded
artefacts. For example, for GRANDPA we only allow two votes being received for each type of vote,
round number, and voter; any further votes will be ignored. For block production only valid block
producers are allowed to produce one block per round; any further blocks will be ignored. There is
basic support for sentry nodes, proxy servers that are essentially the only neighbour of a private
server, running more security-critical operations such the validator role. The network topology is a
weak point currently; nodes connect to each other on an ad-hoc basis by performing random lookups in
the address book. Further work will proceed along two fronts:

1. Trusted nodes will reserve a portion of their bandwidth and connection resources, to form a
   structured overlay with a deterministic but unpredictable topology that rotates every era. For
   nodes running behind sentries, this effectively means that their sentry nodes instead participate
   in this topology.
2. For the remainder of trusted nodes' resource capacity, and for the whole of untrusted nodes'
   resource capacity, they will select neighbours via a scheme based on latency measurements, with
   the details to be decided. Notably, for good security properties we want a scheme that does not
   simply choose "closest first", but also some far links as well. In some sense, this can be viewed
   as the trusted nodes forming a core with the untrusted nodes around it - but note that trusted
   nodes are expected to use some of their resources to serve untrusted nodes as well. Both
   topologies are chosen to mitigate eclipse attacks, as well as sybil attacks in the permissionless
   untrusted case. Further work will also include some sort of set reconciliation protocol, to
   further reduce re- dundancy when many senders attempt to send the same object to the same
   recipient at once; and potentially look into lifting the dependency-order restriction whilst
   retaining security.

## Networking Complexity

<iframe width="560" height="315" src="https://www.youtube.com/embed/yvlUBL1GNdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
