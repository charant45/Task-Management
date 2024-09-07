import React from "react";
import logo from "../assets/logo/360x360.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center self-stretch p-4 bg-white">
      <div className="flex flex-col items-center w-20">
        <img className="w-full h-auto" alt="Logo" src={logo} />
        <a 
          href="#" 
          className="relative w-full font-extrabold text-black" 
          style={{ fontSize: '18px', letterSpacing: '0', lineHeight: 'normal', whiteSpace: 'nowrap', fontWeight: 800, marginTop: '-6px' }}>
          INFINITY
        </a>
      </div>
    </header>
  );
};

export default Header;