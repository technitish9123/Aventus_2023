import React from "react";

const faqs = [
  {
    id: 1,
    question: "Why does we need this ?",
    answer:
      "SecureVault addresses the pressing need for robust data security, protection against data loss, secure collaboration, strong password management, data integrity, privacy, and control. By leveraging the power of blockchain technology, SecureVault empowers you to safeguard your sensitive information and gain peace of mind in today's increasingly interconnected digital world.",
  },
  {
    id: 2,
    question: "is it a really a nessasity?",
    answer:
      "It's worth noting that while blockchain technology provides certain security advantages, it is not a panacea and may have its own limitations and challenges. Consider factors such as usability, implementation complexity, and the specific features offered by a blockchain-based solution before deciding whether it is a necessity for your particular use case.",
  },
  {
    id: 3,
    question: "How does we handle privacy?",
    answer:
      "the data is stored on the blockchain, which is a decentralized database. This means that there is no central authority that controls the data. Instead, the data is stored on a network of computers, making it difficult for hackers to access.",
  },
];

export default function Faqs(): JSX.Element {
  return (
    <div className="mrelative mx-auto my-10 max-w-screen-8xl px-4 py-10 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-headline-large font-medium tracking-tight">
          frequently asked questions
        </h2>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-x-20">
        {faqs.map((faq, index) => (
          <div key={faq.id}>
            <dt className="text-title-medium">{faq.question}</dt>
            <dd className="mt-2 text-body-large text-hash-dark/80 dark:text-hash-light/80">
              {faq.answer}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
