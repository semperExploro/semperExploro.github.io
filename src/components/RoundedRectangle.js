import React from 'react';
import { Link } from 'react-router-dom';

const RoundedRectangle = ({ to, text }) => {
  const style = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '25px',
    textDecoration: 'none',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add shadowing
  };

  return (
    <Link to={to} style={style}>
      {text}
    </Link>
  );
};

export default RoundedRectangle;