

import { useEffect, useState } from "react";
import { API_BASE_URL } from "./constants";
const UseRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const getRestaurantInfo = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/restaurants/${resId}`);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();

        console.log("FULL MENU API RESPONSE:", json);

        setResInfo(json);
      } catch (error) {
        console.error("Menu API error:", error);

        setResInfo(null);
      }
    };

    getRestaurantInfo();
  }, [resId]);

  return resInfo;
};

export default UseRestaurantsMenu;
