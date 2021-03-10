import Slider from "react-slick";
import { defaultAlt, defaultUrl } from "../utils";

const SlickSlider = ({ product, onClick, selectedImg }) => (
  <Slider
    infinite={false}
    speed={500}
    slidesToShow={4}
    slidesToScroll={4}
    className="border"
  >
    {product &&
      product.images.map((image, idx) => (
        <div key={`img-${idx}`} style={{ height: "100%", textAlign: "center" }}>
          <img
            key={`img-${idx}`}
            className="d-block m-auto py-1 px-2"
            src={image.url || defaultUrl}
            alt={image.alt || defaultAlt}
            style={{
              width: "100%",
              height: "100px",
              objectFit: "contain",
              border: idx === selectedImg ? "1px dotted black" : 0,
            }}
            onClick={() => onClick(idx)}
          />
        </div>
      ))}
  </Slider>
);
export default SlickSlider;
