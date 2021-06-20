const express = require('express');
const bodyParser = require('body-parser');
const NBA = require('nba');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = 5000;  //backend routing port #
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
const curry = NBA.findPlayer('Stephen Curry');
console.log(curry);
//NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);

let _lakersID = 1610612747;

NBA.stats.boxScoreSummary({GameID: '0021401082'}).then(function(data){
    JSON.stringify(data);
    console.log(data);
});


//NBA.stats.leagueGameLog({PlayerOrTeam: "LAL"}).then(console.log);







/*for (var i = 0; i < teams.length; i++){ // finds teamID based on abbreviation 
    if(teams[i].abbreviation == "LAL"){
        console.log(teams[i].teamId);
    }
}
*/