import React from "react";
import logo from "../assets/logo.svg";
import FontSelector from "./FontSelector";
import ColorMode from "./ColorMode";

const Navbar = () => {
  return (
    <nav className='pt-5 pb-8 flex justify-between mx-auto mt-8'>
      <img src={logo} alt='logo' className='ml-3' />
      <div className='flex space-x-10 mr-3'>
        <FontSelector />
        <ColorMode />
      </div>
    </nav>
  );
};

export default Navbar;
