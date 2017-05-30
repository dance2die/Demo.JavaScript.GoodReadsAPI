var path = require('path');
var apiConfig = require('../apikey.js');;

var log = `
    goodreadsKey=${apiConfig.goodreadsKey};
    goodreadsSecret=${apiConfig.goodreadsSecret}`;
alert(log);

