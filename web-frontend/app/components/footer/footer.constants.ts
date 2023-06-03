import { FooterOptionType, SocialContentType } from "../../utils/shared.types";

export const SOCIALS_CONSTANTS: SocialContentType[] = [
  {
    id: "discord",
    image: "/assets/icons/socials/discord",
    image_type: "svg",
    name: "discord",
    href: "https://community.hashmail.dev",
  },
  {
    id: "telegram",
    image: "/assets/icons/socials/telegram",
    image_type: "svg",
    name: "telegram",
    href: "https://t.me/hashmail_tg",
  },
  {
    id: "twitter",
    image: "/assets/icons/socials/twitter",
    image_type: "svg",
    name: "twitter",
    href: "https://twitter.com/0x_hashmail",
  },
  {
    id: "linkedin",
    image: "/assets/icons/socials/linkedin",
    image_type: "svg",
    name: "linkedin",
    href: "https://www.linkedin.com/company/0xhashmail/",
  },
];

export const FOOTER_CONSTANTS: FooterOptionType[] = [
  {
    id: 1,
    title: "product",
    options: [
      {
        id: "web3-inbox",
        title: "web3 inbox",
        ctaAction: "https://app.hashmail.dev",
        external: true,
      },
      {
        id: "api_docs",
        title: "guides & docs",
        ctaAction: "https://docs.hashmail.dev",
        external: true,
      },
      {
        id: "dapp console",
        title: "dapp console",
        ctaAction: "https://console.hashmail.dev",
      },
    ],
  },
  {
    id: 2,
    title: "learn more",
    options: [
      {
        id: "documentation",
        title: "documentation",
        ctaAction: "https://docs.hashmail.dev",
        external: true,
      },
      {
        id: "schedule_a_call",
        title: "schedule a call",
        ctaAction: "https://calendly.com/d/zt4-h6d-ydr/hashmail-demo",
        external: true,
      },
    ],
  },
  {
    id: 3,
    title: "legal",
    options: [
      {
        id: "privacy_policy",
        title: "privacy",
        ctaAction: "/privacy",
      },
      {
        id: "terms-and-conditions",
        title: "terms",
        ctaAction: "/tnc",
      },
    ],
  },
  {
    id: 4,
    title: "company",
    options: [
      {
        id: "blog",
        title: "blog",
        ctaAction: "/blog",
      },
      {
        id: "partnerships",
        title: "partnerships",
        ctaAction: "https://calendly.com/d/zt4-h6d-ydr/hashmail-partnership",
      },
      {
        id: "press_kit",
        title: "press kit",
        ctaAction: "/download/media-kit.zip",
        download: true,
      },
    ],
  },
];
