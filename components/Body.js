// import Restcard from "./Restcard";
// import resObj from "../utils/mockData";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [Listofrestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchdata();
//   }, []);
//   const fetchdata = async () => {
//     const data = await fetch("http://localhost:3001/restaurants");
//     const json = await data.json();
//     console.log(json);
//     setListOfRestaurants(json);
//     setFilteredRestaurants(json);
//   };

//   function filterofrating() {
//     const filteredList = Listofrestaurants.filter(
//       (res) => res.card?.card?.info?.avgRating > 4,
//     );
//     setListOfRestaurants(filteredList);
//   }
//   return Listofrestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <button className="filter-btn" onClick={filterofrating}>
//           high rated Restaurant
//         </button>
//         <input
//           type="text"
//           className="search-box"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             const filteredList = Listofrestaurants.filter((res) => {
//               const name = res.card?.card?.info?.name || "";
//               return name.toLowerCase().includes(searchText.toLowerCase());
//             });
//             setFilteredRestaurants(filteredList);
//           }}
//         >
//           search
//         </button>
//       </div>
//       <div className="res-container">
//         {console.log(Listofrestaurants.length)}
//         {filteredRestaurants.map((resturant) => (
//           <Restcard key={resturant.card.card.info.id} resData={resturant} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Body;

import Restcard, { withPromotedCard } from "./Restcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [Listofrestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const promotedCards = withPromotedCard(Restcard);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch("http://localhost:3001/restaurants");
    const json = await data.json();
    console.log(json.data.cards[4]);
    const restaurants = json.data.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    );
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  function filterofrating() {
    const filteredList = Listofrestaurants.filter(
      (res) => res.card?.card?.info?.avgRating > 4,
    );
    setFilteredRestaurants(filteredList);
  }
  return Listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterofrating}>
          high rated Restaurant
        </button>
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = Listofrestaurants.filter((res) => {
              const name = res.card?.card?.info?.name || "";
              return name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resturant) => (
          <Link
            key={resturant.card.card.info.id}
            to={"/restaurants/" + resturant.card.card.info.id}
          >
            {/* {resturant.data.promoted ? (
              <promotedCards resData={resturant} />
            ) : ( */}
            <Restcard resData={resturant} />
            {/* )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
// https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9973128&lng=76.9664037&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
