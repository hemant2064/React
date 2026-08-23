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


