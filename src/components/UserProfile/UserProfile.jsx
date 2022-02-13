import React from "react";
import "./UserProfile.scss";
import { ReactComponent as Points } from "../../images/more-vertical.svg";
import avatar from "../../images/avatar.png";

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="user-profile__body">
        <div className="user-profile__avatar">
          <img src={avatar} alt="avatar" />
          <div className="user-profile__circle" />
        </div>
        <div className="user-profile__info">
          <h3>Михаил Воробьев</h3>
          <p>Разработчик</p>
        </div>
      </div>
      <Points />
    </div>
  );
}

export default UserProfile;
