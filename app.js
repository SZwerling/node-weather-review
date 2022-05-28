const request = require('request')

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
//geocoding
// user provides address, convert to lat and long

const geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mexico%20City.json?access_token=pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw&limit=1'

// request({ url: geo, json: true}, (error, response) => {
//     if(error){
//         console.log('Cannot connect to geocoding service.')
//     } else if(response.body.features.length === 0){
//         console.log('Location does not exist.')
//     } else {
//         const lat = response.body.features[0].center[1]
//         const long = response.body.features[0].center[0]
//         console.log(lat, long)
//     }
 
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw&limit=1'
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback("Cannot connect to geocoding service.", undefined)
        } else if(response.body.features.length === 0){
            callback("Location does not exist.", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                name: response.body.features[0].text
            })
        }
    })
}

geocode('Los Angeles', (error, data) => {
    console.log(`Error:`, error)
    console.log(`Data:`, data)
})