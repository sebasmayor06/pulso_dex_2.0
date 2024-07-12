"use client";
import { ButtonPaypal } from "./components/ButtonPaypal";
import { Contrato } from "./components/Contrato";
import { Datos } from "./components/Datos";
import { Franquisia } from "./components/Franquisia";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const pagoPage = () => {
  return (
    <>
      <div className="pt-20 p-8 flex justify-center">
        <div className="md:max-w-7xl ">
          <h1 className="text-xl font-bold mb-5">Detalles del pago</h1>
          <div className="lg:grid lg:grid-cols-6 flex flex-col-reverse gap-x-10">
            <div className=" lg:col-span-4">
              <div className="pl-4">
                <Contrato />
              </div>
              <div className="pt-20">
                <Datos />
              </div>
            </div>
            <div className=" lg:col-start-5  lg:col-span-6  ">
              <h2 className="text-xl font-bold mb-5 mx-4">Su Franquicia</h2>
              <Franquisia />
            </div>
          </div>
        </div>
        {/* <PayPalScriptProvider
        options={{
          clientId: "AVK8dZC7QexmcuR08qLV7h-Jpdw1Pz46jIm76BviCq-jizRNo2mdTCUWxIgyxBIwnb6u87LLBfKSnqU9",
          components: "buttons"
        }}
      
      >
        <PayPalButtons />
      </PayPalScriptProvider> */}
        {/* <ButtonPaypal /> */}
      </div>
    </>
  );
};

export default pagoPage;
