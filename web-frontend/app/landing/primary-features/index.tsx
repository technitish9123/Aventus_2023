"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const features = [
  {
    name: "AI-powered chat support",
    description:
      "Provide amazing chat support to users, powered by a GPT-4 chat assistant trained on your docs",
    icon: SupportIcon,
    screen: "/assets/images/primary-features/support.png",
  },
  {
    name: "Personalized in-app notifications",
    description:
      "Send contextual & personalized comms (alerts, reminders, updates) to user's wallets on your app",
    icon: NotifcationsIcon,
    screen: "/assets/images/primary-features/inbox.png",
  },
  {
    name: "Cross-channel messaging",
    description:
      "Communicate with your users on their preferred channels - email, discord, telegram with a single API",
    icon: ChannelsIcon,
    screen: "/assets/images/primary-features/alerts.png",
  },
];

function NotifcationsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
      <path
        fillRule="evenodd"
        d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChannelsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(0);

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  return (
    <Tab.Group
      as="div"
      className="grid aspect-[1715/1049] grid-cols-12 items-center gap-8 rounded-[20px]  border border-hash-light/20 bg-primary-features-dark bg-cover shadow-lg shadow-hash-dark/10 dark:shadow-hash-light/10  lg:gap-16"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <div className="order-first col-span-12"></div>

      <Tab.List className="relative order-first col-span-5 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-r-2xl transition-colors hover:bg-hash-light/5 "
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-hash-light/10 "
                initial={{
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                }}
              />
            )}
            <div
              className={`relative p-6 ${
                featureIndex === selectedIndex
                  ? "text-hash-light "
                  : "text-hash-light/70 "
              }`}
            >
              <feature.icon />
              <h3 className={`mt-6 text-title-large font-semibold`}>
                <Tab className="text-left outline-none [&:not(:focus-visible)]:focus:outline-none">
                  <span className={`absolute inset-0 `} />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-title-small font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-4 col-start-9 justify-end">
        {features.map((feature, featureIndex) => (
          <Image
            key={featureIndex}
            src={feature.screen}
            className={`${
              selectedIndex === featureIndex
                ? "transition"
                : "hidden transition"
            }`}
            width={330}
            height={610}
            alt={feature.name}
            priority
          />
        ))}
      </div>
    </Tab.Group>
  );
}

function FeaturesMobile() {
  // Define a state variable to track the index of the active slide
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipeLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const handleSwipeRight = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-hash-dark py-8 shadow-lg  shadow-hash-dark/10 dark:shadow-hash-light/10 "
      {...swipeHandlers}
    >
      <h3 className="py-4 text-lg font-semibold text-hash-light sm:text-lg">
        {features[activeIndex].name}
      </h3>
      <p className="px-4 pb-4 text-center text-hash-light/50">
        {features[activeIndex].description}
      </p>
      <Image
        key={features[activeIndex].name}
        src={features[activeIndex].screen}
        width={220}
        height={406}
        alt={features[activeIndex].name}
        priority
      />
      <div className="flex w-full justify-center">
        {features.map((_, index) => (
          <div
            key={index}
            className={`mx-5 h-2 w-2 rounded-lg transition ${
              index === activeIndex ? "bg-hash-light" : "bg-hash-light/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function PrimaryFeatures() {
  return <></>;
}
