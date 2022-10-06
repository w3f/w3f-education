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


