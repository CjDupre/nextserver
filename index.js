const express = require("express");
const { request } = require("http");
const serverless = require('serverless-http');
const PORT = process.env.PORT || 3001;
const app = express();
var cors = require('cors');


// middleware

app.use(express.json());
app.use(cors({ origin: '*' }));


//functions

app.post("/api", (req, res) => {

    res.json({ message: `${req.body.favoriteSong} , is what was entered!, ${req.body.favoriteBPM}` });

});


app.get("/api/:favoriteSong", (req, res) => {
    res.json({ message: `${req.params.favoriteSong} , is what was entered!, ${req.query.favoriteBPM}` });
});




app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

module.exports.handler = serverless(app);