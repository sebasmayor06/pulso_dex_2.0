"use client";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Example({ date, totalAmout }) {
  // Dividir la fecha original
  const [year, month, day] = date.split("T")[0].split("-");

  // Convertir el día a número, restar 1 y luego convertirlo de nuevo a cadena
  const newDay = (parseInt(day) - 1).toString().padStart(2, "0");

  // Reconstruir la fecha con el nuevo día
  const newDate = `${year}-${month}-${newDay}`;

  const data = [
    {
      name: newDate,
      inversion: 0,
    },
    {
      name: date.split("T")[0],
      inversion: totalAmout,
    },
  ];

  console.log(date, totalAmout);

  return (
    <div className="flex justify-center">
      <div className="w-full h-64">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          data={data}
          width={300}
          height={250}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="inversion" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
}
