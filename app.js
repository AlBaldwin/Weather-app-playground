const config = require('./config');
const request = require('request')

const url = `${config.app.url}/current?access_key=${config.app.key}&query=37.8267,-122.4233`  

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})