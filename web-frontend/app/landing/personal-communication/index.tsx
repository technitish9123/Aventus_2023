import AiPoweredGraphic from "@/public/assets/images/console-features/ai-powered-graphic.svg";
import ChatMail from "@/public/assets/images/console-features/chat-mail.svg";
import AlertUrgent from "@/public/assets/images/console-features/alert-urgent.svg";
import DataUsageToolbox from "@/public/assets/images/console-features/data-usage-toolbox.svg";

const features = [
  {
    name: "Enhanced Security with Blockchain: ",
    description:
      " By leveraging the power of blockchain technology, SecureVault ensures data integrity, immutability, and transparency. Each file and password activity is recorded on the blockchain, providing an auditable trail for enhanced security and accountability.",
    href: "#",
    icon: ChatMail,
  },
  {
    name: "Unbreakable Encryption",
    description:
      "Your files are encrypted with state-of-the-art encryption algorithms, ensuring that only you have access to your sensitive information. Rest easy knowing that your data is shielded from prying eyes",
    href: "#",
    icon: AlertUrgent,
  },
  {
    name: "Decentralized File Storage",
    description:
      "Store your files with confidence. SecureVault utilizes the decentralized nature of blockchain to distribute and encrypt your files across a network of nodes. Your data remains secure, protected against unauthorized access or tampering",
    href: "#",
    icon: DataUsageToolbox,
  },
];

export default function PersonalCommunication(): JSX.Element {
  return (
    <section className="relative overflow-hidden border-t border-hash-dark/10 dark:border-hash-light/10">
      <div className="relative mx-auto my-10 max-w-screen-8xl px-4 pt-10 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-display-small font-normal tracking-tight">
            Experience the future of digital security with
            <span className="text-primary-vermilion"> SecureVault.</span>{" "}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-title-medium font-normal text-hash-dark/80 dark:text-hash-light/80">
            Embrace the power of blockchain and take control of your files and
            passwords like never before. Your data deserves the highest level of
            protection, and SecureVault delivers just that.
          </p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl">
                  <feature.icon
                    className="h-8 w-8 flex-none text-hash-dark dark:text-hash-light"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-title-small font-normal leading-6 text-hash-dark/80 dark:text-hash-light/80">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
