import React from "react";
import logo from "../assets/logo.svg";
import FontSelector from "./FontSelector";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt='logo' />
      <div className=''>
        <FontSelector />
      </div>
    </nav>
  );
};

export default Navbar;
