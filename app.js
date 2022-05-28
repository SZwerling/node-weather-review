const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=Mexico City&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if(error){ //for complete lack of response
//         console.log('Unable to connect to weather service.')
//     } else if(response.body.error){
//         console.log('Unable to find location.')
//     } else {
//         const info = response.body
//         console.log(`${info.current.weather_descriptions[0]}. It is currently ${info.current.temperature} degrees celcius in ${info.location.region}. There is ${info.current.precip} percent chance of rain.`)
//     }
    
// })

// const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=' + latitude + ',' + longitude + '&units=f';
// mapbox // access_token=pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw


geocode('Boston', (error, data) => {
    console.log(`Error:`, error)
    console.log(`Data:`, data)
})