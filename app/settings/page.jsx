"use client";

import { Header } from "@components";
import React from "react";
import { settingsRoutes } from "@constants";

const Settings = () => {
  return (
    <div className="border-x min-h-screen flex flex-col">
      <div className="settings__container">
        <Header arrow={true} title="Settings" />
      </div>
      <div className="setting__content flex w-full flex-1">
        <div className="content__route border-r w-3/12">
          {settingsRoutes.map((route, index) => (
            <Link href={route.path} className="">
              {route.name}
            </Link>
          ))}
        </div>
        <div className="display border-r w-3/4">content</div>
      </div>
    </div>
  );
};

export default Settings;
