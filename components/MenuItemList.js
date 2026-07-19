import { MENULIST_URL } from "../utils/constants";
import { useContext } from "react";
import { CartContext } from "../utils/Cartcontext";
const MenuItemList = ({ items }) => {
      const { cart, addToCart, removeFromCart } = useContext(CartContext);
  console.log(items[1].card.info);
  
 const getQuantity = (id) => {
    const item = cart.find((food) => food.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      <ul>
        {items.map((food) => (
          <li key={food.card.info.id}>
            {food.card.info.name}{" "}
            {getQuantity(food.card.info.id) === 0 ? (
              <button
                className="cart-btn"
                onClick={() => addToCart(food.card.info)}
              >
                Add
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={() => removeFromCart(food.card.info.id)}>
                  -
                </button>

                <span>{getQuantity(food.card.info.id)}</span>

                <button onClick={() => addToCart(food.card.info)}>+</button>
              </div>
            )}
            <img src={MENULIST_URL + food.card.info.imageId}></img>
            <div>
              <h3>₹ {food.card.info.price / 100}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuItemList;
