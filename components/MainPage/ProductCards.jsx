import Card from "./Card/Card";

const ProductCards = ({ products }) => {
  return (
    <div className="products">
      <div className="container">
        {products &&
          products.map((product, idx) => (
            <Card key={`Card-${idx}`} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductCards;
