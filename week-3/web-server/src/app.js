const express = require("express");


const port = 3000;

const app = express(); // maakt instantie aan van express

app.use("/user", userRouter);


app.get("", (req, res) => {
    res.send("hallo express");
});

app.get("/help", (req, res) => {
    res.send("help page");
});

app.get("/about", (req, res) => {
    res.send("kai is de grootte scuffeNek ooit ter wereld, hij heeft geen idee");
});

app.get("/user/:userId([0-9]+)", (req, res) => {
    let userId = req.params.userId;
})

// localhost:3000 of 127.0.0.1:3000 // ctrl + C voor stoppen server
app.listen(port, () => console.log("server is up and running"));