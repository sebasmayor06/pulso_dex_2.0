import { create } from "zustand";

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
