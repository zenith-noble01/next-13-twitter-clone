"use client";

import { Header } from "@components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@redux/slice/CounterSlice";

const Settings = () => {
  const count = useSelector((state) => state.count.value);

  const dispatch = useDispatch();

  return (
    <div className="border-x min-h-screen">
      <div className="settings__container">
        <Header arrow={true} title="Settings" />
      </div>
      <div className="setting__content flex">
        <div className="content__route"></div>
        <div className="display"></div>
      </div>
    </div>
  );
};

export default Settings;
