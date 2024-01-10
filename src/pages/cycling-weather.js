import React, { useState ,useEffect} from "react"
import '../App.css';
import { GetWeather } from "../util/weather";
import { GetCurrentPosition}  from "../util/currentPosition";
import UpperRect from "../components/UpperRectangle";
import VerticalRoundedRectangle from "../components/VerticalRectangle";
import Taskbar from "../components/Taskbar";



class Day {

    constructor(date, weatherCondition) {
        this.date = date;
        this.wspdList = [];
        this.tempList = [];
        this.precipList = [];
        this.timeList = [];
        this.isDay = [];
        this.weatherCondition = weatherCondition;
    }
    
    setInfo(wspdList,tempList,precipList,timeList, isDay) {
        this.wspdList = wspdList;
        this.tempList = tempList;
        this.precipList = precipList;
        this.timeList = timeList;
        this.isDay = isDay;
    }

    getViableTimes() {

        //first we attempt to get all the viable times
        var viableTimesBool = [];

        // console.log(this.timeList);
        // console.log(this.wspdList);
        // console.log(this.tempList);
        // console.log(this.precipList);

        for (var i = 0; i < this.timeList.length; i++) {

            //list of conditions
            var isTimeViable = false;
            var isWindViable = false;
            var isTempViable = false;
            var isPrecipViable = true;

            // Condition 1: Must fall within sunrise and sunset
            if (this.isDay[i]) {
                isTimeViable = true;
            }

            // Condition 2: Wind speed must be less than 15 mph
            if (this.wspdList[i] < 15) {
                isWindViable = true;
            }

            // Condition 3: Temperature must be greater than 30 and less than 90
            if (this.tempList[i] > 30 && this.tempList[i] < 90) {
                isTempViable = true;
            }

            // Condition 4: Precipitation must be less than 0.1 inches
            if (this.precipList[i] < 10) {
                isPrecipViable = true;
            }

            // If all conditions are met, add time to viable times
            if (isTimeViable && isWindViable && isTempViable && isPrecipViable) {
                viableTimesBool.push(true);
            } else {
                viableTimesBool.push(false);
            }
        }

        // console.log(this.date);
        // console.log(viableTimesBool);
        //now we attempt to get windows of time
        var windows = [];
        var windowStart = null;
        var windowEnd = null;
        for (var i = 0; i < viableTimesBool.length; i++) {
            if (viableTimesBool[i]) {
                if (windowStart == null) {
                    windowStart = this.timeList[i];
                }
                windowEnd = this.timeList[i];
            } else {
                if (windowStart != null) {
                    if (windowStart == windowEnd) {
                        windowStart = null;
                        windowEnd = null;
                        continue;
                    }
                    windows.push([windowStart,windowEnd]);
                    windowStart = null;
                    windowEnd = null;
                }
            }
        }

        return windows;
    }
}

const captionStyle = {
    fontSize: '10px',
    marginBottom: '10px',
    marginTop: '10px',
    color: '#808080', // Change this to the color you want
};

const getRectangle = (day) => {

    var windows = day.getViableTimes();
    // console.log(day.precipList)

    if (windows.length == 0) {
        windows = ["No Viable Times"]
    }

    for (var i = 0; i < windows.length; i++) {
        if (windows[i] == "No Viable Times") {
            continue;
        }
        windows[i] = windows[i][0] + " - " + windows[i][1];
    }

    console.log(day.weatherCondition)

    return (
        <span>
            <VerticalRoundedRectangle title={day.date} text={windows} day = {getWeekday(day.date)} weatherCond = {day.weatherCondition}></VerticalRoundedRectangle>
        </span>
    )
}

const getWeekday = (date) => {
    console.log(date);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var d = new Date(date.replace(/-/g, '/'));
    var dayName = days[d.getUTCDay()];
    return dayName;
}

const initDays = (periods) => {
    var days = [];
    var times = [];
    var temps = [];
    var isDay = [];
    var precip = [];
    var wind = [];
    var date = periods[0].startTime.substring(0,10);
    var weatherCondition = periods[0].shortForecast;
    var dateObj = new Day(date, weatherCondition);

    console.log(periods);


    for (var i = 0; i < periods.length; i++) {
        if (periods[i].startTime.substring(0,10) !== date) {
            // we have a new day
            //set the info for the previous day
            dateObj.setInfo(wind,temps,precip,times,isDay);
            days.push(dateObj);

            //clear the lists
            times = [];
            temps = [];
            isDay = [];
            precip = [];
            wind = [];

            date = periods[i].startTime.substring(0,10);
            //create a new day object
            weatherCondition = periods[i].shortForecast;
            console.log(weatherCondition);
            dateObj = new Day(date, weatherCondition);

        } else {

            // we have the same day
            times.push(periods[i].startTime.substring(11,16));
            temps.push(periods[i].temperature);
            isDay.push(periods[i].isDaytime);
            precip.push(periods[i].probabilityOfPrecipitation.value);
            
            //for wind speed remove mph
            var windSpeed = periods[i].windSpeed;
            windSpeed = windSpeed.substring(0,windSpeed.length-4);
            //convert to number
            windSpeed = Number(windSpeed);
            wind.push(windSpeed);

        }
    }
    return days;
}

const CyclingWeather = () => {

    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [days, setDays] = useState(null);
    const [currentWindow, setCurrentWindow] = useState(null);
    
    /*tabs*/
    useEffect(() => {
        document.title = 'Cycling Weather';
      }, []);

    useEffect(() => {
        
        const fetchLocation = async () => {
            //get location
            const result = await GetCurrentPosition();
            setLocation(result);

            const lat = result.coords.latitude;
            const long = result.coords.longitude;

            //get weather
            const weatherResult = await GetWeather(lat,long);
            setWeather(weatherResult);

            //initialize days
            let listOfDays = initDays(weatherResult);
    

            //set today
            var today = listOfDays[0];
            var todayWindows = today.getViableTimes();
            if (todayWindows.length == 0) {
                todayWindows = ["No Viable Times"]
            }
            setCurrentWindow(todayWindows);

            //remove today
            listOfDays.shift();

            setDays(listOfDays);
        };
        fetchLocation();
      }, []
    );

    return (
        <div>
        <div className="Center">
            <Taskbar />
          {days === null ? (
            <div>To start, please enable your location</div>
          ) : (
            <div>
                    <UpperRect title={location.coords.latitude + ", " + location.coords.longitude} text={currentWindow} />
                    <div>
                    {days.map((day) => (
                        <span>
                            {getRectangle(day)}
                        </span>
                    ))}
                    </div>
            </div>
          )}
        </div>
        <div style={captionStyle}>{"Criteria For Viability For Outdoor Activities: Winds Less Than 15 mph, Temperature Between 30 F and 90 F, No Rain, No Night Activities"}</div>
    </div>
      );

}

export default CyclingWeather;