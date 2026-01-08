import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-100 shadow-md">
      <div className="w-full px-3 sm:px-6 lg:px-10 py-2 sm:py-3">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/appLogo.png"
              alt="Craveo Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xl sm:text-2xl font-bold text-orange-500">
              Craveo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-orange-400 hover:text-orange-500" to="/">
              Home
            </Link>
            <Link className="text-orange-400 hover:text-orange-500" to="/menu">
              Menu
            </Link>
            <Link
              className="text-orange-400 hover:text-orange-500"
              to="/contactus"
            >
              Contact us
            </Link>
          </nav>

          <nav className="hidden md:flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer" />
            <Link to="/cart">
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <input type="checkbox" id="mobile-menu" className="hidden peer" />

            <label
              htmlFor="mobile-menu"
              className="cursor-pointer p-2 rounded-lg hover:bg-orange-50"
            >
              <Menu className="w-6 h-6 text-zinc-700" />
            </label>

            {/* Mobile Menu */}
            <div
              className="
                absolute left-3 right-3 top-full mt-3
                bg-white rounded-2xl shadow-xl
                border border-zinc-200
                hidden peer-checked:block
                overflow-hidden
              "
            >
              <nav className="flex flex-col divide-y divide-zinc-100">
                {[
                  { to: "/", label: "Home" },
                  { to: "/menu", label: "Menu" },
                  { to: "/cart", label: "Cart" },
                  { to: "/login", label: "Login" },
                  { to: "/contactus", label: "Contact us" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-6 py-4 text-sm font-medium transition
                      ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "text-zinc-700 hover:bg-orange-50 hover:text-orange-500"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
