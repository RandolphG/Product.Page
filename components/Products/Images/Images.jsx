import ProductImage from "./ProductImage";
import SlickSlider from "./SlickSlider";

const Images = ({ setSelectedImg, product, selectedImg }) => (
  <div className="col col-12 col-md-6">
    <ProductImage product={product} selectedImg={selectedImg} />
    <SlickSlider
      product={product}
      onClick={setSelectedImg}
      selectedImg={setSelectedImg}
    />
  </div>
);

export default Images;
