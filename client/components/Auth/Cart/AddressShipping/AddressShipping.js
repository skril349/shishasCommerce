import React, { useState, useEffect } from "react";
import { Button, Grid } from "semantic-ui-react";
import { map, size } from "lodash";
import Link from "next/link";
import classNames from "classnames";
import useAuth from "../../../../hooks/useAuth";
import { getAddressesApi } from "../../../../api/address";
export default function AddressShipping(props) {
  const { setAddress } = props;
  const [addresses, setAddresses] = useState(null);
  const [addressActive, setAddressActive] = useState(null);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getAddressesApi(auth.idUser, logout);
      setAddresses(response || []);
    })();
  }, []);
  console.log(addresses);
  if (!addresses) return null;
  return (
    <div className="address-shipping">
      <div className="title">Dirección de envío</div>
      <div className="data">
        {size(addresses) === 0 ? (
          <h3>
            No hay ninguna dirección creada
            <Link href="/editMe">
              <a>añadir dirección</a>
            </Link>
          </h3>
        ) : (
          <Grid>
            {map(addresses, (address) => (
              <Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
                <Address
                  address={address}
                  addressActive={addressActive}
                  setAddressActive={setAddressActive}
                  setAddress={setAddress}
                />
              </Grid.Column>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}

function Address(props) {
  const { address, setAddress, addressActive, setAddressActive } = props;

  const changeAddress = () => {
    setAddressActive(address._id);
    setAddress(address);
  };
  return (
    <div
      className={classNames("address", {
        active: addressActive === address._id,
      })}
      onClick={changeAddress}
    >
      <p>{address.title} </p>
      <p>{address.name} </p>
      <p>{address.address} </p>
      <p>
        {address.city} , {address.state}, {address.postalCode}
      </p>
      <p> Teléfono : {address.phone} </p>
    </div>
  );
}
