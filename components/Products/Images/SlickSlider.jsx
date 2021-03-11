import Slider from "react-slick";
import { defaultAlt, defaultUrl } from "../../../utils";

const SlickSlider = ({ product, onClick, selectedImg }) => (
  <Slider
    infinite={false}
    speed={500}
    slidesToShow={4}
    slidesToScroll={4}
    className="slider"
  >
    {product &&
      product.images.map((image, idx) => (
        <div key={`img-${idx}`} className="img-container">
          <img
            className="img-item"
            src={image.url || defaultUrl}
            alt={image.alt || defaultAlt}
            style={{
              border: idx === selectedImg ? "1px dotted black" : 0,
            }}
            onClick={() => onClick(idx)}
          />
        </div>
      ))}
  </Slider>
);
export default SlickSlider;
