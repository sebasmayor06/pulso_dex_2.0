export const initialState = {
  modo: localStorage?.getItem("modo") || "",
  precio: parseFloat(localStorage?.getItem("precio")) || 0.0,
};
