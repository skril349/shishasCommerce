import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";
import { Image } from "semantic-ui-react";
import SishaImages from "../components/CreateHookah/ShishaImages";
import ShishaInfo from "../components/CreateHookah/ShishaInfo";
import CarrouselShisha from "../components/CreateHookah/Carrousel/CarrouselShisha";
import {
  getConesApi,
  getDecorationMastsApi,
  getDiffusersApi,
  getLowerStemsApi,
  getMastsApi,
  getPlatesApi,
  getPurgesApi,
} from "../api/shisha";

export default function CreateHookah() {
  const { auth } = useAuth();
  const [shisha, setShisha] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectCarrousel, setSelectCarrousel] = useState(0);
  useEffect(() => {
    (async () => {
      const cones = await getConesApi();
      const plates = await getPlatesApi();
      const masts = await getMastsApi();
      const decorationMast = await getDecorationMastsApi();
      const purges = await getPurgesApi();
      const lowerStems = await getLowerStemsApi();
      const diffusers = await getDiffusersApi();
      setShisha({
        cones,
        plates,
        masts,
        decorationMast,
        purges,
        lowerStems,
        diffusers,
      });
    })();
  }, []);

  if (auth === undefined) return null;

  return (
    <Layout>
      {!auth ? (
        <LoginForm />
      ) : (
        <div className="create-hookah">
          <div className="column1">
            <SishaImages
              shisha={shisha}
              setSelected={setSelected}
              selectCarrousel={selectCarrousel}
            />
          </div>
          <CarrouselShisha
            shisha={shisha}
            selected={selected}
            setSelectCarrousel={setSelectCarrousel}
          />
          {selected ? (
            <div className="column3">
              <ShishaInfo
                shisha={shisha}
                selected={selected}
                selectCarrousel={selectCarrousel}
              />
            </div>
          ) : null}
        </div>
      )}
    </Layout>
  );
}
