var $ = require('jquery');

export default class YqlAjax {
    ajax(goodReadsURL) {
        // https://stackoverflow.com/a/22281596/4035
        const yqlUrl = "http://query.yahooapis.com/v1/public/yql";
        let q = `select * from xml where url="${goodReadsURL}"`;

        return $.ajax({
            type: "get",
            url: yqlUrl,
            data: {
                q: q,
                format: "json"
            }
        });
    }
}