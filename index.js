const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const port = process.env.PORT || 8080;
const app = express();

const url = 'http://posthuset.eurest.no';

app.get('/', function (req, res) {
    request(url, function (error, response, html) {
        if (error) {
            res.send(500, "Could not read posthuset website");

            return;
        }

        const $ = cheerio.load(html);
        const lunch = extractMeals($('.dish-list').find('dt').text());

        res.setHeader('Content-Type', 'application/json');
        res.send(200, JSON.stringify({lunch}));
    })
});

app.listen(port);

console.log('Server listening on port ' + port);

module.exports = app;

// ////////////////////////////////////////////////////////////////////////// //
// //////////////////////////// Private Functions /////////////////////////// //
// ////////////////////////////////////////////////////////////////////////// //

/**
 * This function takes the string scraped from the website
 * split's it into separate parts and filters out any blanks e.g. ""
 *
 * @param {string} result string scraped from website
 *
 * @returns {array} extracted meals
 */
function extractMeals(result) {
    const splitPattern = '\t\t\t\t\t\t\t\t\t';

    return result.split(splitPattern).filter(Boolean);
}

