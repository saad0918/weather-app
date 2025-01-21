import { useEffect, useState } from 'react';
import Highlights from './Highlights';
import Temperature from './Temperature';

function App() {
  const[city, setCity]=useState("New Delhi");
  const[weatherData, setweatherData]=useState(null);

  useEffect(() => {
  const apiURL= `https://api.weatherapi.com/v1/current.json?key=9fffb64246ea4bf681f13704241502&q=${city}&aqi=no`;

  fetch(apiURL)

  .then((response) => {
    if(!response.ok){
      throw new Error("Error");
    }
    return response.json();
  })

  .then((data) => {
    console.log(data);
    setweatherData(data);
  })

  .catch((e) => {
    console.log(e);
  });
},[city]);

  return (
    <div className='bg-[rgb(31,33,58)] h-screen flex justify-center align-top'>

    <div className='mt-40 w-1/5 h-1/3'>
    {weatherData && (  
    <Temperature
    setCity={setCity}
    stats={{
      temp: weatherData.current.temp_c,
      condition: weatherData.current.condition.text,
      isDay: weatherData.current.is_day,
      location: weatherData.location.name,
      country: weatherData.location.country,
      time: weatherData.location.localtime
    }}
    />
    )}
    </div>

    <div className='mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6'>
      <h1 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h1>
      {
        weatherData &&
        (
          <>
          <Highlights
           stats={{
            title:"Wind Status",
            value: weatherData.current.wind_mph,
            unit:"mph",
            direction: weatherData.current.wind_dir,
           }}
           />
           <Highlights
           stats={{
            title:"Humidity",
            value: weatherData.current.humidity,
            unit:"%",
          }}
          />
           <Highlights
           stats={{
            title:"Visibilty",
            value: weatherData.current.vis_miles,
            unit:"miles",
         }}
         />
           <Highlights
           stats={{
            title:"Air Pressure",
            value: weatherData.current.pressure_mb,
            unit:"mb",
          }}
          />
          </>
        )}
    </div>
    </div>
  );
}

export default App;



