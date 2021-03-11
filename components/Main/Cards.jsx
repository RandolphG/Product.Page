import Card from "./Card/Card";

const Cards = ({ products }) => {
  return (
    <div className="cards">
      <div className="outer-border">
        {products &&
          products.map((product, idx) => (
            <Card key={`Card-${idx}`} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
