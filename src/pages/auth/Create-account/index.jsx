import { Button, Select,  Form, Input } from "antd";
import Logo from "../../../components/logo";

const CreateAccount = () => {
  const [form] = Form.useForm();
  return (
    <div className="flex justify-center items-center w-screen h-full">
      <div className="flex flex-col justify-center items-start md:items-center gap-6">
        <div className="px-5">
          <Logo />
        </div>
        <div className="md:border-2 md:border-[#0A0611]/5 rounded-[24px] p-5 md:p-10 flex flex-col justify-center items-center gap-6">
          <h1 className="font-bold text-2xl md:text-[40px] w-full text-left">
            Create an Account!
          </h1>
          <p className=" text-xs md:text-sm w-full max-w-md text-left">
            Welcome to our app where buying and selling of gadgets is being
            simplified with cool user experience. Kindly fill in the details to
            create an account
          </p>
          <Form
            form={form}
            onFinish={(e) => alert(e.email)}
            className="w-full flex justify-center items-center md:gap-8 flex-col"
          >
            <Form.Item
              label={<span className="font-semibold">Enter Full name:</span>}
              className="w-full"
              layout="vertical"
              name="full name"
            >
              <Input type="text" placeholder="e.g John Doe" size="large" required/>
            </Form.Item>
            <Form.Item
              label={
                <span className="font-semibold">Enter Email Address:</span>
              }
              className="w-full"
              layout="vertical"
              name="email"
            >
              <Input
                type="text"
                size="large"
                placeholder="e.g johndoe@gmail.com"
                required
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-semibold">Create Username:</span>
              }
              className="w-full"
              layout="vertical"
              name="username"
            >
              <Input
                type="text"
                size="large"
                placeholder="e.g johndoe"
                required
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-semibold">User Role:</span>
              }
              className="w-full"
              layout="vertical"
              name="user role"
            >
              <Select options={[{ value: 'customer', label: <span>Customer</span>  } , { value: 'Salesman', label: <span>Salesman</span>  } ]} placeholder='customer' />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-semibold">Create Password:</span>
              }
              className="w-full"
              layout="vertical"
              name="password"
            >
              <Input.Password
                type="text"
                size="large"
                required
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-semibold">Confirm Password:</span>
              }
              className="w-full"
              layout="vertical"
              name="password"
            >
              <Input.Password
                type="text"
                size="large"
                placeholder="*****"
                required
              />
            </Form.Item>
           
            <Button
              htmlType="submit"
              className="w-full bg-purple hover:bg-purple-600"
              type="primary"
              size="large"
            >
              Create Account
            </Button>
          </Form>
         <p className="font-semibold">Already have an account? <span className="text-purple">Login account.</span></p>
        </div>
      </div>
    </div>
  );
};


export default CreateAccount;
