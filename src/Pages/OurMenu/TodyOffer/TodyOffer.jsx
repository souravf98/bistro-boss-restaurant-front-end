import React, { useEffect, useState } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/Hooks/useMenu";

const TodyOffer = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const TodyOffer = data.filter((item) => item.category === "popular");
  //       setMenu(TodyOffer);
  //     });
  // }, []);

  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-3/4">
        <SectionTitle
          subHeding={"---Don't miss---"}
          headign={"TODAY'S OFFER"}
        ></SectionTitle>
        <div className="flex items-center flex-wrap gap-6 mx-auto">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="text-orange-300 my-12 border-[1px] border-orange-300 py-3 px-7 rounded-full">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodyOffer;
