import { getProducts } from "../services";
import { motion } from "framer-motion";
import { ProductCards } from "../components";

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
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

  const Title = () => <h1>Online Store</h1>;
  const SubTitle = () => <h2>Products</h2>;
  const Header = () => (
    <blockquote className="blockquote">
      <p className="font-italic">
        Lorem ipsum dolor sit amet, exercitation deserunt exercitation ea velit
        eu consequat laborum Lorem occaecat ea.
      </p>
    </blockquote>
  );

  return (
    <motion.div key={`home-page`} className="container">
      <Title />
      <Header />
      <SubTitle />
      <ProductCards products={products} />
    </motion.div>
  );
}
