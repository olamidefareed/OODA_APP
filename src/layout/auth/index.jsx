/* eslint-disable react/prop-types */

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      {children}
    </div>
  );
};

export default AuthLayout;
