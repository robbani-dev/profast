import React from "react";
import Image from "next/image"; // Use if you have a logo image

// Example step data
const steps = [
  {
    logo: "/images/steps/step1.png", // path to your step logo
    heading: "Place an Order",
    description: "Choose your items and place an order easily through the app.",
  },
  {
    logo: "/images/steps/step2.png",
    heading: "Order Confirmation",
    description: "Receive instant confirmation and tracking details.",
  },
  {
    logo: "/images/steps/step3.png",
    heading: "Fast Delivery",
    description:
      "Our delivery partner picks up and delivers your order quickly.",
  },
  {
    logo: "/images/steps/step4.png",
    heading: "Enjoy & Feedback",
    description:
      "Receive your order and rate your experience to help us improve.",
  },
];

export default function HowItWorks() {
  return (
    <section className="st-container my-20">
      <div className="flex flex-col gap-8">
        <h2 className="title-section text-neutral">How ProFast Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/50 flex flex-col gap-6"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={step.logo}
                  alt={step.heading}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="title-card text-neutral">{step.heading}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
