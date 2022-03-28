import React from "react";

export default function ShishaInfo(props) {
  const { shisha, selected, selectCarrousel } = props;
  console.log(shisha, selected);
  return <div> {shisha[selected][selectCarrousel].info}</div>;
}
