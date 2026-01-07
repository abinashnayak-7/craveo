import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-zinc-100">
      <div className="w-full px-3 sm:px-6 lg:px-10 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo + App Name */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/appLogo.png"
              alt="Craveo Logo"
              width={40}
              height={40}
              className="object-contain w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xl sm:text-2xl font-bold text-orange-500">
              Craveo
            </span>
          </Link>

          {/* Desktop Navigation - Mid Side */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/"
              className="text-sm lg:text-md text-orange-400 font-medium hover:text-orange-500 transition"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-sm lg:text-md text-orange-400 font-medium hover:text-orange-500 transition"
            >
              Menu
            </Link>
            <Link
              to="/contactus"
              className="text-sm lg:text-md text-orange-400 font-medium hover:text-orange-500 transition"
            >
              Contact us
            </Link>
          </nav>

          {/* Desktop Navigation - Right Side */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Search className="cursor-pointer w-5 h-5" />
            <ShoppingCart className="cursor-pointer w-5 h-5" />
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-3 lg:px-4 py-2 rounded-full
                         bg-linear-to-r from-orange-400 to-orange-500
                         text-white text-xs lg:text-sm font-medium"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden relative">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            {/* Mobile Menu */}
            <div
              className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200
                         hidden peer-checked:block"
            >
              <nav className="flex flex-col py-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 hover:bg-orange-400 hover:text-white"
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 hover:bg-orange-400 hover:text-white"
                    }`
                  }
                >
                  Login
                </NavLink>

                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 hover:bg-orange-400 hover:text-white"
                    }`
                  }
                >
                  Menu
                </NavLink>

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 hover:bg-orange-400 hover:text-white"
                    }`
                  }
                >
                  Cart
                </NavLink>

                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 hover:bg-orange-400 hover:text-white"
                    }`
                  }
                >
                  Contact us
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
