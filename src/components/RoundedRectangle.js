import React from 'react';
import { Link } from 'react-router-dom';

const RoundedRectangle = ({ to, text, title }) => {
  const style = {
    display: 'inline-block',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    textDecoration: 'none',
    textAlign: 'left',
    width: '300px',
    border: '1px solid lightgrey', // Add this line
    marginBottom: '20px', // Add margin at the bottom
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <Link to={to} style={style}>
      <div style={titleStyle}>{title}</div>
      <div>{text}</div>
    </Link>
  );
}

export default RoundedRectangle;