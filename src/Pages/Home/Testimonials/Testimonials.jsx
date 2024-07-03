import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="w-full min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="w-full">
        <SectionTitle
          subHeding={"---What Our Clients Say---"}
          headign={"TESTIMONIALS"}
        ></SectionTitle>

        <div className="w-2/4 mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((reviews) => (
              <SwiperSlide key={reviews._id}>
                <div className=" flex flex-col items-center">
                  <Rating
                    className="max-w-[180px]"
                    value={reviews.rating}
                    readOnly
                  />
                  <p className="text-2xl my-7">{reviews.details}</p>
                  <h4 className="text-3xl my-4">{reviews.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
