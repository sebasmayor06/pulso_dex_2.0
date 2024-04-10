"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Form3() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div ref={ref} className="overflow-x-hidden shadow-xl bg-white">
      <div className="flex flex-col justify-center items-center w-screen h-[750px] overflow-hidden left-0 bg-white gap-5">
        <div className="flex justify-center items-center h-[20%] mb-10">
          <div className="flex flex-row w-full gap-5 mt-32">
            <div className="bg-azulInicio w-60 h-44 rounded-3xl flex justify-center items-center">
              <div className="bg-white w-52 h-36 rounded-3xl p-2">
                <button className="h-8 w-24 rounded-full m-2 bg-azulInicio font-bold text-sm">
                <a href="mailto:info@pulsodex.com.co" >Escríbenos</a>
                </button>
                <div className="border-2 border-gray-300 w-[70%] opacity-20 ml-6 mb-2"></div>
                <div className="flex justify-start items-center gap-2">

                <Image src="/carta.png" alt="logo" width={25} height={25} />
                <span className="font-bold text-sm">Email</span>
                </div>
                <div className="flex justify-center items-center">

                <span className="text-texto text-xs">info@pulsodex.com.co</span>
                </div>
              </div>
            </div>
            <div className="bg-aguaMarina w-60 h-44 rounded-3xl flex justify-center items-center">
              <div className="bg-white w-52 h-36 rounded-3xl p-2">
                <button className="h-8 w-24 rounded-full m-2 bg-aguaMarina font-bold text-sm">
                <a href="https://wa.me/+573123456789" >Llámanos</a>
                </button>
                <div className="border-2 border-gray-300 w-[70%] opacity-20  ml-6 mb-2"></div>
                <div className="flex flex-row justify-start items-start gap-2">

                <Image src="/telefono.png" alt="logo" width={22} height={22} />
                <span className="font-bold text-sm">Telefono</span>
                </div>
                <div className="flex justify-center items-center">

                <span className="text-texto text-xs">+57 312 3456789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-[80%]">
          <div className="bg-azulInicio p-6 rounded-3xl ">
            <Form
              labelAlign="top" // Coloca las etiquetas encima de los campos de entrada
              labelCol={{ span: 24 }} // Usa todo el ancho disponible para las etiquetas
              validateMessages={validateMessages}
            >
              <div className="grid grid-cols-2 gap-5">
                <Form.Item
                  label="Nombre Completo"
                  name="nombreCompleto"
                  rules={[{ required: true, message: "Este campo es requerido" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Este campo es requerido",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Pais"
                  name="pais"
                  rules={[{ required: true, message: "Este campo es requerido" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Ciudad"
                  name="ciudad"
                  rules={[{ required: true, message: "Este campo es requerido" }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Preguntas"
                  name="preguntas"
                  rules={[{ required: true, message: "Este campo es requerido" }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </div>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit" className="bg-black text-white ml-16 font-bold">
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
