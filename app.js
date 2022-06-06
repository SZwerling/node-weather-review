const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2];

if(location){
    geocode(location, (error, { longitude, latitude, name } = {} ) => {  //destrucuring data into lat, long and name
        if(error){                                            //w default paramter so never destructure from undefined
            return console.log(`Error:`, error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log('Error:', error);
            }
            
            console.log(name, forecastData)
        })
        
    })
} else {
    console.log("Please provide a location.")
}



