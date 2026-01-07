import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
      <div
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8
                      transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Login to Craveo
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="mt-2 bg-orange-500 text-white py-2 rounded-md
                       hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-zinc-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
