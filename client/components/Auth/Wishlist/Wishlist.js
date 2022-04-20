import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import { getFavoriteApi } from "../../../api/favorites";
import { size, forEach } from "lodash";
import useAuth from "../../../hooks/useAuth";
export default function Wishlist() {
  const [products, setProducts] = useState(null);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getFavoriteApi(auth.idUser, logout);
      setProducts(response);
    })();
  }, []);
  return (
    <Layout>
      <div fluid className="wishlist">
        <div className="wishlist__block">
          <div className="title">LISTA DE DESEOS</div>
          <div className="data">
            <p>LISTA DE PRODUCTOS</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
