const request = require("request");

//Enter you weatherstack API key here
const apiKey = '8a312423a48f47d9df851fe7d378e09b';

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}`;
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather services', undefined);
        } else if (body.error) {
            callback('Unable to find the location, please try again', undefined);
        } else {
            callback(undefined, `Het is momenteel ${body.current.temperature} graden. De gevoelstemperatuur is ${body.current.feelslike} graden.`)
        }
    })
};

module.exports = forecast;