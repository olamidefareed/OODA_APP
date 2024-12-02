import { Button, Form, Input } from "antd";
import Logo from "../../../components/logo";

const ChangePassword = () => {
  const [form] = Form.useForm();
  return (
    <div className="flex justify-center items-center w-screen h-full">
      <div className="flex flex-col justify-center items-start md:items-center gap-6">
        <div className="px-5">
          <Logo />
        </div>
        <div className="md:border-2 md:border-[#0A0611]/5 rounded-[24px] p-5 md:p-10 flex flex-col justify-center items-center gap-6">
          <h1 className="font-bold text-2xl md:text-[40px] w-full text-left">
            Change Password!
          </h1>
          <p className=" text-xs md:text-sm w-full text-left">
            Enter a new secure password!
          </p>
          <Form
            form={form}
            onFinish={(e) => alert(e.email)}
            className="w-full flex justify-center items-center md:gap-8 flex-col"
          >
            <Form.Item
              label={<span className="font-semibold">New Password:</span>}
              className="w-full"
              layout="vertical"
              name="password"
            >
              <Input.Password
                placeholder="*****"
                size="large"
                required
              />
            </Form.Item>
            <Form.Item
              label={<span className="font-semibold">Confirm Password:</span>}
              className="w-full"
              layout="vertical"
              name="confirm_password"
            >
              <Input.Password size="large"
              placeholder="*****" />
            </Form.Item>
           
            <Button
              htmlType="submit"
              className="w-full bg-purple text-white"
              size="large"
            >
              Reset Password
            </Button>
            
          </Form>
          
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
