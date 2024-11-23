import { lazy } from "react";

const HomePage = lazy(() => import("../pages/main/home"));
const LoginPage = lazy(()=> import("../pages/auth/Login"));
const CreateAccountPage = lazy(()=> import("../pages/auth/Create-account"))
const ResetPasswordPage =lazy(()=>("../pages/auth/reset-password"));
const ChangePasswordPage = lazy(()=> import("../pages/auth/Change-password"));

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
    key:"/auth/create-account",
    component: CreateAccountPage,
    name : "Create-account Page"},
  {
    key:"/auth/reset-password",
    component:ResetPasswordPage,
    name : "Reset Password" 
  },
  {
    key: "/auth/change-password",
    component: ChangePasswordPage,
    name: "Change Password",
  }
];
