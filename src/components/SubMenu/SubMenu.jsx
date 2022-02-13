import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SubMenu.scss";

function SubMenu({ item, sidebar }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <li className={sidebar ? "link active" : "link"}>
      <NavLink
        className="link__top-link"
        activeclassname="link__top-link active"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <span className="link__icon">{item.icon}</span>
        {item.notice && sidebar && <div className="link__notice-wrap" />}
        <span className="link__label">{item.title}</span>
        {item.notice && <span className="link__notice" />}
      </NavLink>
      {subnav &&
        item.subNav.map((item) => {
          return (
            <NavLink
              className="link__dropdown-link"
              activeclassname="link__dropdown-link active"
              to={item.path}
              key={item.id}
            >
              <span className="link__dropdown-icon">{item.icon}</span>
              <span className="link__dropdown-label">{item.title}</span>
            </NavLink>
          );
        })}
    </li>
  );
}

export default SubMenu;
