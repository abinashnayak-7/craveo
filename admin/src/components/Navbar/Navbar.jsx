import React from "react";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:px-4 lg:px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={assets.appLogo}
            alt="App Logo"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">
            Craveo
          </span>
          <span className="text-xs sm:text-sm text-zinc-600">X admin</span>
        </div>

        {/* Profile Section */}
        <img
          src={assets.profilePic}
          alt="Profile Picture"
          className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full object-cover cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
