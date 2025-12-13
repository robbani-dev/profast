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
    <section className="bg-[#03373D] st-container rounded-2xl ">
      <div>
        <h2 style={{color: "white"}} className="title-section">Our Services</h2>
        <p className="mb-12 text-secondary-content">
          Explore the range of services we offer to make your delivery experience smooth and reliable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
