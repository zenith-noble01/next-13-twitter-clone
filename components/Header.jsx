import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex h-[60px] border-b items-center px-8 justify-between transition hover:bg-black text-cyan-400 hover:text-gray-500 cursor-pointer">
      <h1>{title && title}</h1>
      <p>another header</p>
    </div>
  );
};

export default Header;
