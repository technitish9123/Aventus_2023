---
title: "Decentralized storage is now in public beta"
subtitle: "Read more on how we store your comms in IPFS with restricted, private access only to your wallet"
date: "2023-02-09"
ctaText: "2 min read"
image: "/assets/blog-assets/hashmail-on-ipfs/hero-image.png"
socials:
  { "twitter": "https://twitter.com", "linkedin": "https://linkedin.com" }
author:
  {
    "name": "bharat",
    "desg": "CTO & Co-founder",
    "image": "/assets/images/team/bharat.png",
  }
---

We are excited to announce the launch of decentralized storage for all your emails on hashmail.

We’ve been in alpha for the last month, testing storage on various storage protocols for a small subset of users. After extensive testing for security and scalability, we’re now ready for a general release of IPFS email storage for everyone.

This post explains how we store and retrieve your emails via decentralized storage, and how we solve for your privacy, and UX

### Why is decentralized storage important for your emails?

A good place to start is thinking about why we need decentralized storage in our email.

Our most important information often formally is sent via email, yet we depend almost entirely on large, centralized entities. *If Gmail chooses to remove your emails or restrict your access, you lose all access to your important communications.*

Decentralized storage of comms cuts through this entirely - Now, once you send or receive an email from your hashmail, **the emails are permanently stored on IPFS, ensuring that no entity can restrict your access to your inbox.**

However, there were a few important aspects to consider around privacy and user experience. We asked ourselves two important questions:

- How do we **protect the privacy of our user’s communications such that only the owner of the inbox can view their emails**?
- How do we **ensure that the emails can be viewed/parsed easily on other mail clients** for efficient retrieval?

### Solving for communications privacy

IPFS is designed by default to be permanent and permissionless. Once a file uploaded on IPFS, a content digest (or CID) is generated, an identifier used to locate files and retrieve them via a gateway. Anyone with a CID would be able to retrieve that content.

Our challenge was to ensure a mechanism to restrict access to the file (only for the owner), even if someone else possess knowledge of the CID.

After exploring various IPFS storage providers, we finally chose Pinata for its submarining feature. **Submarining** allows us to upload files to IPFS normally, but token-gate access behind a time-bound JWT that the owner can only generate.

*Look for the ipfs link in every email in your hashmail inbox - When you click on the IPFS link in an email, it’ll generate a temporary access token embedded in the query params.*

As a bonus, Pinata also provides a fast dedicated gateway that allows us to fetch content with minimal latency, providing a seamless experience for our users.

### Ensuring interoperability of the email content

The other problem to solve was interoperability. It is pointless to be decentralized if the email data cannot be easily retrieved and used in alternative clients.

We explored storing the emails in easily readable JSON structures so users can retrieve it, but ultimately, we decided that the best option is to store the raw email message in the standard email (RFC 5322) format itself on IPFS. 

It trades off a bit of readability of the individual file, in favor of adherence to a widely used standard. The RFC–5322 is an internet communications standard that defines the structure and conventions used by two mail servers when communicating over SMTP

At the highest level, it includes a body (in plain text and HTML), message headers (subject, to, from, cc, bcc, timestamp), and other mail transfer headers applied by the mail servers (spam score, DKIM, arc seal, etc.). Any mail client is fully capable of parsing this format (as EML files). Therefore, you can download all your emails from hashmail IPFS to any mailbox of your choice)

*This applies only to historical emails. There is still some centralization e.g. ‘hashmail.dev’ addresses will still need to pass through our SMTP server. We are still working on decentralizing this*

### Future possibilities

We're always thinking about the future possibilities for features and tools that we can bring to the hashmail, and we'd love to hear from you about what kind of features you'd like to see

- Bulk download of your inbox
- IMAP credentials
- E2E encryption
- Decentralized SMTP server
- Your idea here?

There's a lot of potential in web3 comms, and we'd love to hear your ideas. Join our [Discord](https://community.hashmail.dev) channel if you want to chat more about it!