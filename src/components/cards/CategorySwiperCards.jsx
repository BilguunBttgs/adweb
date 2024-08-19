"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Badge } from "@material-tailwind/react";

const CategorySwiperCards = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mt-5"
      slidesPerView={2}
      spaceBetween={5}
      breakpoints={{
        340: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 4,
        },
        720: {
          slidesPerView: 6,
        },
        825: {
          slidesPerView: 7,
        },
      }}
    >
      <SwiperSlide className="w-28 ">
        <Badge placement="top-start" className="top-4 left-4" content={10}>
          <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
            <Image src="/rim.png" width={100} height={100} alt="" />
            <h4>Бүх зар</h4>
          </div>
        </Badge>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Дугуй</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-28 ">
        <div className="bg-white rounded-sm border-[1px] p-4 flex-center-col w-28">
          <Image src="/rim.png" width={100} height={100} alt="" />
          <h4>Обуд</h4>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySwiperCards;
