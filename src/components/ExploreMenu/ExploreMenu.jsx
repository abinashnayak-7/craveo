import React from "react";
import { menu_list } from "../../assets/asset";

const ExploreMenu = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <h1 className="text-3xl font-bold text-center mb-4 mt-8">
        Explore Our Menu
      </h1>

      <p className="text-center text-md text-slate-600 mb-12">
        Discover a variety of delicious dishes crafted to satisfy every palate.
        From appetizers to desserts, our menu offers something for everyone.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
        {menu_list.map((item, index) => (
          <div key={index} className="text-center">
            <div
              className="mx-auto mb-4 w-36 h-36 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-28 lg:h-28
                         rounded-full overflow-hidden cursor-pointer"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-full h-full object-cover
                            transition-transform duration-300 ease-out hover:scale-105 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className="text-base sm:text-lg font-semibold">
              {item.menu_name}
            </h2>
          </div>
        ))}
      </div>

      <hr className="my-12 border-t border-slate-200 max-w-5xl mx-auto" />
    </div>
  );
};

export default ExploreMenu;
