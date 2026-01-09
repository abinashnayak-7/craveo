import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/asset";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  /* -------------------- STATE -------------------- */
  const [cartItems, setCartItems] = useState({});

  /* -------------------- CONSTANTS -------------------- */
  const BASE_DELIVERY_FEE = 2;

  /* -------------------- CALCULATIONS -------------------- */
  const subtotal = food_list.reduce((sum, item) => {
    return sum + (cartItems[item._id] || 0) * item.price;
  }, 0);

  const deliveryFee = subtotal > 0 ? BASE_DELIVERY_FEE : 0;

  const total = subtotal + deliveryFee;

  /* -------------------- CART ACTIONS -------------------- */
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }
  };

  /* -------------------- SIDE EFFECTS -------------------- */
  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
  }, [cartItems]);

  /* -------------------- CONTEXT VALUE -------------------- */
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  };

  /* -------------------- PROVIDER -------------------- */
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
