"use client";

import { ButtonContainer, CustomizeImage, InputContainer } from "@components";
import { useState } from "react";

const Settings = () => {
  const [file, setFile] = useState(null);

  
  return (
    <div className="user__data w-full h-full  justify-center flex">
      <form className="flex flex-col gap-4 w-[70%]  transition-all" onSubmit={handleUpdateUser}>
        <label
          htmlFor="profile"
          className="cursor-pointer hover:bg-zinc-950 transition"
        >
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
        <InputContainer type="text" placeholder="Username" />
        <InputContainer type="email" placeholder="Email" />
        <ButtonContainer type="submit" label="Update" className="" />
      </form>
    </div>
  );
};

export default Settings;
