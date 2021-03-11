import Image from "./Image";
import SlickSlider from "./SlickSlider";

const Images = ({ setSelectedImg, product, selectedImg }) => (
  <div key="slick" className="slick">
    <Image product={product} selectedImg={selectedImg} />
    <SlickSlider
      product={product}
      onClick={setSelectedImg}
      selectedImg={setSelectedImg}
    />
  </div>
);

export default Images;
