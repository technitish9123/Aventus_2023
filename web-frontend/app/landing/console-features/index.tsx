"use client";

import ChannelShare from "@/public/assets/images/console-features/channel-share.svg";

import DistributeIcon from "@/public/assets/images/console-features/distribute-icon.svg";
import Image1 from "@/public/assets/images/console-features/1.png";
import Carousel from "./carousel";

const features = [
  {
    name: "Advance file Management",
    description:
      "Gain transparency into file activities. Every file interaction is recorded on the blockchain, creating an auditable trail for accountability and compliance purposes.",
    href: "#",
    icon: ChannelShare,
    component: () => (
      <div className="flex aspect-[6/5] w-full items-center justify-center px-10 sm:aspect-[16/9] sm:px-6">
        <img
          src="https://i.ibb.co/30MvKkz/Screenshot-2023-06-03-063800.png"
          alt="img1"
        />
      </div>
    ),
  },
  {
    name: "Credential Manager",
    description:
      "Effortlessly integrate our password manager with your favorite apps and platforms. Enjoy secure auto-fill and easy access to your passwords wherever you go",
    href: "#",
    icon: DistributeIcon,
    component: () => (
      <div className="flex aspect-[6/5] w-full flex-col-reverse pl-8 sm:aspect-[16/9] sm:pl-6">
        <img
          src="https://i.ibb.co/M7ghprG/Screenshot-2023-06-03-063828.png"
          alt="img1"
        />{" "}
      </div>
    ),
  },
];

export default function Console() {
  return (
    <section
      id="console-features"
      aria-label="The hashmail console for apps"
      className="relative overflow-hidden border-t border-hash-dark/10 dark:border-hash-light/10"
    >
      <div className="relative mx-auto my-10 max-w-screen-8xl px-4 py-10 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-display-small font-normal tracking-tight">
            Protect Your Confidential Files with{" "}
            <span className="text-primary-vermilion">
              advanced encryption algorithm
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-title-medium font-normal text-hash-dark/80 dark:text-hash-light/80">
            Unparalleled Security for Your Digital Assets!
          </p>
        </div>
        <div className="mx-auto mt-4">
          <Carousel pages={features} />
        </div>
      </div>
    </section>
  );
}
