import Image from "next/image";
import React from "react";

const Share = () => {
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
        <div className="share_bottom flex justify-between items-center">
          <p>icon</p>
          <button className="h-[40px] rounded-[20px] cursor-pointer bg-[#1EA1F2] px-4 text-white">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
