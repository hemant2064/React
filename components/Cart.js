import { useContext } from "react";
import { CartContext } from "../utils/Cartcontext";
import { MENULIST_URL } from "../utils/constants";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={MENULIST_URL + item.imageId}
                className="cart-img"
                alt={item.name}
              />

              <div className="cart-details">
                <h2>{item.name}</h2>

                <h3>₹ {item.price / 100}</h3>

                <div className="cart-control">
                  <button onClick={() => removeFromCart(item)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => addToCart(item)}>+</button>
                </div>

                <h3>Total : ₹ {(item.price * item.quantity) / 100}</h3>
              </div>
            </div>
          ))}

          <hr />

          <h2>Grand Total : ₹ {grandTotal / 100}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
