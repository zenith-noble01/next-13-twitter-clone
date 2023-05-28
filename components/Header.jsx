import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex h-[60px] border-b items-center px-8 justify-between transition cursor-pointer sticky top-0 z-10 backdrop-blur-sm bg-slate-50/80">
      <h1>{title && title}</h1>
      <p></p>
    </div>
  );
};

export default Header;
