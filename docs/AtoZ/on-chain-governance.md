---
id: on-chain-governance
title: O for On-chain Governance
sidebar_position: 14
---

![O for On-chain Governance](assets/O.png)

To understand on-chain governance, we need to understand its origin and components, and how those two work together.

**Council**

The council is an on-chain origin whose purpose is to represent passive token holders. Though it is an influential authority group, candidates need to be elected into the council by token holders. So gaining favorability among the community is imperative to win a council seat. Council members have a few key responsibilities:

- Initiating sensible referenda
- Canceling uncontroversial, harmful, and malicious referenda
- Managing the treasury
- Electing members to the technical committee. 

There are 13 council seats on Polkadot, with space for up to 20 runners-up (those waiting to become council members). And there are 19 seats on Kusama, with room for up to 19 runners-up. The council rotates (councilors get re-elected) every 7 days on Polkadot and every 24 hrs on Kusama.

**Technical Committee**

The Technical Committee is a group of teams that have proven their technical knowledge by successfully implementing a Polkadot runtime. Teams can be added or removed by simple majority votes in the Council. 

The Technical Committee aims to safeguard against malicious referenda, implement bug fixes, reverse faulty runtime updates, or add new but battle-tested features. These changes through the technical committee are fast-tracked for voting and implementation.

**Proposals**

There can be two types of proposals on-chain. **Public proposals**, which are made by token holders. And **Council proposals** come in the form of external motions, either made by a Council member or a token holder. The council also has a unique internal motion, but these do not become referendums. Internal motions don’t require Democracy pallet functionality, as they handle matters that don’t require runtime changes, such as managing treasury proposals or electing technical committee members. Public proposals can be made by bonding the minimum token amount (currently 100 DOT on Polkadot). Once the proposal has been posted on-chain, token holders signal their support by _endorsing_ it. Endorsing requires them to bond the same token amount as the account that initially posted the proposal. Amount bonded is the critical metric when choosing which proposals become referendums. A proposal with three accounts bonding 10 DOTs each outweighs 29 accounts bonding 1 DOT each. The bonded tokens will be released back to the original accounts when the proposal becomes a referendum.

**Referenda**

Council proposals will become referendums when a simple majority of council members agree on the proposal. This is how the council can initiate legislation. Once passed, it becomes a public referendum. And if token holders created the proposal, those with the highest amount of bonded tokens backing them become public referendums. 

Each proposal type, public and council, have their on-chain queue. Proposals live in their respective queues, and every 28 days (on Polkadot), the most backed proposal will become referendums that can be voted on. The on-chain mechanism that chooses the following proposal to become referendums alternates between the public and council queue.

The timetable for referendums on Polkadot is every 28 days, which means that every 28 days, the most backed public proposal or the most recent council proposal becomes a referendum and will be up for a vote by the token holders. Unless there is an emergency referendum, there can only be one referendum for a vote at a time. By alternating queues every 28 days, assuming both queues are full of proposals, each respective queue will get their turn every 56 days. Active referenda can be viewed using chain explorers, such as [Polkadot-JS UI](http://polkadot.js.org) or [Polkassembly](https://polkadot.polkassembly.io/). 

**Voting**

Token holders can choose from multiple levels of support for a referendum, anywhere from **not bonding any tokens **, which reduces the weight of their votes, or by **bonding up passes **for a range of periods to increase their voting power. This creates an incentive to dissuade vote selling and also a way to allow smaller token holders to increase their voting power by locking up tokens for more than the minimum required amount. This is called conviction voting. Based on the voting outcome, the referendum will either pass or fail. If it passes, it will be enacted, meaning the runtime upgrade will be included in an upcoming block.

**Conviction Voting**

Simply put, conviction voting, aka voluntary locking, is a mechanism that allows token holders to increase their voting power on referenda by locking up their tokens securely on-chain. Built-in multipliers have a minimum of 0.1x (meaning no bond) and a maximum of 6x (bonded for 896 days). Remember, a single lock-up period is equal to the timetable of a referendum, which is 28 days.


<table>
  <tr>
   <td>Lock up period (amount in eras)
   </td>
   <td>Multiplier
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>0.1
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>16
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>32
   </td>
   <td>6
   </td>
  </tr>
</table>


And the equation used to calculate your voting power is:

`votes = tokens * conviction_multiplier`

If you don’t lock up your tokens, your vote will be worth 1/10th of a regular vote. If you lock up for one voting period by bonding the same amount as the originator of the proposal, your vote will be worth one vote, and if you lock up for 32 periods, your vote will be worth 6x. 

Conviction voting is there to help protect and keep a check and balance for smaller token holders by giving them the ability to increase their voting power.

**Adaptive Quorum Biasing (Turnout Biasing)**

We can think of this mechanism as a lever that changes the super-majority percentage needed for referenda to pass. Its importance lies in situations without clear majority backing or against a referendum. Voting turnout will cause this mechanism to fall into two categories,** positive turnout bias **and** negative turnout bias**, which control the **simple majority **variable.

All public proposals use what is called **positive turnout bias**, meaning that as the referendum turnout increases, the threshold of “aye” votes needed decreases. Positive turnout bias ensures that with lower turnout, only uncontroversial proposals can pass. For example, if the turnout is 25%, which is a low turnout, the super-majority needed is around 66%. As turnout increases, the required super-majority decreases. For example, if the turnout is 75%, the super-majority required will be 54%.

Council proposals that pass unanimously use **negative turnout bias**, meaning it is easier to pass with low turnout and requires the super-majority to deny it. 

**Canceling**

There are a few cancelation methods that can be utilized at different points of a proposal's lifespan:

1. If there is a unanimous agreement, the Technical Committee can cancel a proposal.
2. If the proposal has become a referendum, and there was a last-minute issue, such as a bug in the runtime code. The Council, through a 2/3rds majority vote, can cancel the referendum.

A canceled proposal’s deposit will be burned, but in the past, there have been proposals to reverse the burned tokens if it was controversial.

**The future (On-chain Governance 2.0)**

Though imperfect, the model has worked well for the past two years. Ever since the first proposals, thoughts have been floating around about how some weaknesses could be improved in the future. The community has signaled concern about the low voter turnout and the council and technical committee being a central form of authority.

In efforts to address these issues and decentralize the Polkadot and Kusama networks even further, efforts to dissolve the council and technical committee have been a focus of the development team at Parity Technologies. [The code that would make this possible has been merged into the Substrate code base](https://github.com/paritytech/substrate/pull/10195), but has yet to be tested on Kusama, audited, and approved by the community via runtime upgrade. The goal of governance 2.0 is to be a more agile, inclusive, secure, and decentralized design.

If you would like to learn more about on-chain governance, check out some of these resources:

* [Blog post about governance 1.0](https://polkadot.network/blog/polkadot-governance/)
* [Polkadot Wiki: Governance](https://wiki.polkadot.network/docs/learn-governance)


