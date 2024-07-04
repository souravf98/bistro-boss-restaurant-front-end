import React from "react";
import shopBanner from "../../../assets/shop/banner2.jpg";

const ShopBanner = () => {
  return (
    <section
      className="w-full min-h-[800px] flex items-center justify-center "
      style={{
        backgroundImage: `url(${shopBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        <div className="flex items-start justify-center w-3/4 p-12 rounded-sm mx-auto bg-black bg-opacity-75">
          <div className="text-white text-center">
            <h3 className="text-9xl uppercase my-4">OUR MENU</h3>
            <p className="text-2xl uppercase">Would you like to try a Dish?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
