import { Header } from "@components";
import { settingsRoutes } from "@constants";
import "@styles/globals.css";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export const metadata = {
  title: "Settings",
  description: "The official twitter clone for youtube tutorials",
};

export default function SettingsLayout({ children }) {
  return (
    <div className="w-full border-x min-h-screen flex flex-col">
      <Header title="Settings" arrow />
      <div className="settings__container flex-1 flex">
        <div className="settings__sidabar border-r w-[30%]">
          <ul className="sidebar__routes list-none flex flex-col">
            {settingsRoutes.map((route, index) => (
              <Link href={route.path} key={index}>
                <li className="h-[40px] w-full flex items-center justify-between px-4 transition-all hover:bg-gray-200/30 cursor-pointer capitalize">
                  {route.name}
                  <span>
                    <BiChevronRight />
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="settings__content w-[70%] p-4">{children}</div>
      </div>
    </div>
  );
}
