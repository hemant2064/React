import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === food.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...food, quantity: 1 }];
    });
  };

  const removeFromCart = (foodId) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === foodId);

      if (!existingItem) return prev;

      if (existingItem.quantity === 1) {
        return prev.filter((item) => item.id !== foodId);
      }

      return prev.map((item) =>
        item.id === foodId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


// import { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   console.log(children);
//   // Add Item
//   const addToCart = (food) => {
//     setCart((prev) => {
//       const exist = prev.find((item) => item.id === food.id);

//       if (exist) {
//         return prev.map((item) =>
//           item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item,
//         );
//       }

//       return [...prev, { ...food, quantity: 1 }];
//     });
//   };

//   // Remove Item
//   const removeFromCart = (food) => {
//     setCart((prev) => {
//       const exist = prev.find((item) => item.id === food.id);

//       if (!exist) return prev;

//       if (exist.quantity === 1) {
//         return prev.filter((item) => item.id !== food.id);
//       }

//       return prev.map((item) =>
//         item.id === food.id ? { ...item, quantity: item.quantity - 1 } : item,
//       );
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
