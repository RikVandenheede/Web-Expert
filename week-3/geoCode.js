const request = require("request");

const geoCode = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoic2N1ZnRpbmdzIiwiYSI6ImNrdTQ2YmlnaTFmOGQycHQ5MjJlMTI3ZDMifQ.HIwX9BQpU5XNJ3zlPLqApA`;

    request({url, json: true}, (error, response) => {
        if(error) {
            callback("unable to reach location services", undefined)
        }
        else if(response.body.features.length === 0) {
            callback("unable to find location, please rty again", undefined)
        }
        else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}