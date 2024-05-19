"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import HomeCategoryList from "../../HomeCategoryList";
import { Image } from "antd";
const HeroSection = () => {
  return (
    <div className="lg:grid grid-cols-12 lg:gap-4 lg:items-center">
      <div className="col-span-2 my-4 lg:block hidden">
        <HomeCategoryList />
      </div>
      <div className="lg:col-span-10 col-span-12 lg:m-4 rounded-xl p-3 w-full">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper w-full lg:h-[400px] h-[230px] my-3 rounded-xl border-indigo-200 border-2"
        >
          <SwiperSlide className="bg-red-500">
            <Image
              alt="image"
              className="w-full h-full"
              src="https://icms-image.slatic.net/images/ims-web/b10658ff-4bf1-418b-8657-47f2e32da776.jpg_1200x1200.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              className="w-full h-full"
              src="https://icms-image.slatic.net/images/ims-web/8d6ea93d-fd41-408e-8e1c-3a1912afbbe6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              className="w-full h-full"
              src="https://icms-image.slatic.net/images/ims-web/d5b6cb3f-27d9-4e77-afa7-5117c8b57b27.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              className="w-full h-full"
              src="https://icms-image.slatic.net/images/ims-web/205d0c5a-e6af-4d75-9c46-74206211cd79.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
