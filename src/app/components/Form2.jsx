import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input, Select, Spin } from "antd";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export default function Form2({ isVisible, onClose }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

 
  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/usuario', values);
      console.log("Usuario creado con éxito", response.data);
      setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2000);
    } catch (error) {
      console.log("Error al crear el usuario", error.response || error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="57">+57</Option>
        <Option value="56">+56</Option>
      </Select>
    </Form.Item>
  );

  if (!isVisible) return null;

  return (
    <div
      className={`modal_overlay fixed inset-0 bg-gray-600 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 `}
    >
      <div
        className={`modal w-[300px] md:w-[600px] flex flex-col ${
          isVisible
            ? "animate-fade-down animate-once animate-ease-linear animate-duration-300"
            : "hidden"
        }  `}
      >
        
        <div className="bg-white text-black p-4 rounded">
          <span className="font-bold">
            Agenda una cita y experimenta el potencial del comercio electrónico
          </span>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ prefix: "57" }}
            style={{ maxWidth: 600, margin: 20 }}
            scrollToFirstError
          >
            <Form.Item
              name="correo"
              label="Correo Electronico"
              rules={[
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Please input your E-mail!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="nombre"
              label="Nombre Completo"
              rules={[
                {
                  required: true,
                  message: "Porfavor ingresa tu Nombre Completo",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="numero"
              label="Telefono"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} >
              <div className="flex flex-row justify-between items-center">
                
              <Button
                className=" bg-verdeButtom text-black font-semibold"
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                {loading ? "Loading" : "Register"}
              </Button>
              <Button onClick={()=>onClose()} className="bg-red-500 text-black font-semibold hover:bg-red-300 ">Cerrar</Button>
              </div>
              
            </Form.Item>
          </Form>
        </div>
      {showSuccessAlert && ( // Mostrar el Alert si showSuccessAlert es true
          <div className="fixed top-10 right-10 z-50">
            <Alert message='Datos Enviados Exitosamente!!!' type="success" />
          </div>
        )}
      </div>
    </div>
  );
}
