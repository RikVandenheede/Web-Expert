const request = require("request");

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/djfbejzb.json?access_token=pk.eyJ1Ijoic2N1ZnRpbmdzIiwiYSI6ImNrdTQ2YmlnaTFmOGQycHQ5MjJlMTI3ZDMifQ.HIwX9BQpU5XNJ3zlPLqApA";

request({url, json: true}, (error, response) => {

    if(error) {
        console.log(error);
    }
    else if(response.body.features.length === 0) {
        console.log("dat is fout!");
    }
    else{
        let long = response.body.features[0].center[0];
        let lat = response.body.features[0].center[1];
        console.log(`de lengtegraad is ${long} en de breedtegraad is ${lat}`);
    }
});