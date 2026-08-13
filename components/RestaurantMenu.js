// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // this for cart content import
// import { useContext } from "react";
// import { CartContext } from "../utils/CartContext";
// import { MENU_URL } from "../utils/constants";
// import { MENULIST_URL } from "../utils/constants";
// import { MENU_API } from "../utils/constants";
// import UesRestaurantsMenu from "../utils/UseRestaurantsmenu";
// import Rescategory from "./Rescategory";

// const RestaurantMenu = () => {
//   const [showIndex, setShowIndex] = useState(null);
//   // const [menu, setMenu] = useState([]);
//   //without cart content
//   // const { resId } = useParams();
//   // console.log(resId);
//   // with cart content
//   const { resId } = useParams();
//   // const { cart, addToCart, removeFromCart } = useContext(CartContext);
//   const menu = UesRestaurantsMenu(resId);

//   // useEffect(() => {
//   //   fetchMenu();
//   // }, []);

//   // const fetchMenu = async () => {
//   //   const data = await fetch(MENU_API + resId);
//   //   const json = await data.json();

//   //   console.log(json);

//   //   setMenu(json.data.cards);
//   // };
//   // cart content

//   // Restaurant Info
//   const info = menu?.[2]?.card?.card?.info;

//   // Filter only ItemCategory cards
//   const resMenuDetails =
//     menu?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//       (item) =>
//         item.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//     ) || [];

//   return (
//     <div className="w-200 m-auto  ">
//       {info && (
//         <div>
//           <img
//             className="w-200 h-80 border rounded-2xl"
//             alt=" res-log"
//             src={MENU_URL + info.cloudinaryImageId}
//           ></img>
//           <h1>{info.name}</h1>
//           <h2>
//             ⭐ {info.avgRating} - {info.costForTwoMessage}
//           </h2>
//         </div>
//       )}
//       {resMenuDetails.map((category, index) => (
//         <Rescategory
//           key={category.card.card.title}
//           data={category.card.card}
//           showItems={showIndex === index}
//           setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
// 
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
// import useRestaurantsMenu from "../utils/UseRestaurantsmenu";
// import Rescategory from "./Rescategory";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const menu = useRestaurantsMenu(resId);
//   const [showIndex, setShowIndex] = useState(null);

//   if (menu === undefined) {
//     return <div className="p-10 text-center">Loading restaurant...</div>;
//   }

//   if (!menu.length) {
//     return <div className="p-10 text-center">Restaurant menu not found.</div>;
//   }

//   const info =
//     menu?.find((item) => item?.card?.card?.info)?.card?.card?.info ||
//     menu?.[2]?.card?.card?.info;

//   const resMenuDetails =
//     menu?.find((item) => item?.groupedCard?.cardGroupMap?.REGULAR)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//         (item) =>
//           item?.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//       ) || [];

//   return (
//     <main className="mx-auto w-full max-w-4xl px-3 py-5 sm:px-5 sm:py-8">
//       {info && (
//         <section className="mb-6 overflow-hidden rounded-2xl bg-white shadow">
//           {info.cloudinaryImageId && (
//             <img
//               className="aspect-[16/7] max-h-96 w-full object-cover"
//               src={MENU_URL + info.cloudinaryImageId}
//               alt={info.name}
//             />
//           )}

//           <div className="p-4 sm:p-6">
//             <h1 className="text-2xl font-bold sm:text-3xl">{info.name}</h1>
//             <p className="mt-2 text-sm font-semibold sm:text-base">
//               ⭐ {info.avgRating || "N/A"} •{" "}
//               {info.costForTwoMessage || "Price unavailable"}
//             </p>
//             <p className="mt-2 text-sm text-gray-600 sm:text-base">
//               {info.cuisines?.join(", ")}
//             </p>
//           </div>
//         </section>
//       )}

//       {resMenuDetails.length === 0 ? (
//         <p className="text-center text-gray-500">No menu categories found.</p>
//       ) : (
//         resMenuDetails.map((category, index) => {
//           const data = category?.card?.card;
//           if (!data?.title) return null;

//           return (
//             <Rescategory
//               key={`${data.title}-${index}`}
//               data={data}
//               showItems={showIndex === index}
//               setShowIndex={() =>
//                 setShowIndex(showIndex === index ? null : index)
//               }
//             />
//           );
//         })
//       )}
//     </main>
//   );
// };

// export default RestaurantMenu;
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantsMenu from "../utils/UseRestaurantsmenu";
import Rescategory from "./Rescategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantsMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (menu === undefined) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-lg font-semibold">Loading restaurant...</h1>
      </div>
    );
  }

  if (!menu || menu.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-xl font-bold">Restaurant not found</h1>
          <p className="mt-2 text-gray-500">
            Unable to load this restaurant menu.
          </p>
        </div>
      </div>
    );
  }

  // Restaurant information
  const info = menu?.[2]?.card?.card?.info;

  // Get menu categories from Swiggy response
  const regularCards =
    menu?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Only keep ItemCategory cards
  const resMenuDetails = regularCards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("MENU:", menu);
  console.log("REGULAR CARDS:", regularCards);
  console.log("MENU CATEGORIES:", resMenuDetails);

  return (
    <main className="mx-auto w-full max-w-4xl px-3 py-5 sm:px-5 sm:py-8">

      {/* Restaurant Header */}
      {info && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-white shadow">
          {info.cloudinaryImageId && (
            <img
              className="aspect-[16/7] max-h-96 w-full object-cover"
              src={MENU_URL + info.cloudinaryImageId}
              alt={info.name}
            />
          )}

          <div className="p-4 sm:p-6">
            <h1 className="text-2xl font-bold sm:text-3xl">
              {info.name}
            </h1>

            <p className="mt-2 text-sm font-semibold sm:text-base">
              ⭐ {info.avgRating || "N/A"} •{" "}
              {info.costForTwoMessage || "Price unavailable"}
            </p>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              {info.cuisines?.join(", ")}
            </p>
          </div>
        </section>
      )}

      {/* Menu */}
      {resMenuDetails.length === 0 ? (
        <div className="rounded-xl bg-white p-6 text-center shadow">
          <h2 className="font-semibold">No menu categories found</h2>
          <p className="mt-2 text-sm text-gray-500">
            Check the browser console to see the API response.
          </p>
        </div>
      ) : (
        <div>
          {resMenuDetails.map((category, index) => {
            const data = category?.card?.card;

            if (!data) return null;

            return (
              <Rescategory
                key={`${data.title}-${index}`}
                data={data}
                showItems={showIndex === index}
                setShowIndex={() => {
                  setShowIndex(
                    showIndex === index ? null : index
                  );
                }}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default RestaurantMenu;