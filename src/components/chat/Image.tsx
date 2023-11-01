import React from 'react';

interface ImageProps {
  url: string;
  className?: string; // Adding className as an optional prop
}

const Image: React.FC<ImageProps> = ({ url, className }) => {
  return <img src={url} alt="Dynamic content" className={className} />;
};

export default Image;
