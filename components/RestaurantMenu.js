
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantsMenu from "../utils/UseRestaurantsmenu";
import Rescategory from "./Rescategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantsMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // Loading
  if (menu === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-lg font-semibold">
          Loading restaurant...
        </h1>
      </div>
    );
  }

  // API data
  const cards = menu?.data?.cards || [];

  console.log("MENU:", menu);
  console.log("CARDS:", cards);

  // ------------------------------------------------
  // Restaurant information
  // ------------------------------------------------

  let info = null;

  for (const card of cards) {
    const restaurantInfo =
      card?.card?.card?.info ||
      card?.card?.info ||
      card?.info;

    if (restaurantInfo) {
      info = restaurantInfo;
      break;
    }
  }

  console.log("RESTAURANT INFO:", info);

  // ------------------------------------------------
  // Find menu categories
  // ------------------------------------------------

  const resMenuDetails = [];

const findMenuCategories = (obj) => {
  if (!obj || typeof obj !== "object") {
    return;
  }

  // If this is an array, search every item
  if (Array.isArray(obj)) {
    obj.forEach((item) => {
      findMenuCategories(item);
    });

    return;
  }

  // ---------------------------------------------
  // Check if current object is an ItemCategory
  // ---------------------------------------------

  if (
    obj?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
    Array.isArray(obj?.itemCards)
  ) {
    resMenuDetails.push({
      card: {
        card: obj,
      },
    });

    return;
  }

  // ---------------------------------------------
  // Search every nested property
  // ---------------------------------------------

  Object.values(obj).forEach((value) => {
    if (value && typeof value === "object") {
      findMenuCategories(value);
    }
  });
};

findMenuCategories(cards);

// ---------------------------------------------
// Remove duplicate categories
// ---------------------------------------------

const uniqueCategories = resMenuDetails.filter(
  (category, index, self) => {
    const title = category?.card?.card?.title;

    return (
      index ===
      self.findIndex(
        (item) =>
          item?.card?.card?.title === title
      )
    );
  }
);

console.log(
  "MENU CATEGORIES:",
  uniqueCategories
);

  // ------------------------------------------------
  // Restaurant not found
  // ------------------------------------------------

  if (!menu?.data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-xl font-bold">
            Restaurant not found
          </h1>

          <p className="mt-2 text-gray-500">
            Unable to load this restaurant menu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-3 py-5 sm:px-5 sm:py-8">

      {/* ================================
          RESTAURANT HEADER
      ================================= */}

      {info && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-white shadow">

          {/* Restaurant Image */}

          {info.cloudinaryImageId && (
            <img
              className="aspect-[16/7] max-h-96 w-full object-cover"
              src={`${MENU_URL}${info.cloudinaryImageId}`}
              alt={info.name}
            />
          )}

          {/* Restaurant Details */}

          <div className="p-4 sm:p-6">

            <h1 className="text-2xl font-bold sm:text-3xl">
              {info.name}
            </h1>

            <p className="mt-2 text-sm font-semibold sm:text-base">
              ⭐ {info.avgRating || "N/A"}{" "}
              •{" "}
              {info.costForTwoMessage ||
                "Price unavailable"}
            </p>

            {info.cuisines && (
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                {info.cuisines.join(", ")}
              </p>
            )}

            {info.locality && (
              <p className="mt-1 text-sm text-gray-500">
                {info.locality}
              </p>
            )}

          </div>
        </section>
      )}

      {/* ================================
          MENU TITLE
      ================================= */}

      <div className="mb-5">

        <h2 className="text-2xl font-bold">
          Menu
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Explore our delicious food
        </p>

      </div>

      {/* ================================
          MENU CATEGORIES
      ================================= */}

      {uniqueCategories.length === 0 ? (
        <div className="rounded-xl bg-white p-6 text-center shadow">

          <h2 className="font-semibold">
            No menu categories found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            No menu categories were found in
            the API response.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {uniqueCategories.map(
            (category, index) => {

              const data =
                category?.card?.card;

              if (!data) return null;

              return (
                <Rescategory
                  key={`${data.title}-${index}`}
                  data={data}
                  showItems={
                    showIndex === index
                  }
                  setShowIndex={() => {
                    setShowIndex(
                      showIndex === index
                        ? null
                        : index
                    );
                  }}
                />
              );
            }
          )}

        </div>
      )}

    </main>
  );
};

export default RestaurantMenu;