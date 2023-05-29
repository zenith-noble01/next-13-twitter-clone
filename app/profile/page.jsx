"use client";

import { Header, HomeSidebar } from "@components";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-screen flex">
      <div className="profile__container border-x flex-1">
        <Header arrow={true} title="username" />
        <div className="bg-black w-full relative">
          <Image
            width={500}
            height={200}
            alt="username cover picture"
            src="/Images/cover.png"
            className="w-full h-[200px] object-cover"
          />
          <div className="p-1 rounded-full h-[150px] w-[150px] bg-white absolute bottom-[-75px] left-[30px]">
            <Image
              src="/Images/user1.jpg"
              width={150}
              height={150}
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Profile;
