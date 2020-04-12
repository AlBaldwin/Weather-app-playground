const config = require('../config');
const request = require('request')

const geocode = (address, callback) => {
    
    const mbUrl = `${config.mapBox.baseUrl}/geocoding/v5/mapbox.places/` + encodeURIComponent(address) + `.json?access_token=${config.mapBox.key}`
    request ({ url: mbUrl, json: true}, (error, {body}) =>{
        if (error) {
            callback('Uable to connect to mapBox services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode