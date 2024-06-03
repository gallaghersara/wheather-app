// const request = require('request')
import request from "request";

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoic2dhbGhhciIsImEiOiJjbHJrZG4yanAwYjVmMmxvYzBwNTZkM2l4In0.51EJ1EhU3kiKo-P1FI8tPw&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to lacation services", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location. try another search.", undefined);
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        long: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

export default geocode
// module.exports = goecode