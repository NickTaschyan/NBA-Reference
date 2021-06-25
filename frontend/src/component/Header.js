import React from 'react';

const Header = () => {
    return( 
        <header>
        <h1>NBA Matchup Reference</h1>
        <h2>A Simple React App that utilizes the NBA API</h2>
        <h3>To use the app, simply click on 2 different teams, select a season and pick between<br/> regular season,
         or playoffs. The NBA Matchup app then makes a call to <br/>the server asking for matchup data between your selected teams!</h3>
         <h2>Enjoy!</h2>
        </header>
    )
}

export default Header;