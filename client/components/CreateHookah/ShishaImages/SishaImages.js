import React from "react";
import { Image } from "semantic-ui-react";
export default function SishaImages() {
  return (
    <div className="shisha-images">
      <div className="shisha-images__cono">
        <Image src="/shishaCutted/cono.png" fluid />
      </div>
      <div className="shisha-images__plato">
        {" "}
        <Image src="/shishaCutted/plato.png" fluid />
      </div>
      <div className="shisha-images__mastil">
        {" "}
        <Image src="/shishaCutted/mastil.png" fluid />
      </div>
      <div className="shisha-images__purga">
        {" "}
        <Image src="/shishaCutted/purga.png" fluid />
      </div>
      <div className="shisha-images__filtro">
        {" "}
        <Image src="/shishaCutted/filtro.png" fluid />
      </div>
      <div className="shisha-images__silenciador">
        {" "}
        <Image src="/shishaCutted/silenciador.png" fluid />
      </div>
    </div>
  );
}

{
  /* <Image src="/shisha.png" /> */
}
