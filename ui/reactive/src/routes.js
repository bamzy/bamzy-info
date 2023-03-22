import React from "react";

import { Icon } from "@chakra-ui/react";
import {MdBarChart, MdPerson, MdHome, MdLock} from "react-icons/md";
import {GiNewspaper} from 'react-icons/gi'
import {RiGalleryFill} from 'react-icons/ri'
// Admin Imports
import MainDashboard from "views/admin/default";
import GraphGallery from "views/admin/graphGallery";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
const sidebarIconSize = '30px';
const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={GiNewspaper} width={sidebarIconSize} height={sidebarIconSize} color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Graph Gallery",
    layout: "/admin",
    path: "/graph-gallery",
    icon: <Icon as={RiGalleryFill} width={sidebarIconSize} height={sidebarIconSize} color='inherit' />,
    component: GraphGallery,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width={sidebarIconSize} height={sidebarIconSize} color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "About Creator",
    layout: "/admin",
    path: "/creator",
    icon: <Icon as={MdPerson} width={sidebarIconSize} height={sidebarIconSize} color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width={sidebarIconSize} height={sidebarIconSize} color='inherit' />,
    component: SignInCentered,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width={sidebarIconSize} height={sidebarIconSize} color='inherit' />,
  //   component: RTL,
  // },
];

export default routes;
