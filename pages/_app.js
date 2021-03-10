import { AnimatePresence } from "framer-motion";
import "../styles/styles.css";
import "../styles/buttonGroup.scss";
import { HeadLinks } from "../components/HeadLinks";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadLinks />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
