import React from "react";
import { LuCircleCheck } from "react-icons/lu";

const ServiceCard = ({ title, items }) => {
  return (
    <div className="bg-gray-100 p-5 rounded-md space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <LuCircleCheck className="text-blue-950 size-5" />
          <p className="text-gray-600 font-light">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
