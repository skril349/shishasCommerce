import React from "react";
import { Button } from "semantic-ui-react";
import { getConeApi } from "../../../api/shisha";
import useCart from "../../../hooks/useCart";
export default function ShishaInfo(props) {
  const { shisha, selected, selectCarrousel, setTotalPrice, totalPrice } =
    props;
  const { addProductCart, getProductsCart } = useCart();

  console.log("SHISHA INFO", shisha[selected]);
  console.log("HEHEHEHEHEEH", shisha, selected, selectCarrousel);
  if (!shisha || shisha === undefined) return null;
  if (!selected || selected === undefined) return null;
  if (selectCarrousel === undefined) return null;
  return (
    <div className="shisha-info">
      <div>
        <h1>
          {shisha[selected][selectCarrousel]?.name
            ? shisha[selected][selectCarrousel]?.name
            : ""}
        </h1>
      </div>
      <div>
        <p>
          {shisha[selected][selectCarrousel]?.info
            ? shisha[selected][selectCarrousel]?.info
            : ""}
        </p>
      </div>
      <div>
        <p>
          Precio:
          {shisha[selected][selectCarrousel]?.price
            ? shisha[selected][selectCarrousel]?.price
            : ""}
          €
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            console.log(shisha[selected][selectCarrousel].price);
            console.log(shisha[selected][selectCarrousel].id);
            addProductCart([shisha[selected][selectCarrousel].id, selected, 1]);
            setTotalPrice(totalPrice + shisha[selected][selectCarrousel].price);
          }}
        >
          Add Cart
        </Button>
      </div>
    </div>
  );
}
