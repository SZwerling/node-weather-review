const request = require("request");

const forecast = (latitude, longitude, callback) => {
   const url =
      "http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=" +
      latitude +
      "," +
      longitude +
      "&units=f";

   request({ url: url, json: true }, (error, response) => {
      if (error) {
         //for complete lack of response
         callback("Cannot reach forecast api.", undefined);
      } else if (response.body.error) {
         callback("Unable to find location.", undefined);
      } else {
         callback(undefined, `It is currently ${response.body.current.temperature} degrees`);
      }
   });
};

module.exports = forecast;

// const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=' + latitude + ',' + longitude + '&units=f';
