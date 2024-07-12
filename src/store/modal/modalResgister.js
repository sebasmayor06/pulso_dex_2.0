import { create } from "zustand";

// Este es un modal para abrir y cerrar el formulario de registro

const initialState = {
  modal: false,
};

const useModalResgister = create((set) => ({
  ...initialState,
  setModal: (modal) => {
    set({ modal });
  },
}));

export default useModalResgister;
