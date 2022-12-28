import { Button, Form, Input, InputNumber ,message, Space } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const showError = (errorMessager:string) => {
  message.error(errorMessager);
};

function SignUp() {
  const navigate = useNavigate()
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = async (values: any) => {
    try {
      await api.post('/users/register',values)
      navigate('/login')
    } catch (error) {
      console.log({error});
      showError((error as any).response.data.errorMessage)
    }
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h2 style={{textAlign :"center",marginBottom :"40px"}}>Register</h2>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true,message: 'Please input username username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email",required:true ,message: 'Please input your email!'}]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' ,min:6}]}
      >
        <Input.Password />
      </Form.Item>
     
      <Form.Item name="fullname" label="Fullname" rules={[{message: 'Please input your fullname!'}]}>
        <Input />
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignUp;

