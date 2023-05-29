"use client";

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Header = ({ title, arrow }) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <div className="flex h-[60px] border-b items-center px-8 justify-between transition cursor-pointer sticky top-0 z-10 backdrop-blur-md bg-white/30">
      <div className="header__content flex items-center gap-4">
        {arrow && (
          <BiArrowBack
            className="hover:text-gray-500 transition"
            onClick={handleClick}
          />
        )}{" "}
        <h1>{title && title}</h1>
      </div>
    </div>
  );
};

export default Header;
