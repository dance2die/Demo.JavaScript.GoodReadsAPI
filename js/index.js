var path = require('path');
var $ = require('jquery');
var apiConfig = require('../apikey.js');
var defiant = require('defiant');
import YqlAjax from './yql_ajax';

var log = `
    goodreadsKey=${apiConfig.goodreadsKey};
    goodreadsSecret=${apiConfig.goodreadsSecret}`;

$(document).ready(() => {
    const url = `https://www.goodreads.com/shelf/list.xml`;
    // https://stackoverflow.com/a/22281596/4035
    let data = `key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;
    let goodReadsURL = `${url}?${data}`;

    let yqlAjax = new YqlAjax();
    yqlAjax.ajax(goodReadsURL).done((yqlResponse) => {
        // DefiantJS XPath query for user shelf for "read" section.
        let search = JSON.search(yqlResponse, "//*/user_shelf[name='read']");
        console.log(search);
    }).fail((request, status, error) => {
        alert(`error: ${error}`);
    });
});


