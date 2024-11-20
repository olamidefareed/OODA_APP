import { Button, Divider, Form, Input } from "antd";
import Logo from "../../../components/logo";

const LoginPage = () => {
  const [form] = Form.useForm();
  return (
    <div className="flex justify-center items-center w-screen h-full">
      <div className="flex flex-col justify-center items-start md:items-center gap-6">
        <div className="px-5">
          <Logo />
        </div>
        <div className="md:border-2 md:border-[#0A0611]/5 rounded-[24px] p-5 md:p-10 flex flex-col justify-center items-center gap-6">
          <h1 className="font-bold text-2xl md:text-[40px] w-full text-left">
            Login your Account!
          </h1>
          <p className=" text-xs md:text-sm w-full text-left">
            Welcome back to Our App once again, we are dedicated to serve you
            better all the time.
          </p>
          <Form
            form={form}
            onFinish={(e) => alert(e.email)}
            className="w-full flex justify-center items-center md:gap-8 flex-col"
          >
            <Form.Item
              label={<span className="font-semibold">Email address:</span>}
              className="w-full"
              layout="vertical"
              name="email"
            >
              <Input
                type="text"
                placeholder="e.g johndoe@gmail.com"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label={<span className="font-semibold">Password:</span>}
              className="w-full"
              layout="vertical"
              name="password"
            >
              <Input.Password size="large" />
            </Form.Item>
            <p className="cursor-pointer font-semibold text-left w-full mb-5 md:mb-0">
              Forgot Password?
            </p>
            <Button
              htmlType="submit"
              className="w-full"
              type="primary"
              size="large"
            >
              Submit
            </Button>
          </Form>
          <Divider className="!m-0 !font-bold !text-xs">
            Or Sign in with
          </Divider>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
