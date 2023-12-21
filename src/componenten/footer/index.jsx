import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <div id="footer" className="bg-[#f7f7f7] text-black">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className=" w-full md:w-1/4">
            <div className="text-2xl m-2 font-semibold text-black">
              Go4<span className="text-[#d8aa46]">Hair</span>
            </div>
            <p className=" text-sm">
              Met Go4Hair ervaar je de beste haar oplossingen
            </p>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
              Behandelmethodes
            </h1>
            <nav className=" flex flex-col gap-2">
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                behandeling 1
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                behandeling 2
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                behandeling 3
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact</h1>
            <nav className=" flex flex-col gap-2">
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Info
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                WhatsApp
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Afspraak maken
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Media</h1>
            <nav className=" flex flex-col md:items-center gap-2">
              <BsFacebook
                size={25}
                className="hover:text-brightColor transition-all cursor-pointer"
              />
              <RiTwitterXFill
                size={25}
                className=" hover:text-brightColor transition-all cursor-pointer"
              />
              <BsInstagram
                size={25}
                className=" hover:text-brightColor transition-all cursor-pointer"
              />
            </nav>
          </div>
        </div>
        <div>
          <p>
            <p className=" text-center py-4">
              @copyright developed by
              <span className="text-brightColor"> Stefan</span> | All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};


