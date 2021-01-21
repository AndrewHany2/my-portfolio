import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";

import React from "react";

export const SidebarData = [
  {
    title: "Home",
    path: "#home",
    icon: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/",
    icon: <FcIcons.FcAbout></FcIcons.FcAbout>,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/",
    icon: <FcIcons.FcSelfServiceKiosk></FcIcons.FcSelfServiceKiosk>,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/",
    icon: <FcIcons.FcPackage></FcIcons.FcPackage>,
    cName: "nav-text",
  },
  {
    title: "Work",
    path: "/",
    icon: <FcIcons.FcSelfServiceKiosk></FcIcons.FcSelfServiceKiosk>,
    cName: "nav-text",
  },
];
