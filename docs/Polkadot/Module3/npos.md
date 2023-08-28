---
id: npos
sidebar_position: 3
---


# Nominated Proof of Staking

Polkadot's validators are selected by the NPoS scheme. Nominated Proof-of-Stake
or NPoS is our adaptation of PoS where an unlimited amount of token holders can participate as
nominators, backing with their stake a large but limited set of validators. This paradigm simultaneously
achieves high levels of security and scalability, as well as an unprecedented level of
decentralization by ensuring a property known in voting theory as proportional justified representation.
Nominators, who are economically vested in the security of the system, act as watchdogs over the validators'
performance. Based on the nominators' expressed preferences over candidates, every era the system selects a
set of validators with stake backings that are as high. and as evenly distributed as possible. Nominators
are also economically disincentivized from concentrating their votes on too few validators, which helps
keep the system decentralised over time.

Furthermore, the election mechanism is highly adaptive to sudden changes, such as some validators
being kicked out after a slashing, as it automatically redistributes the nominators' backings across
the new set of validators, even when the votes themselves do not change.
The security goal of Polkadot is to be Byzantine fault tolerant when the participants are rational
(see Section 4.5 for more details on incentives and economics). We assume that with the properties
NPoS gives, the stakeholders elect a set of validators that has a more than 2/3 fraction of honest
members.

The elected validators are responsible for running the relay chain . While each
parachain's collators are responsible for generating parachain blocks, the validators
are divided into rotating subsets, one for each parachain, and need to attest to the validity of
parachain blocks before the headers of those blocks are included in the relay chain.
To achieve good scalability the number of validators in each of these subsets is small. Nonethe-
less, thanks to the NPoS guarantee that every validator is well backed, the availability and validity
scheme can ensure that any attack on the validity of Polkadot is very expensive in
expectation. In fact, the entirety of Polkadot's economic security backs every parachain. This is in
stark contrast to having, say, 100 independent blockchains with an equivalent sum total of stake,
where on average each blockchain is backed by 1/100-th of the stake, and thus only benefits from
1/100-th the level of security. We guarantee availability by using erasure coding of each parachain
block to make the validators collectively and robustly responsible for the availability of these blocks
without breaking scalability.

## Proof of Stake (PoS) Overview

<iframe width="560" height="315" src="https://www.youtube.com/embed/yKo6pvgbvD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Polkadot NPoS Algorithm Complexity

<iframe width="560" height="315" src="https://www.youtube.com/embed/HdKEdD_Vdck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Proof of Stake (PoS) vs Proof of Work (PoW)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6cdzD6lgOXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Phragmen

Our decentralisation objective translates into the classical notion of proportional representation in voting theory. That is, a committee should represent each minority in the
electorate proportional to their aggregate vote strength (in this case, their stake), with no minority
being under-represented. We highlight here that nominators { and their lists of trusted candidates
{ constitute a valuable gauge for the preferences of the general community, and that diverse pref-
erences and factions will naturally arise not only due to economical and security-related reasons,
but also political, geographical, etc. Such diversity of points of view is expected and welcome in a
decentralised community, and it is important to engage all minorities in decision-making processes
to ensure user satisfaction.

The goal of designing an electoral system that achieves proportional representation has been
present in the literature for a very long time. Of special note is the work of Scandinavian math-
ematicians Edvard Phragmén and Thorvald Thiele in the late nineteenth century. Very recently,
there has been considerable effort in the research community to formalise the notion of proportional
representation, and revisit the methods by Phragmén and Thiele and optimise them algorithmically. Our validator selection protocol is an adaptation of Phragmén's methods and is guaranteed
to observe the technical property of proportional justified representation (PJR)
