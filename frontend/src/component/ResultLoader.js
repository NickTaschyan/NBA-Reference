import React, { useState} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
var GameTableList = [];
    class TableData{        // class for GameInfo
              constructor(date, matchup, W_L, teamAPTS, teamBPTS, playersList = []){
                this.date = date;
                this.matchup = matchup;
                this.W_L = W_L;
                this.teamAPTS = teamAPTS;
                this.teamBPTS = teamBPTS;
                this.playersList= playersList;
            }
        }
    class PlayerStats{      // Class for player stats 
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

    const FinalResults = ({selectedImg, selectedImg2, selectedSeason, selectedSeasonStatus}) => {  // set our values to the selected ones, react dynamically updates these on change
        var team1 = selectedImg;
        var team2 = selectedImg2;
        var season = selectedSeason;
        var seasonStatus = selectedSeasonStatus;

        const [loading, setLoading] = useState(true);   // useState changes the state of the page, we change the state based off of our loading animation, 
        const [tableReady, tableSet] = useState(true);  // our table information being ready to be showed 
        const [sameTeamerror, errorSet] = useState(true);   // error checks for same team submissions 
        const [noDataError, nullDataSet] = useState(true);  // and lastly, error checks for no data returns from server
         
        function handleSubmit() {   // handles the submission process
             tableSet(true);
             setLoading(false); // show the loading symbol
             if (team1 === team2){  // check for same team exception 
                errorSet(false);
                setLoading(true);
                return;
             }
             axios.get('/getMatchupData', {     // send request to our server with parameters 
                params: {
                    teamA: team1,
                    teamB: team2,
                    seasonNum: season,
                    seasonType: seasonStatus,
                }
        })
        .then(async response => {   // when we get a response, we parse through the data 
           // console.log(response.data);
            GameTableList = [];
            if (response.data === -1){ // if our data returns as -1 it means there was no data found on the selected options 
                nullDataSet(false);
                setLoading(true);
                tableSet(false);
                errorSet(true);
                return;
            }
            await tableBuilder(response);   // send our reponse to our tablebuilder function 
            setLoading(true);
            tableSet(false);
            errorSet(true);
            nullDataSet(true);

        })
    }   

        const getPlayers = GameTableList => {
            let content = [[],[],[],[],[],[],[]];       // max number of games a series could go is 7 
            let gameInfo = [[],[],[],[],[],[],[]];
            let tempteamABR = null;     // temp value to know when teams switch on our table
            for (let idx in GameTableList){
                var winID = "lossCont"; // default id of losscount 
                const item1 = GameTableList[idx];
                if (item1.W_L === "W"){
                    winID = "winCont";  // if our result is a W we set our id to wincount to change the color of W to green 
                }
                gameInfo[idx].push(     // push our gameinfo block 
                    <div className = "resultContainer" key = {item1.id}>
                        <div className = "resultChild" id = "dateCont">
                         Date: {item1.date}
                         </div>
                         <div className = "resultChild" id = "matchupCont">
                         {item1.teamAPTS} {item1.matchup} {item1.teamBPTS}
                         </div>
                         <div className = "resultChild" id = {winID}>
                         {item1.W_L} 
                         </div>
                    </div>
                )
                tempteamABR = GameTableList[idx].playersList[idx].teamABR;  
                content[idx].push( // push our table header every new table we get 
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
                    if (tempteamABR !== GameTableList[idx].playersList[idx2].teamABR){ // when our results include a new team we split the table with a dotted row
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
                    if (item.MP === null){  // push our player data, if the minutes are null, check comments for DNP status 
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
                        content[idx].push( // push player info onto table 
                        <tbody> 
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
                        {gameInfo.map((gameInfo, index) =>(     // map gameInfo and use the size as a key to "loop" through the contents and gameinfo, displaying them in order.
                            <div className = "maintable">
                                {gameInfo}
                                <Table className = "dynamicTable" Table striped bordered hover variant="dark">
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
                if (j < response.data[i].length - 1){   // setup player data first 
                    let CurrPlayer = new PlayerStats(response.data[i][j][0], response.data[i][j][1], response.data[i][j][2], response.data[i][j][5], 
                    response.data[i][j][8], response.data[i][j][9], response.data[i][j][10], response.data[i][j][11], 
                    response.data[i][j][12], response.data[i][j][13],  response.data[i][j][14], response.data[i][j][15], 
                    response.data[i][j][16], response.data[i][j][17], response.data[i][j][18], response.data[i][j][19],
                    response.data[i][j][20], response.data[i][j][21], response.data[i][j][22], response.data[i][j][23], response.data[i][j][24],
                    response.data[i][j][25], response.data[i][j][26], response.data[i][j][27], response.data[i][j][28]);
                    players.push(CurrPlayer);   // create new player object, pass the object into an array
                }
                if (j === response.data[i].length - 1){ // when we reach our last element of the response array, its set to contain the gameinfo object from our server 
                    var teamAPTS = 0, teamBPTS = 0;
                    for (var k = 0; k < players.length; k++){       // run through players and tally up total scores
                        if(players[k].teamABR === team1){
                            teamAPTS = players[k].PTS + teamAPTS;      
                        }
                        if(players[k].teamABR === team2){
                            teamBPTS = players[k].PTS + teamBPTS;
                    }
                }
                    let GameTable = new TableData(response.data[i][j].date, response.data[i][j].matchup, response.data[i][j].W_L, teamAPTS, teamBPTS, players);
                    GameTableList.push(GameTable); // push our games onto an array
                    players = [];   // reset our players list to empty
                }
           }
        }
    
    }


  }
     return (
        <div> 
            {sameTeamerror ? errorSet : <div className = "Error">Error, can't pick same team! </div>}
            {noDataError ? nullDataSet : <div className = "Error">Error, no data found! </div>}
             {loading ? setLoading :  <div><Spinner animation="border" /> </div>}
            <Button variant = "primary" onClick = {handleSubmit}>Submit!</Button> {/*ternary operators to display certain messages and table*/}
                
                <div>
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
