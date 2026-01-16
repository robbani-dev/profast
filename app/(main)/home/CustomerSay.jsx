"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const comments = [
  {
    image: "/images/comment/user1.png",
    name: "Sajib Sarkar",
    designation: "Verified Buyer",
    comment: "Get your orders delivered quickly and reliably.",
  },
  {
    image: "/images/comment/user2.png",
    name: "Arafat Hossain",
    designation: "Regular Customer",
    comment: "Excellent service and very fast delivery.",
  },
  {
    image: "/images/comment/user3.png",
    name: "Nusrat Jahan",
    designation: "VIP Customer",
    comment: "The delivery team was professional and polite.",
  },
  {
    image: "/images/comment/user4.png",
    name: "Tanvir Ahmed",
    designation: "Customer",
    comment: "Products arrived safely and on time.",
  },
  {
    image: "/images/comment/user5.png",
    name: "Mehedi Hasan",
    designation: "Verified Buyer",
    comment: "Very smooth ordering process, highly recommended.",
  },
];

export default function CustomerSay() {
  return (
    <section className="st-container flex flex-col gap-10 mb-25">
      {/* Header */}
      <Image
        src="/images/customerSay.png"
        alt="Customer Say"
        width={300}
        height={100}
        className="mx-auto"
      />
      <div className="text-center flex flex-col gap-6">
        <h2 className="title-section text-neutral">
          What our customers are saying
        </h2>

        <p className=" max-w-xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-100 sm:max-w-xl lg:max-w-6xl mx-auto px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="testimonial-swiper space-y-10"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {comments.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-base-200 rounded-2xl p-6 shadow-sm">
                <Image
                  src="/images/quat.png"
                  alt="Quote"
                  width={30}
                  height={30}
                  className="mb-4"
                />

                <p className=" mb-6">{item.comment}</p>

                <div className="border-b border-dashed mb-4"></div>

                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral">{item.name}</h4>
                    <p className="text-sm">{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* REQUIRED STYLES */}
      <style jsx global>{`
        .testimonial-swiper .swiper-slide {
          opacity: 0.3;
          transform: scale(0.85);
          transition: all 0.4s ease;
        }

        .testimonial-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .testimonial-swiper .swiper-slide-next,
        .testimonial-swiper .swiper-slide-prev {
          opacity: 0.2;
          transform: scale(0.9);
        }

        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #a3e635;
        }
      `}</style>
    </section>
  );
}
