import { lazy } from "react";

const HomePage = lazy(() => import("../pages/main/home"));
const LoginPage = lazy(()=> import("../pages/auth/Login"))

export const AllRoutes = [
  // Main pages
  {
    key: "/",
    component: HomePage,
    name: "Home Page",
  },

  // Auth pages
  {
    key:"/auth/login",
    component: LoginPage,
    name : "Login Page"
  }
];
