import clsx from "clsx";
import Button from "@/app/components/shared/button";
import Checkmark from "@/public/assets/icons/checkmark.svg";

type Feature =
  | {
      name: string;
      tnc: true;
    }
  | string;

type Plan = {
  name: string;
  pricing?: string;
  features: Array<Feature>;
  cta: {
    label: string;
    url: string;
  };
  featured?: true;
};

const plans: Array<Plan> = [
  {
    name: "Free",
    pricing: "$0",
    cta: { label: "sign up for free", url: "" },
    features: ["50 file / day", "100 credential storage "],
  },
  {
    name: "Growth",
    pricing: "$2.99",
    cta: { label: "get started", url: "" },
    features: [
      "500 file / day",
      "Advance Encrption Feature",
      "1000 credential storage ",
      "High Priority Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    cta: {
      label: "contact us",
      url: "",
    },
    features: [
      "unlimited file / day",
      "Advance Encrption Feature",
      "1000 credential storage ",
      "High Priority Support",
    ],
  },
];

export default function Pricing(): JSX.Element {
  return (
    <section
      id="pricing"
      aria-label=""
      className="border-t border-hash-dark/10 dark:border-hash-light/10"
    >
      <div className="mx-auto mt-10 max-w-screen-8xl px-4 pt-12 lg:max-w-6xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-none">
          <h2 className="text-headline-large font-normal tracking-tight">
            Choose the{" "}
            <span className="text-hash-red-gradient font-semibold">
              pricing plan
            </span>{" "}
            to suit your needs
          </h2>
          <div className="mt-16 grid max-w-screen-sm grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {plans.map(({ name, features, featured, pricing, cta }) => (
              <div
                key={name}
                className={clsx(
                  "relative flex overflow-hidden rounded-xl",
                  featured ? "bg-hash-red" : "bg-dark-gray-100"
                )}
              >
                {featured ? (
                  <div className="absolute w-full -translate-x-1/3 translate-y-1/2 -rotate-[31deg] bg-hash-red py-3 text-body-small font-semibold text-hash-light">
                    POPULAR
                  </div>
                ) : (
                  <></>
                )}
                <div className="m-[1px] flex flex-1 flex-col rounded-[10px] bg-hash-light px-12 py-8 dark:bg-hash-dark">
                  <h4 className="text-xl font-semibold">{name}</h4>
                  <div className="mt-8">
                    <div
                      className={clsx(
                        "inline text-5xl font-semibold leading-12",
                        featured && "bg-hash-red bg-clip-text text-transparent"
                      )}
                    >
                      {pricing ? (
                        <>
                          {pricing}
                          <span className="align-bottom text-2xl font-normal">
                            /mo
                          </span>
                        </>
                      ) : (
                        <span className="text-2xl font-normal">
                          custom pricing
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="mx-auto my-10 max-w-sm space-y-3 text-left">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-center gap-x-3 text-sm">
                        <Checkmark className="h-5 w-5" />
                        <span>
                          {typeof f === "string" ? (
                            f
                          ) : (
                            <>
                              {f.name}
                              {f.tnc && (
                                <span className="align-super text-xxs">*</span>
                              )}
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-center">
                    <Button
                      hashRedColor={featured}
                      className="w-48 justify-center !rounded-lg"
                      href={cta.url}
                    >
                      {cta.label}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-left text-sm text-dark-gray-100 dark:text-light-gray-100">
            <span className="align-top">*</span>additional fees apply for usage
            beyond the limits above.
          </p>
        </div>
      </div>
    </section>
  );
}
