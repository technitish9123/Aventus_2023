/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Toggle from "../footer/light-dark-toggle";
import Link from "next/link";
import Dropdown from "../shared/dropdown";
import Button from "../shared/button";

import CalendarChat from "@/public/assets/icons/calendar-chat.svg";
import Mail from "@/public/assets/icons/mail.svg";
import Apps from "@/public/assets/icons/apps.svg";
import Document from "@/public/assets/icons/document.svg";

type NavItem = {
  name: string;
  href?: string;
  links?: Array<{ name: string; href: string; description: string; icon: any }>;
};

const navigation: Array<NavItem> = [
  {
    name: "Product",
    links: [
      {
        icon: CalendarChat,
        name: "hashmail console",
        href: "https://console.hashmail.dev",
        description:
          "Setup web3 support and messaging on your website & discord in <10 mins",
      },
      {
        icon: Apps,
        name: "widget playground",
        href: "https://playground.hashmail.dev",
        description:
          "Demo support and messaging on the hashmail playground widget",
      },
      {
        icon: Mail,
        name: "web3 inbox",
        href: "https://app.hashmail.dev",
        description:
          "A unified web3 mailbox to send and receive messages simply with your wallet address or DIDs",
      },
      {
        icon: Document,
        name: "documentation hub",
        href: "https://docs.hashmail.dev",
        description:
          "Learn how to embed the hashmail widget, setup AI chat support and embed cross channel notifications",
      },
    ],
  },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 ">
      <div className="false absolute inset-0 h-full w-full bg-hash-light transition-opacity dark:bg-hash-dark"></div>
      <nav
        className="relative mx-auto flex max-w-screen-8xl items-center justify-between px-4 py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-32">
          <a href="/" className="-m-1.5 p-1.5"></a>
        </div>
        <span className="absolute -left-36 top-5 text-start text-4xl text-primary-salmon">
          deBlock Vault
        </span>

        <div className="hidden justify-end gap-x-6 lg:flex">
          <Toggle />
          <Button
            variant="outline"
            hashRedColor
            href={"http://localhost:3001/"}
          >
            <span className="bg-hash-red bg-clip-text px-1 font-semibold text-transparent">
              Launch app
            </span>
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="border-l border-hash-dark/10 dark:border-hash-light/10 lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col overflow-y-auto bg-hash-light px-6 py-6 dark:bg-hash-dark sm:max-w-sm sm:ring-1 sm:ring-hash-hover-light dark:sm:ring-hash-hover-dark">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Toggle />
          </div>
          <div className="mt-6 flow-root flex-1">
            <div className="flex h-full flex-col divide-y divide-gray-500/10">
              <div className="flex flex-col space-y-6 py-6">
                {navigation.map((item) => (
                  <React.Fragment key={item.name}>
                    {typeof item.href !== "undefined" ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="text-body-large font-medium leading-6 hover:bg-hash-red hover:bg-clip-text hover:text-transparent"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Dropdown>
                        <Dropdown.Label>{item.name}</Dropdown.Label>
                        <Dropdown.Popup links={item.links} />
                      </Dropdown>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="pt-6 sm:mt-auto">
                <div className="w-full">
                  <Button
                    wrapperClass="flex-1 flex"
                    className="flex-1"
                    variant="outline"
                    hashRedColor
                    href={""}
                  >
                    <span className="w-full bg-hash-red bg-clip-text px-1 text-center text-body-large font-semibold text-transparent">
                      Login
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
