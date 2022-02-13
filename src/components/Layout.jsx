import React from "react";
import classnames from "classnames";
import useTheme from "../hooks/useTheme";

function Layout({ children }) {
  const { type } = useTheme();
  return (
    <div
      className={classnames("layout", {
        dark: type,
      })}
    >
      {children}
    </div>
  );
}

export default Layout;
