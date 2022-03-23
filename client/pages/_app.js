import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
