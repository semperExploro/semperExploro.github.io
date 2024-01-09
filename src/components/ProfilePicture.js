import React from 'react';

const CircleImage = ({ src, alt, size}) => {
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return <img src={src} alt={alt} style={style} />;
};

export default CircleImage;