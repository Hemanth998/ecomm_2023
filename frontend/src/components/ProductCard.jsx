import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id} `}>
        <img src="/default.jpg" alt="default" width="300" height="300" />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <Link to={`/products/${product.id} `}>view</Link>
    </div>
  );
};
export default ProductCard;
