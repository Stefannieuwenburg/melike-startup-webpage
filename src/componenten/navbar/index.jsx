import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Data } from "./data"
export const NavMenu = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="relative flex justify-between items-center w-full h-20 px-4 text-black bg-[#fcfcfc] border-b-2 border-[#d8aa46] ">
      <div>
        {/* <img src={logo} alt="logo" className=" object-fill h-20" /> */}
        <div className="text-3xl ml-2 font-semibold text-black">
          Go4<span className="text-[#d8aa46]">Hair</span>
        </div>
      </div>

      <ul className="hidden md:flex">
        {Data.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-lg cursor-pointer capitalize text-primary-300 hover:underline"
          >
            <Link className="hover:text-black font-semibold" to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-[#f7f7f7] text-black">
          {Data.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:underline "
            >
              <Link
                className="hover:text-black"
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


