const config = require('../config');
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const fcUrl = `${config.weatherStack.url}/current?access_key=${config.weatherStack.key}&query=` + latitude + `,` + longitude
    
    request ({ url: fcUrl, json: true}, (error, response) =>{
        if (error) {
            callback('Uable to connect to weather stack services', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'In ' + response.body.location.name + ', it is currently ' + response.body.current.weather_descriptions + ' and the tempreture is ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')     
            
        }
    })
}

module.exports = forecast