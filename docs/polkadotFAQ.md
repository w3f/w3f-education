---
id: polkadotFAQ
sidebar_position: 1
---

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
