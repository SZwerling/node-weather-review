const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(24, -74.3893168105238, (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data)
})

geocode('New Jersey', (error, data) => {
    console.log(`Error:`, error)
    console.log(`Data:`, data)
})