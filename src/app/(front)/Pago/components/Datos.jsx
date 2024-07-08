"use client";
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useForm } from "react-hook-form";
import { Visa, LogoPaypal } from "../utils/icons";
import useFranquisia from "../../../../store/payment/franquisia";
import { CardButtonPaypal } from "./CardButtonPaypal";
import data from "../../components/Beneficios/dataCardsBeneficios";

export const Datos = () => {
  const { modo, total } = useFranquisia();
  const { register, handleSubmit, setValue } = useForm();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedModal, setSelectedModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleCheckboxChange = (method) => {
    const newMethod = selectedMethod === method ? null : method;
    setSelectedMethod(newMethod);
    setValue("medioDePago", newMethod);
  };

  const onCountrySelect = (code) => {
    setSelectedCountry(code);
    setValue("pais", code);
  };

  const onSubmit = async (data) => {
    data = { ...data, total, modo };
    setEmail(data.email);
    const res = await fetch("/api/form-paymet", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataRes = await res.json();

    setSelectedModal(true);
  };

  const southAmericaCountries = [
    "AR",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "GY",
    "PY",
    "PE",
    "SR",
    "UY",
    "VE",
  ];

  useEffect(() => {
    if (selectedModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedModal]);
  return (
    <div
      className={`relative flex items-center justify-center ${selectedModal}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <label htmlFor="email" className="text-xl font-bold">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Ingrese su correo..."
          className="border rounded-md px-3 py-2"
        />

        <label htmlFor="celular" className="text-xl font-bold">
          Celular
        </label>
        <input
          type="tel"
          id="celular"
          name="celular"
          {...register("celular", { required: true })}
          placeholder="Ingrese su celular..."
          className="border rounded-md px-3 py-2"
        />

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Método de pago</h2>
          <span className="text-blue-500 cursor-pointer">+ Agregar</span>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col md:flex-row gap-4 w-80">
            <label
              className={`flex border-2 rounded-lg items-center p-4 justify-between hover:cursor-pointer w-full ${
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
                />
                <div>
                  <p className="text-[#111729] text-lg font-bold">**** 8304</p>
                  <div className="cursor-pointer ml-2">
                    Visa <span className="text-gray-500">.</span> Edit
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: Visa }} />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-80">
            <label
              className={`flex border-2 rounded-lg items-center p-4 justify-between hover:cursor-pointer w-full ${
                selectedMethod === "card-paypal"
                  ? "border-2 border-[#4B7DF3]"
                  : ""
              }`}
              htmlFor="card-paypal"
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="card-paypal"
                  name="card-paypal"
                  checked={selectedMethod === "card-paypal"}
                  onChange={() => handleCheckboxChange("card-paypal")}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[#111729] text-lg font-bold">**** 8304</p>
                  <div className="cursor-pointer ml-2">
                    Paypal <span className="text-gray-500">.</span> Edit
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: LogoPaypal }} />
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
          placeholder="Ingrese su nombre en la tarjeta"
          {...register("nombreTarjeta", { required: true })}
          className="border rounded-md px-3 py-2"
        />

        <label htmlFor="pais" className="text-xl font-bold">
          País
        </label>
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={onCountrySelect}
          countries={southAmericaCountries}
          className="border rounded-md "
        />

        <input
          type="hidden"
          name="pais"
          {...register("pais", { required: true })}
        />

        <label htmlFor="codigoZip" className="text-xl font-bold">
          Código Zip
        </label>
        <input
          type="text"
          id="codigoZip"
          placeholder="Ingrese su código zip"
          name="codigoZip"
          {...register("codigoZip", { required: true })}
          className="border rounded-md px-3 py-2"
        />

        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
        />
      </form>
      {selectedModal && <CardButtonPaypal selectedMethod={selectedMethod} email={email}  />}
    </div>
  );
};
