import { Spin } from "antd";

const LoadingState = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200 animate-pulse">
      <Spin size="large" className="animate-spin" />
    </div>
  );
};

export default LoadingState;
