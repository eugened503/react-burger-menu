import React, { useState } from "react";
import "./Navbar.scss";
import NavHeader from "../NavHeader/NavHeader";
import MenuList from "../MenuList/MenuList";
import UserProfile from "../UserProfile/UserProfile";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? "nav-menu active" : "nav-menu"}>
      <div className="nav-menu__container">
        <NavHeader showSidebar={showSidebar} />
        <MenuList sidebar={sidebar} />
        <UserProfile />
      </div>
    </div>
  );
}

export default Navbar;
