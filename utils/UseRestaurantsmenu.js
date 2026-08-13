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
import { MENU_API } from "./constants";

const useRestaurantsMenu = (resId) => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    if (!resId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resId);

        if (!response.ok) {
          throw new Error("Failed to fetch restaurant menu");
        }

        const json = await response.json();

        console.log("Restaurant API response:", json);

        const cards = json?.data?.cards || [];

        console.log("Restaurant menu cards:", cards);

        setMenu(cards);
      } catch (error) {
        console.error("Menu API error:", error);
        setMenu([]);
      }
    };

    fetchData();
  }, [resId]);

  return menu;
};

export default useRestaurantsMenu;