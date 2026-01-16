"use client";
import React from "react";
import Image from "next/image";

// Example logos
const logos = [
  "/images/marquee/logo1.png",
  "/images/marquee/logo2.png",
  "/images/marquee/logo3.png",
  "/images/marquee/logo4.png",
  "/images/marquee/logo5.png",
  "/images/marquee/logo6.png",
  "/images/marquee/logo1.png",
  "/images/marquee/logo2.png",
  "/images/marquee/logo3.png",
  "/images/marquee/logo4.png",
  "/images/marquee/logo5.png",
  "/images/marquee/logo6.png",
];

export default function CompanyMarquee() {
  return (
    <section className="w-full mx-auto my-25">
      <div className="flex flex-col gap-10">
        <div>
          <h2
            style={{ textAlign: "center" }}
            className="title-card text-neutral"
          >
            We&apos;ve helped thousands of sales teams
          </h2>
        </div>
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-12">
            {logos.map((logo, index) => (
              <div key={index} className="shrink-0 w-32 h-16">
                <Image
                  src={logo}
                  alt={`Company ${index + 1}`}
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => (
              <div key={index + logos.length} className="shrink-0 w-32 h-16">
                <Image
                  src={logo}
                  alt={`Company ${index + 1}`}
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
