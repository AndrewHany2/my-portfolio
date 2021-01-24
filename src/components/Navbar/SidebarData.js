import * as FcIcons from "react-icons/fc";

import React from "react";

export const SidebarData = [
  {
    title: "Home",
    path: "home",
    icon: <FcIcons.FcHome size={25}></FcIcons.FcHome>,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "about",
    icon: <FcIcons.FcAbout size={25}></FcIcons.FcAbout>,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "services",
    icon: <FcIcons.FcSelfServiceKiosk size={25}></FcIcons.FcSelfServiceKiosk>,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "resume",
    icon: <FcIcons.FcPackage size={25}></FcIcons.FcPackage>,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "contact",
    icon: <FcIcons.FcBusinessContact size={25}></FcIcons.FcBusinessContact>,
    cName: "nav-text",
  },
];
