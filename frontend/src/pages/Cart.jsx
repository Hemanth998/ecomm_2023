const cartItems = [
  {
    id: 1,
    product: {
      id: '1',
      name: 'Product 1',
      description: 'This is product 1',
      price: 100,
      rating: 4.5,
    },
    quantity: 2,
  },
  {
    id: 2,
    product: {
      id: '2',
      name: 'Product 2',
      description: 'This is product 2',
      price: 50,
      rating: 4.2,
    },
    quantity: 3,
  },
];

const Cart = () => {
  return (
    <div className="cart-container">
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id} className="cart-item">
            <img src="/default.jpg" alt="default" width="100" height="100" />
            <h3>{cartItem.product.name}</h3>
            <p>{cartItem.product.price}</p>
            Quantity : <p>{cartItem.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
