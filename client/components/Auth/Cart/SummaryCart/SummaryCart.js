import React, { useState, useEffect } from "react";
import { Table, Image, Icon, Tab } from "semantic-ui-react";
import { map, forEach } from "lodash";
import useCart from "../../../../hooks/useCart";
import { BASE_PATH } from "../../../../utils/constants";
export default function SummaryCart(props) {
  const { products, reloadCart, setReloadCart } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeProductCart } = useCart();
  useEffect(() => {
    let finalPrice = 0;
    forEach(products, (product) => {
      console.log("descuento", product);
      console.log("price", finalPrice);
      finalPrice += product.discount ? discounting(product) : product.price;
    });
    setTotalPrice(finalPrice);
  }, [products]);
  if (!products) {
    return null;
  }

  function discounting(product) {
    console.log("hey");
    var discountPrice = (
      product.price -
      (product.price * product.discount) / 100
    ).toFixed(2);
    console.log(Number(discountPrice));
    return Number(discountPrice);
  }

  console.log("turboProops", products);
  return (
    <div className="summary-cart">
      <div className="title">Resumen del Carrito:</div>
      <div className="data">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Entrega</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell>Cantidad</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(products, (product) => (
              <Table.Row key={product.id} className="summary-cart__product">
                <Table.Cell>
                  <Icon
                    name="close"
                    link
                    onClick={() => console.log("borrar producto")}
                  />
                  <Image
                    src={`${BASE_PATH}${product.front_image[0].url}`}
                    alt={product.name}
                  />
                  {product.name}
                </Table.Cell>
                <Table.Cell>Inmediata</Table.Cell>
                <Table.Cell>{product.price} €</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row className="summary-cart__resume">
              <Table.Cell className="clear" />
              <Table.Cell colSpan="2">Total:</Table.Cell>
              <Table.Cell className="total-price" colSpan="2">
                {totalPrice.toFixed(2)} €
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
