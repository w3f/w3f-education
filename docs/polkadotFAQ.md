---
id: polkadotFAQ
sidebar_position: 1
---

# Polkadot FAQ

### Where can I find a list of academic and in-depth articles and information about Polkadot?

* Polkadot Wiki: https://wiki.polkadot.network/
* Web3 Research Papers: https://research.web3.foundation/en/latest/index.html
* Overview of Polkadot and its Design Considerations: https://arxiv.org/abs/2005.13456.
* Polkadot Specification: https://spec.polkadot.network/
* Analysis of Polkadot: Architecture, Internals, and Contradictions: https://arxiv.org/abs/2207.14128

### Are Polkadot's ECDSA SIgnatures BTC-compatible?

I saw the ECDSA signatures described as not BTC compatible. They are with a trivial conversion to include the flag byte, right?
flag referring to the 02/03 used for even/odd in compressed public keys, or... 27/28 used in ETH IIRC? Yet my main question is solely that there's nothing unexpected there (such as a different challenge algorithm)
Afaik the flag should be either 0/1 or 27/28. Additionally, the issue is (was?) this -> https://docs.rs/libsecp256k1/0.7.0/libsecp256k1/struct.Signature.html#method.parse_overflowing
the Host, for example, exposes two version of ext_crypto_secp256k1_ecdsa_recover, where version one handles those non-standard, overflowing ECDSA signatures and version 2 only handles standard signatures. This is unrelated to the presumed BTC incompatibility, but I guess polkadot-js also used non-standard signatures
but I"m not sure

It is marked "incompatible" in polkadot-js since if you take the same mnemonic, it won't create the same private/public keys like in BTC. (Substrate uses mnemonic -> entropy as part of the derivation step). This is unlike the ed25519 Ledger type that follows the BTC/ETH/everything-else derivation path.

### Can smartcontracts call each other across parachains?

Yes, although it's still in the early stages. See

https://moonbeam.network/announcements/xcm-to-evm-functionality-moonbase-alpha/ and https://moonbeam.network/blog/connected-contracts-axelar/

### Can Validators change their commission?

Yes. There have been several discussions in the past on changing this (e.g. https://polkadot.polkassembly.io/post/145 ), but right now they can change at any point (although there are some limitations on e.g. how low a validator can set its commission on Kusama - there is a 3% minimum, increasing above 10% invalidates it for the 1KV Programme, etc.).

It is generally considered to be up to the nominator to keep an eye on their validators, e.g. with SubVT https://github.com/helikon-labs/subvt-backend/.

### Can Validators steal your DOT?

I would recommend reading the Staking section of the Polkadot Wiki to understand how it works.

Validators cannot "steal" your bonded DOT. However, if you are actively nominating a validator who commits an offense, you - and they - will be slashed. This would mean that a percentage of your bonded DOT would be locked and eventually sent to the Treasury (there is a delay for the Council to overrule this, if for instance the slashing was due to a software bug).

This is one of the reasons that you need to look closely at which validators you are nominating. We have an entire guide for this on the Polkadot Wiki here: https://wiki.polkadot.network/docs/learn-nominator#what-to-take-into-consideration-when-nominating Of special note is the self-stake of the validator. Slashes are the same percentage regardless of stake. Thus, a validator who is nominating itself with 10'000 DOT and faces a 0.5% slash, would lose 50 DOT themselves, along with 0.5% of whatever you are nominating them with.

Note that slashes are relatively rare, and almost all slashes are a very small percentage of bonded stake, unless many validators are taking part in the offense.

### Cannot see something on the Polkadot-JS UI

Zoom out or increase the size of the window. If the window is too small, not everything will be displayed.

### Can the number of validators on Polkadot be increased?

This is up to governance to decide. Anyone can make a proposal to change the ideal number of validators ( https://wiki.polkadot.network/docs/maintain-guides-democracy#proposing-an-action ), you can do it right now - the relevant extrinsic is staking.setValidatorCount.

However, the last time this was proposed, it was rejected by DOT holders. See https://polkadot.polkassembly.io/referendum/29

> On the polkadot website is stated that it's planned to have 10 validators per parachain, the auction number 30 is few weeks away so the current 297 validators is not enough according to the website. Will there be an increase of the active validator number before the 30th parachain is onboarded?

Theoretically you could validate with a single validator per parachain (although that's a bad idea for a variety of reasons of security / reliability reasons). The plan is to have 10 validators per parachain but that does not mean it's a necessity.

### How to check an account's delegation on-chain?

You have to query democracy.votingOf now, which returns a JSON with both votes and delegations. For an example you can check out HHt1d2Sf7aERcm1FMG7scnJCZH4M6bazYSKc1j5zfZmcDzG, which I just set to delegate to me. Querying for votingOf includes the following:

```
Delegating: {
    balance: 200,000,000,000
    target: JFArxqV6rqPSwBok3zQDnj5jL6vwsZQDwYXXqb1cFygnYVt
    conviction: None
    delegations: {
      votes: 0
      capital: 0
    }
```

### How to create 24-word seed phrases for a Polkadot account?

You can recover a 24 word seed phrase on Polkadot-JS UI or extension, but not create one. That will always be 12 words.

If the user REALLY wants to create a 24-word seed phrase, they can use `subkey generate --words 24`

```
% subkey generate --words 24
Secret phrase:       consider saddle monitor boost ostrich agent salon slab either visual food nerve tag help potato embark victory three borrow vivid have sauce soup list
  Secret seed:       0x9410330c46a7310f19e319f9701d42feae9fd19a453196aec40e9257a4f46f67
  Public key (hex):  0x88e83f4869d6ac593ccbae7e64714c513ddae08cfed007ff9d5e6b5c20892059
  Account ID:        0x88e83f4869d6ac593ccbae7e64714c513ddae08cfed007ff9d5e6b5c20892059
  Public key (SS58): 5FADMuhPk5puytZutHsztX6mfkiW2DGHUcsjumtniqoYCJca
  SS58 Address:      5FADMuhPk5puytZutHsztX6mfkiW2DGHUcsjumtniqoYCJca
```


### What is the difference between the active era and current era?

Active era = actual "current era"
Current era = currently planned era that we know the validator set for
My understanding (I have always found this confusing) is that current_era = active_era until the election of validators, then there is one session where current_era = active_era + 1
Ahh better description here:

https://github.com/paritytech/substrate/blob/5527263978a763bafc78d60955c662c20f465d18/frame/staking/src/pallet/mod.rs#L307

The current era = This is the latest planned era, depending on how the Session pallet queues the validator set, it might be active or not.

The active era = The era being currently rewarded. Validator set of this era must be equal to [SessionInterface::validators].

### Does bonding additional tokens rebag the nominator automatically?

Any change in the staked account balance will trigger rebagging

### How to figure out decimals for tokens?

You can verify this by doing an RPC call for system.properties and look at tokenDecimals key.

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestend-rpc.polkadot.io#/rpc

Westend:

```
system.properties: ChainProperties
{
  ss58Format: 42
  tokenDecimals: [
    12
  ]
  tokenSymbol: [
    WND
  ]
}
```

Polkadot:

```
 system.properties: ChainProperties
{
  ss58Format: 0
  tokenDecimals: [
    10
  ]
  tokenSymbol: [
    DOT
  ]
}
```

### How to find fast tracked proposals?

You are looking for calls to democracy.fast_track. It is a bit confusing, since most explorers have trouble finding extrinsics inside of batch calls, and batch calls are the normal way to fast-track proposals.

But what you CAN do is look for calls to technicalCommittee.close, which close and execute a decision by the Technical Committee. You can do that on Subscan here: https://polkadot.subscan.io/extrinsic?address=&module=technicalcommittee&call=close&result=all&signedChecked=all&startDate=&endDate=&startBlock=&timeType=date&version=9270&endBlock=

But now you want to see what those fast track's actually did. The easiest way is to click on the extrinsic and see what events occurred. For example, this was the most recent: https://polkadot.subscan.io/extrinsic/12116335-2

Looking at the events, you can see that after the close, an approval occurred, and Referendum 75 ( https://polkadot.subscan.io/referenda/75 ) started. Thus, Referendum 75 was first-tracked. Click on the link to Referendum 75 and you can see the parameters involved in the fast-track.

### Is it possible to have free transactions on Substrate based chains?

Before I answer this, it's important to realize that all of these decisions are in the hands of the blockchain developer using Substrate. Substrate itself doesn't care if you make a chain which is vulnerable to spamming. (Not saying you don't know this, but for the sake of everyone reading this...)

So... if you want to create a chain, you will need some sort of mechanism to prevent people from spamming the network and not allowing authorized transactions. There are a variety of ways to do this; simply having fees per transaction is the simplest and most straightforward. But there are other ways:

As you mentioned, an identity layer. If you trust the identity layer, you could provide a
limit of n transactions per day per identity or something.

Really, any system where Sybil protection is assumed to be done by some external entity off-chain could allow feeless tx's on-chain. But remember you are trusting that external identity!

Ignoring identity services, "x transactions per user per day" wouldn't help against a determined adversary, as it simple for them to make new accounts.

A global limiter like you mention would prevent most system-wide problems (i.e. chain would continue to produce blocks) but would likely drown out actual user activity with spam.

You could use some sort on-chain process to identity people or vote that accounts can/cannot have feeless transactions. This could be done manually or via some sort of automated process (but the latter would probably be gamed after a while).

A bond which can be slashed, e.g., you bond 100 FOO tokens, and if you are found guilty of spamming the network, you lose the FOO tokens. You can always create a new account and start spamming again, of course, but it would cost you 100 FOO tokens each time.

You could require an NFT (or one of a limited number of fungible tokens) to produce transactions.

You could have some other way of limiting transactions, e.g. by including a proof of work per transaction. I believe this is similar to how Nano works nowadays, after they experienced spamming problems.

These are just a few examples of what's possible with Substrate, btw. There are lots of other possibilities.

### What to do if I get txn version unsupported error on Ledger?

Have you followed the steps on the Knowledge Base for when this error occurs?

Make sure your Ledger's firmware is updated

Update your Ledger Live app to the latest version

Update your Polkadot or Kusama app to the latest version - depending on which network you are experiencing this error.

### How do I figure out what a governance proposal is doing?

There is no text stored on-chain to describe what change the proposal is making. Proposals change either the parameters of the chain or the runtime code itself directly. See https://wiki.polkadot.network/docs/learn-governance#referenda

Text-based descriptions are generally put on Polkassembly, e.g. https://kusama.polkassembly.io/referendum/218, but the actual change is done automatically if it passed (see the "arguments" section for what the proposal is actually doing).

During the proposal, only the hash of the proposal is submitted; the actual change should be submitted later. See https://wiki.polkadot.network/docs/maintain-guides-democracy#submitting-a-preimage

(these links are obviously for Polkadot but the general idea is the same if you are using the democracy pallet no matter which chain you are using)

### How do I know how much staking rewards I will get in the future?

It's impossible to know exactly in advance. Staking rewards per era are based on era points, which are essentially impossible to predict ahead of time. The rate of inflationand staking rewards are also variable based on the staking rate (i.e., what percentage of total issuance of all DOT is staked), which will obviously vary based on people's opinions of if they should stake or not.

The Polkadot-JS App Targets page provides estimates, but these are just that, estimates.

If you want to know how much you have received in the past, you can view your actual staking rewards using most block explorers (e.g. Subscan) and calculate it. Here are the rewards of a random example account (whatever the last one to receive a reward was): https://polkadot.subscan.io/account/13s9RrQSFbnp2TneY7nkdLmGc3ijBw12YQct8pc8km36Z9hg?tab=reward

Note that there is no such thing as "staking on Ledger". You can use Ledger to stake on-chain, but this does not change the fact that Ledger is just a tool to access the on-chain staking mechanism.

### How do parachains work?

At a really high level, when a parachain first connects to the relay chain, it submits its genesis block and its runtime (defining the state transition function). At this point, the validators on the chain (via the Wasm and genesis stored on the chain itself) can, given a set of transactions, verify if it is valid or not, by running them against the Wasm and the known state. Collators on the parachain send collations of transactions to a randomly selected subset of validators, who verify that the state transition is valid (since they know both the previous state and the state transition function (STF), defined in the Wasm blob containing the runtime).

Other validators can verify that this is correct and slash an offending validator who tries to cheat by saying an invalid state transition is valid, since all of them have access to the current state as well as the STF. A block on a parachain is not considered finalized until its equivalent state transition has been validated on the relay chain. Thus, a parachain depends on the security of the relay chain.

Of course this elides a LOT of detail and wrinkles in operation. If you want to dig in deeper, I really recommend reading the Wiki page on the topic, or if you want to really dive in, reading the chapter on AnV (availability and validity) in the Polkadot Specification, put together by our great Spec Team.

How does XCM work?

XCM allows different chains to have a common way of interacting with each other using an "Esperanto" (common language) instead of every chain having to know exactly how other chains operate.

This is obviously a very high-level description! For more detail, I recommend reading Gav's description in the Medium post here: https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392 or if you really want to dig in, you can review the code here: https://github.com/paritytech/polkadot/tree/59aa955576e963942c60e3ae8f8316444b66cafb/xcm

Collators?

Collators produce a collation (essentially, a candidate collection of transactions) on the parachain, which are sent to a randomly chosen subset of validators on the relay chain. The validators then verify that the collators provided a valid collation. It is a lot of work (ask anyone running a validator if they are seeing higher loads as the number of parachains increase). See https://spec.polkadot.network/#sect-collations

Smart contract logic is _part of_ the state transition; calls to smart contracts change the state of the chain. Any necessary smart contract logic is part of the runtime, which is known to the validators. The validators can then run the "candidate block" against this Wasm blob to ensure that it is valid. See https://spec.polkadot.network/#sect-parachain-runtime


### How to find the unbonding duration on-chain?

You can check by querying the constant ( https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestend-rpc.polkadot.io#/chainstate/constants ) staking.bondingDuration . This will tell you the number of eras ( = 2 on Westend). An era on Westend is 6 hours (same as Kusama).

### How to donate to Polkadot Treasury?

It's a normal account, you can just send them.

Example: https://polkadot.subscan.io/extrinsic/11061684-2
It also looks like somebody sent > 3500 DOT to the Treasury directly from an exchange wallet

### How to find minimum active nomination over time?

Not sure if there is a site with that, but you can always look it up by querying chain state:

Go to https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate

Enter the block hash you want to check what it was

Query and see the result in Plancks

You could write a JavaScript script ( https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/js ) to get this over time.

I'd have to look up the details, but essentially, there was no limit at first. About a year ago, a minimum 40 DOT nomination was initiated, then 80, then 120, then 160 in February. With some major staking mechanism changes, the minimum to nominate over the last few months has been 10 DOT, albeit with a dynamic rewards minimum.

Nomination pools (now live on Kusama) should reduce this dramatically, down to 1 DOT or so.

### How to see all the accounts on the network?

You could use Subsquid for this. Thanks to Lucas, our erstwhile Grants intern, for finding this: https://app.subsquid.io/aquarium/polkadot-balances

It's SQL - just change the "limit" variable to the number you want (note that it will take a while to run if you have a very large number here). The result will be in JSON, and amounts are shown in Plancks (like satoshis in Bitcoin, one DOT = 10_000_000_000 Plancks).

### How to see the bags containing nominators?

Click on the "Bags" tab on that page, or go directly there with the URL - https://polkadot.js.org/apps/#/staking/bags

### How to verify multisig?

if you ask them the addresses they used to make the account, you can make the multisig yourself and verify it's the same address
it would be essentially impossible for them to generate a single-sig with the same address

### Steps to do that:

1. Add addresses to Address Book - https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.api.onfinality.io%2Fpublic-ws#/addresses
2. Go to Accounts and click "+ Multisig"
3. Add the addresses and the threshold
4. Give it a name
5. Click "Create"

You will then have a new multisig in your Accounts tab (which you can't sign transactions with, but you can click the dots icon and get the address and verify it's what they say)

### How is ideal staking rate calculated?

Depends on what you mean by a "good thing". The ideal rate was estimated as the ideal rate for the network to have locked in the staking mechanism for security. However, this also means less rewards for individual nominators, and the estimate is just that - an estimate. It could be that the network would operate optimally with less or more than the "ideal rate".

The ideal staking rate should vary based on the number of parachains (since some DOT/KSM will be locked for securing parachain slots), down to a minimum of 50%. Kusama reduces the ideal staking rate by 0.5 percentage points per parachain, and has many more parachains than Polkadot. This algorithm for modifying the ideal staking rate based on the number of parachains was not implemented on Polkadot; I'm not sure of the rationale behind that. Perhaps it ensures that there is much more locked to ensure a higher security level of Polkadot.

You can see more information here: https://wiki.polkadot.network/docs/learn-staking#inflation

### Is Polkadot Decentralized?

How will the Polkadot eco-system and its para-chains be able to maintain its integrity as a decentralized and safe system that is effectively able to bypass and avoid over reaching regulatory scrutiny?

The Polkadot Network, and the DOT token which secures it, is fully decentralized. The Web3 Foundation took the hard road and worked with regulators throughout its launch to make sure that it was (and we believe still is) regulatory compliant in all jurisdictions.

The parachains themselves are responsible for their own regulatory compliance, including communications and disclosures, because they are not controlled by Polkadot, but the Web3 Foundation is always here to help on the educational front if have questions or if otherwise needed.

Is there any possibility that regulators and nation-states could force layer 0, layer 1 and layer 2 censorship within the Polkadot ecosystem and force (under threat of incarceration) developers to comply with their tyrannical oversight?

There's always a possibility of something like this, as we have already seen in various ways recently.

Can Polkadot and its para-chains truly become decoupled from the fiat ecosystem and be able to maintain the 5 pillars of crypto freedom (open, public, borderless, neutral, and censorship resistant)?

This is certainly our goal here at Web3 Foundation! We have a sign here at our headquarters that states our goal:

"We are building trustless, open-source infrastructure that empowers users to resist arbitrary authority and take back control of their sovereignty - a fully decentralized web."

That is certainly what I think, and hope, we and the rest of the ecosystem are building. =)

### How to listen to account balance change?

https://polkadot.js.org/docs/api/examples/promise/listen-to-balance-change ?

I prefer using py-substrate so I can use Python instead of JavaScript, personally. There is an example of getting an account's information here: https://github.com/polkascan/py-substrate-interface#storage-queries


### Why am I not receiving staking rewards?

If Polkadot staking were down, we'd be having real troubles, since we'd have no way of putting validators in the active set and thus unable to produce blocks.

I would check your accounts on Polkadot-JS App and if you are not getting rewards, see https://support.polkadot.network/support/solutions/articles/65000170805-why-am-i-not-getting-staking-rewards-


### Why is Polkadot-JS UI not loading?

Perhaps try changing endpoints, browser, etc.

Or try using the IPFS version - https://cloudflare-ipfs.com/ipns/dotapps.io/#/staking

### How to query block information without subscan?

You can query block information from a specific block using Network->Block Details (e.g.  https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/explorer/query/14000000 ) and then look at the extrinsics for the block

### Can the crowdloaned DOT be returned before the parachain slot lease expires?

Returning the DOT early is not possible going through the chain. Any DOT sent via crowdloan.contribute extrinsic will be locked up until the end of the lease (assuming they win a lease, of course).

DOT / KSM will definitely be returned.

To clarify, it's not just "customary", it's set by the rules of the chain. Anyone who is setting up a crowdloan can indicate the ending point, and after this ending point, anyone can refund the KSM to contributors to unsuccessful crowdloans (although this is usually done by the team that is running the crowdloan, technically anyone can do it).

Kusama auctions (mostly just for scheduling reasons, but also to give engineering teams time to see how the network is reacting before starting a new batch of auctions) have a bit of a gap between groups. Many crowdloans just set the ending point to be the end of the group, when really they should set it a bit earlier if they want to be perfectly optimized.

### How can I see account balance over time?

Go to https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/js

Enter the blocks you want to check.

Enter the following JavaScript code and execute it. Note that the results may not be in chronological order, you can copy/paste and sort them in a text editor or the Unix sort command to do so.

```
blocks = [2105, 1205309, 1205349];

const user = '1WG3jyNqniQMRZGQUc7QD2kVLT8hkRPGMSqAb5XYQM1UDxN';

blocks.forEach(calc);

async function calc(blockNum){
  const blockHash = await api.rpc.chain.getBlockHash(blockNum);
  const { data: { free: prev } } = await api.query.system.account.at(blockHash, user);
  console.log('Block', blockNum, ': user had a balance of', prev.toHuman());
}
```

### How to see the extrinsics supported by Ledger?

If you want to use Ledger, you will need the XL version of the app, as the light version does not support the necessary extrinsics. See https://github.com/zondax/ledger-polkadot#voterlist


### Staking rewards collector gets API rate limit exceeded error?

Every time I try to run the staking-rewards-collector, I get an error from the Subscan API that the API rate limit is exceeded. Anyone know how I can slow down the query speed or something to get around this?

Solution: enter your own Subscan API key as a new JSON file element "subscan_apikey" in the config file.




