import { create } from "zustand";
import { persist } from "zustand/middleware";
import lite from "../../../public/pago/lite.png";
import premium from "../../../public/pago/premium.png";
import start from "../../../public/pago/start.png";
import zukeeper from "zukeeper"; // Asegúrate de que zukeeper esté correctamente instalado y configurado

const initialState = {
  modo: "",
  precio: 0.0,
  precios: [5000000, 8000000, 18000000],
  images: [lite, start, premium],
  total: 0.0,
  index: 0,
};

const useFranquisia = create(
  persist(
    zukeeper((set, get) => ({
      ...initialState,
      setPrecio: (newPrecio) => {
        const { precios } = get();
        if (newPrecio !== 0.0 && precios.includes(newPrecio)) {
          set({ precio: newPrecio });
        }
      },
      setTotal: (totalPrice) => {
        set({ total: totalPrice });
      },
      setModo: (newModo) => {
        set({ modo: newModo });
      },
      setIndex: (newIndex) => {
        set({ index: newIndex });
      },
    })),
    {
      name: "franquisia", // nombre de la clave en localStorage
    }
  )
);

if (typeof window !== "undefined") {
  window.store = useFranquisia;
}

export default useFranquisia;
