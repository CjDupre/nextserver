const express = require("express");
const serverless = require('serverless-http');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const app = express();
var cors = require('cors');


// middleware

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(bodyParser.json())


const localScreencache = [
    { "url": "https://www.wikihow.com/images/thumb/8/8d/9498436-3.jpg/v4-460px-9498436-3.jpg.webp", "ID": 1 },
    { "url": "https://i.pcmag.com/imagery/articles/00uIrzGogzcKeJlwDFazTTA-2..v1657903769.png", "ID": 2 },
    { "url": "https://assets.mspimages.in/wp-content/uploads/2022/01/How-to-Take-Screenshot-on-Android-Smartphones-1.jpg", "ID": 3 },

];



//functions


app.get("/screenshots", (req, res) => {
    res.json({ screenshots: localScreencache });
});


// add the screenshot url in the request to your list of screenshots kept on the server
// https://dummyimage.com/600x400/000/fff
app.post("/screenshots", (req, res) => {
    const screencacheData = {}
    screencacheData.url = req.body.url
    screencacheData.ID = req.body.ID
    localScreencache.push(screencacheData)
    res.send(200)
    console.log({ localScreencache })
});
// app.post("/screenshots", (req, res) => {
//     res.json({ message: 'successful post' });

// });


// app.post("/api", (req, res) => {

//     res.json({ message: `${req.body.favoriteSong} , is what was entered!, ${req.body.favoriteBPM}` });

// });


// app.get("/:favoriteSong", (req, res) => {
//     res.json({ message: `${req.params.favoriteSong} , is what was entered!, ${req.query.favoriteBPM}` });
// });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})




module.exports.handler = serverless(app);