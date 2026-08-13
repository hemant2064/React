// import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { MENULIST_URL } from "../utils/constants";
import { useContext } from "react";

const MenuItemList = ({ items = [] }) => {
  const {
    cart,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const getQuantity = (id) => {
    const item = cart.find(
      (food) => food.id === id
    );

    return item?.quantity || 0;
  };

  return (
    <div className="px-3 pb-2 sm:px-5">
      <ul>
        {items.map((food) => {
          const info = food?.card?.info;

          if (!info?.id) return null;

          const price =
            info.price ??
            info.defaultPrice ??
            0;

          const quantity = getQuantity(info.id);

          return (
            <li
              key={info.id}
              className="flex flex-col gap-5 border-b border-gray-200 py-5 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >

              {/* Food details */}
              <div className="min-w-0 flex-1">
                <h2 className="break-words text-base font-semibold text-gray-800 sm:text-lg">
                  {info.name}
                </h2>

                <h3 className="mt-1 text-sm font-semibold text-gray-700 sm:text-base">
                  ₹ {price / 100}
                </h3>

                {info.description && (
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-500 sm:text-sm">
                    {info.description}
                  </p>
                )}
              </div>

              {/* Image + cart button */}
              <div className="relative mx-auto w-full max-w-[180px] shrink-0 sm:mx-0">

                {info.imageId ? (
                  <img
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
                    src={MENULIST_URL + info.imageId}
                    alt={info.name}
                  />
                ) : (
                  <div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
                )}

                {/* ADD */}
                {quantity === 0 ? (
                  <button
                    type="button"
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-lg border bg-white px-7 py-2 font-bold text-green-600 shadow-lg hover:bg-gray-100"
                    onClick={() =>
                      addToCart(info)
                    }
                  >
                    ADD
                  </button>
                ) : (
                  /* Quantity controls */
                  <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-lg border bg-white px-4 py-2 shadow-lg">

                    <button
                      type="button"
                      className="text-xl font-bold text-red-500"
                      onClick={() =>
                        removeFromCart(info.id)
                      }
                    >
                      −
                    </button>

                    <span className="font-bold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      className="text-xl font-bold text-green-600"
                      onClick={() =>
                        addToCart(info)
                      }
                    >
                      +
                    </button>

                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItemList;