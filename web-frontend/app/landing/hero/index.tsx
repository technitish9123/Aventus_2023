"use client";
import Button from "../../components/shared/button";
import Typewriter from "./typing";
import Marquee from "react-fast-marquee";
import Ethereum from "./chains/ethereum.svg";
import Polygon from "./chains/polygon.svg";
import Arbitrum from "./chains/arbitrum.svg";
import Binance from "./chains/binance.svg";
import Celo from "./chains/celo.svg";
import Fantom from "./chains/fantom.svg";
import Okx from "./chains/okx.svg";
import Optimism from "./chains/optimism.svg";
import Solana from "./chains/solana.svg";

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-screen-8xl px-4 py-10 text-center lg:px-8">
      <h1 className="mx-auto max-w-5xl text-display-small sm:text-display-large lg:pt-16">
        <span>Welcome to DeblockVault </span>
        <br className="sm:hidden" />
        <span className="font-semibold text-primary-vermilion">
          Your Trusted Blockchain-Based
        </span>
        <span> File and Password Manager! </span>
      </h1>
      <p className="mx-auto mt-6 max-w-4xl text-title-large font-normal">
        {/* secureVault combines the power of blockchain technology with
        cutting-edge encryption to provide you with the ultimate solution for
        secure file storage and password management. <br />{" "} */}
        <span className="font-medium">
          Say goodbye to traditional vulnerabilities and embrace the future of
          digital security.
        </span>
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-x-6 gap-y-6 overflow-hidden lg:mt-16 lg:flex-row">
        <Button href="" hashRedColor={true}>
          Launch App
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#D74634"
            className="ml-2 h-6 w-6 group-hover:animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Button>
      </div>
      <h2 className="mt-24 text-center text-title-medium font-extralight">
        powering unlimited storage across chains
      </h2>
      <Marquee gradient={false} speed={50} className="mt-4 lg:mt-8">
        <div className="my-4 flex w-full justify-around text-hash-dark/70 dark:text-hash-light/70">
          <Ethereum />
          <Polygon />
          <Arbitrum />
          <Optimism />
          <Binance />
          <Solana />
          <Celo />
          <Fantom />
          <Okx />
        </div>
      </Marquee>
    </div>
  );
}
