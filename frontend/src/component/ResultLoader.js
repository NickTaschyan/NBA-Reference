import React, { useState} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
var GameTableList = [];
    class TableData{
              constructor(date, matchup, W_L, teamAPTS, teamBPTS, playersList = []){
                this.date = date;
                this.matchup = matchup;
                this.W_L = W_L;
                this.teamAPTS = teamAPTS;
                this.teamBPTS = teamBPTS;
                this.playersList= playersList;
            }
        }
    class PlayerStats{
            constructor(Game_ID, Team_ID, teamABR, playerName, comments, MP, FGM, FGA, FGPERC, THREEPM, THREEPA, THREEPERC, FTM, FTA, FTPERC, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS, PLUSMIN){
            this.Game_ID = Game_ID;
            this.Team_ID = Team_ID;
            this.teamABR = teamABR;
            this.playerName = playerName; 
            this.comments = comments;
            this.MP = MP; 
            this.FGM = FGM;
            this.FGA = FGA; 
            this.FGPERC = FGPERC;
            this.THREEPM = THREEPM;
            this.THREEPA = THREEPA;
            this.THREEPERC = THREEPERC;
            this.FTM = FTM;
            this.FTA = FTA;
            this.FTPERC = FTPERC;
            this.ORB = ORB;
            this.DRB = DRB;
            this.TRB = TRB;
            this.AST = AST;
            this.STL = STL;
            this.BLK = BLK;
            this.TOV = TOV;
            this.PF = PF;
            this.PTS = PTS;
            this.PLUSMIN= PLUSMIN;
        }
    }

    const FinalResults = ({selectedImg, selectedImg2, selectedSeason, selectedSeasonStatus}) => {   
        var team1 = selectedImg;
        var team2 = selectedImg2;
        var season = selectedSeason;
        var seasonStatus = selectedSeasonStatus;

        const [loading, setLoading] = useState(true);
        const [tableReady, tableSet] = useState(true);
         function handleSubmit() {
             tableSet(true);
             setLoading(false);
             axios.get('/getMatchupData', {
                params: {
                    teamA: team1,
                    teamB: team2,
                    seasonNum: season,
                    seasonType: seasonStatus,
                }
        })
        .then(async response => {
            console.log(response.data);
            GameTableList = [];
            await tableBuilder(response);
            setLoading(true);
            tableSet(false);

        })
    }   

        const getPlayers = GameTableList => {
            let content = [[],[],[],[],[],[],[]];       // max number of games a series could go is 7 
            let gameInfo = [[],[],[],[],[],[],[]];
            let tempteamABR = null;
            for (let idx in GameTableList){
                const item1 = GameTableList[idx];
                gameInfo[idx].push(
                    <div key = {item1.id}>
                         DATE = {item1.date} MATCHUP = {item1.teamAPTS} {item1.matchup} {item1.teamBPTS} {item1.W_L} 
                    </div>
                )
                tempteamABR = GameTableList[idx].playersList[idx].teamABR;   
                content[idx].push(
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Minutes</th>
                        <th>FGM</th>
                        <th>FGA</th>
                        <th>FG %</th>
                        <th>3PM</th>
                        <th>3PA</th>
                        <th>3P %</th>
                        <th>FTM</th>
                        <th>FTA</th>
                        <th>FT %</th>
                        <th>ORB</th>
                        <th>DRB</th>
                        <th>TRB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>TOV</th>
                        <th>PF</th>
                        <th>PTS</th>
                        <th>+/-</th>
                    </tr>  
                </thead>
                )
                for (let idx2 in GameTableList[idx].playersList){
                    const item = GameTableList[idx].playersList[idx2];
                    if (tempteamABR !== GameTableList[idx].playersList[idx2].teamABR){
                        tempteamABR = GameTableList[idx].playersList[idx2].teamABR;
                        content[idx].push(
                        <tbody>
                            <tr>
                                <td>---------</td>
                                <td>-------</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                            </tr>
                            </tbody>

                        )
                    }
                    if (item.MP === null){
                        content[idx].push(
                        <tbody>
                        <tr key = {item.id}>
                            <td>{item.playerName}</td>
                            <td>{item.teamABR}</td>
                            <td>{item.comments}</td>
                            <td>{item.FGM}</td>
                            <td>{item.FGA}</td>
                            <td>{item.FGPERC}</td>
                            <td>{item.THREEPM}</td>
                            <td>{item.THREEPA}</td>
                            <td>{item.THREEPERC}</td>
                            <td>{item.FTM}</td>
                            <td>{item.FTA}</td>
                            <td>{item.FTPERC}</td>
                            <td>{item.ORB}</td>
                            <td>{item.DRB}</td>
                            <td>{item.TRB}</td>
                            <td>{item.AST}</td>
                            <td>{item.STL}</td>
                            <td>{item.BLK}</td>
                            <td>{item.TOV}</td>
                            <td>{item.PF}</td>
                            <td>{item.PTS}</td>
                            <td>{item.PLUSMIN}</td>
                        </tr>
                        </tbody>)
                    }
                    else{
                        content[idx].push(<tbody>
                            <tr key = {item.id}>
                            <td>{item.playerName}</td>
                            <td>{item.teamABR}</td>
                            <td>{item.MP}</td>
                            <td>{item.FGM}</td>
                            <td>{item.FGA}</td>
                            <td>{item.FGPERC}</td>
                            <td>{item.THREEPM}</td>
                            <td>{item.THREEPA}</td>
                            <td>{item.THREEPERC}</td>
                            <td>{item.FTM}</td>
                            <td>{item.FTA}</td>
                            <td>{item.FTPERC}</td>
                            <td>{item.ORB}</td>
                            <td>{item.DRB}</td>
                            <td>{item.TRB}</td>
                            <td>{item.AST}</td>
                            <td>{item.STL}</td>
                            <td>{item.BLK}</td>
                            <td>{item.TOV}</td>
                            <td>{item.PF}</td>
                            <td>{item.PTS}</td>
                            <td>{item.PLUSMIN}</td>
                            </tr>
                            </tbody>
                            )
                    }
             }
            }
                return (
                    <div>
                        {gameInfo.map((gameInfo, index) =>(
                            <div>
                                {gameInfo}
                                <Table Table striped bordered hover variant="dark">
                                    {content[index]}
                                </Table>
                            </div>
                        ))}
                        
                    </div>
                    );

            }

async function tableBuilder(response){
    var players = [];
    for (var i = 0; i < response.data.length; i++){
        if (response.data[i] != null){
            for (var j = 0; j < response.data[i].length;j++){
                if (j < response.data[i].length - 1){
                    let CurrPlayer = new PlayerStats(response.data[i][j][0], response.data[i][j][1], response.data[i][j][2], response.data[i][j][5], 
                    response.data[i][j][8], response.data[i][j][9], response.data[i][j][10], response.data[i][j][11], 
                    response.data[i][j][12], response.data[i][j][13],  response.data[i][j][14], response.data[i][j][15], 
                    response.data[i][j][16], response.data[i][j][17], response.data[i][j][18], response.data[i][j][19],
                    response.data[i][j][20], response.data[i][j][21], response.data[i][j][22], response.data[i][j][23], response.data[i][j][24],
                    response.data[i][j][25], response.data[i][j][26], response.data[i][j][27], response.data[i][j][28]);
                    players.push(CurrPlayer);
                }
                if (j === response.data[i].length - 1){
                    var teamAPTS = 0, teamBPTS = 0;
                    for (var k = 0; k < players.length; k++){
                        if(players[k].teamABR === team1){
                            teamAPTS = players[k].PTS + teamAPTS;
                        }
                        if(players[k].teamABR === team2){
                            teamBPTS = players[k].PTS + teamBPTS;
                    }
                }
                    console.log(teamAPTS, teamBPTS);
                    let GameTable = new TableData(response.data[i][j].date, response.data[i][j].matchup, response.data[i][j].W_L, teamAPTS, teamBPTS, players);
                    GameTableList.push(GameTable);
                    players = [];
                }
           }
        }
    
    }


  }
     return (
        <div> 
             {loading ? setLoading :  <div><Spinner animation="border" /> </div>}
            <Button variant = "primary" onClick = {handleSubmit}>Submit!</Button>
           
                <div className = "dynamicTable">
               
                {tableReady ? tableSet:  
                    <div>
                    {getPlayers(GameTableList)}
                    </div>
               }

            </div>
        </div>
    )
    }
    export default FinalResults;
