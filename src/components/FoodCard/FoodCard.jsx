import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div>
      <div className="card bg-slate-800 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}!</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
