const config = require('../config');
const request = require('request')

const forecast = (longtitide, latitude, callback) => {
    
    const fcUrl = `${config.weatherStack.url}/current?access_key=${config.weatherStack.key}&query=` + encodeURIComponent(longtitide) + `,` + encodeURIComponent(latitude) + `&units=f`
    request ({ url: fcUrl, json: true}, (error, response) =>{
        if (error) {
            callback('Uable to connect to weather stack services', undefined)
        } else if (response.body.current.weather_descriptions === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                    name: response.body.location.name,
                    temp: response.body.current.temperature,
                    precip: response.body.current.precip,
                    desc: response.body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast