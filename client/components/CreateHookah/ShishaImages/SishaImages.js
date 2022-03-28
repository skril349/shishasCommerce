import React from "react";
import { Image } from "semantic-ui-react";
import { BASE_PATH } from "../../../utils/constants";
export default function SishaImages(props) {
  const { shisha, setSelected, selectCarrousel } = props;
  if (!shisha) return null;

  return (
    <div className="shisha-images">
      <div className="shisha-images__cono">
        <Image
          src={`${BASE_PATH}${shisha.cones[0].front_image[0].url}`}
          fluid={true}
          onClick={() => setSelected("cones")}
        />
      </div>
      <div className="shisha-images__plato">
        <Image
          src={`${BASE_PATH}${shisha.plates[0].front_image[0].url}`}
          fluid
          onClick={() => setSelected("plates")}
        />
      </div>
      <div className="shisha-images__mastil">
        <Image
          src={`${BASE_PATH}${shisha.masts[0].front_image[0].url}`}
          fluid
          onClick={() => setSelected("masts")}
        />
      </div>
      <div className="shisha-images__purga">
        <Image
          src={`${BASE_PATH}${shisha.purges[0].front_image[0].url}`}
          fluid
          onClick={() => setSelected("purges")}
        />
      </div>
      <div className="shisha-images__filtro">
        <Image
          src={`${BASE_PATH}${shisha.lowerStems[0].front_image[0].url}`}
          fluid
          onClick={() => setSelected("lowerStems")}
        />
      </div>
      <div className="shisha-images__silenciador">
        <Image
          src={`${BASE_PATH}${shisha.diffusers[0].front_image[0].url}`}
          fluid
          onClick={() => setSelected("diffusers")}
        />
      </div>
    </div>
  );
}

{
  /* <Image src="/shisha.png" /> */
}
