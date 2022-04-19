import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";
import { Image } from "semantic-ui-react";
import useCart from "../hooks/useCart";
import { map, forEach } from "lodash";
import { getComponentByIdAndSelectedApi } from "../api/shisha";

import SishaImages from "../components/CreateHookah/ShishaImages";
import ShishaInfo from "../components/CreateHookah/ShishaInfo";
import CarrouselShisha from "../components/CreateHookah/Carrousel/CarrouselShisha";
import {
  getConesApi,
  getDecorationMastsApi,
  getDiffusersApi,
  getLowerStemsApi,
  getMastsApi,
  getPlatesApi,
  getPurgesApi,
} from "../api/shisha";

export default function CreateHookah() {
  const { getProductsCart } = useCart();
  const productsForCart = JSON.parse(getProductsCart());
  const [productsData, setProductsData] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);
  const { auth } = useAuth();
  const [shisha, setShisha] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectCarrousel, setSelectCarrousel] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function discounting(product) {
    console.log("hey");
    var discountPrice = (
      product.price -
      (product.price * product.discount) / 100
    ).toFixed(2);
    console.log(Number(discountPrice));
    return Number(discountPrice);
  }

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      let finalPrice = 0;
      console.log("products for cart", productsForCart);
      if (productsForCart) {
        for await (const product of productsForCart) {
          const data = await getComponentByIdAndSelectedApi(
            product[0],
            product[1]
          );
          finalPrice += data.discount ? discounting(data) : data.price;
          data.quantity = product[2];
          finalPrice += data.discount
            ? discounting(data) * data.quantity
            : data.price * data.quantity;
          console.log("data", finalPrice);
          productsTemp.push(data);
        }
        setTotalPrice(finalPrice);

        setProductsData(productsTemp);
      }
    })();
    setReloadCart(false);
  }, [reloadCart]);

  // useEffect(() => {
  //   let finalPrice = 0;
  //   forEach(productsForCart, (product) => {
  //     console.log("descuento", product);
  //     console.log("price", totalPrice);
  //     finalPrice += product.discount ? discounting(product) : product.price;
  //   });
  //   setTotalPrice(finalPrice);
  // }, [productsForCart]);

  useEffect(() => {
    (async () => {
      const cones = await getConesApi();
      const plates = await getPlatesApi();
      const masts = await getMastsApi();
      const decorationMast = await getDecorationMastsApi();
      const purges = await getPurgesApi();
      const lowerStems = await getLowerStemsApi();
      const diffusers = await getDiffusersApi();
      setShisha({
        cones,
        plates,
        masts,
        decorationMast,
        purges,
        lowerStems,
        diffusers,
      });
    })();
  }, []);

  if (auth === undefined) return null;

  return (
    <Layout>
      {!auth ? (
        <LoginForm />
      ) : (
        <div className="create-hookah">
          <div className="column1">
            <SishaImages
              shisha={shisha}
              setSelected={setSelected}
              selectCarrousel={selectCarrousel}
            />
          </div>
          <div className="column2">
            <CarrouselShisha
              shisha={shisha}
              selected={selected}
              setSelectCarrousel={setSelectCarrousel}
            />
          </div>

          <div className="column3">
            {selected ? (
              <ShishaInfo
                shisha={shisha}
                selected={selected}
                selectCarrousel={selectCarrousel}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
              />
            ) : null}
            {totalPrice ? (
              <TotalPice
                totalPrice={totalPrice}
                productsForCart={productsForCart}
              />
            ) : null}
          </div>
        </div>
      )}
    </Layout>
  );
}

function TotalPice(props) {
  const { totalPrice, productsForCart } = props;

  return (
    <div className="totalPrice">
      <h1>PRICE: {totalPrice.toFixed(2)} €</h1>
    </div>
  );
}
