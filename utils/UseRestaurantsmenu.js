// import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

// const UesRestaurantsMenu = (resId) => {
//   const [menu, setMenu] = useState();

//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     setMenu(json.data.cards);
//   };
//   return menu;
// };
// export default UesRestaurantsMenu;

import { useEffect, useState } from "react";

const UseRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const getRestaurantInfo = async () => {
      try {
        const response = await fetch(
          `https://react-hgk5.onrender.com/restaurants/${resId}`
        );

        if (!response.ok) {
          throw new Error(
            `HTTP error: ${response.status}`
          );
        }

        const json = await response.json();

        console.log(
          "FULL MENU API RESPONSE:",
          json
        );

        setResInfo(json);
      } catch (error) {
        console.error(
          "Menu API error:",
          error
        );

        setResInfo(null);
      }
    };

    getRestaurantInfo();
  }, [resId]);

  return resInfo;
};

export default UseRestaurantsMenu;