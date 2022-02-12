import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between p-4 md:justify-center">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex">
        {["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="mx-4 cursor-pointer rounded-full bg-[#2952e3] py-2 px-7 hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      {/* for mobile devices */}
      <div className="relative flex">
        {toggleMenu
        ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
        : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>}
        { toggleMenu && (
          <ul>  
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
