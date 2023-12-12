
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLinks } from "./data";
import Logo from "../../assets/logos/logo.jpg";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-40 bg-gradient-to-bl from-gray-700 to-black ">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="logo"
          className="rounded-2xl object-cover h-40 w-40 hover:-translate-y-1 hover:scale-110 hover:duration-300"
        />
      </div>
      <ul className="hidden md:flex">
        {NavLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-amber-200 py-6 text-2xl font-mono cursor-pointer capitalize text-primary-300  "
          >
            <Link
              className="hover:text-[#9b7d3e] font-semibold"
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
        <button className="bg-[#9b7d3e] m-4 rounded-2xl p-2 text-gray-800 font-bold font-sans cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-300">
          Get Started
        </button>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#9b7d3e] md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-700 to-black text-[#9b7d3e]">
          <img src={Logo} alt="logo" className=" rounded-2xl w-13 h-13" />
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                className="hover:text-white"
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


