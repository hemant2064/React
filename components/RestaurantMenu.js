// import { useEffect, useState } from "react";
// const RestaurantMenu = () => {
//   const [menu, setMenu] = useState([]);
//   const [resMenuDetails, setResMenuDetails] = useState([]);
//   useEffect(() => {
//     fetchMenu();
//   }, []);
//   const fetchMenu = async () => {
//     const data = await fetch("http://localhost:3001/restaurants/405679");
//     const json = await data.json();
//     console.log(json);

//     setMenu(json.data.cards);

//     console.log("fetch render");
//   };
//   const info = menu?.[2]?.card?.card?.info;
//   const resmenu =
//     menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
//       ?.itemCards[0]?.card?.info?.name;
//   const resMenuDetailsFilter =
//     menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => {
//       item.card.card["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
//     });
//   console.log("filter", resMenuDetailsFilter);

//   return (
//     <div className="menu">
//       {info && (
//         <div>
//           <h1>{info.name}</h1>
//           <h2>
//             ⭐{info.avgRating}-{info.costForTwoMessage}
//           </h2>
//         </div>
//       )}
//       {console.log("jsx render")}
//       {resMenuDetailsFilter && setResMenuDetails(resMenuDetailsFilter)}
//       {resMenuDetails &&
//         resMenuDetails.map((item) => (
//           <div>
//             <h2>{item.card.card.title}</h2>
//             <ul>
//               <li>{resmenu}</li>
//               <li>chicken rice</li>
//               <li>Egg rice</li>
//             </ul>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
// data.cards[2].card.card.info.name;
// data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0]
//   .card.info;
// data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// this for cart content import
import { useContext } from "react";
import { CartContext } from "../utils/Cartcontext";
import { MENU_URL } from "../utils/constants";
import { MENULIST_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";
import UesRestaurantsMenu from "../utils/UseRestaurantsmenu";
import Rescategory from "./Rescategory";

const RestaurantMenu = () => {
  // const [menu, setMenu] = useState([]);
  //without cart content
  // const { resId } = useParams();
  // console.log(resId);
  // with cart content
  const { resId } = useParams();
  // const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const menu = UesRestaurantsMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();

  //   console.log(json);

  //   setMenu(json.data.cards);
  // };
  // cart content

  // Restaurant Info
  const info = menu?.[2]?.card?.card?.info;

  // Filter only ItemCategory cards
  const resMenuDetails =
    menu?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  return (
    <div className="menu">
      {info && (
        <div>
          <img
            className="hsrlogo"
            alt=" res-log"
            src={MENU_URL + info.cloudinaryImageId}
          ></img>
          <h1>{info.name}</h1>
          <h2>
            ⭐ {info.avgRating} - {info.costForTwoMessage}
          </h2>
        </div>
        
      )}
      {resMenuDetails.map((category) => (
      <Rescategory
        key={category.card.card.title}
        data={category.card.card}
      />
    ))}
    </div>
  );
};


export default RestaurantMenu;
