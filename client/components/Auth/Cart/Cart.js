import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import useCart from "../../../hooks/useCart";
export default function Cart() {
  const { getProductsCart } = useCart();
  const products = getProductsCart();
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
    })();
  }, []);

  console.log(products);
  return products ? <FullCart products={products} /> : <EmptyCart />;
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
          <h1>Carrito</h1>
        </div>
      </div>
    </Layout>
  );
}
