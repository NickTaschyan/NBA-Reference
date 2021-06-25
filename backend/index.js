const express = require('express');
const bodyParser = require('body-parser');
const NBA = require('nba');
const axios = require('axios');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = 5000;  //backend routing port #
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});


NBA.stats.boxScoreSummary({GameID: '0041900141'}).then(function(data){
    console.log(data);
});
var TeamGameIDs = [];
NBA.stats.leagueGameLog({PlayerOrTeam: 'T', Season: "2019-20", SeasonType: "Playoffs"}).then(function(data){
    for (var i = 0; i < data.resultSets[0].rowSet.length; i++){
        if (data.resultSets[0].rowSet[i][2] === "LAL"){
            if (data.resultSets[0].rowSet[i][6].includes("DEN")){
            //console.log(data.resultSets[0].rowSet[i][4]);       // game ID
            TeamGameIDs.push(data.resultSets[0].rowSet[i][4]);
            console.log(data.resultSets[0].rowSet[i][6], data.resultSets[0].rowSet[i][7]);       // matchup
            }
    }
}
console.log(TeamGameIDs);
});



app.get('/getGameData', (req, res) => {
    res.send(TeamGameIDs)
});





/*for (var i = 0; i < teams.length; i++){ // finds teamID based on abbreviation 
    if(teams[i].abbreviation == "LAL"){
        console.log(teams[i].teamId);
    }
}
*/