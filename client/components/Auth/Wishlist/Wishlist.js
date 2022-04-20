import React, { useState, useEffect } from "react";
import { BASE_PATH } from "../../../utils/constants";
import Layout from "../../../layout/Layout";
import { getFavoriteApi, removeFavoriteApi } from "../../../api/favorites";
import { size, forEach, map } from "lodash";
import { Loader, Grid, Button, Image, GridColumn } from "semantic-ui-react";
import useAuth from "../../../hooks/useAuth";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  breakpointUpMd,
  breakpointUpSm,
  breakpointUpLg,
} from "../../../utils/breakpoint";
import useCart from "../../../hooks/useCart";
export default function Wishlist() {
  const [products, setProducts] = useState(null);
  const [reloadFavorites, setReloadFavorites] = useState(false);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getFavoriteApi(auth.idUser, logout);
      setProducts(response);
      setReloadFavorites(false);
    })();
  }, [reloadFavorites]);
  return (
    <Layout>
      <div fluid className="wishlist">
        <div className="wishlist__block">
          <div className="title">LISTA DE DESEOS</div>
          <div className="data">
            {!products && <Loader active>Cargando Favoritos</Loader>}
            {products && size(products) === 0 && (
              <div className="data__not-found">
                <h3> No hay Favoritos</h3>
              </div>
            )}
            {products && size(products) > 0 && (
              <ListProducts
                products={products}
                setReloadFavorites={setReloadFavorites}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ListProducts(props) {
  const { width } = useWindowSize();
  const { products, setReloadFavorites } = props;

  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpLg:
        return 5;
      case width > breakpointUpMd:
        return 3;
      case width > breakpointUpSm:
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="list-products">
      <Grid>
        <Grid.Row columns={getColumnsRender()}>
          {map(products, (product) => (
            <Product
              product={product}
              setReloadFavorites={setReloadFavorites}
            />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

function Product(props) {
  const { product, setReloadFavorites } = props;
  const { addProductCart } = useCart();
  const { auth, logout } = useAuth();
  const removeFavorite = async () => {
    console.log("quitar de favoritos");
    console.log(auth);
    if (auth) {
      console.log(product);
      await removeFavoriteApi(auth.idUser, product.idProduct, logout);
      setReloadFavorites(true);
    }
  };
  return (
    <GridColumn className="list-products__product">
      <h2>{product.product.name}</h2>

      <div className="list-products__product-poster">
        <Image
          src={`${BASE_PATH}${product.product.front_image[0].url}`}
          alt={product.product.name}
        />
        <div className="list-products__product-poster-info">
          {product.product.discount ? (
            <span className="discount">-{product.product.discount}%</span>
          ) : (
            <span />
          )}
          <span className="price">{product.product.price}€</span>
        </div>
      </div>
      <div className="list-products__product-buttons">
        <Button
          onClick={() =>
            addProductCart([product.idProduct, product.selected, 1])
          }
        >
          ADD CART
        </Button>
        <Button onClick={removeFavorite}>REMOVE</Button>
      </div>
    </GridColumn>
  );
}
