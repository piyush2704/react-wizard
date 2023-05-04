
import * as React from 'react';
import { Divider, Form, Input } from "antd";
import { CustomizedFormProps } from '../ui/Wizard/type';


const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  padding: 10,
  lineHeight: "120px",
};



const Form1: React.FC<CustomizedFormProps> = ({ onChange, fields }) => {
  const [name, setName] = React.useState('')
  
  return (
  <>
    <Divider />
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={contentStyle}
      fields={fields}
      onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
    >
      <Form.Item
        label="Name"
        name="name"
        style={{ width: 600 }}
        
        rules={[{ max: 63, message: "Please enter Characters less than 63" }]}
      >
        <Input onChange={(e) => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Description" name="description" style={{ width: 600 }}>
        <Input.TextArea />
      </Form.Item>
    </Form>
  </>
)};

export default Form1;
