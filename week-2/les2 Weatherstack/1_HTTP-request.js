const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=8a312423a48f47d9df851fe7d378e09b&query=Hasselt&units=f";// units is een query paramater

// request({url:url}, (error, response) => {//request callback funtie 
//     console.log(response.body); // laat de body zien als een string
//     const parsedBody = JSON.parse(response.body);
//     console.log(parsedBody);// laat en object zien dat je kan gebruiken
//     console.log(parsedBody.current);
// });

request({url, json: true}, (error, response) => {//request callback funtie 
    console.log(response.body.current);
    console.log(`Het is vandaag ${response.body.current.temperature} graden fahrenheit en het voelt alsof ${response.body.current.feelslike} graden fahrenheit`);
});