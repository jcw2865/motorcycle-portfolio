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
            "id": "dynaWideGlide",
            "make": "harley",
            "description": "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
            "cardStyle": "card-hd",
            "image": "./images/harley/DynaWideGlideCompressed.png"
        },
        {
            "name": "Road King",
            "id": "roadKing",
            "make": "harley",
            "description": "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
            "cardStyle": "card-hd",
            "image": "./images/harley/RoadKingCompressed.png"
        },
        {
            "name": "Softail",
            "id": "softail",
            "make": "harley",
            "description": "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
            "cardStyle": "card-hd",
            "image": "./images/harley/SoftailCompressed.png"
        },
        {
            "name": "Sportster Nightster",
            "id": "sportsterNightster",
            "make": "harley",
            "description": "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            "cardStyle": "card-hd",
            "image": "./images/harley/SportsterNightsterCompressed.png"
        },
        {
            "name": "Rocket III",
            "id": "rocketIII",
            "make": "triumph",
            "description": "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
            "cardStyle": "card-triumph",
            "image": "./images/triumph/TriumphRocketIIICompressed.png"
        },
        {
            "name": "Thruxton",
            "id": "thruxton",
            "make": "triumph",
            "description": "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
            "cardStyle": "card-triumph",
            "image": "./images/triumph/TriumphThruxtonCompressed.png"
        },
        {
            "name": "Thunderbird",
            "id": "thunderbird",
            "make": "triumph",
            "description": "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
            "cardStyle": "card-triumph",
            "image": "./images/triumph/TriumphThunderbirdCompressed.png"
        },
        {
            "name": "Tiger Explorer",
            "id": "tigerExplorer",
            "make": "triumph",
            "description": "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
            "cardStyle": "card-triumph",
            "image": "./images/triumph/TriumphTigerExplorerCompressed.png"
        },
        {
            "name": "Empulse TT",
            "id": "empulseTT",
            "make": "victory",
            "description": "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.",
            "cardStyle": "card-victory",
            "image": "./images/victory/VictoryEmpulseTTCompressed.png"
        },
        {
            "name": "Gunner",
            "id": "gunner",
            "make": "victory",
            "description": "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            "cardStyle": "card-victory",
            "image": "./images/victory/VictoryGunnerCompressed.png"
        },
        {
            "name": "Octane",
            "id": "octane",
            "make": "victory",
            "description": "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
            "cardStyle": "card-victory",
            "image": "./images/victory/VictoryOctaneCompressed.png"
        },
        {
            "name": "Vegas",
            "id": "vegas",
            "make": "victory",
            "description": "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?",
            "cardStyle": "card-victory",
            "image": "./images/victory/VictoryVegasCompressed.png"
        }
    ]
    harleys = [];
    triumphs = [];
    victorys = [];
    const pageTheme = $("title")[0].innerHTML;
    // Page theme options are "Motorcycle Portfolio", "Harley-Davidson", "Triumph", and "Victory"

    // HOME PAGE CARD FXN
    if (pageTheme === "Motorcycle Portfolio") {
        for (var i = 0; i < bikesArray.length; i++) {
            const bikeCard =
                `<div class="col-sm-4">
                    <div class="card ${bikesArray[i].cardStyle}" style = {{width: 18rem;}}>
                        <img src="${bikesArray[i].image}" class="card-img-top" alt="Bike Image">
                        <div class="card-body">
                            <h5 class="card-title">${bikesArray[i].name}</h5>
                            <p class="card-text">${bikesArray[i].description}</p>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#${bikesArray[i].id}">Go somewhere</button>
                            <div class="modal fade" id="${bikesArray[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Go Somewhere with a ${bikesArray[i].name}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Google Maps API coming soon.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >`;
            $("#bikesContainer").append(bikeCard);
        };
    }
    // HARLEY PAGE CARD FXN
    else if (pageTheme === "Harley-Davidson") {
        bikesArray.forEach(bike => {
            // console.log(bike);
            if (bike.make === "harley") {
                harleys.push(bike);
            };
        });
        console.log(harleys);
        for (var i = 0; i < harleys.length; i++) {
            const bikeCard = `<div class="col-sm-4">
            <div class="card ${harleys[i].cardStyle}" style = {{width: 18rem;}}>
                <img src="${harleys[i].image}" class="card-img-top" alt="Bike Image">
                    <div class="card-body">
                        <h5 class="card-title">${harleys[i].name}</h5>
                        <p class="card-text">${harleys[i].description}</p>
                        <button class="btn btn-primary" data-toggle="modal" data-target="#${harleys[i].id}">Go somewhere</button>
                        <div class="modal fade" id="${harleys[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Go Somewhere with a ${harleys[i].name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Google Maps API coming soon.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div >`;
            $("#bikesContainer").append(bikeCard);
        };
    }
    // TRIUMPH PAGE CARD FXN
    else if (pageTheme === "Triumph") {
        bikesArray.forEach(bike => {
            // console.log(bike);
            if (bike.make === "triumph") {
                triumphs.push(bike);
            };
        });
        console.log(triumphs);
        for (var i = 0; i < triumphs.length; i++) {
            const bikeCard = `<div class="col-sm-4">
            <div class="card ${triumphs[i].cardStyle}" style = {{width: 18rem;}}>
                <img src="${triumphs[i].image}" class="card-img-top" alt="Bike Image">
                    <div class="card-body">
                        <h5 class="card-title">${triumphs[i].name}</h5>
                        <p class="card-text">${triumphs[i].description}</p>
                        <button class="btn btn-primary" data-toggle="modal" data-target="#${triumphs[i].id}">Go somewhere</button>
                        <div class="modal fade" id="${triumphs[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Go Somewhere with a ${triumphs[i].name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Google Maps API coming soon.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div >`;
            $("#bikesContainer").append(bikeCard);
        };
    }
    // VICTORY PAGE CARD FXN
    else if (pageTheme === "Victory") {
        bikesArray.forEach(bike => {
            // console.log(bike);
            if (bike.make === "victory") {
                victorys.push(bike);
            };
        });
        console.log(victorys);
        for (var i = 0; i < victorys.length; i++) {
            const bikeCard = `<div class="col-sm-4">
            <div class="card ${victorys[i].cardStyle}" style = {{width: 18rem;}}>
                <img src="${victorys[i].image}" class="card-img-top" alt="Bike Image">
                    <div class="card-body">
                        <h5 class="card-title">${victorys[i].name}</h5>
                        <p class="card-text">${victorys[i].description}</p>
                        <button class="btn btn-primary" data-toggle="modal" data-target="#${victorys[i].id}">Go somewhere</button>
                        <div class="modal fade" id="${victorys[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Go Somewhere with a ${victorys[i].name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Google Maps API coming soon.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div >`;
            $("#bikesContainer").append(bikeCard);
        };
    }
});
