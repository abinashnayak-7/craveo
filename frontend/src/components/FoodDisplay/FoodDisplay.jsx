import React, { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../Context/StoreContext.jsx";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="px-4 sm:px-6 lg:px-10 mt-12">
      <h2 className="text-3xl sm:text-3xl font-bold text-center text-slate-800 mb-8">
        Top dishes near you
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
