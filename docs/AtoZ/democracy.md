---
id: democracy
title: D for Democracy
sidebar_position: 4
---

![D for Democracy](assets/D.png)

Democracy is a form of governance that society has been practicing in different forms for centuries. At its purest form, it is the decentralization of power. It first appeared in the 5th century BC derived from the Greek word meaning “rule of the people'' and 26 centuries later taking form in Polkadot, the application of Democracy can be thought of as “rule of the stakeholders”. It acts as the **governance** mechanism through which only agreed upon changes to the network by its stakeholders(participants) are able to pass. It is imperative for the network to function as a decentralized system and it also happens to be how the network handles code updates. When a new functionality is proposed, the network participants, that is, the DOT holders, vote on it. And if it passes the Democratic process, it will automatically call the `set_code` function, which will update the runtime code(which is a WebAssembly blob, which we will cover later this year with letter W) of the network. This is how Polkadot works around hard forks which most other blockchains need to use to update their code. 

So how does the system work? In simple terms the flow is as follows - **proposal of referenda > voting > enactment**, however, there are many details in the seams of each step that will be abstracted away for the sake of keeping this post simple. Please refer to the [wiki](https://wiki.polkadot.network/docs/maintain-guides-democracy) for a deeper dive into each part.

## Proposal of referenda

In Polkadot, the main application of Democracy comes in the form of a public referendum. Referendums are simple, inclusive, stake weighted voting mechanisms and they start with a proposal, which can be enacted in a few different ways: 
- Publicly submitted proposals
- Proposals submitted by the council, either through a majority or unanimously
- Proposals submitted as part of the enactment of a prior referendum
- Emergency proposals submitted by the Technical Committee and approved by the Council

## Voting on referendum proposals

Proposing requires you to bond some tokens, and once the proposal has been made, the tokens are locked until the proposal has been “tabled”. Meaning, that there was a voting period. Bonded tokens have a lock period, and in Polkadot one lock period is 28 days, and Kusama is 8 days. 
Once a proposal has been tabled, voting can begin. In reality, getting voting turnouts to be 100% is extremely rare, so we have developed Adaptive Quorum Biasing. In simple terms, this tool allows the network to intelligently adjust the amount of aye, or nay votes required to successfully pass or not pass a referendum based on the participant turnout.  

## Enactment

Every approved proposal will have a period of time before it is enacted, that is, when the set_code function is called. We call this the delayed enactment period, and it allows participants that do not agree with the new update to leave the network, and also those who voted for the proposal will have their bonded DOT locked until the upgrade is executed. 

## Council

Any DOT holder can become elected to the council. This a delegated group of stakeholders that are elected through a rotating approval vote, meaning that the seats in coun  cil are voted on one at a time. Like a few other parts of the network, the elections use the [sequential Phragmén method](https://wiki.polkadot.network/docs/learn-phragmen). Polkadot currently has 13 council seats and is planning to eventually have 24, while Kusama has 19. Candidates for council bond their DOT in order to be voted for, and their DOT is returned when they’re elected. Top runner-ups are persisted until the next election, meaning their bond stays locked till the next seat is up for election. Council terms are 7 days on Polkadot and 1 day on Kusama. Their role is to control the treasury, propose referenda, cancel dangerous and non-controversial referenda, as well as elect the technical committee. The existence of the council allows the network to have a trusted group that represents the absent participants in order to make sure Democracy is functioning as intended.

Check out [this](https://www.crowdcast.io/e/governance-on-polkadot--/register) crowdcast which dives deeper into the governance of Polkadot.