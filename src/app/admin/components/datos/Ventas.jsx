"use client";
import { useEffect, useState } from "react";
import Example from "../graficos/MontoTotal";

const Ventas = () => {
  const [isClient, setIsClient] = useState(false);
  const [totalAmout, setTotalAmout] = useState(0);
  const [date, setDate] = useState("");
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("/api/auth/getAllUsers");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const { totalAmout, Date } = await response.json();
        setTotalAmout(totalAmout);
        setDate(Date);
        return;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  if (!isClient) {
    return null; // Renderiza un estado de carga o similar mientras se monta el componente en el cliente
  }

  const formattedAmount = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(totalAmout);

  return (
    <>
      <div className=" rounded-lg p-4 flex flex-col justify-between gap-4 items-center w-full">
        <div className="flex flex-col justify-between gap-4 mb-4">
          <div>
            <h1 className="text-xl font-bold">Inversión</h1>
            <p className="text-sm text-[#8B909A]"></p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">${formattedAmount}</h2>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Example date={date.split("T")[0]} totalAmout={totalAmout} />
        </div>
      </div>
    </>
  );
};

export default Ventas;
