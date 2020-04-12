const config = require('../config');
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const fcUrl = `${config.weatherStack.baseUrl}/current?access_key=${config.weatherStack.key}&query=` + latitude + `,` + longitude
    
    request ({ url: fcUrl, json: true}, (error,  { body }) =>{
        if (error) {
            callback('Uable to connect to weather stack services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'In ' + body.location.name + ', '+ body.location.region + ', it is currently ' + body.current.weather_descriptions + ' and the tempreture is ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')     
            
        }
    })
}

module.exports = forecast