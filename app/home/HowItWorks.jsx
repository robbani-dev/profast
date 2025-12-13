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
        description: "Our delivery partner picks up and delivers your order quickly.",
    },
    {
        logo: "/images/steps/step4.png",
        heading: "Enjoy & Feedback",
        description: "Receive your order and rate your experience to help us improve.",
    },
];

export default function HowItWorks() {
    return (
        <section className=" st-container">
            <div className="">
                <h2 className=" title-section">How ProFast Works</h2>
                <p className=" mb-12">
                    Follow these simple steps to get your delivery done quickly and reliably.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-base-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary"
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
                            <h3 className="title-card">{step.heading}</h3>
                            <p className="text-left">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
