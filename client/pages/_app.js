import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import React, { useState, useMemo, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { getToken, removeToken, setToken } from "../api/token";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContext from "../context/CartContext";
import {
  getProductsCart,
  addProductCart,
  countProductsCart,
  deleteProductCart,
  removeAllProductsCart,
} from "../api/cart";
export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();
  const [totalProductCart, setTotalProductCart] = useState(0);
  const [reloadCart, setReloadCart] = useState(false);
  console.log(totalProductCart);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  useEffect(() => {
    setTotalProductCart(countProductsCart());
    setReloadCart(false);
  }, [reloadCart, auth]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  const addProduct = (product) => {
    const token = getToken();
    if (token) {
      addProductCart(product);
      setReloadCart(true);
    } else {
      toast.warning("Para comprar un producto hay que registrarse");
    }
  };

  const removeProduct = (product) => {
    deleteProductCart(product);
    setReloadCart(true);
  };

  const removeAllProducts = () => {
    removeAllProductsCart();
    setReloadCart(true);
  };

  const cartData = useMemo(
    () => ({
      productsCart: totalProductCart,
      addProductCart: (product) => addProduct(product),
      getProductsCart: getProductsCart,
      removeProductCart: (product) => removeProduct(product),
      removeAllProductsCart: () => removeAllProducts(),
    }),
    [totalProductCart]
  );
  if (auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <CartContext.Provider value={cartData}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}
