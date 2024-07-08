"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../globals.css";

import { Pagination, Navigation } from "swiper/modules";

import useFranquisia from "../../../../store/payment/franquisia";

export const Franquisia = () => {
  const { precios, precio, images } = useFranquisia();
  const setTotal = useFranquisia((state) => state.setTotal);
  const setModo = useFranquisia((state) => state.setModo);
  const setIndex = useFranquisia((state) => state.setIndex);

  const [currentIndex, setCurrentIndex] = useState(stateInitial());
  const [currentPrice, setCurrentPrice] = useState(precios[stateInitial()]);
  const [increasePrice, setIncreasePrice] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);



  const iva = 3420000;
  const descuento = 0;

  function stateInitial() {
    if (precios.includes(precio)) {
      return precios.indexOf(precio);
    } else {
      return 0;
    }
  }

  const handleSlide = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
    setCurrentPrice(precios[swiper.activeIndex] * increasePrice);
  };

  const incrementValues = [5000000, 8000000, 18000000];

  const handleDecrement = () => {
    if (loading || increasePrice === 1) return;

    const newIncreasePrice = increasePrice - 1;
    const newPrice = currentPrice - precios[currentIndex];

    setIncreasePrice(newIncreasePrice);
    setCurrentPrice(newPrice);
    setLoading(false);
  };

  const handleIncrease = () => {
    if (loading) return;

    const newIncreasePrice = increasePrice + 1;
    const newPrice = currentPrice + precios[currentIndex];

    setIncreasePrice(newIncreasePrice);
    setCurrentPrice(newPrice);
    setLoading(false);
  };

  const getFranquiciaName = (price) => {
    if (price === incrementValues[0] * increasePrice) {
      return "Lite";
    } else if (price === incrementValues[1] * increasePrice) {
      return "Start";
    } else if (price === incrementValues[2] * increasePrice) {
      return "Premium";
    } else {
      return "";
    }
  };
  console.log(currentIndex, "currentIndex...");
  useEffect(() => {
    setTotalAmount(currentPrice + iva + descuento)
    setTotal(currentPrice + iva + descuento)

    setModo(getFranquiciaName(currentPrice))

    setIndex(currentIndex)


  }, [currentPrice, iva, descuento, setTotal, setModo]);

  return (
    <div className="mx-4">
      <div className="border rounded-2xl mb-8">
        <div className="rounded-t-2xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-slide-container"
            onSlideChange={handleSlide}
            initialSlide={currentIndex}
          >
            {images?.length > 0 &&
              images.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    width={500}
                    height={500}
                    alt={`Image ${index}`}
                    className="rounded-t-2xl"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="flex justify-between items-center px-8 my-8">
          <span className="font-bold text-lg">
            Franquicia {getFranquiciaName(currentPrice)}
          </span>
          <p className="font-bold text-lg">
            {`$${currentPrice?.toLocaleString("es-ES", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`}
          </p>
        </div>
        <div className="flex items-center px-8 my-8">
          <p className="pr-4 text-[#677489] w-32">
            Cantidad:
            <span className="text-black px-4 text-lg font-[500]">
              {increasePrice}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 bg-[#787e895b] text-white rounded-md"
              onClick={handleDecrement}
            >
              -
            </button>
            <button
              className="px-4 py-2 mr-2 bg-[#67748955] text-white rounded-md"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pb-4">
        <div className="flex items-center justify-between">
          <p className="text-[#677489]">Subtotal:</p>
          <span className="text-black text-lg font-[500] text-end">{`$${currentPrice?.toLocaleString(
            "es-ES",
            {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }
          )}`}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#677489]">IVA:</p>
          <span className="text-black text-lg font-[500]">{`$${iva?.toLocaleString(
            "es-ES",
            {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }
          )}`}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#677489]">Descuento (10%):</p>
          <span className="text-black font-[500] px-4 text-lg">{`-$${descuento?.toLocaleString(
            "es-ES",
            {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }
          )}0`}</span>
        </div>
      </div>
      <hr />
      <div className="pt-4 flex items-center justify-between">
        <p className="font-bold text-black text-lg">Total:</p>
        <span className="font-bold text-black text-lg">{`$${(
         totalAmount
        ).toLocaleString("es-ES", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`}</span>
      </div>
    </div>
  );
};
