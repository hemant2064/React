import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { MENULIST_URL } from "../utils/constants";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const grandTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || item.defaultPrice || 0) * item.quantity,
    0
  );

  return (
    <main className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-5 sm:py-8">
      <h1 className="mb-5 text-2xl font-bold sm:text-3xl">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow sm:p-12">
          <h2 className="text-lg font-semibold sm:text-xl">Your Cart is Empty</h2>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Add some delicious food from a restaurant.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => {
            const price = Number(item.price || item.defaultPrice || 0);

            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow sm:flex-row"
              >
                {item.imageId && (
                  <img
                    src={MENULIST_URL + item.imageId}
                    className="aspect-[4/3] w-full rounded-lg object-cover sm:h-28 sm:w-32"
                    alt={item.name}
                  />
                )}

                <div className="min-w-0 flex-1">
                  <h2 className="break-words text-lg font-bold">{item.name}</h2>
                  <p className="mt-1">₹ {price / 100}</p>

                  <div className="mt-3 flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded border px-3 py-1 text-red-500"
                    >
                      −
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="rounded border px-3 py-1 text-green-600"
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-3 font-semibold">
                    Total: ₹ {(price * item.quantity) / 100}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="rounded-xl bg-white p-5 text-right shadow">
            <h2 className="text-xl font-bold sm:text-2xl">
              Grand Total: ₹ {grandTotal / 100}
            </h2>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;


// import { useContext } from "react";
// import { CartContext } from "../utils/CartContext";
// import { MENULIST_URL } from "../utils/constants";

// const Cart = () => {
//   const { cart, addToCart, removeFromCart } = useContext(CartContext);

//   const grandTotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );

//   return (
//     <div className="cart">
//       <h1>Cart</h1>

//       {cart.length === 0 ? (
//         <h2>Your Cart is Empty</h2>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img
//                 src={MENULIST_URL + item.imageId}
//                 className="cart-img"
//                 alt={item.name}
//               />

//               <div className="cart-details">
//                 <h2>{item.name}</h2>

//                 <h3>₹ {item.price / 100}</h3>

//                 <div className="cart-control">
//                   <button onClick={() => removeFromCart(item)}>-</button>

//                   <span>{item.quantity}</span>

//                   <button onClick={() => addToCart(item)}>+</button>
//                 </div>

//                 <h3>Total : ₹ {(item.price * item.quantity) / 100}</h3>
//               </div>
//             </div>
//           ))}

//           <hr />

//           <h2>Grand Total : ₹ {grandTotal / 100}</h2>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;




// import { useSelector } from "react-redux";
// import { clearCart } from "../utils/CartSlice";
// import MenuItemList from "./MenuItemList";
// import { useDispatch } from "react-redux";
// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };
//   return (
//     <div>
//       <h1>cart</h1>
//       <div>
//         <button onClick={handleClearCart}>clearCart</button>
//         <MenuItemList items={cartItems} />
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../utils/CartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   const dispatch = useDispatch();

//   return (
//     <div className="w-6/12 mx-auto mt-8">
//       <h1 className="text-2xl font-bold text-center mb-5">
//         Cart
//       </h1>

//       <div className="text-center mb-5">
//         <button
//           className="bg-red-500 text-white px-5 py-2 rounded"
//           onClick={() => dispatch(clearCart())}
//         >
//           Clear Cart
//         </button>
//       </div>

//       {cartItems.length === 0 ? (
//         <h2 className="text-center">Cart is Empty</h2>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li
//               key={item.id}
//               className="flex justify-between border-b py-5"
//             >
//               <div>
//                 <h2 className="font-bold">{item.name}</h2>

//                 <p>
//                   ₹ {(item.price || item.defaultPrice) / 100}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
