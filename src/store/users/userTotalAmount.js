import { create } from "zustand";

const initialState = {
  total: 0.0,
};

const useUserTotalAmount = create((set) => ({
  ...initialState,
  setTotal: (totalPrice) => {
    set({ total: totalPrice });
  },
}));

export default useUserTotalAmount;
