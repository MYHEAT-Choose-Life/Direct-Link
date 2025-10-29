import React from 'react';

const WhyUsCard = ({ icon: Icon, title, description, className = '' }) => {
  const words = title.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <div className={`flex flex-col items-center text-center space-y-2 p-8 rounded-md bg-gray-100 ${className}`}>
      {Icon && <Icon className="text-3xl text-blue-900 bg-gray-200 p-2 rounded-full size-10" />}

      <h3 className="font-semibold text-lg leading-tight">
        {firstPart}
        <br />
        {lastWord}
      </h3>

      <p className="text-gray-400 font-light">{description}</p>
    </div>
  );
};

export default WhyUsCard;
