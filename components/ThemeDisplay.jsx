"use client";

import { useState } from "react";
import { themeTypes } from "@constants";
import { RiDropLine } from "react-icons/ri";

const ThemeDisplay = () => {
  const [activeTheme, setActiveTheme] = useState(0);

  const handleOnClick = (index) => {
    setActiveTheme(index);
  };

  console.log(activeTheme);
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium font-2xl">Themes</p>
      <div className="color__container flex flex-wrap justify-between gap-2">
        {themeTypes.map((theme, index) => (
          <div
            key={theme.name}
            className={`theme h-[70px] flex-1 ${theme.bg} flex items-center text-white rounded-md cursor-pointer px-4 gap-4 border-sky-500 border`}
            onClick={() => handleOnClick(index)}
          >
            <div className="h-4 w-4 rounded-full flex items-center justify-center bg-sky-500">
              {activeTheme === index && <RiDropLine size={10} />}
            </div>
            <span className="font-bold">{theme.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeDisplay;
