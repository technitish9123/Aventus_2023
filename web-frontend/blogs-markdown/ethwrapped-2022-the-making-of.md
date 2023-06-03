---
title: "Parsing on-chain Eth transaction history into a visual summary"
date: "2023-01-21"
ctaText: "5 min read"
image: "/assets/blog-assets/ethwrapped-2022-the-making-of/hero-image.png"
socials:
  { "twitter": "https://twitter.com", "linkedin": "https://linkedin.com" }
author:
  {
    "name": "bharat",
    "desg": "co-founder",
    "image": "/assets/images/team/bharat.png",
  }
---

On 31 Dec, hashmail launched **#EthWrapped2022**. A shameless ‘borrow’ from the stable of Spotify, EthWrapped was a funky visual summary of interesting stats about your wallet activity on Eth Mainnet in 2022

It was a nice campaign. Although, it never really reached the virality I secretly hoped for, it gave us a nice bump in sign-ups and really interesting conversations on our discord channel

But what I enjoyed the most was our team hacking this together in ~2 days between Christmas and New Year.

I gained a healthy appreciation for holidays (never doing this again), but also a deeper understanding of how transactions are recorded by the EVM for archival

This post is all about the latter - an inner look into how we represent the information about a transaction on the Ethereum Chain

**_If you haven’t signed up to hashmail, or received your Ethwrapped, now’s a good time. Signup with your wallet, and you’ll automatically receive it in your mailbox_**

---
>_“One of the deepest impulses in man is the impulse to record, to scratch a drawing on a tusk or keep a diary… The enduring value of the past is, one might say, the very basis of civilisation.”_

One of the core value propositions of a blockchain is its immutability, which begs an important question - **“immutability of what exactly”?**

The simple and obvious answer is - **Transactions**

Dig deeper, and the second-order question is, so how does one parse a historical transaction. This is supremely important because the ordered list of transactions since epoch, provides a pathway for a node to compute the current state of the chain.

Therefore, it was critical for the core devs to setup a standard structure to record and represent a transaction - also known as a **transaction receipt**

A txn receipt, like a normal receipt, records properties of the overall txn (like fees paid), and any events, logs or data associated with the txn (like the items)

**By analyzing the data in all transaction receipts from Block 13916166 (start of 2022) to Block 16308190 (end of 2022) that include your wallet address, we were able to paint a pretty good picture of what you did on Mainnet in 2022**

---
So now, let’s break down a transaction receipt. For the purposes of this, let’s take a simple swap transaction done on Uniswap.

0xb99… swapped 5000 USDC for ~3.4 ETH. You can view it on Etherscan [here](https://etherscan.io/tx/0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f)

If you query the transaction receipt using a node (or your RPC provider), you will get a JSON object

```
{
  to: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
  from: '0xb99B47D1193fE512001071e0FfC8951e281b3865',
  contractAddress: null,
  transactionIndex: 212,
  gasUsed: BigNumber { _hex: '0x0270cd', _isBigNumber: true },
  blockNumber: 16428325,
  confirmations: 25548,
  cumulativeGasUsed: BigNumber { _hex: '0x01150cfc', _isBigNumber: true },
  effectiveGasPrice: BigNumber { _hex: '0x055ec704aa', _isBigNumber: true },
  status: 1,
  type: 2,
  byzantium: true,
  blockHash: '0xb44cb7ec73f4eeae2f803af096c8eb636a7b5d752c6100eeba01f390eac815d7',
  transactionHash: '0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f',
  logsBloom: '0x00000000010000000000000000000000000000000000000000000000040000000000000000000000000008000000000002000000080020000000000000200000000000000000000808000008000000000000000000400004000000000000000000000000000000000000000000000000000000000000040000040010000800000000000000000000000800000000000000000000010000000000000000000000020000000000200000000000000000000000000000000000002000000008000000000002000000000000000000000000000000000004000000000102000000000010200000000000000010000000080000000000000000000000000000000000',
  logs: [
    {
      transactionIndex: 212,
      blockNumber: 16428325,
      transactionHash: '0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      topics: [Array],
      data: '0x000000000000000000000000000000000000000000000000000000012a05f200',
      logIndex: 338,
      blockHash: '0xb44cb7ec73f4eeae2f803af096c8eb636a7b5d752c6100eeba01f390eac815d7'
    },
    {
      transactionIndex: 212,
      blockNumber: 16428325,
      transactionHash: '0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      topics: [Array],
      data: '0x0000000000000000000000000000000000000000000000002bdb12dac3e2c7b6',
      logIndex: 339,
      blockHash: '0xb44cb7ec73f4eeae2f803af096c8eb636a7b5d752c6100eeba01f390eac815d7'
    },
    {
      transactionIndex: 212,
      blockNumber: 16428325,
      transactionHash: '0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      topics: [Array],
      data: '0x000000000000000000000000000000000000000000000000000000012a05f200',
      logIndex: 340,
      blockHash: '0xb44cb7ec73f4eeae2f803af096c8eb636a7b5d752c6100eeba01f390eac815d7'
    },
    {
      transactionIndex: 212,
      blockNumber: 16428325,
      transactionHash: '0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f',
      address: '0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640',
      topics: [Array],
      data: '0x000000000000000000000000000000000000000000000000000000012a05f200ffffffffffffffffffffffffffffffffffffffffffffffffd424ed253c1d384a000000000000000000000000000000000000623a60d0f9bcce24a779bc2c5a670000000000000000000000000000000000000000000000011b234313ae860b6a00000000000000000000000000000000000000000000000000000000000317a3',
      logIndex: 341,
      blockHash: '0xb44cb7ec73f4eeae2f803af096c8eb636a7b5d752c6100eeba01f390eac815d7'
    },
    {
      transactionIndex: 212,
      blockNumber: 16428325,
      transactionHash: '0xc76dd2d109fccd2384458cef25843cf53899749c862a5ab931b89a139228651f',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      topics: [Array],
      data: '0x0000000000000000000000000000000000000000000000002bdb12dac3e2c7b6',
      logIndex: 342,
      blockHash: '0xb44cb7ec73f4eeae2f803af096c8eb636a7b5d752c6100eeba01f390eac815d7'
    }
  ],
}
```
-   **From -** this is typically an EOA (and is the main caller of the transaction). Contracts that call other contracts are called internal txns, and generally not part of the main call. _If you are invoking a txn, this is your address, and the main supplier of the gas fees_
    
-   **To -** To address can be an EOA (simple Eth transfer), or a contract address. In this txn, the 0x68b… is also known as the Uniswap v3: Router 2. It is the contract that further routes the transaction based on params to internal contracts
    
-   **contractAddress -** This is null, as this parameter is only relevant when you deploy a contract to the chain. In that case, it returns the address of the contract
    
-   **gasUsed -** This is the total gasUsed by the transaction. An important point to note is that **gas used is not the fees paid.** Gas is a unitless metric, which you multiply with the effectiveGasPrice to get the value of the gas fees you paid to execute this transaction
    
-   **Blockhash and Txnhash -** Fairly straightforward. The former is the hash of the entire block, and latter is the hash of the transaction. **Your txn hash is the main identifier for the receipt!**
    
-   **blockNumber -** the block number where the transaction is recorded
    
-   **confirmations -** this is the difference between the current block and the block when this transaction was confirmed. Generally, anything more than 6 blocks is considered mathematically infeasible to fork. This transaction has ~25000 confirmations when I queried the receipt :)
    
-   **cumulativeGasUsed -** not a very important metric, but it tracks the total gas used by all transactions in that block
    
-   **effectiveGasPrice -** This represents the price per unit of gas paid for this transaction. gasPrice is a function of network congestion - the higher the congestion, more then gasPrice. **Multiplying this with the gasUsed will give you the gas fees paid.** We can compute this fees ourselves and verify:
```
In this transaction, here are the values. To convert the values from BigNumber to a number, use the ethers package. ethers.BigNumber.from(value).toNumber()

gasUsed = 159949
You can see this value on Etherscan

effectiveGasPrice = 23064937642 wei
1 ETH = 10^18 (or 1 billion billion) wei. Generally, this number is represented as Gwei or Giga wei. Gas fees at that time was ~23 Gwei

Multiplying these two numbers will give you the gas fees paid for this transaction, which amounts to 0.003689213710900258 ETH
```
You may notice that so far, this information is peripheral. We know that the contract is called, by an address, in a certain block, with some amount of fees paid

But we don’t know much about what exactly transpired in the transaction.

This is where logs come into play

The **logs array** is the cumulative set of logs emitted by the various functions that were invoked during the transaction

Each log contains some base metadata about the log event, and topics, which represent the actual data of the log. For example, take the first log (I’ve used a representation from Etherscan to explain this)

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc51a5119-596e-41b1-a089-b9fceaccaec0_1168x267.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc51a5119-596e-41b1-a089-b9fceaccaec0_1168x267.png)

This log is emitted by the address 0xa0b8…If you search this address on Etherscan, you will note that this is the contract address for USDC (which is the token that was swapped for Eth)

Each log record consists of up to four topics as well as data. Topics are searchable fields that can hold up to 32 bytes of information

The first **topic is always used to represent the event emitted.** This is done by taking a keccak-256 hash of the event name and variable types.

If you take the keccak-256 hash of **Approval(address,address,uint256)**, you will get 0x8c5…3b925. **[Try it out here](https://emn178.github.io/online-tools/keccak_256.html)**

Therefore, what you can understand from this log is that the address owner (i.e. topic 1), has provided an Approval (function) to the spender address (topic 2), which is the Uniswap contract address to spend a value of 5000 tokens (in the data field) of value. _You need to divide the value of the data by 10^6_

By deciphering each log, you can understand the sequence of events that went into this transaction. In this particular transaction, here are the logs emitted:

1.  0xb99…(the caller) calls the Uniswap deployer (0x68…)
    
2.  0xb99… provides the deployer with an approval to withdraw 5000 USDC from its account
    
3.  Uniswap deployer invokes a transaction that transfers 5000 USDC to 0x88e…(which is the Uniswap USDC pool)
    
4.  Uniswap USDC pool transfers 3.4 ETH to the deployer
    
5.  Deployer transfers the amount to the users wallet
    

_Note that this isn’t necessarily a literal transfer from one account to another. A lot of this is netting off or simple state changes. Just like if A owes money to B, and B owes money to C, and A pays C directly, there is a notional transfer of A to B and B to C, but no real hops_

---
In conclusion, logging in Ethereum is a complicated and delicate balance. Too many logs, and too large a data in the topics, and you have very high gas fees. Too few, and its really hard to piece together what happened in the transaction.

Lots of interesting developments with incredibly cool names (like Protodanksharding) are in the pipeline to provide the ability to store more data on-chain, without sacrificing security or increasing costs. This would be crucial to maintaining an accurate and complete history of the transactions on chain
