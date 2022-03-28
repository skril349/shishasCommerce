import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import useCart from "../../../hooks/useCart";
export default function Cart() {
  console.log(useCart());
  return (
    <Layout>
      <div className="cart"></div>
    </Layout>
  );
}
