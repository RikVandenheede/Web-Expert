// const fs = require("fs");

// const dataBuffer = fs.readFileSync("challenge.json"); // leest de file in
// const myArr = dataBuffer.toString(); // maakt van de bytes enaar een string in het json bestand
// const parsedMyArr = JSON.parse(myArr); // maakt van er een bruikbaar bestand van

// // past de properties aan
// parsedMyArr.name = "Rik";
// parsedMyArr.town = "Binkom";
// parsedMyArr.age = 22;

// const myJson = JSON.stringify(parsedMyArr); // zet de aangepaste Json om naar een string 
// fs.writeFileSync("challenge.json", myJson); // schrijft het naar de file en het juiste bestand


const fs = require("fs");

const data = fs.readFileSync("./challenge.json");
const dataBuffer = data.toString();
let parsed = JSON.parse(dataBuffer);

parsed.name = "Ricardo";

const newArr = JSON.stringify(parsed);
fs.writeFileSync("./challenge.json", newArr);