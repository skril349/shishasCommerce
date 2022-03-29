import { BASE_PATH, CART } from "../utils/constants";
import { toast } from "react-toastify";
import { size, includes, remove } from "lodash";

export function getProductsCart() {
  const cart = localStorage.getItem(CART);
  if (!cart) {
    return null;
  } else {
    const products = cart.split(",");
    return products;
  }
}
let cartArray = [];

export function addProductCart(product) {
  const cart = getProductsCart();
  const cartJson = JSON.parse(cart);
  cartArray = cartJson;
  if (!cartJson) {
    cartArray = [];
    cartArray.push(product);
    localStorage.setItem(CART, JSON.stringify(cartArray));

    toast.success("Producto añadido al carrito");
  } else {
    console.log(product);

    console.log(cartArray);
    const productFound = includes(cartArray, product);
    console.log(productFound);
    if (productFound) {
      //aumentar cantidad
      console.log("trobat");
    } else {
      cartArray.push(product);

      localStorage.setItem(CART, JSON.stringify(cartArray));

      toast.success("Producto añadido al carrito");
    }
  }
}
