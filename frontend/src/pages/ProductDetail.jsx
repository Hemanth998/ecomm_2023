import products from '../products';
import { useParams, Link } from 'react-router-dom';
const ProductDetail = () => {
  let { productId } = useParams();

  const product = products.find((product) => product.id === productId);
  if (!product)
    return (
      <>
        <Link to="/">
          <button>Back</button>
        </Link>
        <div>Product not found</div>
      </>
    );
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>{product.name}</h1>
      <img src="/default.jpg" alt="default" width="400" />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>

      <button>Add to Cart</button>
    </div>
  );
};
export default ProductDetail;
