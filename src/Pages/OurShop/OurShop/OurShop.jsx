import React from "react";
import ShopBanner from "../ShopBanner/ShopBanner";
import { Helmet } from "react-helmet-async";
import MenuCard from "../MenuCard/MenuCard";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Our Shop Page</title>
      </Helmet>
      <ShopBanner></ShopBanner>
      <MenuCard></MenuCard>
    </div>
  );
};

export default OurShop;
