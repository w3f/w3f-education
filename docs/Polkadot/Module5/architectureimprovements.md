---
id: architectureimprovements
---

# Polkadot Architecture Improvements

## XCMP

<iframe width="560" height="315" src="https://www.youtube.com/embed/S8RPIXLwvFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Asynchronous Backing (Contextual Execution)

<iframe width="560" height="315" src="https://www.youtube.com/embed/7i_v7CZmra4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Parathreads

<iframe width="560" height="315" src="https://www.youtube.com/embed/fjRMw3f5gGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Hierarchy of Relay Chains

<iframe width="560" height="315" src="https://www.youtube.com/embed/rifdw-TIlJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## SPREE

If the token transfer is carried out in conjunction with SPREE modules, then
that ensures that so long as the parachains execute correctly, tokens can only be created and
destroyed in an agreed upon way. In turn the correct execution of the chains code is guaranteed
by the availability and validity scheme. SPREE ensures that shared code needed for the token
transfer logic is correct as well. Even though chains can change their own code, they will not
be able to change the code of SPREE modules. Instead the code of SPREE modules is stored
centrally and the execution of that code and its storage will be sandboxed from the rest of the
state transition. This ensures that this token transfer message is interpreted correctly and obtains
the guarantees about tokens we want.