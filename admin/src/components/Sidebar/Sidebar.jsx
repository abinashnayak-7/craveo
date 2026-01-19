import React from "react";
import { CirclePlus, ListFilterPlus, BookCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "flex flex-col md:flex-row items-center gap-1 md:gap-3 text-orange-500 md:bg-orange-500 md:text-white md:shadow-sm rounded-lg px-3 py-2 text-xs md:text-sm font-medium"
      : "flex flex-col md:flex-row items-center gap-1 md:gap-3 text-zinc-600 md:text-zinc-700 hover:bg-zinc-100 rounded-lg px-3 py-2 text-xs md:text-sm transition";

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-around border-t border-zinc-200 bg-white py-2 md:hidden">
        <NavLink to="/add" className={navLinkClasses}>
          <CirclePlus size={20} />
          <span>Add</span>
        </NavLink>

        <NavLink to="/list" className={navLinkClasses}>
          <ListFilterPlus size={20} />
          <span>List</span>
        </NavLink>

        <NavLink to="/orders" className={navLinkClasses}>
          <BookCheck size={20} />
          <span>Orders</span>
        </NavLink>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:min-h-screen md:flex-col md:border-r md:border-zinc-200 md:bg-white md:px-4 md:py-6">
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <NavLink to="/add" className={navLinkClasses}>
                <CirclePlus size={18} />
                <span>Add Items</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/list" className={navLinkClasses}>
                <ListFilterPlus size={18} />
                <span>List Items</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders" className={navLinkClasses}>
                <BookCheck size={18} />
                <span>Orders</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
