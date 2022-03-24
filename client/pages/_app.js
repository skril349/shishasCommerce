import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}
