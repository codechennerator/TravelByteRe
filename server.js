const express = require("express");
const bodyParser = require("body-parser");

const path    = require("path");
const PORT = 8080;

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}.`);
});