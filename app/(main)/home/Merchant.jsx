import React from "react";

const Merchant = () => {
  return (
    <div className="st-container my-20">
      <div
        className="min-h-100 bg-no-repeat bg-cover bg-center rounded-2xl lg:p-14 md:p-8 p-4 "
        style={{ backgroundImage: "url('/images/merchant-bg.png' " }}
      >
        <div className="space-y-2 md:space-y-4 lg:max-w-[60%] md:max-w-[80%]">
          <h1 className="title-section " style={{ color: "#ffffff" }}>
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-[#a7a2a2]">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="lg:flex space-y-2">
            <div>
              <button className="px-6 py-3 mr-2 rounded-full bg-primary font-bold text-xl text-[#1F1F1F] border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">
                Become a Merchant
              </button>
            </div>
            <div>
              <button className="px-6 py-3 mr-2 rounded-full font-bold text-xl text-primary border border-primary hover:bg-primary hover:text-[#1F1F1F] transition-all duration-300">
                Earn with Profast Courier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
