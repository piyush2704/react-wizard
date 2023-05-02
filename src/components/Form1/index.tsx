import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  

  const Form1: React.FC = () => (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, alignItems: "center",display:"flex", justifyContent: "center" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ max: 63, message: 'Please enter Characters less than 63' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );

  export default Form1;