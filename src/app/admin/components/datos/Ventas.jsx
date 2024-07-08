"use client";
import prueba from "../../../../../public/prueba/Group_1.png";
import Image from "next/image";
// import { LineChart, Line } from "recharts";
import RenderLineChart from "../graficos/RenderLineChart";

const Ventas = () => {
  return (
    <div class="bg-gray-100 rounded-lg p-4 flex justify-between gap-4 items-center  w-full">
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
        <RenderLineChart />
      </div>
    </div>
  );
};

export default Ventas;
