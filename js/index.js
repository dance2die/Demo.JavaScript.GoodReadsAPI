var path = require('path');
var $ = require('jquery');
var apiConfig = require('../apikey.js');;

var log = `
    goodreadsKey=${apiConfig.goodreadsKey};
    goodreadsSecret=${apiConfig.goodreadsSecret}`;
// alert(log);

$(document).ready(() => {
    // const url = `https://www.goodreads.com/shelf/list.xml`;
    // var data = `key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;
    // // var data = {
    // //     key: apiConfig.goodreadsKey,
    // //     user_id: apiConfig.goodreadsUserID,
    // //     page: 1
    // // };
    // var queryUrl = `${url}?${data}`;
    // // var q = encodeURI("select * from xml where url=\"").replace(/%20/g, "+") + queryUrl + "\"";
    // var q = `select * from xml where url="${queryUrl}"`;

    // const yqlUrl = "http://query.yahooapis.com/v1/public/yql";
    // // var uri = `${yqlUrl}&q=${q}`;
    // var uri = yqlUrl + "?q=" + encodeURIComponent(q).replace(/%20/g, "+")

    // $.ajax({
    //     type: "get",
    //     url: uri,
    //     // data: data,
    //     format: "xml",
    //     dataType: 'xml',
    //     crossDomain: true,
    //     contentType: "application/xml; charset=utf-8",
    //     success: (response) => {
    //         debugger;
    //         alert(response);
    //     },
    //     error:(request, status, error) => {
    //         debugger;
    //         alert(`error: ${error}`);
    //     }
    // });

// https://stackoverflow.com/a/22281596/4035
var url = `https://www.goodreads.com/shelf/list.xml?key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;

$.get("http://query.yahooapis.com/v1/public/yql",
    {
        q: "select * from xml where url=\""+url+"\"",
        format: "xml"
    },
    function(xml){
        // contains XML with the following structure:
        // <query>
        //   <results>
        //     <GoodreadsResponse>
        //        ...

        console.log(xml);
    }
);



});


