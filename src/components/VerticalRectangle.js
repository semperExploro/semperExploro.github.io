import React from 'react';
import {ReactComponent as Cloud} from './cloudy.svg';
import {ReactComponent as Showers_rain} from './showers_rain.svg';
import {ReactComponent as Sun} from './clear_day.svg';
import {ReactComponent as Sunny_with_clouds} from './sunny_with_cloudy.svg';


const getIconForWeatherCondition = (weatherCondition) => {
  //to lower
  weatherCondition = weatherCondition.toLowerCase();

  if (weatherCondition.includes("cloud")) {
    return <Cloud />;
  }
  else if (weatherCondition.includes("rain") || weatherCondition.includes("shower")) {
    return <Showers_rain />;
  }
  else if (weatherCondition.includes("sun")) {
    return <Sun />;
  }
  else if (weatherCondition.includes("mostly")) {
    return <Sunny_with_clouds />;
  }
}


const VerticalRoundedRectangle = ({ text, title, day, weatherCond }) => {
  const style = {
    display: 'inline-block',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    textDecoration: 'none',
    margin: '5px',
    textAlign: 'center',
    width: '100px',
    height: '150px',
    border: '1px solid lightgrey',
    marginBottom: '20px',
    fontSize: '12px',
  };

  const titleStyle = {
    fontSize: '13px',
    marginBottom: '10px',
  };

  return (
    <div style={style}>
      <div style={titleStyle}>{getIconForWeatherCondition(weatherCond)}</div>
      <div style={titleStyle}>{title}</div>
      <div style={titleStyle}>{day}</div>
      {text.map((t, index) => (
        <div key={index}>{t}</div>
      ))}
    </div>
  );
};

export default VerticalRoundedRectangle;