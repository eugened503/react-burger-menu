import React from "react";
import "./NavHeader.scss";
import { ReactComponent as NavBtn } from "../../images/nav-btn.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";

function NavHeader({ showSidebar }) {
  return (
    <div className="nav-header">
      <button
        type="button"
        className="nav-header__button"
        onClick={showSidebar}
      >
        <NavBtn />
      </button>
      <div className="nav-header__logo">
        <Logo />
      </div>
    </div>
  );
}

export default NavHeader;
