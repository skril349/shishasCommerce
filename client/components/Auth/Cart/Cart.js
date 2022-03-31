import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import useCart from "../../../hooks/useCart";
import { getComponentByIdAndSelectedApi } from "../../../api/shisha";
import SummaryCart from "./SummaryCart/SummaryCart";
import AddressShipping from "./AddressShipping/AddressShipping";
export default function Cart() {
  const { getProductsCart } = useCart();
  const products = JSON.parse(getProductsCart());
  const [productsData, setProductsData] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);

  console.log(productsData);
  useEffect(() => {
    (async () => {
      const productsTemp = [];
      if (products) {
        for await (const product of products) {
          const data = await getComponentByIdAndSelectedApi(
            product[0],
            product[1]
          );
          data.quantity = product[2];
          console.log(data);
          productsTemp.push(data);
        }
        setProductsData(productsTemp);
      }
    })();
    setReloadCart(false);
  }, [reloadCart]);

  return products ? (
    <Layout>
      <FullCart products={productsData} setReloadCart={setReloadCart} />
    </Layout>
  ) : (
    <Layout>
      <EmptyCart />
    </Layout>
  );
}

function EmptyCart() {
  return (
    <Layout>
      <div className="cart">
        <div className="empty-cart">
          <h1>NO HAY COSAS EN EL CARRITO</h1>
        </div>
      </div>
    </Layout>
  );
}

function FullCart(props) {
  const { products, setReloadCart } = props;
  const [address, setAddress] = useState(null);
  return (
    <div className="cart">
      <div className="full-cart">
        <SummaryCart products={products} setReloadCart={setReloadCart} />
        <AddressShipping setAddress={setAddress} />
      </div>
    </div>
  );
}
