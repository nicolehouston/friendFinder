var friendData = require("../data/friends.js");

function calculateScore(arr1, arr2) {
    var score = 0;
    var scoreArray = [];
    for(var i = 0; i < arr1.length; i++) {
        scoreArray.push(Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));
    };
    for(var j= 0; j < scoreArray.length; j++) {
        score += scoreArray[j];
    };
    console.log(score);
    return score;
};

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        newScores = req.body.scores;

        var mostCompatibleScore = 50;
        var mostCompatibleFriend = {};

        for(var i = 0; i < friendData.length; i++) {
            var result = calculateScore(newScores, friendData[i].scores);
            if(result < mostCompatibleScore) {
                mostCompatibleScore = result;
                mostCompatibleFriend = friendData[i];
            }
        }
        console.log(mostCompatibleScore);
        console.log(mostCompatibleFriend);
        friendData.push(req.body);
        // var leastDifference = 0;
        // var compScore = 0;
        // var compScoreArr = [];
        // for(var i = 0; i < newScores.length; i++) {
    
        //     for(var j = 0; j < friendData.length; j++) {
        //         compScoreArr.push(Math.abs(newScores[j] + friendData.scores[j]));
        //     }
            
        // }


    });
};