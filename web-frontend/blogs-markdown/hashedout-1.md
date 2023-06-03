---
title: "why y^2 = x3 + 7, might soon be one of the most important equations in your life"
date: "2022-10-01"
ctaText: "3 min read"
image: "/assets/blog-assets/hashedout-1/hero-image.webp"
socials:
  { "twitter": "https://twitter.com", "linkedin": "https://linkedin.com" }
author:
  {
    "name": "bharat",
    "desg": "co-founder",
    "image": "/assets/images/team/bharat.png",
  }
---

Encryption is prevalent all around us, in almost every interaction we have online, abstracted away so it doesn’t impact our experience.

Digital signatures too are increasingly becoming important as a proof of ownership. (The word crypto is also literally derived from the word cryptography.)

And it’s fascinating to understand the math behind it. Let’s dive into a little more detail on the inner workings of cryptography! _There is some complex math involved here (which I’ve sequestered in a separate section for more interested readers. I strongly recommend it though)_

## a brief walk through time…

As in all things, history is often a great place to begin a story.

When man began communicating asynchronously, and/or over longer distances, there was a need to obfuscate the information so that only information remains secret only to the sender and receiver.

In historical times, if you and a friend were in two different towns, and you wanted to communicate a message that was to remain secret, there really were only two broad methods:

1. You handed the message over to a courier in a locked box, the method of opening being known to only to you and your friend. The box would typically also have a self-destruct mechanism, preventing a forced extraction. \*You would recall this from the plot of ‘The Da Vinci code’, where the secret of the holy grail is hidden in a cryptex**\*OR**
2. You encrypt the message, turning plain text into jumbled ‘cipher-text’, which can be decrypted at the receiver’s end. So even if a ‘man in the middle’ finds the jumbled text, they will not be able to decode it unless they are able to crack the algorithm

Method 2 is the basis of all encryption today. What has evolved is the ciphers and the algorithms, each generation being more secure and harder to crack with the incredible amounts of compute available today.

## encryption & the role of keys

We transmit and exchange copious amounts of data on a daily basis. Our devices are constantly transmitting to our wifi routers, servers on the internet, neighbouring devices, etc.

There are obvious security risks to leaving this data unencrypted, so every connection is typically encrypted using a cipher algorithm and keys (**which are nothing but really large secret numbers**).

```
The mechanics of transformation in itself is something we will skip for today, but to abstract it, it mostly involves rearranging bits of data as mandated by the algorithm.

Here's a good explanation if you would like to read more of how the Advanced Encryption Standard or Rjindael algorithm works- https://www.simplilearn.com/tutorials/cryptography-tutorial/aes-encryption
```

With the key, it is trivial to decrypt the information. And impossible without it.

Therefore, the game entirely is to securely generate keys that are large enough that it is impossible to brute-force, and exchange them in a manner that it is difficult for a malicious actor to get hold of the keys. This brings us to two broad types of encryption (symmetric, and asymmetric encryption)

## symmetric and asymmetric encryption

Symmetric encryption is the act of encrypting and decrypting the information with the same symmetric key

![https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F35bf001d-cecf-4fa1-a28b-6e6af3b39359_690x414.png](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F35bf001d-cecf-4fa1-a28b-6e6af3b39359_690x414.png)

Popular algorithms include the AES family, ChaChaPoly20, Serpent, Camelia, etc. Typically in this method, both parties typically use a shared secret (like a password) to generate a large number (symmetric key), which is then used to eencrypt the data.

_AES is some of the strongest encryption algorithms known to us, and is also proven quantum resistant. Incidentally, it is also a highly performant encryption method (in terms of time and compute required). Consequently, it is the backbone to a lot of encryption in our lives today_.

**There is one key point of the failure though.** Which is that there needs to be a pre-existing shared secret, or you need to transmit the key separately to the receiver (leading to a potential point of failure)

**Asymmetric key encryption plugs that hole.**

In asymmetric key encryption, encryption and decryption are done by two different keys, which form a key pair.

This brings us to the domain of public key cryptography. Public key cryptography is a form of asymmetric encryption, where a recipient generates a private / public key pair. The recipient’s public key is broadcasted to senders, who use it to encrypt a message. The message can then be decrypted only by the private key, which is securely held by the recipient.

This is also commonly referred to as end-to-end encryption, with no intermediary party (including the legitimate message infrastructure) having the ability to decrypt the message.

_Whatsapp, Telegram, Signal, all follow a more complex version of this known as the ‘Signal protocol’ for messaging. But the core of it is private / public key pair encryption, where private keys are stored in your devices, and not accessible, even to the senders_

_One quick point to note - Typically good encryption algorithms are mixed for secure and performant systems. Very often, the public-private key pair is used to encrypt a symmetric key, which is actually used to encrypt the data._

Here’s a very simplified version of one example of how a pub-priv key pair can be used for cryptography:

- You generate a private key (privKey), and derive the public key from it (pubKey). The process of derivation is a type of one-directional multiplication i.e. there’s no division that can easily reverse it.So pubKey = privKey x N
- Now, the sender takes your public key, multiplies with their private key, and generates an encryption keyencryptKey = privKey (sender) x pubKey (receiver)Using the above equation, pubKey (receiver) = privKey (receiver) x NTherefore, encryptKey = privKey(sender) x privKey(receiver) x N
- The receiver now uses their privKey and the pubKey of the sender, to generate the same encryptKeyencryptKey = privKey (receiver) x pubKey (sender) = privKey (receiver) x pubKey (sender) x N
- Both parties now have the same encryptKey, and nobody without either private key can decrypt it

_How private / public keys work is simply fascinating, and we’ve covered a mathemtical overview of one popular method called the **Eliptic Curve Cryptography** in the last section._

## is this also important in the world of crypto?

Yes. The application of public/private key cryptography goes beyond just encryption. Public-private key pairs are also used for digital signatures, a cornerstone of the world of crypto.

The concept of ‘ownership’ in the Bitcoin or Ethereum translates simply the ownership of a private key. The address is typically a derivative of that private key.

The act of ‘sending’ tokens to an address also translates to the sender using their private key to ‘sign’ the transaction. It is trivial to recover the sender’s public address using that the signature, but generating that signature is nearly impossible without the private key.

_doing so requires you to solve the [Elliptic Curve Discrete Logarithm Problem](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography#Rationale). Check it out :)_

So, let’s talk more about what a wallet really is. And let’s stick to Bitcoin or Ethereum, because their wallet system is very similar

- The process of generation a wallet is simply choosing a 256 bit integer. There are 2 ^ 256 possibilities of integers. This is a number on a mind-boggling scale. [Watch this video to begin to fathom the size](https://youtu.be/S9JGmA5_unY?t=35)
- Both chains use a curve called sep256k1, which is an elliptic curve by the equation y = x^3 + 7. Looks a bit like this

![https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd83935ce-cc68-43d4-a1ad-3ad9dde22900_580x581.png](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd83935ce-cc68-43d4-a1ad-3ad9dde22900_580x581.png)

- The wallet is the process of scalar multiplication of a base generator point. Scalar multiplication is the process of multiplying the point by itself to get a new point on the curve.To compute the public key associated with your private key, you **multiply the generator point times your private key**, to arrive at a point on the curve.The x and y co-ordinates, written together, represent your public key. In Ethereum, you further derive a hash of this number, keep only the last 20 bytes, and append an 0x in front of it to derive an addressMathematically, it is easy to go forward on scalar multiplication. **Impossible to go backwards**. So as an owner, you can sign a transaction or a message, proving to someone that you are the holder of the private key associated with a public address.
  _Try it out. Go to [https://wagmi.sh/examples/sign-message](https://wagmi.sh/examples/sign-message). Enter a message and generate a signature using your Metamask wallet. You can also then verify your message._

At [#hashmail](https://hashmail.dev/), we’re taking your communication security one step further to reduce phishing and establish sender authority. A hash of the message and message id is digitally signed by the private key of the senders, establishing irrevocable trust that the sender and the content is legitimate.

And all messages / attachments are encrypted and stored with the AES-256 standard. This of-course limits searchability of emails (but we’re okay with that compromise in lieu of privacy at the moment). **Please follow us on twitter ([@0x_hashmail](https://twitter.com/0x_hashmail)) for regular updates, and consider joining our community on [Telegram](https://t.me/+58OrfEHpdYs4OGQ1).**

_If you want to read even more detailed math on how this works, check out these two links:_

- [https://cryptobook.nakov.com/asymmetric-key-ciphers/elliptic-curve-cryptography-ecc](https://cryptobook.nakov.com/asymmetric-key-ciphers/elliptic-curve-cryptography-ecc)
- [https://hackernoon.com/what-is-the-math-behind-elliptic-curve-cryptography-f61b25253da3](https://hackernoon.com/what-is-the-math-behind-elliptic-curve-cryptography-f61b25253da3)

P.S. As to why it will be important in your life, there’s a world where your identity is linked to a public address, and the accumulation of your important life experiences (including your education, work, public assets, etc.) is stored with that address. The advent of soul-bound NFTs means that these assets are non-transferable, and impossible to forge. Secure ownership of your private key might therefore be of incredible importance in your life.
