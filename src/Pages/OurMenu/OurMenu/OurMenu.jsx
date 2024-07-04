import React from "react";
import MenuBanner from "../MenuBanner/MenuBanner";
import { Helmet } from "react-helmet-async";
import TodyOffer from "../TodyOffer/TodyOffer";
import PizzaBanner from "../PizzaBanner/PizzaBanner";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Our Menu Page</title>
      </Helmet>
      <MenuBanner></MenuBanner>
      <TodyOffer></TodyOffer>
      <PizzaBanner></PizzaBanner>
    </div>
  );
};

export default OurMenu;
