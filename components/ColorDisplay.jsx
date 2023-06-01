"use client";

import { colorTypes } from "@constants";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

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
        color h-10 w-10 rounded-full cursor-pointer flex items-center justify-center text-white ${
          color.bg
        } ${
              index === activeColor
                ? "opacity-100"
                : "opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
            }
      `}
            onClick={() => handleOnClick(index)}
          >
            {index === activeColor && <AiOutlineCheck size={25} />}
            {console.log(color.bg)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
