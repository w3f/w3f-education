---
id: interoperability
---

# Interoperability

## XCMP

If an account on one parachain sends tokens to another parachain, then XCMP
ensures that this message is delivered correctly. It is sent at a speed which is not dependent on how
long it takes to finalise blocks, which means that it needs to deal with the possibility of Polkadot
forking. Thus we optimistically execute based on the assumption that the parachain blocks are
correct. If one is not, then we need to revert and for that, it is important that parachains only
receive messages that were sent by blocks recorded on this new relay chain fork, and not the
reverted fork. Thus we need that the parachain and XCMP logic ensure that a fork of the relay
chain defines a consistent history of Polkadot and thus messages only arrive when they have been
sent previously in the history de ned by this fork.

XCMP is the protocol that parachains use to send messages to each other. It aims to guarantee
four things:  rst that messages arrive quickly; second that messages from one parachain arrive to
another in order; third that arriving messages were indeed sent in the finalised history of the sending
chain; and fourth that recipients will receive messages fairly across senders, helping guarantee that
senders never wait inde nitely for their messages to be seen.
There are two parts to XCMP. (1) Metadata about outgoing messages for a parachain block
are included on the relay chain and later this metadata is used to authenticate messages by the
receiving parachain. (2) The message bodies corresponding to this metadata need to be actually
distributed from the senders to the recipients, together with a proof that the message body is actu-
ally associated with the relevant metadata. The details of distribution are covered as a networking
protocol in Cross-chain message; the remainder is covered below.
The way relay chain blocks include headers of parachain blocks gives a synchronous notion
of time for parachain blocks, just by relay chain block numbers. Additionally it allows us to
authenticate messages as being sent in the history given by the relay chain i.e. it is impossible
that one parachain sends a message, then reorgs 2 so that that message was not sent, but has
been received. This holds even though the system may not have reached  nality over whether the
message was sent, because any relay chain provides a consistent history.
Because we require parachains to act on every message eventually, non-delivery of a single
message can potentially stop a parachain from being able to build blocks. Consequently we need
enough redundancy in our message delivery system. Any validators who validate the PoV block
should keep any outgoing messages from that block available for a day or so and all full nodes of
the sending parachain also store the outgoing messages until they know they have been acted on.