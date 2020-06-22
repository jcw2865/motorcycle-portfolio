$(document).ready(function () {
    const fs = require("fs");

    fs.readFile("bikes.json", "utf8", function (err, data) {
        if (err) {
            throw (err);
        };
        const bikesJSON = JSON.parse(data);
        // bikesJSON.forEach(function (bikesJSON) {
        //     console.log(bikesJSON.name);
        // });
        $("#bikesContainer").text(JSON.stringify(bikesJSON))
    });
});
