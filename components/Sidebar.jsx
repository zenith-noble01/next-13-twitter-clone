import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { sidebarRoutes } from "@constants";

const Sidebar = () => {
  return (
    <div className="w-3/12 border-r min-h-screen py-4">
      <div className="flex flex-col gap-8">
        <div className="logo">
          <FaTwitter className=" text-3xl" />
        </div>
        <ul className="sidebar__routes ">
          {sidebarRoutes.map((route) => (
            <Link href={route.path}>
              <li className=" flex items-center gap-1">
                <route.icon /> <span>{route.name}</span>{" "}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
