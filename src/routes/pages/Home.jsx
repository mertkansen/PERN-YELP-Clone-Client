import React from "react";

import { AddRestaurant, Header, RestaurantList } from "../components/exports";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};

export default Home;
