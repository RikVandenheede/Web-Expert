const request = require("request");

//Enter you mqpbox API key here
const apiKey = 'pk.eyJ1Ijoic2N1ZnRpbmdzIiwiYSI6ImNrdTQ2YmlnaTFmOGQycHQ5MjJlMTI3ZDMifQ.HIwX9BQpU5XNJ3zlPLqApA';

const geoCode = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${apiKey}&limit=1`;
    //body wordt hier opgehaald obv object destructuring. Hier had ook gewoon response kunnen staan ipv { body }.
    //je gaat dan wel overal response.body. ... moeten toepassen ipv nu body. ...
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location, please try again', undefined);
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        };
    });
};

module.exports = geoCode;