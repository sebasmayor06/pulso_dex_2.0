import prueba from "../../../../../public/prueba/Group_1.png";
import Image from "next/image";
const Ventas = () => {
  return (
    <div class="bg-gray-100 rounded-lg p-4 flex justify-between items-center  w-[65%]">
      <div class="flex flex-col justify-between gap-4  mb-4">
        <div>
          <h1 class="text-xl font-bold">Ventas y costos totales</h1>
          <p class="text-sm text-[#8B909A]">Los últimos 7 días</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">18M</h2>
        </div>
      </div>
      <div class="flex justify-center">
        <Image
          src={prueba}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Ventas;
