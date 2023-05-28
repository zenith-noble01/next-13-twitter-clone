import { Header, HomeSidebar, Share } from "@components";
import React from "react";

const Home = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="home__preview border-x w-3/5">
        <Header title="Home" />
        <Share />
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Home;
