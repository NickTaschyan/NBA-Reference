const { response } = require('express');
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
class GameDRW {
    constructor(date, matchup, W_L, gameID){
        this.date = date;
        this.matchup = matchup;
        this.W_L = W_L;
        this.gameID = gameID;
    }
}
var GameDRWArr = [];
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
    GameInfo = [];
    TeamGameIDs = [];
    GameDRWArr= [];
});
async function getGameIDs (teamA, teamB, seasonNum, seasonType){
   try {
         await NBA.stats.leagueGameLog({PlayerOrTeam: 'T', Season: seasonNum, SeasonType: seasonType}).then(async function(data){
    for (var i = 0; i < data.resultSets[0].rowSet.length; i++){
        if (data.resultSets[0].rowSet[i][2] === teamA){
            if (data.resultSets[0].rowSet[i][6].includes(teamB)){
                TeamGameIDs.push(data.resultSets[0].rowSet[i][4]); 
                Game = new GameDRW(date = data.resultSets[0].rowSet[i][5], matchup = data.resultSets[0].rowSet[i][6], 
                    W_L = data.resultSets[0].rowSet[i][7], gameID = data.resultSets[0].rowSet[i][4]); 
                GameDRWArr.push(Game);
            }
    }
    check = 1;
}
});
   } catch (error) {
       console.log(error);
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
       GameInfo[k].push(GameDRWArr[index]);
       index++;
    }
    index = 0;
    check2 = 1;
    return;

}