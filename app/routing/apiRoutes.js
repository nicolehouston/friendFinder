var friendData = require("../data/friends.js");

// Function that calculates the compatibility score between the user and the potential friends
function calculateScore(arr1, arr2) {
    var score = 0;
    var scoreArray = [];
    for(var i = 0; i < arr1.length; i++) {
        scoreArray.push(Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));
    };
    for(var j= 0; j < scoreArray.length; j++) {
        score += scoreArray[j];
    };
    return score;
};

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        newScores = req.body.scores;

        var mostCompatibleFriend;
        var mostCompatibleScore = 50;

        for(var i = 0; i < friendData.length; i++) {
            var result = calculateScore(newScores, friendData[i].scores);
            if(result <= mostCompatibleScore) {
                mostCompatibleScore = result;
                mostCompatibleFriend = friendData[i];
            }
        }
        friendData.push(req.body);
        res.json(mostCompatibleFriend);

    });
};