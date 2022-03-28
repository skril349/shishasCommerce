import React from "react";

export default function ShishaInfo(props) {
  const { shisha, selected } = props;
  return <div> {shisha[selected][0].info}</div>;
}
