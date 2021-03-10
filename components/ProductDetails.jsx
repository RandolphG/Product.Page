import ProductHeader from "./ProductHeader";
import DropDown from "./DropDown";
import ButtonGroup from "./ButtonGroup";

const ProductDetails = ({ product, isWindowMd }) => (
  <div className="col col-12 col-md-6 pl-5">
    {!isWindowMd && <ProductHeader product={product} />}
    {product.options.map((option, idx) => {
      switch (option.style) {
        case "dropdown":
          return <DropDown option={option} idx={idx} />;
        case "button group":
          return <ButtonGroup option={option} idx={idx} />;
      }
    })}
    <button className="btn btn-success btn-lg w-100 mb-3">Buy Now</button>
    <ul>
      {product.details.map((bullet, idx) => (
        <li key={`bullet=${idx}`}>{bullet}</li>
      ))}
    </ul>
  </div>
);
export default ProductDetails;
