import { AnimatePresence } from "framer-motion";
import "../styles/productDetails.scss";
import { HeadLinks } from "../components/HeadLinks";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <HeadLinks />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} keu={router.route} />
      </AnimatePresence>
    </>
  );
};

export default MyApp;
