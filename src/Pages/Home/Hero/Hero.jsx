import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from "../Hero/allAssets";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-full min-h-[804px]">
        <Carousel className="text-center ">
          <div>
            <img src={Banner1} />
          </div>
          <div>
            <img src={Banner2} />
          </div>
          <div>
            <img src={Banner3} />
          </div>
          <div>
            <img src={Banner4} />
          </div>
          <div>
            <img src={Banner5} />
          </div>
          <div>
            <img src={Banner6} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
