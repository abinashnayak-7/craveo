import React, { useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";

const PlaceOrder = () => {
  const { total, subtotal, deliveryFee } = useContext(StoreContext);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 px-4 py-10 md:px-10 lg:px-24">
      <form className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT – DELIVERY INFO */}
        <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-1">
            Delivery Information
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            Please enter your delivery details
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="input-field" placeholder="First Name" />
            <input className="input-field" placeholder="Last Name" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input-field" placeholder="Email" />
            <input className="input-field" placeholder="Street Address" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input-field" placeholder="City" />
            <input className="input-field" placeholder="State" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input-field" placeholder="Zip Code" />
            <input className="input-field" placeholder="Country" />
          </div>

          <input
            className="input-field mt-4 w-full"
            placeholder="Phone Number"
          />
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-zinc-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
            </div>

            <hr className="my-5 border-zinc-200" />

            <div className="flex justify-between text-lg font-semibold text-orange-500">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-4 rounded-2xl bg-orange-500 text-white
                       text-lg font-semibold shadow-md
                       hover:bg-orange-600 hover:shadow-lg
                       active:scale-[0.98] transition-all"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
