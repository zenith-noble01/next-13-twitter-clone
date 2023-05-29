"use client";

import { Header } from "@components";
import React from "react";

const Settings = () => {
  return (
    <div className="border-x min-h-screen">
      <div className="settings__container">
        <Header arrow={true} title="Settings" />
      </div>
    </div>
  );
};

export default Settings;
