---
title: "MPC wallets, the future of digital asset custody"
date: "2022-10-01"
ctaText: "3 min read"
image: "/assets/blog-assets/hashedout-2/hero-image.webp"
socials:
  { "twitter": "https://twitter.com", "linkedin": "https://linkedin.com" }
author:
  {
    "name": "bharat",
    "desg": "co-founder",
    "image": "/assets/images/team/bharat.png",
  }
---

### intro - the problem with “not your keys, not your coins”

Ownership in crypto is entirely determined by who owns the private key corresponding to your wallet.

Hence giving rise to the popular agage - **“Not your keys, not your coins”.**

As long as you have the private key corresponding to your address, no entity in the world can restrict you from accessing those funds.

However, as always, there’s a catch!

There’s a **glaring user experience problem with managing private keys via fully self-custodial wallets** (e.g. Metamask, Phantom, etc.) today:

1. There’s an expectation that users will safely store their private keys. The average user today barely remembers passwords. Remembering a 64-character hex private key is out of the question.
2. Users tend to store these private keys (or rather seed phrases, which recover private keys) in compromisable locations like digital note apps
3. If a user loses access to the private key, there’s no way to recover it. No customer care, no legal recourse. _It is estimated that $100B+ in Bitcoin (alone) is locked away forever due to the loss of the private keys_
4. Users are also far more comfortable with the authentication methods used today, like a password + OTP combination.

And thus, we’ve now arrived at the core problem statement - how can we **ensure digital custody of a user’s assets with sufficient decentralization, while eliminating the friction** in storing and managing private keys

If you are interested in more deepdives like this, please consider subscribing

**Enter MPC wallets -** MPC wallets are wallets that secure your private keys using a technology called multi-party computation.

And while this is not the only solution to the above problem, MPC wallets are increasingly becoming a popular option because it maintains sufficient self-custody rights of the user, while improving the experience by using familiar authentication methods

Wallets such as ZenGo, digital asset managers like Fireblocks, and the latest new DeFi app teased by CoinDCX (Okto), all use MPC technology to secure users’ private keys

So, we now attempt to answer three core questions:

- What is multi-party computation and how does it work?
- How will the user experience improve with an MPC wallet?
- Is it fully self-custodial? What are the risks assoicated with it?

### what is multi-party computation?

Multi-party computation is a cryptographic method that allows multiple parties to securely band together and perform an operation, without any party being priviliged to the information of the others

\*Here’s an analogy - Imagine a SAFE that requires a numerical passcode to unlock. You and your friend store some valuables, and are each given a number (different) that when multiplied together unlocks the safe. Both of you can not independelty open the SAFE, but if you both enter your passcodes, the SAFE can be unlocked, **without either of you knowing what is the passcode of the other person\***

This is the essence of multi-party computation, but with far more complex mathematical operations than basic multiplication.

In the case of crypto, MPC wallets split (or shard )the private key, such that a part of it is stored in the user’s device, and another is stored in a server operated by the wallet _(excuse some simplication here please)._

Whenever the user wants to make a transaction, **the user’s device and the wallet server independently generate a mathematical computation using their part of the secret**. Which is then combined to execute the transaction.

_The actual math behind this is incredibly complex. If you’d like to attempt it, here’s a link - [https://eprint.iacr.org/2020/492.pdf](https://eprint.iacr.org/2020/492.pdf)_

### how will the user experience improve?

MPC wallets ensure that your funds are still self-custodial (i.e. no other entity can transact your funds without your consent), while improving the user experience dramatically, especially on two key fronts:

1. In the event of a loss of the user’s device, or the need to transfer to another wallet, the user no longer needs to remember complex seed phrases.MPC wallets like ZenGo have the capability to transfer access to your new device by verifying other attributes like your biometrics, or passwords, or a recovery email that was setup by you at the time of initial setup - _a secure, and familiar experience for the users_
2. Even in the event that a user’s device is compromised, the attacker cannot do anything with the stolen key, since they are missing the other part(s), which are stored on the wallet provider’s server

Naturally, this is a huge improvement on the status quo. So what’s stopping this technology to be the default method?

### what are the risks to using MPC wallets?

Unfortunately, MPC wallets in their current form are not entirely self-custodial. MPC-wallets are self-custodial in the sense that no transaction can be authorized without your permission (unlike centralized wallets provided by exchanges)

However, **the wallet entity can theoretically deny you the ability to perform a transaction, by not choosing to perform the computation required** at their end.

This could be deliberate at their end (due to malice, compliance to a govt order, etc.) or could be because they are offline OR because they are no longer a running entity.

In any event, your ability to access and transfer your funds becomes compromised. Some wallet providers like ZenGo have extensively detailed an escrow process to unlock your keys in the event that they are no longer a going-concern.

But the other concerns still remain. This remains one of the major systemic risks to MPC wallets, and one of the key reasons why hardcore crypto owners are averse to moving to them.

That being said, in my opinion, the benefits clearly outweigh the risks for the average user. The risk of loss of private keys, or phishing in the case of self-custodial wallets is much higher, with a poorer user experience. We beleive it’s only a matter of time. MPC wallets are likely to emerge as a key bridging technology that helps web3 cross over from the early adopter to the early majority phase. Please do comment with your thoughts.
