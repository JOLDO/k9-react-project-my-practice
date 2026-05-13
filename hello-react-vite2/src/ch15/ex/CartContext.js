import { createContext } from "react";

const CartContext = createContext({
  state: { items: [] },
  actions: {
    addItem: () => {},
    removeItem: () => {},
  },
});

export default CartContext;