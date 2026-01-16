import React from "react";
import { FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "How can I book a parcel?",
    answer:
      "You can book a parcel directly from our website by filling in pickup and delivery details. Our courier partner will collect it from your location.",
  },
  {
    question: "What types of parcels can I send?",
    answer:
      "You can send documents, small packages, electronics, clothing, and other non-restricted items.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Delivery time depends on distance and service type, but most parcels are delivered within 24–72 hours.",
  },
  {
    question: "Can I track my parcel?",
    answer:
      "Yes, once your parcel is booked, you will receive a tracking number to monitor its status in real-time.",
  },
  {
    question: "What are the delivery charges?",
    answer:
      "Charges vary based on parcel weight, size, and delivery distance. Exact pricing is shown before confirming the booking.",
  },
  {
    question: "Is cash on delivery available?",
    answer:
      "Yes, we offer cash on delivery (COD) services for selected locations.",
  },
  {
    question: "What happens if my parcel is delayed?",
    answer:
      "In rare cases of delay, our support team will notify you and assist until the parcel is delivered.",
  },
  {
    question: "Are my parcels insured?",
    answer:
      "Yes, parcels are covered with basic insurance. Additional insurance options are available during checkout.",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "You can cancel a booking before the parcel is picked up. Cancellation options are available in your account.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via live chat, phone, or email—available 7 days a week.",
  },
];

const FAQ = () => {
  return (
    <div className="st-container">
      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-6">
          <h1 className="title-section text-neutral">
            Frequently Asked Question (FAQ)
          </h1>
          <p className="max-w-xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className="collapse collapse-arrow bg-base-200 border border-base-300 my-4 max-w-265.5 mx-auto has-[input:checked]:bg-base-100"
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold text-neutral">
                  {faq.question}
                </div>
                <div className="collapse-content text-sm"><span className="">{faq.answer}</span></div>
              </div>
            ); 
          })}
          <div className="flex justify-center">
            <button className="btn bg-primary text-neutral rounded-xl">
              Show More{" "}
              <div className="size-7 bg-[#1F1F1F] rounded-full text-white flex justify-center items-center -rotate-45">
                <FaArrowRight />{" "}
              </div>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
