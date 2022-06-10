const https = require('https')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mexico.json?access_token=pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw&limit=1'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body.features[0].center)
    })

})

request.on('error', (error) => {
    console.log(error)
})

request.end()