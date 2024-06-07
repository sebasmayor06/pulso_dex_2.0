"use client";
import Image from "next/image";

import useFranquisia from "../../../../store/payment/franquisia";
import { useRouter } from "next/navigation";

const Formatos = ({
  image,
  price,
  p1,
  p2,
  p3,
  p4,
  id,
  modo,
  volumen,
  peso,
}) => {
  const router = useRouter();

  const setPrecio = useFranquisia((state) => state.setPrecio);

  const handlerClick = () => {
    setPrecio( price, modo);
    router.push("/Pago");
  };

  const getBgClass = () => {
    if (id === 1) return "bg-[#B9CEFF] rounded-lg";
    if (id === 2) return "bg-[#A4F8F8] rounded-lg";
    if (id === 3) return "bg-[#35FF9E] rounded-lg";
    return "";
  };

  return (
    <div className={getBgClass()}>

      <div className="py-8 ">
        <div className=" mx-2  px-4 p-8 bg-white rounded-lg">
          <div className="flex items-center pb-8">
            <Image
              src={image}
              alt="Imagen de desarrollo"
              width={30}
              height={30}
              className=" "
            />

            <h2 className="text-[#292930] xs:text-2xl pl-1  font-semibold">
              {modo.at(0).toUpperCase() + modo.slice(1)}
            </h2>
            <span className="text-[#292930] xs:text-lg pl-12 font-semibold">
              {price}{" "}
              <span className="text-[#292930] xs:text-lg font-normal">
                {" "}
                + IVA
              </span>
            </span>
          </div>
          <div className="text-[#02030996] mb-4 ">
            <p>
              {" "}
              <span className="font-semibold xs:text-lg">Volumen:</span>{" "}
              {volumen}
            </p>
            <p>
              {" "}
              <span className="font-semibold xs:text-lg">Peso:</span> {peso}
            </p>
          </div>
          <div>
            <p className="text-[#02030996] mb-4 ">
              <span className="font-semibold xs:text-lg">
                {p1.split(":")[0]}:
              </span>
              {p1.split(":")[1]}
            </p>
            <p className="text-[#02030996] mb-4 ">
              <span className="font-semibold xs:text-lg">
                {p2.split(":")[0]}:
              </span>
              {p2.split(":")[1]}
            </p>
            <p className="text-[#02030996] mb-4 ">
              <span className="font-semibold xs:text-lg">
                {p3.split(":")[0]}:
              </span>
              {p3.split(":")[1]}
            </p>
            <p className="text-[#02030996]   font-semibold ">{p4}</p>
          </div>
        </div>
      </div>
      <div className="px-2 pb-8">
        <button
          className="w-full py-4 xs:text-lg text-[#292930] font-semibold rounded-[50px] border-2 bg-white transition-all duration-300 ease-in hover:bg-[#1a1919b0] hover:text-white "
          onClick={handlerClick}
        >
          comprar
        </button>
      </div>
    </div>
  );
};

export default Formatos;
