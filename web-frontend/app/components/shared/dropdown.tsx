"use client";

import clsx from "clsx";
import React from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";

type PopupProps = {
  align?: "left" | "right";
  links?: Array<{
    name: string;
    href: string;
    description: string;
    icon: React.FC<any>;
  }>;
};

const Dropdown: React.FC<React.HTMLAttributes<HTMLDivElement>> & {
  Label: React.FC<React.HTMLAttributes<HTMLButtonElement>>;
  Popup: React.FC<PopupProps>;
} = ({ children, className, ...props }) => {
  return (
    <Popover.Group className="flex lg:justify-center">
      <Popover
        className={clsx("relative my-auto w-full lg:ml-3", className)}
        {...props}
      >
        {children}
      </Popover>
    </Popover.Group>
  );
};

const Label: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & { arrow?: boolean }
> = ({ children, className, arrow = true, ...props }) => (
  <Popover.Button
    className={clsx(
      "group flex w-full items-center gap-x-2 rounded-full text-body-large font-medium outline-none hover:bg-hash-red hover:bg-clip-text hover:text-transparent lg:text-body-medium",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight
      className={clsx("h-3 w-3 rotate-90 group-hover:text-primary-vermilion")}
    />
  </Popover.Button>
);

const Popup: React.FC<PopupProps> = ({ align = "left", links = [] }) => {
  return (
    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-150"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Popover.Panel
        className={clsx(
          "z-10 min-w-48 border-light-gray-100 bg-hash-light pt-3 focus:outline-none dark:border-dark-gray-100 dark:bg-hash-dark lg:absolute lg:mt-6 lg:rounded-xl lg:border lg:pb-3 lg:shadow-md",
          {
            left: "left-0 origin-top-left lg:-ml-4",
            right: "right-0 origin-top-right lg:-mr-4",
          }[align]
        )}
      >
        <div>
          {links.map((link) => (
            <div key={link.name} className="block px-6 py-2 lg:py-3">
              <Link
                href={link.href}
                target="_blank"
                className="flex items-center gap-x-1.5 whitespace-nowrap leading-6 hover:text-primary-vermilion lg:text-body-large lg:font-semibold"
              >
                <link.icon className="inline h-5 w-5" />{" "}
                <span>{link.name}</span>
              </Link>
              <p className="mt-3 hidden w-96 text-body-small lg:block">
                {link.description}
              </p>
            </div>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

Dropdown.Label = Label;
Dropdown.Popup = Popup;

export default Dropdown;
