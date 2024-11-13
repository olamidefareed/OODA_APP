import { lazy } from "react";

const HomePage = lazy(() => import("../pages/main/home"));

export const AllRoutes = [
  {
    key: "/",
    component: HomePage,
    name: "Home Page",
  },
];
