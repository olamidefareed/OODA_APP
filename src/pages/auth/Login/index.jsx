// const LoginPage = ()=>{
//     return(
//         <div className="p-5">
            

//             <div className="rounded border-2 p-">
//                 <div className="">
//                     <h3>Login your account! </h3>
//                     <p>Welcome back to Our App once again, we are dedicated to serve you better all the time.</p>
//                 </div>
//                 <form action="">
//                     <div className="">
//                     <label htmlFor="username">Enter Username/Email address:</label>
//                     <input type="text" placeholder="Enter your email address"/>
//                     </div>
//                     <div className="">
//                     <label htmlFor="username">Enter Username/Email address:</label>
//                     <input type="text" placeholder="Enter your email address"/> 
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default LoginPage


// import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "50px 20px" }}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
