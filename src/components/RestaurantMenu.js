
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // Loading state
  if (!resInfo) return <Shimmer />;

  // Restaurant Info
  const restaurantInfo = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  )?.card?.card?.info;

  // Menu Cards
  const regularCards = resInfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards
    ?.map((c) => c?.card?.card?.itemCards)
    ?.flat()
    ?.filter(Boolean);

  const categories = regularCards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* overlay */}
      <div className="min-h-screen bg-white/80 backdrop-blur-sm py-10">

        <div className="max-w-4xl mx-auto px-4">

          {/* Restaurant Header */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">

            <h1 className="text-3xl font-bold text-gray-800">
              {restaurantInfo?.name}
            </h1>

            <p className="text-gray-600 mt-1">
              {restaurantInfo?.cuisines?.join(", ")}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
                {restaurantInfo?.avgRating} ★
              </span>

              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                {restaurantInfo?.costForTwoMessage}
              </span>

              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                {restaurantInfo?.areaName}
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {categories?.map((category, index) => (
              // controlled component
              <div
                key={category?.card?.card?.title}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <RestaurantCategory
                  data={category?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                  dummy={dummy}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;


