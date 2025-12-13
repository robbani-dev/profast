"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import Image from "next/image";


export default function Banner() {
  const autoplayDelay = 2000; // ms — keep this synced with Swiper autoplay.delay
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: (
        <>
          We Make Sure Your <span className="text-primary">Parcel Arrives</span> On
          Time – No Fuss.
        </>
      ),
      img: "/images/banner-img-1.png",
    },
    {
      title: (
        <>
          Fastest <span className="text-primary">Delivery</span> & Easy{" "}
          <span className="text-primary">Pickup</span>
        </>
      ),
      img: "/images/banner-img-2.png",
    },
    {
      title: (
        <>
          Delivery in <span className="text-primary">30 Minutes</span> at your
          doorstep
        </>
      ),
      img: "/images/banner-img-3.png",
    },
  ];

  return (
    <div className="base-container rounded-2xl bg-linear-to-r from-base-200 via-base-200 to-primary p-4 md:p-15">
      <Swiper
        modules={[EffectCube, Pagination, Autoplay]}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        onInit={(swiper) => setActiveIndex(swiper.realIndex)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper myBarSwiper"
      >
        {slides.map((sld, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="w-full text-center">
                <h1 className="text-xl md:text-3xl font-bold">{sld.title}</h1>

                {/* Per-slide progress bar */}
                <div className="mt-4 flex justify-center">
                  <div
                    className="progress-bar w-36 h-1.5 rounded-full bg-gray-300 overflow-hidden"
                    // optional accessibility label
                    aria-hidden
                  >
                    <div
                      className="fill h-full rounded-full"
                      style={{
                        width: activeIndex === idx ? "100%" : "0%",
                        transition:
                          activeIndex === idx
                            ? `width ${autoplayDelay}ms linear`
                            : "none",
                        background:
                          activeIndex === idx ? "linear-gradient(90deg,#2563eb,#7c3aed)" : "#d1d5db",
                        // If you prefer a single color, use backgroundColor: '#2563eb'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <Image
                  src={sld.img}
                  alt={`banner img ${idx + 1}`}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Small CSS in JSX for quick copy — you can move this to globals.css */}
      <style jsx>{`
        /* progress-bar container sizing can be tuned for mobile/desktop */
        .progress-bar {
          width: 9rem; /* tailwind w-36 equivalent */
        }
        /* If you want a gradient fill for the active bar, uncomment below
           and remove inline background in style above.
        .myBarSwiper .fill {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }
        */
      `}</style>
    </div>
  );
}
