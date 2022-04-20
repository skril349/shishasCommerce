import React, { useState, useEffect } from "react";
import { getConeApi } from "../../../api/shisha";
import useCart from "../../../hooks/useCart";
import {
  Container,
  Menu as SemanticMenu,
  Grid,
  Icon,
  Label,
  Button,
} from "semantic-ui-react";
import useAuth from "../../../hooks/useAuth";
import { isFavoriteApi, addFavoriteApi } from "../../../api/favorites";

export default function ShishaInfo(props) {
  const { shisha, selected, selectCarrousel, setTotalPrice, totalPrice } =
    props;
  const { addProductCart, getProductsCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(
        auth.idUser,
        shisha[selected][selectCarrousel].id,
        logout
      );
      console.log(response);
    })();
  }, [shisha[selected][selectCarrousel].id]);

  const addFavorite = async () => {
    console.log(shisha[selected][selectCarrousel].id);
    if (auth) {
      await addFavoriteApi(
        auth.idUser,
        shisha[selected][selectCarrousel],
        logout
      );
      // setReloadFavorites(true);
    }
  };

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

        {shisha[selected][selectCarrousel]?.discount && (
          <p>
            Descuento:
            {shisha[selected][selectCarrousel]?.discount
              ? shisha[selected][selectCarrousel]?.discount
              : ""}
            %
          </p>
        )}
      </div>
      <div>
        <Button
          onClick={() => {
            addProductCart([shisha[selected][selectCarrousel].id, selected, 1]);
            setTotalPrice(totalPrice + shisha[selected][selectCarrousel].price);
          }}
        >
          Add Cart
        </Button>

        <Icon name="heart outline" color="white" onClick={addFavorite} />
      </div>
    </div>
  );
}
