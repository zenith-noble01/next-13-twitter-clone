"use client";

import { Header, HomeSidebar } from "@components";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-screen flex">
      <div className="profile__container border-x flex-1">
        <Header arrow={true} title="username" />
        <div className="relative bg-black">
          <Image
            width={50}
            height={50}
            alt="username cover picture"
            src="/Images/cover.png"
            className="w-full h-[200px] object-cover"
          />
        </div>
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Profile;
