const geocode = require('./utils/geocode')

// const wsRrl = `${config.weatherStack.url}/current?access_key=${config.weatherStack.key}&query=37.8267,-122.4233&units=f`  
//const mbUrl = `${config.mapBox.url}/geocoding/v5/mapbox.places/London.json?access_token=${config.mapBox.key}`

// request({ url: wsRrl, json: true }, (error, response) => {

//     if (error) {
//         console.log('Uable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('unable to find location')
//     } else {
//         const temp = response.body.current.temperature
//         const precip = response.body.current.precip
//         const desc = response.body.current.weather_descriptions[0]

//         console.log(desc + ' Its currently ' + temp + ' Fahrenheit and has ' + precip + ' chance of rain')
//     }
// })

// request( {url: mbUrl, json: true}, (error, response) =>{

//     if (error) {
//         console.log('Uable to connect to mapBox services')
//     } else if (response.body.features.length === 0){
//         console.log('Unable to find the location entered')
//     } else {
//         const latitude = response.body.features[0].geometry.coordinates[0]
//         const longtitude = response.body.features[0].geometry.coordinates[1]
//         console.log('For London the Latitude is ' + latitude + ' and longtitude is ' + longtitude)
//     }
// })



geocode('Manchester', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})