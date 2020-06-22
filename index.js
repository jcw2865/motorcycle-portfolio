$(document).ready(function () {
    // The commented-out code below was an attempt to access the JSON data in bikes.json. Having a brain fart and can't figure out why it's not working. 
    // const fs = require("fs");
    // fs.readFile("bikes.json", "utf8", function (err, data) {
    //     if (err) {
    //         throw (err);
    //     };
    //     const bikesJSON = JSON.parse(data);
    //     bikesJSON.forEach(function (bikesJSON) {
    //         console.log(bikesJSON.name);
    //     });
    //     $("#bikesContainer").text(JSON.stringify(bikesJSON))
    // });    

    bikesArray = [
        {
            "name": "Dyna Wide Glide",
            "make": "harley",
            "image": "./images/harley/DynaWideGlide.png"
        },
        {
            "name": "Road King",
            "make": "harley",
            "image": "./images/harley/RoadKing.png"
        },
        {
            "name": "Softail",
            "make": "harley",
            "image": "./images/harley/Softail.png"
        },
        {
            "name": "Sportster Nightster",
            "make": "harley",
            "image": "./images/harley/SportsterNightster.png"
        },
        {
            "name": "Rocket III",
            "make": "triumph",
            "image": "./images/triumph/TriumphRocketIII.png"
        },
        {
            "name": "Thruxton",
            "make": "triumph",
            "image": "./images/triumph/TriumphThruxton.png"
        },
        {
            "name": "Thunderbird",
            "make": "triumph",
            "image": "./images/triumph/TriumphThunderbird.png"
        },
        {
            "name": "Tiger Explorer",
            "make": "triumph",
            "image": "./images/triumph/TriumphTigerExplorer.png"
        },
        {
            "name": "Empulse TT",
            "make": "victory",
            "image": "./images/victory/VictoryEmpulseTT.png"
        },
        {
            "name": "Gunner",
            "make": "victory",
            "image": "./images/victory/VictoryGunner.png"
        },
        {
            "name": "Octane",
            "make": "victory",
            "image": "./images/victory/VictoryOctane.png"
        },
        {
            "name": "Vegas",
            "make": "victory",
            "image": "./images/victory/VictoryVegas.png"
        }
    ]

    // The below method works, but we'll use a for-loop so we can access the index.
    // bikesArray.forEach(function (bikesArray) {
    //     const bikeDiv = $("<div>")
    //     bikeDiv.text(bikesArray.name);
    //     $("#bikesContainer").append(bikeDiv);
    // });
    for (var i = 0; i < bikesArray.length; i++) {
        // const bikeDiv = $("<div>");
        // bikeDiv.text(bikesArray[i].name);
        const bikeCard = `<div class="col-sm-4">
            <div class="card card-victory" style = {{width: 18rem;}}>
                <img src="${bikesArray[i].image}" class="card-img-top" alt="Bike Image">
                    <div class="card-body">
                        <h5 class="card-title">${bikesArray[i].name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk
                        of
                    the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div></div></div >`;
        $("#bikesContainer").append(bikeCard);
    }
});
