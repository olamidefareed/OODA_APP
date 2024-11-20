import { lazy } from "react";

const HomePage = lazy(() => import("../pages/main/home"));
const LoginPage = lazy(()=> import("../pages/auth/Login"));
const ResetPasswordPage =lazy(()=>("../pages/auth/reset-password"));

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
  },
  {
    key:"/auth/reset-password",
    component:ResetPasswordPage,
    name : "Reset Password" 
  }
];
