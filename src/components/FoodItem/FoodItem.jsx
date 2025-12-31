import React from "react";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-46 object-cover rounded-md transition-transform duration-500 ease-out
             hover:scale-105
             opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="text-center mb-2">
        <p className="text-lg font-semibold text-slate-800">{name}</p>
      </div>

      <p className="text-sm text-slate-600 text-center mb-3 line-clamp-2">
        {description}
      </p>

      <div className="text-center mt-auto">
        <p className="text-orange-500 font-bold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
