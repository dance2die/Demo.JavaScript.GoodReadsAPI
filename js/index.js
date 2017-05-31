var path = require('path');
var $ = require('jquery');
var apiConfig = require('../apikey.js');
var defiant = require('defiant');

var log = `
    goodreadsKey=${apiConfig.goodreadsKey};
    goodreadsSecret=${apiConfig.goodreadsSecret}`;

$(document).ready(() => {
    const url = `https://www.goodreads.com/shelf/list.xml`;
    // https://stackoverflow.com/a/22281596/4035
    const yqlUrl = "http://query.yahooapis.com/v1/public/yql";

    let data = `key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;
    let queryUrl = `${url}?${data}`;
    let q = `select * from xml where url="${queryUrl}"`;

    $.ajax({
        type: "get",
        url: yqlUrl,
        data: {
            q: q,
            format: "json"
        },
        success: (yqlResponse) => {
            // DefiantJS XPath query for user shelf for "read" section.
            let search = JSON.search(yqlResponse, "//*/user_shelf[name='read']");
            console.log(search);
        },
        error:(request, status, error) => {
            alert(`error: ${error}`);
        }
    });
});


