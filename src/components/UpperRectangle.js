import React from 'react';

const UpperRect = ({text, title }) => {
  const style = {
    display: 'inline-block',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    textDecoration: 'none',
    textAlign: 'center',
    width: '100vh',
    marginBottom: '20px', // Add margin at the bottom
  };

  const titleStyle = {
    fontSize: '50px',
    marginBottom: '10px',
    marginTop: '10px',
  };

  const subtitleStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    marginTop: '10px',
  };

  const timeReaction = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  return (
    <div style = {style}>
        <div style={titleStyle}>{timeReaction()}</div>
        <div style={subtitleStyle}>{"Current Location: " + title}</div>
        <span style={subtitleStyle}>Riding Options For Today: </span>
          {text.map((t, index) => (
        <span style = {subtitleStyle} key={index}>{t}</span>
      )
      )}
    </div>
  );
}

export default UpperRect;