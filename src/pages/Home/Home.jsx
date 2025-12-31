import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <div id="menu_section">
        <ExploreMenu />
      </div>
      <div id="food_section">
        <FoodDisplay category={category} />
      </div>
    </div>
  );
};

export default Home;
