const express = require('express');
const app = express();
const countriesData = require('./scrapper/countriesTable.json')

setInterval(function () {
    const getCountries = require('./scrapper/scrapper');
}, 1 * 60 * 60 * 1000); // 1 hour

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
    next()
})

app.use("/api/countries", (req, res, next) => {
    const data = countriesData
    res.status(200).json(data)
})

module.exports = app;