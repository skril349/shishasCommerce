import React from "react";
import { Button } from "semantic-ui-react";
import { getConeApi } from "../../../api/shisha";
import useCart from "../../../hooks/useCart";
export default function ShishaInfo(props) {
  const { shisha, selected, selectCarrousel } = props;
  const { addProductCart, getProductsCart } = useCart();
  console.log(shisha, selected);
  if (!shisha) return null;
  if (!selected) return null;
  if (selectCarrousel === undefined) return null;

  return (
    <div className="shisha-info">
      <div>
        <h1>{shisha[selected][selectCarrousel].name}</h1>
      </div>
      <div>
        <p>{shisha[selected][selectCarrousel].info}</p>
      </div>
      <div>
        <p>Precio: {shisha[selected][selectCarrousel].price} €</p>
      </div>
      <div>
        <Button
          onClick={() => {
            console.log(shisha[selected][selectCarrousel].id);
            addProductCart([shisha[selected][selectCarrousel].id, selected, 1]);
          }}
        >
          Add Cart
        </Button>
      </div>
    </div>
  );
}
