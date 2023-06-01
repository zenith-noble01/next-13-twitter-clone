"use client";

import { useState } from "react";
import { themeTypes } from "@constants";
import { RiDropLine } from "react-icons/ri";

const ThemeDisplay = () => {
  const [activeTheme, setActiveTheme] = useState(themeTypes[0].name);

  const handleOnClick = (name) => {
    setActiveTheme(name);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold font-2xl">Background</p>
      <div className="color__container flex flex-wrap justify-between gap-2">
        {themeTypes.map((theme, index) => (
          <div
            key={index}
            className={`theme h-[70px] flex-1 ${
              theme.bg ? `${theme.bg}` : "bg-[#15202b]"
            }  flex items-center text-white rounded-md cursor-pointer px-4 gap-4 ${
              activeTheme === theme.name && "border-sky-500 border"
            }`}
            onClick={() => handleOnClick(theme.name)}
          >
            <div className="h-4 w-4 rounded-full flex items-center justify-center bg-sky-500">
              {activeTheme === theme.name && <RiDropLine size={10} />}
            </div>
            <span
              className={`font-bold ${
                theme.color ? `text-black` : "text-white"
              } mx-auto`}
            >
              {theme.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeDisplay;
