import { useContext } from "react";
import { Plus, Minus } from "lucide-react";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
      {/* Image + Counter Wrapper */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-46 object-cover rounded-md transition-transform duration-500 ease-out
                     hover:scale-105 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
          loading="lazy"
          decoding="async"
        />

        {/* Counter Overlay */}
        <div className="absolute bottom-2 right-2 bg-white rounded-full shadow px-3 py-1 flex items-center gap-2">
          {itemCount === 0 ? (
            <Plus className="cursor-pointer" onClick={() => addToCart(id)} />
          ) : (
            <>
              <Minus
                className="cursor-pointer rounded-full bg-red-500 text-white"
                onClick={() => removeFromCart(id)}
              />
              <span className="font-medium">{cartItems[id]}</span>
              <Plus
                className="cursor-pointer rounded-full bg-green-500 text-white"
                onClick={() => addToCart(id)}
              />
            </>
          )}
        </div>
      </div>

      <p className="text-lg font-semibold text-slate-800 text-center">{name}</p>

      <p className="text-sm text-slate-600 text-center mb-3 line-clamp-2">
        {description}
      </p>

      <p className="text-orange-500 font-bold text-lg text-center mt-auto">
        ${price}
      </p>
    </div>
  );
};

export default FoodItem;
