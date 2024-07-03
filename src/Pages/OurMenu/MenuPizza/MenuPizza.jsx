import React from "react";
import PizzaSection from "../../../assets/menu/pizza-bg.jpg";

const MenuPizza = () => {
  return (
    <section
      className="w-full min-h-[800px] flex items-center justify-center "
      style={{
        backgroundImage: `url(${PizzaSection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        <div className="flex items-start justify-center w-3/4 p-12 rounded-sm mx-auto bg-black bg-opacity-75">
          <div className="text-white text-center">
            <h3 className="text-9xl uppercase my-4">Pizza</h3>
            <p className="text-2xl uppercase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              sapiente expedita vero, atque nisi quidem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPizza;
