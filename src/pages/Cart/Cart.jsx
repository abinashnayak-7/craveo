import React, { use, useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      acc += item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-zinc-100 px-4 py-6 md:px-10 lg:px-20">
      {/* Cart Items */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
        <div className="hidden md:grid grid-cols-6 text-sm font-semibold text-gray-600 pb-3">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="text-center">Remove</p>
        </div>

        <hr className="hidden md:block mb-4" />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={index}
                className="flex flex-col md:grid md:grid-cols-6 items-center gap-4 py-4 border-b last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <p className="text-sm font-medium text-gray-800 text-center md:text-left">
                  {item.name}
                </p>

                <p className="text-sm text-gray-600">${item.price}</p>

                <p className="text-sm font-medium">{cartItems[item._id]}</p>

                <p className="text-sm font-semibold text-orange-500">
                  ${item.price * cartItems[item._id]}
                </p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="px-4 py-1.5 text-sm font-medium text-white bg-red-500 
                             rounded-md hover:bg-red-600 transition
                             md:justify-self-center hover:cursor-pointer"
                >
                  Remove
                </button>
              </div>
            );
          }
        })}
      </div>

      {/* Order Summary & Promo Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cart Total - Left */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <hr className="my-2 text-zinc-400" />

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>

          <hr className="my-2 text-zinc-400" />

          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>

        {/* Promo Code - Right */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-gray-600 mb-3">
            If you have a promo code, enter it here
          </p>

          <div className="flex gap-3 sm:flex-col md:flex-col flex-col">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-1 px-4 py-2 border rounded-md border-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-5 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 transition hover:cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        {/* Checkout Button - Full Width */}
        <button onClick={()=>{
          navigate('/placeorder')
        }} className="md:col-span-2 w-full mt-2 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition hover:cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
