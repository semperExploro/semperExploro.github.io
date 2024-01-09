import React from 'react';
import { Link } from 'react-router-dom';

const VerticalRoundedRectangle = ({ text, title }) => {
  const style = {
    display: 'inline-block',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    textDecoration: 'none',
    margin: '5px',
    textAlign: 'left',
    width: '200px',
    height: '200px',
    border: '1px solid lightgrey',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={style}>
      <div style={titleStyle}>{title}</div>
      {text.map((t, index) => (
        <div key={index}>{t}</div>
      ))}
    </div>
  );
};

export default VerticalRoundedRectangle;