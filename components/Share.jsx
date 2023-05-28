import Image from "next/image";
import React from "react";

const Share = () => {
  return (
    <div className="px-8 py-4 bg-slate-200">
      <div className="user__profile flex">
        <Image
          src="/Images/user1.jpg"
          height={50}
          width={50}
          alt="user profile picture"
          className="rounded-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Share;
