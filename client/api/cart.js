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
// let cartArray = [];

// export function addProductCart(product) {
//   const cart = getProductsCart();
//   const cartJson = JSON.parse(cart);
//   cartArray = cartJson;
//   if (!cartJson) {
//     cartArray = [];
//     cartArray.push(product);
//     localStorage.setItem(CART, JSON.stringify(cartArray));

//     toast.success("Producto añadido al carrito");
//   } else {
//     console.log(product);

//     const productFound = includes(cartArray, product);
//     console.log(productFound);
//     if (productFound) {
//       //aumentar cantidad
//       console.log("trobat");
//     } else {
//       cartArray.push(product);
//       console.log(cartArray);

//       localStorage.setItem(CART, JSON.stringify(cartArray));

//       toast.success("Producto añadido al carrito");
//     }
//   }
// }
let ArrayCart = [];

const findOne = (ArrayCart, product) => {
  return ArrayCart.includes(product);
};

const findIndex = (ArrayCart, product) => {
  for (let i = 0; i < ArrayCart.length; i++) {
    let value = ArrayCart[i];
    for (let k = 0; k < value.length; k++) {
      if (value[0] == product) {
        return i;
      }
    }
  }
};
export function addProductCart(product) {
  const cart = JSON.parse(getProductsCart());
  ArrayCart = cart;
  if (!cart) {
    ArrayCart = [];
    ArrayCart.push(product);
    localStorage.setItem(CART, JSON.stringify(ArrayCart));
    console.log("subido");
  } else {
    const productFound = findOne(JSON.stringify(ArrayCart), product[0]);
    if (productFound) {
      console.log("productFound", productFound);
      const result = findIndex(ArrayCart, product[0]);
      console.log("index", result);

      var array = ArrayCart[result];
      array.splice(2, 1, array[2] + 1);
      console.log("array", array);
      ArrayCart.splice(result, 1, array);
      localStorage.setItem(CART, JSON.stringify(ArrayCart));

      console.log(ArrayCart);
    } else {
      ArrayCart.push(product);
      console.log(ArrayCart);
      localStorage.setItem(CART, JSON.stringify(ArrayCart));
      console.log("subido");
    }
  }
}
