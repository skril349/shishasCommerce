import { BASE_PATH, CART } from "../utils/constants";
import { toast } from "react-toastify";
import { size, includes, remove } from "lodash";

export function getProductsCart() {
  const cart = localStorage.getItem(CART);
  if (!cart) {
    return null;
  } else {
    const products = cart.split("]");
    return products;
  }
}

export function addProductCart(product) {
  const cart = getProductsCart();
  if (!cart) {
    localStorage.setItem(CART, product);
    toast.success("Producto añadido al carrito");
  } else {
    const productFound = includes(cart, product);
    if (productFound) {
      //aumentar cantidad
      // product.quantity += 1;
    } else {
      // product.quantity = 1;
      cart.push(product);
      localStorage.setItem(CART, cart);
      toast.success("Producto añadido al carrito");
    }
  }
}
