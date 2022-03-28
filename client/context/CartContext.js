import { createContext } from "react";

const CartContext = createContext({
  productsCart: 0,
  addProductCart: () => null,
  getProductsCart: () => null,
  removeProductCart: () => null,
  removeAllProductsCArt: () => null,
});

export default CartContext;
