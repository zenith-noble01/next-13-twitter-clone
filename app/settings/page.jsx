"use client";

import { CustomizeImage } from "@components";
import { useState } from "react";

const Settings = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="user__data w-full h-full  justify-center flex">
      <form className="flex flex-col gap-4">
        <label htmlFor="profile" className="cursor-pointer">
          <CustomizeImage
            alt="profile picture of username"
            src={file ? URL.createObjectURL(file) : "/Images/user1.jpg"}
            width={150}
            height={150}
            className="rounded-full max-h-[150px] object-cover"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              display: "none",
            }}
            id="profile"
          />
        </label>
        <div className="input__container bg-black">
          <input type="text" placeholder="username" />
        </div>
        <div className="input__container">
          <input type="email" placeholder="codeenv@gmail.com" />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default Settings;
