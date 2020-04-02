const express = require('express');
const app = express();
const scrapper = require('./backend/scrapper')

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/covid19')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/countries", async (req, res, next) => {
    const data = await scrapper.getCountries()
    res.status(200).json(data)
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API listening on port ${port}...`);
});

module.exports = app;