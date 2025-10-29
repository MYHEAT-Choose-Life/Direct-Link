import React from "react";
import { LuCircleCheck } from "react-icons/lu";

const ServiceCard = ({ title, items }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md space-y-4 w-full">
      <h3 className="font-semibold text-lg text-blue-950 text-center md:text-left">
        {title}
      </h3>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-2">
            <LuCircleCheck className="text-blue-950 size-5 shrink-0" />
            <p className="text-gray-600 font-light leading-snug">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
