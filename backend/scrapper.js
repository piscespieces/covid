const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs')

const url = 'https://www.worldometers.info/coronavirus/';


const getCountries = async () => {
    const countriesTable = []
    try {
        const html = await rp(url);
        const countriesMap = cheerio('table#main_table_countries_today > tbody tr', html).map(async (i, e) => {
            const country_name = cheerio(e).find('a').first().text() || cheerio(e).find('td:nth-child(1)').text()
            const total_cases = cheerio(e).find('td:nth-child(2)').text()
            const total_deaths = cheerio(e).find('td:nth-child(4)').text().trim() // Trimmed white space
            const total_recov = cheerio(e).find('td:nth-child(6)').text()
            const case_per_mill = cheerio(e).find('td:nth-child(9)').text()

            const countryTableRow = {
                country_name,
                total_cases: total_cases.replace(",", ""),
                total_deaths: total_deaths.replace(",", ""),
                total_recov: total_recov.replace(",", ""),
                case_per_mill: case_per_mill.replace(",", "")
            }
            countriesTable.push(countryTableRow)
        })
        return countriesTable
    } catch (error) {
        console.log(error)
    }

};

// getCountries().then(data => {
//     fs.writeFile('./backend/scrapper/countriesTable.json', JSON.stringify(data, null, 4), (err) => {
//         if (err) {
//             console.log(`Error writing the file: ${err}`)
//         } else {
//             console.log(`Writed successfuly`)
//         }
//     })
// })

exports.getCountries = getCountries;