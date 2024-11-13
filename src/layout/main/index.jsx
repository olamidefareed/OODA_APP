import DefaultHeader from "../../components/defaultHeader";
import DefaultFooter from "./../../components/defaultFooter";

/* eslint-disable react/prop-types */
const MainLayout = ({ children }) => {
  return (
    <div className="w-full">
      <DefaultHeader />
      <div className="container">{children}</div>
      <DefaultFooter />
    </div>
  );
};

export default MainLayout;
