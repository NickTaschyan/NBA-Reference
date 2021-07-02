import React from 'react';

const Header = () => {
    return( 
        <header>
        <h1>NBA Matchup Reference</h1>
        <h2>A Simple React App that utilizes the NBA API</h2>
        <h3>To use the app, simply click on 2 different teams,<br/> select a season and season type.<br/> The NBA Matchup app then makes a call to 
        our server  <br/>asking for matchup data between your selected teams!</h3>
         <h2>Enjoy!</h2>
        </header>
    )
}

export default Header;