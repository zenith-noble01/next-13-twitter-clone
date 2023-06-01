"use client";

import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  return <div className={`theme-${theme} bg-skin-fill`}>{children}</div>;
};

export default ThemeWrapper;
