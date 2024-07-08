"use client";
import React from "react";
import { ButtonPaypal } from "./ButtonPaypal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import useFranquisia from "../../../../store/payment/franquisia";

import Image from "next/image";

export const CardButtonPaypal = ({ selectedMethod, email }) => {
  const { index, images, total } = useFranquisia();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[400px] h-[300px] bg-slate-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          // onSlideChange={handleSlide}
          initialSlide={index}
        >
          {/* {images?.length > 0 && */}
          {/* images.map((item, index) => ( */}
          <SwiperSlide key={index}>
            <Image
              src={images[index]}
              width={500}
              height={500}
              alt={`Image ${index}`}
              className="rounded-t-2xl"
            />
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
        <p>{total}</p>
        <div className="">
          {selectedMethod === "card-paypal" && <ButtonPaypal email={email} />}
        </div>
      </div>
    </div>
  );
};
