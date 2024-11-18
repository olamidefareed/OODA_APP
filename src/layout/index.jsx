/* eslint-disable react/prop-types */

import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthLayout from "./auth/index";
import MainLayout from "./main/index";

const Layouts = {
  auth: AuthLayout,
  main: MainLayout,
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [pPath, setPPath] = useState(document.referrer);

  const currentPath = pathname;
  if (currentPath !== pPath) {
    window.scrollTo(0, 0);
  }

  setTimeout(() => {
    setPPath(currentPath);
  }, 3000);

  const getLayout = () => {
    if (/^\/auth(?=)/i.test(pathname)) return "auth";
    if (/^\/main(?=\$)/i.test(pathname)) return "main";
    return "main";
  };

  const Container = Layouts[getLayout()];
  Layout["auth"]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <main>
        <Container>{children}</Container>
      </main>
    </Fragment>
  );
};

export default Layout;
