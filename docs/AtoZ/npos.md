---
id: npos
title: N for Nominated Proof of Stake (NPoS)
sidebar_position: 13
---

![N for Nominated Proof of Stake (NPoS)](assets/N.png)

Nominated Proof of Stake (NPoS) is a flavor of Proof of Stake (PoS); a consensus mechanism that
allows token holders to stake (lock) their tokens on the network for the right to participate as
validators or nominators. To understand this better, first, we will talk about consensus in general.
We will cover Proof of Work (PoW) and PoS, followed by an introduction to NPoS, and wrap it all up
with how the security of a network is directly related to its consensus implementation.

**Consensus (noun)**:

1. A general agreement about something.
2. An idea or opinion that everyone shares in a group.

In a blockchain network, participants (nodes) have a full or partial copy of the blockchain on their
computers. By using consensus mechanisms, they can ensure the data is synchronized with other
participants across the network. There are different ways to achieve consensus, but in almost every
case, network participants are tasked with adding data to the blockchain. There need to be
**well-designed economic incentives** for these participants to behave **truthfully** and maintain
the network's data, creating conditions that make it **expensive to misbehave**. This does not mean
misbehavior is eliminated. However, the probability of it occurring is significantly reduced.

Since the introduction of Bitcoin and Nakamoto consensus in 2009, there have been quite a few
developments in achieving decentralized consensus. PoS is one of the few that have gained
popularity, mainly because it solves some of the issues that come with PoW, such as energy
consumption, economic entry barriers to become a validator and problems with centralization in
validator pools.

PoS is not perfect either; that is why there are different variants of PoS to address one of the
main problems we will cover in detail; large token holders potentially controlling the network by
becoming the majority of the validators.

**A brief description of Proof of Stake**

As mentioned, token holders can stake (lock) their tokens to become validators. Like miners in PoW,
the validators in PoS are tasked with ordering transactions and creating blocks. For doing this work
truthfully, they are rewarded with newly minted tokens (staking rewards). Once locked, those tokens
are subject to **slashing**, aka a token burn, which acts as an incentive mechanism so that
validators do not misbehave. If they misbehave ( and there are different severities of bad
behavior), their tokens are subject to a slash (partially or fully). Most PoS systems require a
**minimum staking amount**, which becomes a barrier to entry. And to provide better decentralization
and equitability, there need to be good validator election systems in place not to favor larger
token holders.

**Proof of Stake vs. Proof of Work**

PoW is a consensus mechanism in which miners successfully solve computationally intensive problems
to create blocks. Anyone with adequate hardware, access to the internet, and electricity can become
a miner. However, as more miners join the network, the difficulty of mining increases. This causes
the competition to be centralized toward those who can afford better hardware and pay lower
electricity costs. Hardware frequently gets improved, constantly rendering even recent machines out
of competition, and cheap electricity has a geopolitical implication that makes it difficult for
those who live in certain parts of the world where electricity might be expensive to participate in
the network as a miner. These two aspects have caused the centralization of mining efforts in PoW
networks. PoS solves these issues.

1. **Energy efficiency**: PoS is considerably more energy efficient.
   [Recent study](https://www.bloomberg.com/news/articles/2022-02-02/polkadot-has-smallest-carbon-footprint-crypto-researcher-says)
   done by the Crypto Carbon Ratings Institute Ava Labs found Polkadot to be the most cost efficient
   PoS blockchain.
2. **Lower barrier to entry**: PoS doesn’t have hardware or energy source barriers; token holders
   can become validators if they meet the minimum.
3. **More conducive to decentralization**: simply, it is easier to become a validator in a PoS
   system; this, in theory, will create conditions for better decentralization.

Despite the benefits, the minimum amount to stake may only be feasible for some token holders. For
instance, Ethereum 2.0 has a minimum stake amount of 32 ETH, and Polkadot has a current minimum
amount of approximately 300 DOT to become a nominator; however,
[efforts](https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376) to reduce this amount
are being worked on.

**Nominated Proof of Stake**

NPoS is the validator election mechanism of the consensus protocol on Polkadot, which gives token
holders two different options to participate.

1. **Validator**, a participant who runs a full blockchain node and builds blocks to be added to the
   chain. The cost of running a node is something to account for when considering becoming a
   validator.
2. **Nominator**, a participant who does not need to run a full blockchain node but is tasked with
   electing well-behaved validators to be a part of the active validator set.

Both roles are required to stake tokens. The total staked amount for a validator is the sum of their
stake and the stake of the nominators backing them.

:::caution Consensus on a blockchain is a multistep process, and NPoS is simply the part that
decides who can be a validator on the network. It does not contain the logic for adding a block to
the chain or chain finality. To have the full picture of consensus on Polkadot, read about
[BABE](https://research.web3.foundation/Polkadot/protocols/block-production/Babe) the block
production mechanism and [GRANDPA](https://research.web3.foundation/Polkadot/protocols/finality) the
finality mechanism, in addition, to fully grasp Polkadot’s hybrid consensus implementation. :::

There are elections in which nominators elect validators to an active validator set. A fixed number
of validators (297 on Polkadot and 1000 on Kusama) are subject to change via a runtime upgrade that
passes governance.

**Validator nomination, active set, and staking rewards**

A new active set of validators are elected each era. An era is 24 hours on Polkadot and 6 hours on
Kusama. Nominators are tasked with nominating up to 16 validators every election. The network then
chooses the highest staked validators into the active set, and for the whole era, these validators
will be tasked with creating blocks. At the end of the era, staking reward amounts are based on the
era points gained by validators. Era points are calculated based on payable actions performed by
validators, such as producing blocks, creating validity statements, etc.

**Phragmén method for elections and distribution of stake**

[The sequential Phragmén method](https://wiki.polkadot.network/docs/learn-phragmen) is a system that
is designed to elect multiple winners in an election. This is perfect for NPoS validator set
selection, and in addition to that, the same method is used to
[evenly distribute staking rewards](https://wiki.polkadot.network/docs/learn-phragmen#rationale-for-maintaining-an-even-distribution-of-stake)
across the validators in the active set. This ensures validators are paid equally, regardless of
their initial stake. There is a security benefit to this as well. The total stake of the active
validator set is distributed evenly across the validators, so the cost of taking control of the
active validator set is significantly increased by ensuring the least staked validator is not weaker
than the highest staked validator. NPoS is optimized to guarantee **proportional representation of
the minorities**, in addition to behaving as a reputation system, where nominators are incentivized
to elect **trusted** validators.

**Consensus mechanisms and security**

In the end, consensus mechanisms are trying to solve the same problem, that is, to maintain data
synchronicity across a decentralized network and maintain
[Byzantine Fault Tolerance (BFT)](https://decrypt.co/resources/byzantine-fault-tolerance-what-is-it-explained).
This directly impacts the network, meaning a network is only as secure as its consensus mechanism is
fault tolerant. In PoW, the security of a network can be quantified by the amount of
computation(work) that the miners are exerting. To successfully attack a PoW network, one has to
exercise more than 51% of the computation to change the data on the chain and have the majority of
the participants accept it. In PoS, the security of a network can be quantified by the amount of
stake. To attack a network, one has to own more than 51% of the network's total stake to control the
majority of the validators on the network and change data on the chain.

:::note This attack is relatively easy on a PoW network in its early life stages. Still, on a PoS
network, as long as the distribution of tokens from the beginning is decentralized, it will be much
more challenging to execute. And as networks mature, PoS has a higher ceiling of potential
decentralization as long as the tokenomics are sound. :::

At the current moment, there are a lot of exciting developments in PoS systems. This does not mean,
though, that other consensus mechanisms do not exist, and indeed, there are many different
approaches to consensus on blockchains. We are in the era of exploration, and seeing the competition
of networks with other approaches is very exciting.
