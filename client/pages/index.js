import Fluid from "../components/Fluid/Fluid";
import { Image } from "semantic-ui-react";
import shisha from "../shisha.png";
import BasicLayout from "../layout/BasicLayout/BasicLayout";
//import HomeCom from "../components/Menu/HomeCom";
export default function Home() {
  return (
    <BasicLayout>
      <Fluid />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "grey",
        }}
      >
        Info
       {/*} <div style={{ height: "100vh", width: "100vw" }}>
      <Home />
      </div>*/}
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "white",
        }}
      >
        HEY
      </div>
    </BasicLayout>
  );
}
