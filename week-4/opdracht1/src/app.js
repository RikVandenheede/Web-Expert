const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const port = 3000;
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const views = path.join(__dirname, "../templates/views");
const snippets = path.join(__dirname, "../templates/snippets");

// settings aanpassen aan express
app.set("view engine", "hbs");// we gaan nu deze engine gebruiken
app.set("views", views);// als ge hbs gebruikt, de views vind je hier
hbs.registerPartials(snippets);// haalt snippets op

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Kai is dus echt een palletekop",
        name: "Rik"
    });
});

app.get("/help", (req, res) => {
    res.render("help");
});


app.get("/about", (req, res) => {
    res.render("about", {
        title: "Dit is de about page",
        name: "Rik"
    });
});

app.get("/weather", (req, res) => {
    // console.log(req.query);
    // console.log(req.query.search);

    // if(!req.query.search) {// als in de url niets wordt meegegeven
    //     return res.send({// error handling
    //         error: "Geef een locatie in aub"
    //     })
    // }
    geoCode(req.query.search, (error, {latitude, longitude, location} = {}) => { // deafault paramaeter, dan mag error hierboven weg
        if (error) {
            return res.send({
                error: error
            });
        }
        forecast(latitude, longitude, (error, foreCastData) => {
            if (error) {
                return res.send({
                    error: error
                });
            }
            res.send({
                forecast: foreCastData,
                location: location
            })
        });
    });
})

app.get("/help/*", (req, res) => {
    res.render("help-extra", {
        title: "dit is een extra pagina als de/help niet bestaat",
        error: "deze pagina werd niet gevonden",
        name: "Rik"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "Dit is de 404 page",
        name: "Rik",
        error: "deze pagina bestaat niet :/"
    })
});

app.listen(port, () => console.log("server is running"));// als de app wordt uigevoerd luisterd de app naar poort 3000;

// moest het niet werken met nodemon geef extensions mee => nodemon src.app.js -e js, hbs