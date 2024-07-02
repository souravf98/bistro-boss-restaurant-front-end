import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { slide1, slide2, slide3, slide4, slide5 } from "./assets";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-32">
      <SectionTitle
        subHeding={"---From 11:00am to 10:00pm---"}
        headign={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-9/12 "
      >
        <SwiperSlide className="relative">
          <img src={slide1} className="rounded-sm" alt="" />
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center uppercase space-x-1">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide2} className="rounded-sm" alt="" />
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center uppercase space-x-1">
            pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide3} className="rounded-sm" alt="" />
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center uppercase space-x-1">
            Soups
          </h4>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide4} className="rounded-sm" alt="" />
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center uppercase space-x-1">
            desserts
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide5} className="rounded-sm" alt="" />
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center uppercase space-x-1">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
