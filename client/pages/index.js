import Fluid from "../components/Fluid/Fluid";
import { Image } from "semantic-ui-react";
import shisha from "../shisha.png";
import BasicLayout from "../layout/BasicLayout/BasicLayout";
export default function Home() {
  return (
    <BasicLayout>
      <Fluid />
      <div
        style={{
          height: "100vh",
          background: "grey",
        }}
      >
        Info
      </div>
      <div
        style={{
          height: "100vh",
          background: "white",
        }}
      >
        <Image src={shisha} size="medium" fluid />
      </div>
    </BasicLayout>
  );
}
