const express = require('express');
const NBA = require('nba');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = 5000;  //backend routing port #
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
var GameInfo = [];
var TeamGameIDs = [];
var index = 0;
var check = 0;
var check1 = 0;
var check2 = 0;

app.get('/getMatchupData', async (req, res) => {
    let teamA = req.query.teamA;
    let teamB = req.query.teamB;
    let seasonNum = req.query.seasonNum;
    let seasonType = req.query.seasonType;
    console.log(teamA, teamB, seasonNum, seasonType);
    await getGameIDs(teamA, teamB, seasonNum, seasonType);
    console.log("getGames Done", check);
    await getBoxScores();
    console.log("getBoxscores Done", check1);
    await getBoxSummary();
    console.log("getBoxSummary Done", check2);
    res.send(GameInfo);
    GameInfo.length = 0;
    TeamGameIDs.length = 0;
});
async function getGameIDs (teamA, teamB, seasonNum, seasonType){
   try {
         await NBA.stats.leagueGameLog({PlayerOrTeam: 'T', Season: seasonNum, SeasonType: seasonType}).then(async function(data){
    for (var i = 0; i < data.resultSets[0].rowSet.length; i++){
        if (data.resultSets[0].rowSet[i][2] === teamA){
            if (data.resultSets[0].rowSet[i][6].includes(teamB)){ 
            TeamGameIDs.push(data.resultSets[0].rowSet[i][4]);
            }
    }
    check = 1;
}
});
   } catch (error) {
       console.log("Timeout Error");
   }
  
return;
}

async function getBoxScores(){
    for (var j = 0; j < TeamGameIDs.length; j++){
        await NBA.stats.boxScore({GameID: TeamGameIDs[j]}).then(async function(data){
        GameInfo.push(data.resultSets[0].rowSet);               //pushing box score data onto GameInfo
    });
}
check1 = 1;
return;
}

async function getBoxSummary(){
    for (var k = 0; k < TeamGameIDs.length; k++){
        await NBA.stats.boxScoreSummary({GameID: TeamGameIDs[k]}).then(async function(data){
            GameInfo[k].push(data.resultSets[5].rowSet);        //pushing box summary data onto gameinfo at matching array values
            index++;
        });
    }
    check2 = 1;
    return;

}