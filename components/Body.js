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

// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Restcard from "./Restcard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://react-hgk5.onrender.com/restaurants",
      );

      if (!response.ok) throw new Error("Failed to fetch restaurants");

      const json = await response.json();

      const restaurantList =
        json?.data?.cards?.filter(
          (item) =>
            item?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        ) || [];

      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (err) {
      console.error(err);
      setError("Unable to load restaurants. Check your API server.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const search = searchText.trim().toLowerCase();

    if (!search) {
      setFilteredRestaurants(restaurants);
      return;
    }

    setFilteredRestaurants(
      restaurants.filter((restaurant) => {
        const info = restaurant?.card?.card?.info;
        const name = info?.name || "";
        const cuisines = info?.cuisines?.join(" ") || "";

        return (
          name.toLowerCase().includes(search) ||
          cuisines.toLowerCase().includes(search)
        );
      }),
    );
  };

  const filterByRating = () => {
    setFilteredRestaurants(
      restaurants.filter(
        (restaurant) =>
          Number(restaurant?.card?.card?.info?.avgRating || 0) > 4.5,
      ),
    );
  };

  const clearFilters = () => {
    setSearchText("");
    setFilteredRestaurants(restaurants);
  };

  if (loading) return <Shimmer />;

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow">
          <p className="mb-4 text-red-600">{error}</p>
          <button
            onClick={fetchData}
            className="rounded-lg bg-orange-500 px-5 py-2 text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
      <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          onClick={filterByRating}
          className="w-full rounded-lg border bg-white px-4 py-2.5 shadow-sm hover:bg-gray-100 sm:w-auto"
        >
          ⭐ Top Rated
        </button>

        <div className="flex w-full gap-2 sm:w-auto sm:flex-1 sm:max-w-lg">
          <input
            type="text"
            value={searchText}
            placeholder="Search restaurant or cuisine..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="min-w-0 flex-1 rounded-lg border px-3 py-2.5 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={handleSearch}
            className="shrink-0 rounded-lg bg-orange-500 px-4 py-2.5 text-white hover:bg-orange-600"
          >
            Search
          </button>
        </div>

        <button
          onClick={clearFilters}
          className="w-full rounded-lg border px-4 py-2.5 hover:bg-gray-100 sm:w-auto"
        >
          Clear
        </button>
      </section>

      {filteredRestaurants.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-xl font-semibold">No restaurants found</h2>
          <p className="mt-2 text-gray-500">Try another search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {filteredRestaurants.map((restaurant) => {
            const id = restaurant?.card?.card?.info?.id;
            if (!id) return null;

            return (
              <Link key={id} to={`/restaurants/${id}`} className="min-w-0">
                <Restcard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Body;
