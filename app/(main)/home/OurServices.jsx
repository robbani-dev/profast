import React from "react";
import Image from "next/image";

// Example services data
const services = [
  {
    logo: "/images/services/service1.png",
    heading: "Fast Delivery",
    description: "Get your orders delivered quickly and reliably.",
  },
  {
    logo: "/images/services/service2.png",
    heading: "Real-Time Tracking",
    description: "Track your delivery in real-time with our app.",
  },
  {
    logo: "/images/services/service3.png",
    heading: "Multiple Payment Options",
    description: "Pay conveniently via card, cash, or mobile wallets.",
  },
  {
    logo: "/images/services/service4.png",
    heading: "Customer Support",
    description: "24/7 support for all your delivery needs.",
  },
  {
    logo: "/images/services/service5.png",
    heading: "Safe & Secure",
    description: "Your items are handled with care and delivered safely.",
  },
  {
    logo: "/images/services/service6.png",
    heading: "Easy Returns",
    description: "Hassle-free returns and refunds for your convenience.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#03373D] st-container rounded-2xl">
      <div className=" flex flex-col gap-8 py-20">
        <div className="text-center md:max-w-1/2 mx-auto flex flex-col gap-4">
          <h2 style={{ color: "white" }} className="title-section">
            Our Services
          </h2>
          <p className="mb-12 text-secondary-content">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-primary "
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={service.logo}
                  alt={service.heading}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="title-card">{service.heading}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
