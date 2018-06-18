var friendData = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        newScores = req.body.scores;

        console.log(newScores);
        
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