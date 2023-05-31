"use client";

import { colorTypes } from "@constants";
import { useState } from "react";
import { RiDropLine } from "react-icons/ri";

const ColorDisplay = () => {
  const [activeColor, setActiveColor] = useState(0);
  const handleOnClick = (color) => {
    setActiveColor(color);
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium font-2xl">Color</p>
      <div className="color__container flex flex-wrap justify-between gap-2">
        {colorTypes.map((color, index) => (
          <div
            key={color.name}
            className={`
            color h-10 w-10 rounded-full cursor-pointer ${color.bg} flex items-center justify-center text-white
            `}
            onClick={() => handleOnClick(index)}
          >
            {activeColor === index && <RiDropLine size={25} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
