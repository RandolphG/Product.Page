import { ProductHeader, ProductImage, SlickSlider } from "./index";

const ProductImages = ({
  setSelectedImg,
  product,
  isWindowMd,
  selectedImg,
}) => (
  <div className="col col-12 col-md-6">
    <ProductImage product={product} selectedImg={selectedImg} />
    <SlickSlider
      product={product}
      onClick={setSelectedImg}
      selectedImg={setSelectedImg}
    />
    {isWindowMd && <ProductHeader product={product} />}
  </div>
);

export default ProductImages;
