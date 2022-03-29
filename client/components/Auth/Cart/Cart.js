import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import useCart from "../../../hooks/useCart";
import { getComponentByIdAndSelectedApi } from "../../../api/shisha";
import SummaryCart from "./SummaryCart/SummaryCart";
export default function Cart() {
  const { getProductsCart } = useCart();
  const products = JSON.parse(getProductsCart());
  const [productsData, setProductsData] = useState(null);
  console.log(productsData);
  useEffect(() => {
    (async () => {
      const productsTemp = [];
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
    })();
  }, []);

  return products ? <FullCart products={productsData} /> : <EmptyCart />;
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
  const { products } = props;
  return (
    <Layout>
      <div className="cart">
        <div className="full-cart">
          <SummaryCart products={products} />
        </div>
      </div>
    </Layout>
  );
}
