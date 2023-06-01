"use client";

import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  // const theme = useSelector((state) => state.theme);
  return <div className={``}>{children}</div>;
};

export default ThemeWrapper;
