import { useEffect, useState } from "react";
import HotBg from "./assets/2.jpg"
import ColdBg from "./assets/Cold-Day.jpg";
import cloudy from "./assets/cloudy.png";
import Descriptions from "./Components/Descriptions";
import { getFormattedWeatherData } from "./weatherServices";

function App() {
  const [city, setCity] = useState("Nagpur")
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric")
  const [bg, setBg] = useState(HotBg)

  useEffect(() => {
 
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      //dynamic bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg (ColdBg);
      else setBg(HotBg);
    };

    fetchWeatherData();
  
  },[units, city]);


  const handleUnitClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText.slice(1);
  
  
  const isCelsius = currentUnit === "C";
  button.innerText = isCelsius ? "°F" : "°C";
  setUnits(isCelsius ? "matric" : "imperial")
};


const enterKeyPressed = (e) => {
if (e.keyCode === 13) {
  setCity(e.currentTarget.value);
  e.currentTarget.blur();
}
};

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
            <div className="section section_inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..." />
              <button onClick={(e) => handleUnitClick(e)}>°F</button>
            </div>
  
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weather icon" />

                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                  <h3>{`${weather.temp.toFixed()} °${units === 'metric' ? 'c' : 'F'}`}</h3>
                </div>
            </div>
  
            {/* bottom discription */}
           <Descriptions weather={weather} units={units}/>
          </div>
          )
        }
        
      </div>
    </div>
  );
}

export default App;