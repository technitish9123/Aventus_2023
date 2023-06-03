/* eslint-disable @next/next/no-img-element */
import { FOOTER_CONSTANTS } from "./footer.constants";
import GradientHR from "./gradientHR";
import Image from "next/image";

export const SOCIALS_CONSTANTS = [
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

export default function Footer() {
  return (
    <footer
      className="flex justify-center text-2xl"
      aria-labelledby="footer-heading "
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <GradientHR />
      made with love ❤️ by team infinity
    </footer>
  );
}
