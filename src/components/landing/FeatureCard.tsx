// FeatureCard.tsx

import React from 'react';

interface Feature {
  icon: string;
  title: string;
  content: string;
  id: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  featuresLength: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature: { icon, title, content },
  index,
  featuresLength,
}) => (
  <div
    className={`flex flex-row rounded-lg p-6 ${
      index !== featuresLength - 1 ? 'mb-6' : 'mb-0'
    } bg-[#yourColorHere]`}
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-800">
      <img src={icon} alt={title} className="h-1/2 w-1/2 object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 font-poppins text-lg font-semibold leading-6 text-white">
        {title}
      </h4>
      <p className="font-poppins text-base font-normal leading-6 text-white">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;
