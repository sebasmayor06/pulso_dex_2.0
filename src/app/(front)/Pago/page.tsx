import { Contrato } from "./components/Contrato";
import { Datos } from "./components/Datos";
import { Franquisia } from "./components/Franquisia";

const pagoPage = () => {
  return (
    <div className="pt-20 p-8 ">
      <h1 className="text-xl font-bold mb-5">Detalles del pago</h1>
      <div className="grid grid-cols-6 gap-x-10">
        <div className=" col-span-4">
          <div className="pl-4">
            <Contrato />
          </div>
          <div className="pt-20">
            <Datos />
          </div>
        </div>
        <div className=" col-start-5  col-span-6  ">
          <h2 className="text-xl font-bold mb-5 mx-4">Su Franquicia</h2>
          <Franquisia />
        </div>
      </div>
    </div>
  );
};

export default pagoPage;
