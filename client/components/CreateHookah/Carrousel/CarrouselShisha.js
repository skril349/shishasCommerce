import React from "react";
import { Button, Image } from "semantic-ui-react";
import Slider from "react-slick";
import { map } from "lodash";
import { BASE_PATH } from "../../../utils/constants";

export default function CarrouselShisha(props) {
  const { shisha, selected, setSelectCarrousel } = props;
  const settings = {
    className: "carrousel-shisha",
    dots: false,
    infinity: true,
    speed: 100,
    slidesToShow: 1,
    swipeToSlider: true,
    afterChange: (current) => setSelectCarrousel(current),
  };
  if (!shisha) return null;

  return (
    <Slider {...settings}>
      {map(shisha[selected], (item) => (
        <>
          <Image
            key={item._id}
            src={`${BASE_PATH}${item.front_image[0].url}`}
            alt={item.name}
            fluid
          />
        </>
      ))}
    </Slider>
  );
}
