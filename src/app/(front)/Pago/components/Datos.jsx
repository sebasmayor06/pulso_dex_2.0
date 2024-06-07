"use client";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

import { useForm } from "react-hook-form";
import { Visa, Paypal } from "../utils/icons";

export const Datos = () => {
  const { register, handleSubmit } = useForm();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selected, setSelected] = useState("");

  const handleCheckboxChange = (method) => {
    if (selectedMethod === method) {
      setSelectedMethod(null);
    } else {
      setSelectedMethod(method);
    }

  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <label htmlFor="correoElectronico" className="text-xl font-bold">
        Correo electrónico
      </label>
      <input
        type="text"
        id="correoElectronico"
        name="correoElectronico"
        {...register("correoElectronico")}
        placeholder="Ingrese su correo..."
        className="border rounded-md px-3 py-2"
      />
      <label htmlFor="celular" className="text-xl font-bold">
        Celular
      </label>
      <input
        type="text"
        id="celular"
        name="celular"
        {...register("celular")}
        // plaseholder para ingresar numero?
        placeholder="Ingrese su celular..."
        // placeholder=""
        className="border rounded-md px-3 py-2"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Método de pago</h2>
        <span className="text-blue-500 cursor-pointer">+ Agregar</span>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col md:flex-row gap-4 w-80">
          <label
            className={`flex border-2 rounded-lg  items-center p-4 justify-between  hover:cursor-pointer w-full ${
              selectedMethod === "visa" ? "border-2 border-[#4B7DF3]" : ""
            }`}
            htmlFor="visa"
          >
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                id="visa"
                name="visa"
                checked={selectedMethod === "visa"}
                onChange={() => handleCheckboxChange("visa")}
                className=""
                style={{ borderColor: "black" }} // Cambia 'black' al color que desees
              />
              <div>
                <p className="text-[#111729] text-lg font-bold">**** 8304</p>
                <div htmlFor="visa" className="cursor-pointer ml-2">
                  Visa <span className="text-gray-500">.</span> Edit
                </div>
              </div>
            </div>
            <div className="" dangerouslySetInnerHTML={{ __html: Visa }} />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-80">
          <label
            className={`flex border-2 rounded-lg  items-center p-4 justify-between  hover:cursor-pointer w-full ${
              selectedMethod === "paypal" ? "border-2 border-[#4B7DF3]" : ""
            }`}
            htmlFor="paypal"
          >
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                id="paypal"
                name="paypal"
                checked={selectedMethod === "paypal"}
                onChange={() => handleCheckboxChange("paypal")}
                className="rounded-full"
              />
              <div>
                <p className="text-[#111729] text-lg font-bold">**** 8304</p>
                <div htmlFor="visa" className="cursor-pointer ml-2">
                  Paypal <span className="text-gray-500">.</span> Edit
                </div>
              </div>
            </div>
            <div className="" dangerouslySetInnerHTML={{ __html: Paypal }} />
          </label>
        </div>
      </div>
      <label htmlFor="nombreTarjeta" className="text-xl font-bold">
        Nombre en la tarjeta
      </label>
      <input
        type="text"
        id="nombreTarjeta"
        name="nombreTarjeta"
        placeholder="Ingres su nombre en la tarjeta"
        {...register("nombreTarjeta")}
        className="border rounded-md px-3 py-2"
      />
      <label htmlFor="pais" className="text-xl font-bold">
        País
      </label>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Seleciona tu pais"
      />
      
      <label htmlFor="codigoZip" className="text-xl font-bold">
        Código Zip
      </label>
      <input
        type="text"
        id="codigoZip"
        placeholder="Ingrese su código zip"
        name="codigoZip"
        {...register("codigoZip")}
        className="border rounded-md px-3 py-2"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      />
    </form>
  );
};
