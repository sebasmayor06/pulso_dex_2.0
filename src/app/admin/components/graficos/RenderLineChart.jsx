import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Lunes', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Martes', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Miercoles', uv: 200, pv: 1398, amt: 2400 },
  { name: 'Jueves', uv: 278, pv: 9800, amt: 2400 },
  { name: 'Viernes', uv: 189, pv: 3908, amt: 2400 },
  { name: 'Sabado', uv: 239, pv: 4800, amt: 2400 },
  { name: 'Domingo', uv: 349, pv: 4300, amt: 2400 }
];

const RenderLineChart = () => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
  // <LineChart width={600} height={300} data={data} >
  //   <Line type="monotone" dataKey="uv"  />
  //   <XAxis dataKey="name" tickLine={{ display: 'none' }} axisLine={false} />
  // </LineChart>
);

export default RenderLineChart;
