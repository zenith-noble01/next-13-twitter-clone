"use client";

import { Header } from "@components";

const Notification = () => {
  return (
    <div className="border-x min-h-screen">
      <div className="settings__container">
        <Header arrow={true} title="Notifications" />
      </div>
    </div>
  );
};

export default Notification;
