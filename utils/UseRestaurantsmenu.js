import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const UesRestaurantsMenu = (resId) => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenu(json.data.cards);
  };
  return menu;
};
export default UesRestaurantsMenu;
