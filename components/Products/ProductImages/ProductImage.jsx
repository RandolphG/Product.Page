const ProductImage = ({ product, selectedImg }) => (
  <div className="p-2 border">
    <img
      className="d-block mx-auto mb-2"
      src={product.images[selectedImg].url}
      alt={product.images[selectedImg].alt}
      style={{
        width: "100%",
        objectFit: "contain",
      }}
    />
  </div>
);

export default ProductImage;
