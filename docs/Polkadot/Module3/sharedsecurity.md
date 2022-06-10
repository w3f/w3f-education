---
id: sharedsecurity
---


# Securing the Network

Polkadot assumes that parachains are running as external untrusted clients of the relay chain and that
the relay chain only deals with parachains via an interface and does not make assumptions about
their internals. For example, internally they may be permissioned or open; if some internal users
subvert the parachain, from Polkadot's viewpoint the entire parachain (as a single client entity) is
malicious.

The Polkadot relay chain is designed to deal with a level of malicious behaviour internally, as a
requirement of being an open decentralised network. Specific individual nodes are untrusted, but
an indeterminable subset of nodes lower-bounded in size are trusted, and the protocol works to
ensure that the relay chain externally as a whole is trustable.

Polkadot does not have any security assumption on block production mechanism for
parachains. The security of Polkadot does not depend on any precise honest fraction of collators but it requires
existence of some honest collators.

Parts of the protocol assume that every parachain has at least one reachable honest member;
where this is not feasible or not realistic, we do not follow through on this assumption and instead
have additional checks against a totally-malicious membership.

## Block Availability and Validity

<iframe width="560" height="315" src="https://www.youtube.com/embed/P4fuYJQDKN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Parachain Block Data Availability

<iframe width="560" height="315" src="https://www.youtube.com/embed/S0R4SHdpkeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Blockchain Data Availability through Erasure Coding

<iframe width="560" height="315" src="https://www.youtube.com/embed/g45QwAfXrGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Shared Security - Ethereum vs Polkadot vs Cosmos

<iframe width="560" height="315" src="https://www.youtube.com/embed/h3lE5H84xlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>