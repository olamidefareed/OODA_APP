import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoadingState from "../components/loading";
import Layout from "./../layout/index";
import { AllRoutes } from "./route";

const CustomRouter = () => {
  return (
    <Layout>
      <Routes>
        {AllRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.key}
            element={
              <Suspense fallback={<LoadingState />}>
                {<route.component />}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Layout>
  );
};

export default CustomRouter;
