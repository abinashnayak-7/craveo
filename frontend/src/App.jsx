import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import ReactLenis from "lenis/react";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import UserLogin from "./pages/UserAuth/UserLogin.jsx";
import UserSignup from "./pages/UserAuth/UserSignUp.jsx";
import Layout from "./pages/Layout/Layout.jsx";

const App = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<div>Menu Page</div>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
          </Route>
        </Routes>
      </ReactLenis>
    </div>
  );
};

export default App;
