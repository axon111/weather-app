import "../WeatherInfo.css";

function WeatherInfo({mydata}) {
    
    let temperatureC = Math.round(mydata.main.temp - 273.15);
    let temperatureF = (temperatureC*9/5.0) + 32;
    let description = mydata.weather[0].description;

    let humidity = mydata.main.humidity;
    let visibility = mydata.visibility;
    let windspeed = mydata.wind.speed;
    let wicon = mydata.weather[0].icon;
    
    
    return ( 
        // <>        
        // <div>Here is the weather data:</div>
        // <div> Temperature: {temperatureF} F </div>
        // <div>{description}</div>       
        // </>
        <div className="container">
        
       
        <div id="card" className="weather">
          <div className="details">
            <div className="temp">
              {temperatureF}
              <span>&deg;</span>
            </div>
            <div className="right">
              <div id="summary">{description}</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>{mydata.name}</div>
            </div>
          </div>
          <img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
          <div className="infos">
            <img
              alt="humidity1"
              className="humidityimg"
              style={{ width: "5", height: "5" }}
              src="humidity.svg"
            ></img>
            <div className="humidity">Humidity {humidity}%</div>
            <img
              alt="visibility1"
              className="visibilityimg"
              style={{ width: "5", height: "5" }}
              src="visibility.svg"
            ></img>
            <div className="visibility">Visibility {visibility} km</div>
            <img
              alt="windspeed1"
              className="windimg"
              style={{ width: "5", height: "5" }}
              src="wind.svg"
            ></img>
            <div className="windspeed">Wind Speed {windspeed} km</div>
          </div>
        </div>
      </div>
   


     );
}

export default WeatherInfo;