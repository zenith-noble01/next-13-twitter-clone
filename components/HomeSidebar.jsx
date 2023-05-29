import { usersToFollow } from "@constants";
import Image from "next/image";

const HomeSidebar = () => {
  return (
    <div className="w-[30%] pl-8 py-4">
      <div className="flex flex-col h-fit w-full  bg-gray-200/30 rounded-2xl sticky top-4">
        <h1 className=" text-2xl p-2">Who to follow</h1>

        <div className="flex flex-col w-full ">
          {usersToFollow.map((user, index) => (
            <div
              className="flex flex-row w-full items-center p-2 justify-between"
              key={index}
            >
              <div className="flex items-center gap-2 ">
                <Image
                  src={user.profilePic}
                  height={50}
                  width={50}
                  alt="users to follow in the app"
                  className="w-[50px] h-[50px] rounded-full object-cover object-top"
                />
                <p className="flex flex-col">
                  {user.name}
                  <span className="text-gray-400">@{user.username}</span>
                </p>
              </div>

              <button className="h-[40px] px-[20px] rounded-[20px] capitalize border-[#1EA1F2] border text-[#1EA1F2] hover:bg-[#1EA1F2] hover:text-white transition-all">
                follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
