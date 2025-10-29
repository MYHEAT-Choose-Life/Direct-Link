import React from 'react';
import { BsFan, BsLightningCharge } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import WhyUsCard from './WhyUsCards';
import Button from './Button';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-20 py-10">
      <h1 className="text-4xl font-semibold text-center pb-4">Why Choose Us</h1>
      <p className="text-gray-400 text-lg text-center">
        We focus on personalized support to help you succeed in South Africa's dynamic market.
      </p>
      <p className="text-gray-400 text-lg text-center mt-1">
        Let's connect and elevate your brand's presence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 w-full">
        <WhyUsCard
          icon={BsFan}
          title="Personalized Marketing Strategy"
          description="Tailored strategies to fit your unique business"
        />
        <WhyUsCard
          icon={LuUsersRound}
          title="Expert Support Team"
          description="A dedicated team of experts to guide you every step of the way."
        />
        <WhyUsCard
          icon={BsLightningCharge}
          title="Proven Growth Results"
          description="A track record of deliverable measurable growth for our clients."
        />
        <WhyUsCard
          icon={IoLocationOutline}
          title="Local Market Expertise"
          description="Deep understanding of the South African Market to give you a solid edge"
        />
      </div>
      <div className="pt-10">
        <Button className="bg-blue-900 rounded-full px-6 my-10 text-white text-lg">
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
