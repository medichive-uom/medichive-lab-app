import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


function Upload() {
  return (
    <>
      <h2>Upload Lab Reports</h2>
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Reference Number"
      name="referenceNumber"
      rules={[
        {
          message: 'Please input your Reference Number!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Report type"
      name="reportType"
      rules={[
        {
          message: 'Please input your Report type!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>By uploading lab results, I certify that the lab result is valid and 
authorized by an accredited medical lab</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      
    </>
  );
}

export default Upload;
