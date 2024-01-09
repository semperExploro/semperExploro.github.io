import axios from 'axios';

export const GetWeather = async (lat,long) => {
    var url = `https://api.weather.gov/points/${lat},${long}`;
    console.log(url);
    try {
        //first get entry into the api
        const response = await axios.get(url);
        const data = response.data;
        const forecastUrl = data.properties.forecastHourly;
        
        console.log(forecastUrl);

        //now get the forecast
        const forecastResponse = await axios.get(forecastUrl);
        const forecastData = forecastResponse.data;
        const periods = forecastData.properties.periods;
        return periods;


    } catch (error) {
        console.error(error);
    }
};

