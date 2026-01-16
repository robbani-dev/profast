import React from "react";
import Image from "next/image";

// Service data
const services = [
  {
    image: "/images/fetaure/call.png",
    heading: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
  {
    image: "/images/fetaure/live track.png",
    heading: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    image: "/images/fetaure/safe delivery.png",
    heading: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
];

export default function Services() {
  return (
    <section className="st-container ">
      <div className="border-y-2 border-dashed py-20 flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-12 items-center p-8 justify-between bg-base-200 rounded-2xl shadow-lg transition-all duration-300 hover:bg-primary hover:shadow-xl"
          >
            <div className="w-full md:w-48 flex justify-center">
              <Image
                src={service.image}
                alt={service.heading}
                width={200}
                height={200}
                className="object-contain pr-12 md:border-r-2 border-dashed border-primary"
              />
            </div>

            <div className="flex-1">
              <h3 className="title-card text-neutral">{service.heading}</h3>
              <p className="text-left">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
