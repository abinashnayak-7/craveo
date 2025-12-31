import React from "react";

const Auth = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Image Only */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="/userLogin.png"
            alt="Login"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Form Section */}
        <div className="flex items-center justify-center p-8 sm:p-10">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Login to your account
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Please enter your details to continue
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-lg outline-none
                             focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-lg outline-none
                             focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              <button
                type="button"
                className="w-full py-2 bg-orange-500 text-white rounded-lg
                           hover:bg-orange-600 transition font-medium"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-center text-slate-600 mt-6">
              Don’t have an account?
              <span className="text-orange-500 font-medium cursor-pointer ml-1">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
