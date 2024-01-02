import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

export const Footer = () => {
  return (
    <>
      <div id="Informatie" className="bg-[#f7f7f7] text-black">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className=" w-full md:w-1/4 place-items-center justify-center">
            <h2 className="mb-6 text-2xl font-bold">
              Go4<span className="text-[#d8aa46]">Hair</span>
            </h2>
            <div className="w-12 h-1 bg-[#e0a96d] rounded ml-4 mt-2 mb-2"></div>
            <a className="p-10 flex items-center cursor-pointer text-[#d4ab50] text-xl font-semibold fonts-roboto hover:underline">
              Waarom Go4Hair
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div>
            <h1 className="text-[#9b7d3e] font-medium text-xl pb-4 pt-5 md:pt-0">
              Behandelmethodes
            </h1>
            <nav className=" flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" href="/">
                Follicular Unit Transplantation (FUT)
              </a>
              <a className="hover:underline cursor-pointer " href="/">
                Follicular Unit Extraction (FUE)
              </a>
              <a className="hover:underline cursor-pointer" href="/">
                Sapphire (FUE)
              </a>
              <a className="hover:underline cursor-pointer " href="/">
                Ice (FUE)
              </a>
              <a className="hover:underline cursor-pointer" href="/">
                Direct Hair Implantation (DHI)
              </a>
            </nav>
          </div>
          <div>
            <h1 className="text-[#9b7d3e] font-medium text-xl pb-4 pt-5 md:pt-0">
              Contact
            </h1>
            <nav className=" flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" href="/">
                Email
              </a>
              <a className="hover:underline cursor-pointer" href="/">
                WhatsApp
              </a>
              <a
                className="hover:underline cursor-pointer "
                href="/"
              >
                Afspraak maken
              </a>
            </nav>
          </div>
          <div>
            <h1 className="text-[#9b7d3e] font-medium text-xl pb-4 pt-5 md:pt-2">
              Media
            </h1>
            <nav className=" flex flex-col items-start md:items-center gap-2">
              <BsInstagram
                size={30}
                className="hover:cursor-pointer"
                style={{ color: "purple" }}
              />
              <ImWhatsapp
                className="hover:cursor-pointer"
                size={30}
                style={{ color: "Green" }}
              />
            </nav>
          </div>
        </div>
        <div>
          <p>
            <p className=" text-center py-4">
              @copyright developed by
              <span className="text-brightColor"> Stefan nieuwenburg</span> |
              All rights reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};


