import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { CgMail } from "react-icons/cg";
export const Footer = () => {
  return (
    <>
      <div id="footer" className="bg-[#f7f7f7] text-black">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className=" w-full md:w-1/4">
            <div className="py-20 text-3xl font-semibold text-black">
              Go4<span className="text-[#d8aa46]">Hair</span>
            </div>
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
                Email
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
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-2">Media</h1>
            <nav className=" flex flex-col items-start md:items-center gap-2">
              <BsFacebook
                size={30}
                className="hover:cursor-pointer"
                style={{ color: "blue" }}
              />
              <ImWhatsapp
                className="hover:cursor-pointer"
                size={30}
                style={{ color: "Green" }}
              />
              <CgMail
                className="hover:cursor-pointer"
                size={30}
                style={{ color: "Red" }}
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


