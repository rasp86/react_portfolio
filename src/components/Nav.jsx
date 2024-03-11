import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Nav = () => {
  const [click , setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
    <div className="lg:hidden block sbsolute top-16 w-full left-0 right-0 bg-slate-700">
      
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-800 cursor-pointer hover:text-blue-400">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-800 cursor-pointer hover:text-blue-400">About</li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-800 cursor-pointer hover:text-blue-400">Services</li>
          </Link>
          <Link spy={true} smooth={true} to=" Projects">
            <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-800 cursor-pointer hover:text-blue-400">Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="Contacts">
            <li className="my-4 py-4 border-b border-slate-500 hover:bg-slate-800 cursor-pointer hover:text-blue-400">Contacts</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-green-300 glow transition border-b-2 border-none hover:border-green-600 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-green-300 glow transition border-b-2 border-none hover:border-green-600 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-green-300 glow transition border-b-2 border-none hover:border-green-600 cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to=" Projects">
                <li className="hover:text-green-300 glow transition border-b-2 border-none hover:border-green-600 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contacts">
                <li className="hover:text-green-300 glow transition border-b-2 border-none hover:border-green-600 cursor-pointer">Contacts</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
            {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries/> }
        </button>
      </div>
    </nav>
  );
};

export default Nav;
