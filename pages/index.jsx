import ProductCardBody from "../components/ProductCardBody";
import ProductCardImage from "../components/ProductCardImage";
import { getProducts } from "../services/products-service";
import { motion } from "framer-motion";

/* Our custom easing*/
let easing = [0.6, -0.05, 0.01, 0.99];

/* Custom variant */
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export async function getServerSideProps() {
  try {
    return { props: { products: await getProducts() } };
  } catch (error) {
    console.log(error);
    return { props: { error: "internal server error" } };
  }
}

export default function Home({ error, products }) {
  if (error || !products || !products.length) {
    return error || "internal server error";
  }

  return (
    <motion.div
      key={`home-page`}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      className="container"
    >
      <h1>Online Store</h1>
      <blockquote className="blockquote">
        <p className="font-italic">
          Lorem ipsum dolor sit amet, exercitation deserunt exercitation ea
          velit eu consequat laborum Lorem occaecat ea.
        </p>
      </blockquote>
      <h2>Products</h2>
      <motion.div variants={stagger} className="row">
        {products.map((product) => (
          <div
            key={`p-${product.productId}`}
            className="col-12 col-md-6 col-lg-4 my-2"
          >
            <motion.div className="card m-auto border-0">
              <ProductCardImage product={product} />
              <ProductCardBody product={product} />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
