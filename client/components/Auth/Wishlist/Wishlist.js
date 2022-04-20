import React, { useState } from "react";
import Layout from "../../../layout/Layout";

export default function Wishlist() {
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
