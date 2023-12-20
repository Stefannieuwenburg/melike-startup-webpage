import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavMenu = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Haartransplantatie",
    },
    {
      id: 2,
      link: "Behandelmethodes",
    },
    {
      id: 3,
      link: "Hoe helpen wij",
    },
    {
      id: 4,
      link: "Afspraak maken",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="relative flex justify-between items-center w-full h-20 px-4 text-white bg-[#210e20]">
      <div>
        <h1 className="text-2xl ml-2 text-[#e0a96d]">Go4Hair</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-l cursor-pointer capitalize text-primary-300 hover:underline"
          >
            <Link className="hover:text-white" to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-black text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:underline"
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


