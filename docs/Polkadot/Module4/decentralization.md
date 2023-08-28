---
id: decentralization

---

# Decentralization of Network

Of course, in a real-world decentralised system the networking part also must be decentralised -
it's no good if all communication passes through a few central servers, even if the high-level protocol
running on top of it is decentralised with respect to its entities. As a concrete example: in certain
security models, including the traditional Byzantine fault-tolerant setting, nodes are modelled as
possibly malicious but no consideration is given to malicious edges. A security requirement like
> 1=3 of nodes are honest in the model, in fact translates to > 1=3 of nodes are honest and can
all communicate perfectly reliably with each other all the time in reality. Conversely, if an edge
is controlled by a malicious ISP in reality, it is the corresponding node(s) that must be treated as
malicious in any analysis under the model. More significantly, if the underlying communications
network is centralised, this can give the central parties the ability to corrupt > 1=3 of nodes within
the model thereby breaking its security assumptions, even if they don't actually have arbitrary
execution rights on that many nodes.
In this section we outline and enumerate the communication primitives that we require in
Polkadot, and sketch a high-level design on how we achieve these in a decentralised way, with the
specifics to be refined as we move forward with a production system.


## Why Decentralize?

<iframe width="560" height="315" src="https://www.youtube.com/embed/-xOK970mS14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Polkadot Decentralization Efforts

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zub9TCWQbf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
