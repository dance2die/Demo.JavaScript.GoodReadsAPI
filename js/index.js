var path = require('path');
var $ = require('jquery');
var apiConfig = require('../apikey.js');
var defiant = require('defiant');
var proxify = require('proxify-url');
import YqlAjax from './yql_ajax';

var log = `
    goodreadsKey=${apiConfig.goodreadsKey};
    goodreadsSecret=${apiConfig.goodreadsSecret}`;

$(document).ready(() => {
    const goodReadsURL = `https://www.goodreads.com/shelf/list.xml`;
    // https://stackoverflow.com/a/22281596/4035
    let q = `key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;
    let url = `${goodReadsURL}?${q}`;

    // let yqlAjax = new YqlAjax();
    // yqlAjax.ajax(goodReadsURL).done((yqlResponse) => {
    //     console.log("success 111");
    //     // DefiantJS XPath query for user shelf for "read" section.
    //     let search = JSON.search(yqlResponse, "//*/user_shelf[name='read']");
    //     console.log(search);
    // }).fail((request, status, error) => {
    //     alert(`error: ${error}`);
    // });

    var proxyUrl = proxify(url, {inputFormat: 'xml'});

    console.log(url);
    console.log(proxyUrl);

    // const yqlUrl = "http://query.yahooapis.com/v1/public/yql";
    // let q = `SELECT * FROM xml WHERE url="${url}"`;

    
    $.ajax({
        type: "get",
        url: proxyUrl,
        data: {
            format: "json"
        }
    }).done((yqlResponse) => {
        console.log("success xxxxxxxxxx");
        // DefiantJS XPath query for user shelf for "read" section.
        let search = JSON.search(yqlResponse, "//*/user_shelf[name='read']");
        console.log(yqlResponse);
        console.log(search);
    }).fail((request, status, error) => {
        alert(`error: ${error}`);
    });

    // $.ajax({
    //     type: "get",
    //     url: yqlUrl,
    //     data: {
    //         q: q,
    //         format: "json"
    //     }
    // }).done((yqlResponse) => {
    //     console.log("success xxxxxxxxxx");
    //     // DefiantJS XPath query for user shelf for "read" section.
    //     let search = JSON.search(yqlResponse, "//*/user_shelf[name='read']");
    //     console.log(yqlResponse);
    //     console.log(search);
    // }).fail((request, status, error) => {
    //     alert(`error: ${error}`);
    // });


});


