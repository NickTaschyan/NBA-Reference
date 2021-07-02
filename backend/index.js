const { response } = require('express');
const express = require('express');
const NBA = require('nba');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = 5000;  //backend routing port #
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);       // set our listening port to 5000
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
app.get('/getMatchupData', async (req, res) => {
    let teamA = req.query.teamA;            // grab query results
    let teamB = req.query.teamB;
    let seasonNum = req.query.seasonNum;
    let seasonType = req.query.seasonType;
    console.log(teamA, teamB, seasonNum, seasonType);
    await getGameIDs(teamA, teamB, seasonNum, seasonType);
    console.log("getGames Done");
    await getBoxScores();
    console.log("getBoxscores Done");
    await getBoxSummary();
    console.log("getBoxSummary Done");
    if (GameInfo.length === 0){         // if we find no data for the queries inputted send -1 as a response for frontend to handle
        res.send("-1");
    }
    else{
    res.send(GameInfo);
    }
    GameInfo = [];
    TeamGameIDs = [];
    GameDRWArr= [];
});
async function getGameIDs (teamA, teamB, seasonNum, seasonType){
   try {
         await NBA.stats.leagueGameLog({PlayerOrTeam: 'T', Season: seasonNum, SeasonType: seasonType}).then(async function(data){   
    for (var i = 0; i < data.resultSets[0].rowSet.length; i++){         // check through all the data sets 
        if (data.resultSets[0].rowSet[i][2] === teamA){
            if (data.resultSets[0].rowSet[i][6].includes(teamB)){
                TeamGameIDs.push(data.resultSets[0].rowSet[i][4]);      // when we find our matchups throughout the seasons search, we push the gameID's into an array
                Game = new GameDRW(date = data.resultSets[0].rowSet[i][5], matchup = data.resultSets[0].rowSet[i][6], // create a new Game object 
                    W_L = data.resultSets[0].rowSet[i][7], gameID = data.resultSets[0].rowSet[i][4]); 
                GameDRWArr.push(Game);      // push game objects on array
            }
    }
}
});
   } catch (error) {
       console.log(error);
   }
  
return;
}

async function getBoxScores(){
    if (TeamGameIDs.length === 0){
        return;         // if we have no gameID's dont even bother calling the API
    }
    for (var j = 0; j < TeamGameIDs.length; j++){
        await NBA.stats.boxScore({GameID: TeamGameIDs[j]}).then(async function(data){
        GameInfo.push(data.resultSets[0].rowSet);               //pushing box score data onto GameInfo
    });
}

return;
}

async function getBoxSummary(){
    if (TeamGameIDs.length === 0){  // if we have no gameID's return
        return;
    }
    for (var k = 0; k < TeamGameIDs.length; k++){
       GameInfo[k].push(GameDRWArr[index]);
       index++;
    }
    index = 0;
    return;

}