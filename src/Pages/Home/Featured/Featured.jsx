import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${FeaturedImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        <SectionTitle
          subHeding={"---Check it out---"}
          headign={"FROM OUR MENU"}
        ></SectionTitle>

        <div className="flex gap-12 items-start justify-between w-3/4 p-6 rounded-sm mx-auto bg-black bg-opacity-75">
          <img src={FeaturedImg} alt="" className="w-[400px]" />
          <div className="text-white">
            <p className="text-lg ">March 20, 2023</p>
            <h3 className="text-2xl uppercase my-4">WHERE CAN I GET SOME?</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
