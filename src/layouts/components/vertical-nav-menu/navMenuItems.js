/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import { ChartType } from "ag-grid-community";
import {
  chat,
  dashboard,
  explore,
  money,
  order,
  settings,
  tractor,
  wallet,
} from "../../../assets/images/navbar/icons/icons";

import store from "../../../store/store";

var accountType = "personal";
if (accountType === "personal") {
  var accountTypeRoute = "user";
}
console.log(store, accountTypeRoute);

export default [
  {
    url: "",
    name: "Dashboard",
    slug: "home",
    icon: dashboard,
  },
  {
    url: `/${accountTypeRoute}/explore-organization`,
    name: "Explore Organization",
    slug: "",
    icon: explore,
  },
  {
    url: `/${accountTypeRoute}/wallet`,
    name: `${accountTypeRoute === "user" ? `Wallet` : `Treasury`}`,
    slug: "",
    icon: wallet,
  },
  {
    url: `/${accountTypeRoute}/yield-farm`,
    name: "Yield Farm",
    slug: "",
    icon: tractor,
  },
  {
    url: "",
    name: "Connect",
    slug: "",
    icon: chat,
  },
  {
    url: "",
    name: "Judiciary",
    slug: "",
    icon: order,
  },
  {
    url: "",
    name: "Donations",
    slug: "",
    icon: money,
  },
  {
    url: "",
    name: "Settings",
    slug: "",
    icon: settings,
  },
];
