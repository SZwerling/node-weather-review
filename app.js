const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2];

if(location){
    geocode(process.argv[2], (error, data) => {
        if(error){
            return console.log(`Error:`, error)
        }
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log('Error:', error);
            }
            
            console.log(data.name, forecastData)
        })
        
    })
} else {
    console.log("Please provide a location.")
}



