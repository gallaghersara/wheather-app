// const request = require('request')
import request from "request";

const forecast = (lat, long, callback) => {
    // // 1st optionial api
    // const url =
    //   "http://api.weatherstack.com/current?access_key=f4f9887b5e0c8dcda8816d9faa4f204b&query=" +
    //   lat +
    //   "," +
    //   long +
    //   "&units=f";
  // 2nd optionial api
  const url2 =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=c37de0eaff75a5b4d6568a50025d253d";
  request({ url: url2, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (response.body.error) {
      callback("unable to find location. try another search.", undefined);
    } else {
      callback(
        undefined,
        "Today is "+
        response.body.list[0].weather[0].description + 
        ". It is currently "+
        response.body.list[0].main.temp +
        " degress out. In: " + 
        response.body.city.name
        // "Today is "+
        // response.body.current.weather_descriptions[0] +
        //   ". It is currently " +
        //   response.body.current.temperature +
        //   " degress out. In: " +
        //   response.body.location.name +
        //   ", "+
        //   response.body.location.country

      );
    }
  });
};

export default forecast;
// module.exports = forecast
