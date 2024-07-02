import React from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
