"use client";

import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { sidebarRoutes } from "@constants";

const Sidebar = () => {
  return (
    <div className="w-3/12 border-r min-h-screen py-4">
      <div className="flex flex-col gap-8">
        <div className="icon h-[50px] w-[50px] rounded-full flex items-center justify-center  hover:bg-blue-500 cursor-pointer">
          <FaTwitter className="text-3xl text-blue-500" />
        </div>
        <ul className="sidebar__routes">
          {sidebarRoutes.map((route, index) => (
            <Link href={route.path} key={index}>
              <li className="">
                <route.icon className=" text-2xl" /> <span>{route.name}</span>{" "}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
