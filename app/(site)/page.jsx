import { Header, HomeSidebar, Posts, Share } from "@components";
import React from "react";

const Home = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="home__preview border-x w-[70%]">
        <Header title="Home" />
        <Share />
        <Posts />
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Home;
