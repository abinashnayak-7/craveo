import React from "react";

const Header = () => {
  return (
    <div className="mt-8">
      <div
        className="
        relative
        h-[60vh] sm:h-[50vh] md:h-[40vh] lg:h-[34vw]
        mx-4 sm:mx-6 md:mx-8
        rounded-xl overflow-hidden
        flex items-center
        bg-[url('/headerImage.png')]
        bg-cover bg-center bg-no-repeat
        animate-fadeIn
      "
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative px-4 sm:px-6 md:px-12 max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Order your favourite meals here
          </h2>

          <p className="text-sm sm:text-base text-orange-100 mt-3">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients.
          </p>

          <button
            className="mt-5 px-6 py-2.5 bg-orange-500 text-white rounded-full
                     hover:bg-orange-600 transition"
          >
            Explore Menu
          </button>
        </div>
      </div>

      <hr className="my-12 border-t border-slate-200 max-w-5xl mx-auto" />
    </div>
  );
};

export default Header;
