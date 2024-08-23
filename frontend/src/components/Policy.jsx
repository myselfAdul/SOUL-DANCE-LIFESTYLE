import React from "react";
import { assets } from "../assets/assets";

const Policy = () => {
  return (
    <div className="flex flex-col py-20 sm:flex-row items-center justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="items-center flex flex-col">
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days return policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Policy;
