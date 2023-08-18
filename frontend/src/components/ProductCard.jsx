const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src="/default.jpg" alt="default" width="300" height="300" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
    </div>
  );
};
export default ProductCard;
