import { getProducts } from "../services";
import { MainPage } from "../components";

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

  return <MainPage products={products} />;
}
