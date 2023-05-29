"use client";

import Image from "next/image";
import React, { useState } from "react";

const Share = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="px-8 py-4 bg-white flex gap-4">
      <div className="user__profile  ">
        <Image
          src="/Images/user1.jpg"
          height={50}
          width={50}
          alt="user profile picture"
          className="rounded-full object-cover object-top max-h-[50px]"
        />
      </div>
      <div className="share__container flex-1 flex flex-col gap-4">
        <div className="share_top border-b flex-1">
          <textarea
            placeholder="Say something..."
            className="border-none outline-none placeholder:text-gray-500 bg-transparent resize-none w-full"
          />
        </div>
        <div className="share_bottom">
          {file && (
            <div className="image__container">
              <Image src={URL.createObjectURL(file)} height={20} width={20} />
            </div>
          )}
          <div className="action__container flex justify-between items-center">
            <label htmlFor="file">
              <input
                type="file"
                name=""
                id="file"
                style={{
                  display: "none",
                }}
              />
              <span>icon</span>
            </label>
            <button className="h-[40px] rounded-[20px] cursor-pointer bg-[#1EA1F2] px-4 text-white">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
