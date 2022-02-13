import React from "react";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as List } from "../images/list.svg";
import { ReactComponent as Activity } from "../images/activity.svg";
import { ReactComponent as Users } from "../images/users.svg";
import { ReactComponent as RecPurple } from "../images/rec-purple.svg";
import { ReactComponent as RecLime } from "../images/rec-lime.svg";
import { ReactComponent as RecPink } from "../images/rec-pink.svg";

const home = React.createElement(Home);
const inbox = React.createElement(Inbox);
const list = React.createElement(List);
const activity = React.createElement(Activity);
const users = React.createElement(Users);
const recPurple = React.createElement(RecPurple);
const recLime = React.createElement(RecLime);
const recPink = React.createElement(RecPink);

export const SidebarData = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    icon: home,
  },

  {
    id: 2,
    title: "Входящие",
    path: "/incoming",
    icon: inbox,
    notice: true,
  },

  {
    id: 3,
    title: "Задачи",
    path: "/tasks",
    icon: list,
  },

  {
    id: 4,
    title: "Активность",
    path: "/activity",
    icon: activity,
  },

  {
    id: 5,
    title: "Команда",
    path: "/team",
    icon: users,
  },
  {
    id: 6,
    title: "Проекты",
    path: "/projects",
    icon: home,

    subNav: [
      {
        id: 6.1,
        title: "Дизайн",
        path: "/projects/design",
        icon: recPurple,
        cName: "sub-nav",
      },
      {
        id: 6.2,
        title: "Веб",
        path: "/projects/web",
        icon: recLime,
        cName: "sub-nav",
      },
      {
        id: 6.3,
        title: "Редактура",
        path: "/projects/editing",
        icon: recPink,
        cName: "sub-nav",
      },
    ],
  },
];
