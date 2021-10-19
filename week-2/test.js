const fs = require("fs");

const book = {
    title: "yeet",
    author: "Rik"
}

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parsedBook = JSON.parse(bookJson);
console.log(parsedBook.title);

// fs.writeFile("example.json", bookJson); // schrijf naar json file

const dataBuffer = fs.readFileSync("example.json");
console.log(dataBuffer.toString()); // zet bytes om naar een string(werkend object)

