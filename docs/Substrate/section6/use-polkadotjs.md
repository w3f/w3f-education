---
id: use-polkadotjs
title: Using Polkadot.js to explore your storage
sidebar_label: Using Polkadot.js to explore your storage
description: Use Polkadot.js to view events, errors, and storage relating to your node and pallet.
---

Although the `substrate-frontend-template` is quite convenient, in most development scenarios you would use **Polkadot.js**.

With your node still running, navigate to:

![](../assets/polkadotjs_overview.png)

This is a more real time experience compared to the frontend template.  Note the events on the right, which will soon be populated!

## Getting detailed storage

Navigate to the `Developer > Chain state` tab, and select the `connect` pallet from the dropdown.  Just as before, we can query the "Alice" name we registered before:

![](../assets/polkadotjs_state_query.png)


## Sending an extrinsic and viewing events: Polkadot.js edition

Navigate to the `Developer > Extrinsics` tab, and select the **BOB** account from the list of accounts. s
Select the `connect` pallet from the dropdown, and the `register` extrinsic from the dropdown to the right:

![](../assets/polkadotjs_extrinsic.png)

Fill out the details as per usual, and press **Submit transaction** in the bottom right.  Once you finish this, you should see two events emit in the `Network > Explorer` tab:

![](../assets/polkadotjs_events.png)
