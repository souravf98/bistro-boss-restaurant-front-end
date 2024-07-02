import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="w-9/12 mx-auto my-24 ">
      <SectionTitle
        subHeding={"---Check it out---"}
        headign={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex items-center flex-wrap gap-6 mx-auto">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="text-orange-300 my-12 border-[1px] border-orange-300 py-3 px-7 rounded-full">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
