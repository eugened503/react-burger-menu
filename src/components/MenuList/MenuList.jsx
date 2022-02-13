import React, { useState } from "react";
import "./MenuList.scss";
import { SidebarData } from "../../data/SidebarData";
import SubMenu from "../SubMenu/SubMenu";
import { ReactComponent as Plus } from "../../images/plus.svg";

function MenuList({ sidebar }) {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div className="menu-list">
        <div className="menu-list__border">
          <div className="menu-list__input">
            <input
              type="text"
              placeholder={sidebar ? "" : "Search"}
              value={sidebar ? "" : inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <nav>
            <ul className="menu-list__items">
              {SidebarData.slice(0, -1).map((item) => {
                return <SubMenu item={item} key={item.id} sidebar={sidebar} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="menu-list">
        <div className="menu-list__border menu-list__border_none">
          <nav>
            <ul className="menu-list__items menu-list__items_pading">
              {SidebarData.slice(5).map((item) => {
                return <SubMenu item={item} key={item.id} sidebar={sidebar} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="menu-list">
        <button type="button" className="menu-list__button">
          <span>
            <Plus />
          </span>
          <span className="menu-list__title">Создать проект</span>
        </button>
      </div>
    </>
  );
}

export default MenuList;
