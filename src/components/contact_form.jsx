import { btn_styles } from "./top_menu";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import { useState } from "react";
const { Option } = Select;

const Input_field = (props) => {
  const input_styles =
    "block p-3 outline-none w-[" + props.width + "%] h-" + props.height;
  return (
    <div>
      <p>{props.label}</p>
      <input
        type="text"
        placeholder={props.placeholder}
        className={input_styles}
      />
    </div>
  );
};

const Contact_form = () => {
  return (
    <div className=" bg-gray-300 p-10 ">
      <div className=" flex items-center justify-center ">
        <Input_field width="80" label="First Name" placeholder="First Name" />
        <Input_field width="80" label="Last Name" placeholder="Last Name" />
      </div>
      <Input_field
        width="80"
        label="Email"
        placeholder="makutajosue@gmail.com"
      />
      <Input_field width="80" height="[300px]" label="Comment" placeholder="" />
      <button className={btn_styles + "w-full"}>Send</button>
    </div>
  );
};

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
              </Select>
            )}
          </Form.Item>
        </Col>
      );
    }
    return children;
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <AiOutlineUp /> : <AiOutlineDown />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default AdvancedSearchForm;
