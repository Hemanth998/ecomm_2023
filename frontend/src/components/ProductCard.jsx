import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src="/default.jpg" alt="default" width="300" height="300" />
      </Link>
      <Link to={`/products/${product.id} `}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <Link to={`/products/${product.id}`}>view</Link>
      <Link to="/cart">Add to Cart</Link>
    </div>
  );
};
export default ProductCard;
