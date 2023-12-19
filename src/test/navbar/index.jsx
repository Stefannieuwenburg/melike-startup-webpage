
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLinks } from "./data";
import logo from "../../assets/logos/Logo.png";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 bg-neutral-100 rounded-xl ">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="rounded-4xl object-fill h-20 " />
      </div>
      <ul className="hidden md:flex">
        {NavLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-neutral-600 py-6 text-xl font-[Poppins] cursor-pointer capitalize text-primary-300  "
          >
            <Link className="hover:text-[#ddc3a5] font-semibold" to={link}>
              {link}
            </Link>
          </li>
        ))}
        <Link
          to="/Afspraak"
          className="flex items-center bg-[#DDC3A5]  m-4 rounded-2xl p-1 text-gray-800 font-semibold font-[Poppins] cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-300"
        >
          Ga starten
        </Link>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#9b7d3e] md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-[#9b7d3e]">
          <img src={logo} alt="logo" className=" rounded-2xl w-13 h-13" />
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                className="hover:text-white"
                onClick={() => setNav(!nav)}
                to={link}
              >
                {link}
              </Link>
            </li>
          ))}
          <Link
            to="/Afspraak"
            className="flex items-center bg-[#f0c058] mt-4 rounded-2xl p-2 text-gray-800 font-bold font-[Poppins] cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            Ga starten
          </Link>
        </ul>
      )}
    </div>
  );
};


