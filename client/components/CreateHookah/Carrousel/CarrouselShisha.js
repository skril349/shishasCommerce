import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import Slider from "react-slick";
import { map } from "lodash";
import { BASE_PATH } from "../../../utils/constants";

export default function CarrouselShisha(props) {
  const { shisha, selected, setSelectCarrousel } = props;
  const [over, setOver] = useState(false);
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
    <div
      style={{
        width: "70%",
        position: "relative",
      }}
    >
      <Slider {...settings} className="carrousel-shisha">
        {map(shisha[selected], (item) => (
          <Image
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            key={item._id}
            // src={`${BASE_PATH}${item.front_image[0].url}`}
            src={
              item.lateral_image
                ? over
                  ? `${BASE_PATH}${item.lateral_image[0].url}`
                  : `${BASE_PATH}${item.front_image[0].url}`
                : `${BASE_PATH}${item.front_image[0].url}`
            }
            alt={item.name}
            fluid
          />
        ))}
      </Slider>
    </div>
  );
}
