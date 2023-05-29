"use client";

import { Header } from "@components";

const Profile = () => {
  return (
    <div className="border-x min-h-screen">
      <div className="settings__container">
        <Header arrow={true} title="username" />
      </div>
    </div>
  );
};

export default Profile;
