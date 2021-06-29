import React from 'react';
import axios from 'axios';

var team1, team2, season, seasonStatus;
export default class FinalResults extends React.Component {
        reload(){ 
            const {selectedImg, selectedImg2, selectedSeason, selectedSeasonStatus} = this.props;
            team1 = selectedImg;
            team2 = selectedImg2;
            season = selectedSeason;
            seasonStatus = selectedSeasonStatus;
        }
            state = {
        }
        
        test = () => {
            this.reload();
            console.log (team1, team2, season, seasonStatus);
        }
   
        
        handleSubmit = () => {
            this.reload();
        axios.get('/getMatchupData', {
            params: {
                teamA: team1,
                teamB: team2,
                seasonNum: season,
                seasonType: seasonStatus,
            }
        })
        .then(response => {
            console.log(response.data);
        })
    }


    render(){
    return (
        <div>
            <button onClick = {this.handleSubmit}>Submit!</button>
        </div>
    )
    }
  } 