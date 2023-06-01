"use client";

import { colorTypes } from "@constants";
import { useState } from "react";
import { RiDropLine } from "react-icons/ri";

const ColorDisplay = () => {
  const [activeColor, setActiveColor] = useState(colorTypes[0].name);
  const handleOnClick = (color) => {
    setActiveColor(color);
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold font-2xl">Color</p>
      <div className="color__container flex flex-wrap justify-between gap-2">
        {colorTypes.map((color, index) => (
          <div
            key={index}
            className={`
            color h-10 w-10 rounded-full cursor-pointer bg-${color.name}-500 bg-black flex items-center justify-center text-white
            `}
            onClick={() => handleOnClick(color.name)}
          >
            {activeColor === color.name && <RiDropLine size={25} />}
            <span className={`text-${color.name}-500`}>{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
