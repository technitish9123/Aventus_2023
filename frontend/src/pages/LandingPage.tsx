import React from "react";
import gradient from "../svg/gradient.svg";
import i1 from "../svg/1.svg";
import i2 from "../svg/2.svg";

import i4 from "../svg/4.svg";
import i5 from "../svg/5.svg";
import i7 from "../svg/7.svg";
import i11 from "../svg/11.svg";
import i111 from "../svg/111.svg";
import i555 from "../svg/555.svg";
import i55 from "../svg/55.svg";
import il from "../svg/line.svg";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className=" h-[100vh]  ">
      <header className="flex min-w-26 justify-between bg-hash-dark px-3  py-6">
        <p className="text-5xl font-semibold text-white">
          Dblock
          <span className="t bg-clip-text  text-primary-salmon">Vault</span>
        </p>
        <a href="/">
          <button className="bg-hash-red px-4 py-2 text-lg text-white">
            Launch App
          </button>
        </a>
      </header>
      <div className="flex flex-col content-center items-center justify-center pt-14 text-center">
        <p className="bg-primary-salmon bg-clip-text  pt-4 text-5xl font-semibold  text-transparent ">
          Dblock Valut
          <p className="text- pt-3 text-center ">
            Next Generation{" "}
            <span className="text-dark-gray-100">Secure File and Password</span>{" "}
            Manager
          </p>
        </p>
        <p className="pt-3 text-2xl font-medium text-hash-dark">
          Keep Your Cred{" "}
          <span className="text-primary-salmon"> On a decentralized</span>{" "}
          Network
        </p>
      </div>
      <div className="mt-20 flex justify-center gap-x-20">
        <div className="relative flex h-72 w-72 flex-col items-center justify-center bg-limited-charcoal text-white">
          <img
            src={gradient}
            height={250}
            width={250}
            alt="hello"
            className=" absolute left-0 top-0"
          />
          <img
            src={i1}
            height={130}
            width={110}
            alt="hello"
            className="z-100 flex "
          />
          <p className="pt-12  text-xl">High Security</p>
        </div>

        <div className="relative flex h-72 w-72 flex-col items-center justify-center bg-hash-dark text-white">
          <img
            src={gradient}
            height={250}
            width={250}
            alt="hello"
            className=" absolute left-0 top-0"
          />
          <img
            src={i11}
            height={130}
            width={110}
            alt="hello"
            className="z-100 flex "
          />
          <p className="pt-12   text-xl">Transparacy</p>
        </div>
        <div className="relative flex h-72 w-72 flex-col items-center justify-center bg-hash-dark text-white">
          <img
            src={gradient}
            height={250}
            width={250}
            alt="hello"
            className=" absolute left-0 top-0"
          />
          <img
            src={i111}
            height={130}
            width={110}
            alt="hello"
            className="z-100 flex "
          />
          <p className="pt-12 text-xl">Reliability</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-20 text-dark-gray-100">
        <p className="py-11 text-4xl  font-semibold ">
          Transforming Document Security - <br />{" "}
          <span className=" text-4.75xl text-primary-salmon">
            dBlock Vault:{" "}
          </span>{" "}
          The Next Generation Secure Storage Solution! <br />
        </p>
        {/* <p className="pt-1 text-base font-medium">
          get an authorized notary for your contracts
        </p> */}
      </div>
      <div className="relative flex items-center justify-center pb-20 pt-32">
        <img
          src={i1}
          height={250}
          width={250}
          alt="hello"
          className=" absolute left-80 top-12"
        />
        <img
          src="/22.png"
          height={590}
          width={590}
          alt="hello"
          className="  absolute "
        />
        <img src={i2} height={750} width={750} alt="hello" className="   " />
      </div>
      <div className="flex h-4/6 w-full items-center justify-evenly bg-hash-dark px-4">
        <img
          src="/33.png"
          height={550}
          width={550}
          alt="hello"
          className="  "
        />

        <p className="pl-32 text-4xl font-semibold text-white">
          Your Document Sanctuary Awaits Advanced{" "}
          <span className="text-primary-salmon">- dBlock Vault:</span>
          <span className="text-hash-red"> </span>
          <br />
          Reinventing Security for a Connected World!"
          <br />{" "}
          <span className="text-base">
            Your secure document sanctuary, revolutionizing connected world
            security with unparalleled protection and peace of mind
          </span>
        </p>
      </div>
      <div className="items-centercontent-center grid grid-cols-3 items-center justify-center px-16 pt-36">
        <div className="px-4 text-3xl font-medium text-dark-gray-100">
          Privacy and User Control:
          <span className="text-primary-salmon">
            Take charge of your passwords. With our password manager,
          </span>
          <p className="pt-5 text-xl">
            you hold the keys to your digital kingdom, giving you ultimate
            control and privacy over your sensitive credentials.
          </p>
        </div>
        <div className=" flex content-center items-center justify-center">
          <img
            src="/33.png"
            height={450}
            width={550}
            alt="hello"
            className="  "
          />
        </div>
        <div className="pl-28">
          <img src={i4} height={150} width={150} alt="hello" className="  " />
        </div>
      </div>
      <div className="flex w-full flex-col items-start pl-28 pt-32">
        <p className="bg-hash-red-gradient bg-clip-text pb-1 text-lg font-medium  text-transparent ">
          Worried About storing your Password and documents
        </p>
        <p className="text-med-black text-4xl">
          use deBlock Vault to easily store <br />
          your confidencial documents and cred.
        </p>
        <div className="flex w-full  flex-wrap justify-between  py-20 pr-40 ">
          <div className="w-72">
            <img src={i5} height={50} width={50} alt="hello" className="  " />
            <p className="text-manatee">
              <h4 className="text-med-black  font-semibold">Trust</h4>
              Since all the data are stored onChain. So there is not a chance of
              trust issue.
            </p>
          </div>
          <div className="w-72 ">
            <img src={i55} height={50} width={50} alt="hello" className="  " />
            <p className="text-manatee">
              <h4 className="text-med-black  font-semibold">User-Experience</h4>
              Easily access your documents and Password From your Comfort Zone
              with Easy To use User Interface.
            </p>
          </div>
          <div className="w-72">
            <img src={i555} height={50} width={50} alt="hello" className="  " />
            <p className="text-manatee">
              <h4 className="text-med-black  font-semibold">
                helpful Dashboard
              </h4>
              Keep Track of all of your documnents and credentials on a single
              click
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center pb-28 pt-8">
        <img src={i7} height={150} width={950} alt="hello" className="  " />
        <a href="/">
          <button className="absolute bottom-40 right-96 bg-hash-red px-6 py-4 text-xl text-white">
            Launch App
          </button>
        </a>
      </div>
      <footer className="text-med-black flex w-full justify-center pb-4 text-xl font-medium">
        Made With ❤️ by <span className="text-hash-red"> TeamInfinity </span>
      </footer>
    </div>
  );
};

export default LandingPage;
