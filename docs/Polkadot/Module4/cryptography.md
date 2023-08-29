---
id: cryptography
---

# Cryptography

We assume that malicious parties generate their keys with an arbitrary algorithm while honest ones
always generate their keys securely.

In Polkadot, we necessarily distinguish among different permissions and functionalities with dif-
ferent keys and key types, respectively. We roughly categorise these into account keys with which
users interact and session keys that nodes manage without operator intervention beyond a
certificcation process.

## Account Keys

Account keys have an associated balance of which portions can be locked to play roles in staking,
resource rental, and governance, including waiting out a couple types of unlocking period. We allow
several locks of varying duration, both because these roles impose different restrictions, and for
multiple unlocking periods running concurrently. We encourage active participation in all these
roles, but they all require occasional signatures from accounts. At the same time, account keys have
better physical security when kept in incon- venient locations, like safety deposit boxes, which
makes signing arduous. We avoid this friction for users as follows. Accounts that lock funds for
staking are called stash accounts. All stash accounts register a certificate on-chain that delegates
all validator operation and nomination powers to some controller account, and also designates some
proxy key for governance votes. In this state, the controller and proxy accounts can sign for the
stash account in staking and governance functions respectively, but not transfer funds. At present,
we support both ed25519 and Schnorrkel/sr25519 for account keys. These are both Schnorr-like
signatures implemented using the Ed25519 curve, so both offer extremely similar security. We
recommend ed25519 keys for users who require Hardware Security Module (HSM) support or other
external key management solution, while Schnorrkel/sr25519 provides more blockchain-friendly
functionality like Hierarchical Deterministic Key Derivation (HDKD) and multi-signatures. In
particular, Schnorrkel/sr25519 uses the Ristretto implementation of Mike Hamburg's Decaf, which
provide the 2-torsion free points of the Ed25519 curve as a prime order group. Avoiding the cofactor
like this means Ristretto makes implementing more complex pro- tocols significantly safer. We employ
Blake2b for most conventional hashing in Polkadot, but Schnorrkel/sr25519 itself uses STROBE128,
which is based on Keccak-f(1600) and provides a hashing interface well suited to signatures and
non-interactive zero-knowledge proofs (NIZKs).

## Session Keys

Session keys each fill roughly one particular role in consensus or security. As a rule, session keys
gain authority only from a session certificate, signed by some controller key, that delegates
appropriate stake. At any time, the controller key can pause or revoke this session certificate
and/or issue re- placement with new session keys. All new session keys can be registered in advance,
and most must be, so validators can cleanly transition to new hardware by issuing session
certificates that only become valid after some future session. We suggest using pause mechanism for
emergency maintenance and using revocation if a session key might be compromised. We prefer if
session keys remain tied to one physical machine because doing so minimises the risk of accidental
equivocation. We ask validator operators to issue session certificates using an RPC protocol, not to
handle the session secret keys themselves. Almost all early proof-of-stake networks have a negligent
public key infrastructure that en- courages duplicating session secret keys across machines, and
thus reduces security and leads to pointless slashing. We impose no prior restrictions on the
cryptography employed by specific components or their associated session keys types
