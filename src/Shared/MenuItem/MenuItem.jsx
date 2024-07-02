import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <section className="mx-auto">
      <div className="flex items-start gap-8">
        <img
          src={image}
          className="w-[120px] h-[120px] rounded-full"
          alt="image"
        />
        <div className=" w-[400px]">
          <h3 className="text-2xl uppercase mb-2">{name}--------</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-3xl text-orange-300">{price}</p>
      </div>
    </section>
  );
};

export default MenuItem;
