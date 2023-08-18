import ProductCard from '../components/ProductCard';
import RatingFilter from '../components/RatingFilter';
import products from '../products';
import { useState } from 'react';
const Listing = () => {
  const [productList, setProductList] = useState(products);
  const changeProducts = (e) => {
    setProductList(
      products.filter((product) => product.rating >= e.target.value)
    );
  };
  return (
    <div className="product-list-container">
      <RatingFilter changeProducts={changeProducts} />
      {productList.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};
export default Listing;
