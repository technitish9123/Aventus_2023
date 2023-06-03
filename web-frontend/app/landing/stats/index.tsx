import Button from "@/app/components/shared/button";

const stats = [
  { id: 1, name: "messages sent", value: "500k+" },
  { id: 2, name: "reduction in wallet churn", value: "60%" },
  { id: 3, name: "uplift in customer NPS", value: "20pp" },
  { id: 4, name: "increase in repeat txn rates", value: "3x" },
];

export default function Stats() {
  return (
    // <section
    //   id="stats"
    //   aria-label="hashmail console stats"
    //   className="border-t border-hash-dark/10 dark:border-hash-light/10"
    // >
    //   <div className="relative mx-auto my-10 max-w-screen-8xl px-4 py-10 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:max-w-none">
    //       <div className="text-center">
    //         <h2 className="text-display-small font-normal tracking-tight">
    //           Trusted by{" "}
    //           <span className="text-hash-red-gradient font-semibold">
    //             30+ dapps
    //           </span>{" "}
    //           across chains
    //         </h2>
    //         <p className="mt-4 text-title-medium font-normal text-hash-dark/80 dark:text-hash-light/80">
    //           Join them to experience improvements in critical user engagement
    //           metrics for your dapp
    //         </p>
    //       </div>
    //       <dl className="mt-16 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
    //         {stats.map((stat) => (
    //           <div
    //             key={stat.id}
    //             className="flex flex-col bg-hash-dark/5 p-8 dark:bg-hash-light/5"
    //           >
    //             <dt className="text-sm font-light leading-6 text-hash-dark/80 dark:text-hash-light/80">
    //               {stat.name}
    //             </dt>
    //             <dd className="order-first text-3xl font-semibold tracking-tight text-hash-dark dark:text-hash-light">
    //               {stat.value}
    //             </dd>
    //           </div>
    //         ))}
    //       </dl>
    //     </div>
    //     <div className="mt-12 flex flex-col items-center justify-center gap-x-6 gap-y-6 overflow-hidden lg:mt-16 lg:flex-row">
    //       <Button
    //         href="https://console.hashmail.dev"
    //         hashRedColor
    //         className="w-40 justify-center"
    //       >
    //         get started
    //       </Button>
    //       <Button
    //         href="https://calendly.com/d/zt4-h6d-ydr/hashmail-demo"
    //         variant="outline"
    //         className="w-40 justify-center"
    //       >
    //         book a demo
    //       </Button>
    //     </div>
    //   </div>
    // </section>

    <> </>
  );
}
