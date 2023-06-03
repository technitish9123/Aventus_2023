---
title: "(O)fac, the government really did it"
date: "2022-10-01"
ctaText: "3 min read"
image: "/assets/blog-assets/hashedout-3/hero-image.webp"
socials:
  { "twitter": "https://twitter.com", "linkedin": "https://linkedin.com" }
author:
  {
    "name": "bharat",
    "desg": "co-founder",
    "image": "/assets/images/team/bharat.png",
  }
---

On 8 August, The United States government, specifically the Office of Foreign Assets Control (OFAC), has instituted sanctions against Tornado Cash, for its role in enabling the laundering of money stolen by North Korean hackers (Lazarus group), and in several other hacks that have occured over the past few years.

This is a huge deal - OFAC sanctions are among the most stringent measures that the US uses as retaliatory measures. In their own words,

> The Office of Foreign Assets Control ("OFAC") of the US Department of the Treasury administers and enforces economic and trade sanctions based on US foreign policy and national security goals against targeted foreign countries and regimes, terrorists, international narcotics traffickers, those engaged in activities related to the proliferation of weapons of mass destruction, and other threats to the national security, foreign policy or economy of the United States.

Any US person or business is prohibited from engaging with any individuals (or entities) on the OFAC sanctions (SDN list). Doing so is a federal crime and carries massive fines and imprisonment of upto 30 years. In fact, the actual wording is broad - the US government prohibits any kind of ‘dealings’ with the entity, and anyone engaging with those entities.

Naturally, this caused a flurry of activity last evening in the world of crypto.

But let’s take a step back and talk more about **what is Tornado Cash, why sanction it, and what happens now**

## what is tornado cash

Tornado cash is a popular cryptocurrency ‘mixer’, similar to Blender, Wasabi or JoinMarket. Given cryptocurrency transactions are by nature public, it’s easy to establish a trail of sender / receiver addresses in any ordinary transactions.

Mixers offer a layer of privacy for anyone looking to keep their transactions private. You can send crypto to a ‘mixer’, like Tornado cash, who pool it along with a large number of other transactions, and send back the amount to a different address of your choice. This effectively decouples the sender and receiver, and there’s no way of knowing what is the source of the funds in your wallet.

For this service, the mixer typicaly takes a fee of 1-3%. So if you send 100 tokens from address A, you will receive ~98 tokens in address B. But importantly, there is no record that A and B ever directly transacted.

## why sanction them

You may see some of the obvious nefarious use cases of mixers. Since there is no way to trace the source of funds, mixers became a popular tool for laundering crypto assets gained through illicit activities such as hacks.

Tornado cash was one of the key mixers used by hackers over the last few months, including the hacks on the Ronin bridge, the Harmony bridge, and many more.

> We covered this in our earlier post on the Ronin hack as well (read here). Here is an example of several 100 Ether transactions done by the hacker to Tornado cash - https://etherscan.io/address/0xbc25d57412a04956cdd95af07825c5c1f34d29eb
>
> _Btw, the reason for 100 Eth batches is because this makes it harder to fuzzy match outgoing and incoming transactions, given 100 is the popular denomination for transfers into the mixer._

This sanction is a continuation of the Apr 2022 sanctions placed on the Lazarus group (who perpetrated the $625M Ronin bridge hack in March). The US government notes in a statement that the reason for sanctioning Tornado is its failure **_‘to impose effective controls designed to stop it from laundering funds for malicious cyber actors’._**

Now, there were always some soft bans on mixers. For example, several exchanges prevent wallets that have ‘tainted’ currency (i.e. any transactions with origins from mixers) to trade on their platform. For example, Binance prevents withdrawals to Wasabi, and other exchanges prevent deposits from ‘tainted’ wallets.

However, an OFAC sanction is a whole other level. This prevents any US individual or company from having **‘any dealings’** with the sanctioned individuals / businesses. The wording is purposely vague, and is known to be a broad definition (not limited to just transactions).

In fact, third-party transactions i.e. dealing with anyone, who in turn deals with a sanctioned party, is also considered to be a violation of sanctions (or can be interpreted as such).

So when the announcement dropped yesterday morning EST, this shook the crypto world. This was the US government employing one of the most potent tools at its disposal (short of its military) on the ecosystem, and resulted in a flurry of immediate activity.

## what happen(s) next

Well, as of writing this post, here’s all that has happened:

- The [tornado.cash](https://tornado.cash/) website is down - likely their hosting provider immediately shut off access
- Circle (the organization manging USD Coin or USDC), froze all assets in the sanctioned addresses of Tornado Cash. Same with Tether and wBTC. If anyone had assets from here deposited on Tornado, it’s now effectively frozen.
- Centralized exchanges will no longer accept deposits from any wallets with links to a ‘tainted’ source.
- Github **deleted** the accounts of anyone who had contributed to the Tornado cash project.
- Infura and Alchemy (two popular RPC node operators) are now blocking any calls to the Tornado ecosystem

These are some of the most immediate ones. The full scale of the reverberations from this will become more apparent in the next few days, especially as the scope of enforcement of the sanctions becomes clearer.

- _There is speculation that any wallets with Tornado-cash assets are tainted in entirety (which means that the entire asset base could be at risk)._
- _And given how broad OFAC sanctions are, there’s an argument to be made that any US-based node, who validates a ‘tainted’ wallet, is also in violation._

There is, however, a broader philosophical question to be asked here. Historically, governments (espeically the US govt.) has been quite neutral on the tools, claiming that there are good and bad uses, and the determining factor is mostly the actor. **_The United States stance on gun laws are a perfect analog for this argument._**

Tornado cash has gained notoreity due to its use in the recent hacks. But it has long also served as a popular tool for legitimiate individuals seeking privacy in their cryptocurrency transactions. (_Vitalik’s [tweet](https://twitter.com/VitalikButerin/status/1556925602233569280) on donating to Ukraine support is just one such example of a cause where TC plays a crucial role_

There is also merit to an argument that this is a fundamental violation of one’s right to privacy. However, we see both sides - the current model is quite porous. **There is a need to build a ‘mixer’ model that safeguards privacy, while preventing laundering.**

We could even take a page from some of the gun laws - a ‘timeout’ or ‘waiting period’ could be one such option, with a delay between sending / receiving tokens. This allows law enforcement to place to be placed on funds from wallets from that were the source of hacks.

While this all settles, let us know your thoughts on this move, the actions taken by entities (like Circle, Github, Alchemy, Infura), and if you have better ideas on the next generation of mixers. Until next time…
