import ProductCard from '../components/ProductCard';
import products from '../products';
const Listing = () => {
  return (
    <div className="product-list-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};
export default Listing;
