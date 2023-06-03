import { Tab } from "@headlessui/react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

type CarouselProps = {
  pages: Array<{
    component: () => JSX.Element;
    icon: any;
    name: string;
    description: string;
  }>;
};

function Page({ page, isActive, className, ...props }: any) {
  return (
    <div className="relative flex flex-col" {...props}>
      <div
        className={clsx(
          "flex items-center gap-x-3 text-title-medium",
          isActive && "text-hash-red-gradient"
        )}
      >
        <page.icon
          className={clsx(
            "h-8 w-8 flex-none",
            isActive
              ? "text-primary-vermilion"
              : "text-hash-dark dark:text-hash-light"
          )}
        />
        <Tab className="relative text-left text-xl outline-none [&:not(:focus-visible)]:focus:outline-none">
          <span
            className={clsx(
              "absolute inset-0",
              isActive && "text-hash-red-gradient"
            )}
          >
            {page.name}
          </span>
          {page.name}
        </Tab>
      </div>
      <div className="mt-4 flex flex-auto flex-col text-title-small font-normal leading-6 text-hash-dark/80 dark:text-hash-light/80">
        <p className="flex-auto">{page.description}</p>
      </div>
    </div>
  );
}

export default function Carousel({ pages }: CarouselProps): JSX.Element {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSelected((selected + 1) % pages.length),
      5000
    );
    return () => clearInterval(interval);
  }, [pages.length, selected]);

  return (
    <Tab.Group
      as="div"
      className="mt-12 space-y-8 lg:mt-20"
      selectedIndex={selected}
      onChange={(i) => setSelected(i)}
    >
      {({ selectedIndex: active }) => (
        <>
          <Tab.List className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-x-20">
            {pages.map((page, pageIndex) => (
              <Page
                key={page.name}
                page={page}
                isActive={pageIndex === active}
                className="relative"
              />
            ))}
          </Tab.List>
          <div className="flex justify-center gap-x-4">
            {pages.map((_, i) => (
              <span
                key={i}
                className={clsx(
                  "rounded-full p-1",
                  active === i ? "bg-primary-vermilion" : "bg-dark-gray-50"
                )}
              />
            ))}
          </div>
          <Tab.Panels className="relative aspect-[6/5] overflow-hidden rounded-xl border-[1px] border-hash-light/20 bg-hash-dark shadow-lg shadow-hash-dark/10 dark:shadow-hash-light/10 sm:aspect-[16/9] lg:mt-16 lg:rounded-[20px]">
            <div className="flex h-full bg-glass-gray">
              {pages.map((page, pageIndex) => (
                <Tab.Panel
                  static
                  key={`${page.name}-panel`}
                  className={clsx(
                    "aspect-[6/5] h-full w-full sm:aspect-[16/9]",
                    "transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none",
                    pageIndex !== active && "opacity-60"
                  )}
                  style={{
                    transform: `translateX(calc(-${active * 100}% + 1px))`,
                  }}
                  aria-hidden={pageIndex !== active}
                >
                  <div className="w-full overflow-hidden">
                    <page.component />
                  </div>
                </Tab.Panel>
                // {}
              ))}
            </div>
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}
