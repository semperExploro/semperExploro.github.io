import React from 'react';

const Divider = ({ length }) => {
  const style = {
    height: '1px',
    width: length, // Use the length prop
    backgroundColor: 'lightgray',
    margin: '10px auto', // Center the divider
  };

  return <div style={style} />;
};

export default Divider;