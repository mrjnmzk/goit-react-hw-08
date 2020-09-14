import { lazy } from "react";


export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("../pages/Home")),
    private: false,
    restricted: false
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import(`../Components/AuthForm/AuthForm.js`)),
    private: false,
    restricted: true
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import(`../Components/AuthForm/AuthForm.js`)),
    private: false,
    restricted: true
  },

  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("../Components/main/Main")),
    private: true,
    restricted: false
  }
];
