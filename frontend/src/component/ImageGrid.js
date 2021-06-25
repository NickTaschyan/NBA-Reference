import React from 'react';

const ImageGrid = ({setSelectedImg, setSelectedImg2}) => {
    return (
        <div>
            <div className = "team-container">
                <div className = "img-grid-1">
                    <img src = "/img/atlanta_hawks.png" alt = "hawks" onClick={() => setSelectedImg("ATL")}/>
                    <img src = "/img/boston_celtics.png" alt = "celtics" onClick={() => setSelectedImg("BOS")} />
                    <img src = "/img/brooklyn_nets.png" alt = "nets" onClick={() => setSelectedImg("BKN")} />
                    <img src = "/img/charlotte_hornets.png" alt = "hornets" onClick={() => setSelectedImg("CHA")}/>
                    <img src = "/img/chicago_bulls.png" alt = "bulls" onClick={() => setSelectedImg("CHI")} />
                    <img src = "/img/cleveland_cavaliers.png" alt = "cavaliers" onClick={() => setSelectedImg("CLE")}/>
                    <img src = "/img/dallas_mavericks.png" alt = "mavericks" onClick={() => setSelectedImg("DAL")}/>
                    <img src = "/img/denver_nuggets.png" alt = "nuggets" onClick={() => setSelectedImg("DEN")}/>
                    <img src = "/img/detroit_pistons.png" alt = "pistons" onClick={() => setSelectedImg("DET")}/>
                    <img src = "/img/goldenstate_warriors.png" alt = "warriors" onClick={() => setSelectedImg("GSW")}/>
                    <img src = "/img/houston_rockets.png" alt = "rockets" onClick={() => setSelectedImg("HOU")}/>
                    <img src = "/img/indiana_pacers.png" alt = "pacers" onClick={() => setSelectedImg("IND")}/>
                    <img src = "/img/la_clippers.png" alt = "clippers" onClick={() => setSelectedImg("LAC")}/>
                    <img src = "/img/la_lakers.png" alt = "lakers" onClick={() => setSelectedImg("LAL")}/>
                    <img src = "/img/memphis_grizzlies.png" alt = "grizzlies" onClick={() => setSelectedImg("MEM")}/>
                    <img src = "/img/miami_heat.png" alt = "heat" onClick={() => setSelectedImg("MIA")}/>
                    <img src = "/img/milwaukee_bucks.png" alt = "bucks" onClick={() => setSelectedImg("MIL")}/>
                    <img src = "/img/minnesota_timberwolves.png" alt = "timberwolves" onClick={() => setSelectedImg("MIN")}/>
                    <img src = "/img/neworleans_pelicans.png" alt = "pelicans" onClick={() => setSelectedImg("NOP")}/>
                    <img src = "/img/newyork_knicks.png" alt = "knicks" onClick={() => setSelectedImg("NYK")}/>
                    <img src = "/img/okc_thunder.png" alt = "thunder" onClick={() => setSelectedImg("OKC")}/>
                    <img src = "/img/orlando_magic.png" alt = "magic" onClick={() => setSelectedImg("ORL")}/>
                    <img src = "/img/philidelphia_76ers.png" alt = "76ers" onClick={() => setSelectedImg("PHI")}/>
                    <img src = "/img/phoenix_suns.png" alt = "suns" onClick={() => setSelectedImg("PHX")}/>
                    <img src = "/img/portland_trailblazers.png" alt = "trailblazers" onClick={() => setSelectedImg("POR")}/>
                    <img src = "/img/sacramento_kings.png" alt = "kings" onClick={() => setSelectedImg("SAC")}/>
                    <img src = "/img/sanantonio_spurs.png" alt = "spurs" onClick={() => setSelectedImg("SAS")}/>
                    <img src = "/img/toronto_raptors.png" alt = "raptors" onClick={() => setSelectedImg("TOR")}/>
                    <img src = "/img/utah_jazz.png" alt = "jazz" onClick={() => setSelectedImg("UTA")}/>
                    <img src = "/img/washington_wizards.png" alt = "wizards" onClick={() => setSelectedImg("WAS")}/>
                 </div>
                 <div className = 'img-grid-2'>
                    <img src = "/img/atlanta_hawks.png" alt = "hawks" onClick={() => setSelectedImg2("ATL")}/>
                    <img src = "/img/boston_celtics.png" alt = "celtics" onClick={() => setSelectedImg2("BOS")} />
                    <img src = "/img/brooklyn_nets.png" alt = "nets" onClick={() => setSelectedImg2("BKN")} />
                    <img src = "/img/charlotte_hornets.png" alt = "hornets" onClick={() => setSelectedImg2("CHA")}/>
                    <img src = "/img/chicago_bulls.png" alt = "bulls" onClick={() => setSelectedImg2("CHI")} />
                    <img src = "/img/cleveland_cavaliers.png" alt = "cavaliers" onClick={() => setSelectedImg2("CLE")}/>
                    <img src = "/img/dallas_mavericks.png" alt = "mavericks" onClick={() => setSelectedImg2("DAL")}/>
                    <img src = "/img/denver_nuggets.png" alt = "nuggets" onClick={() => setSelectedImg2("DEN")}/>
                    <img src = "/img/detroit_pistons.png" alt = "pistons" onClick={() => setSelectedImg2("DET")}/>
                    <img src = "/img/goldenstate_warriors.png" alt = "warriors" onClick={() => setSelectedImg2("GSW")}/>
                    <img src = "/img/houston_rockets.png" alt = "rockets" onClick={() => setSelectedImg2("HOU")}/>
                    <img src = "/img/indiana_pacers.png" alt = "pacers" onClick={() => setSelectedImg2("IND")}/>
                    <img src = "/img/la_clippers.png" alt = "clippers" onClick={() => setSelectedImg2("LAC")}/>
                    <img src = "/img/la_lakers.png" alt = "lakers" onClick={() => setSelectedImg2("LAL")}/>
                    <img src = "/img/memphis_grizzlies.png" alt = "grizzlies" onClick={() => setSelectedImg2("MEM")}/>
                    <img src = "/img/miami_heat.png" alt = "heat" onClick={() => setSelectedImg2("MIA")}/>
                    <img src = "/img/milwaukee_bucks.png" alt = "bucks" onClick={() => setSelectedImg2("MIL")}/>
                    <img src = "/img/minnesota_timberwolves.png" alt = "timberwolves" onClick={() => setSelectedImg2("MIN")}/>
                    <img src = "/img/neworleans_pelicans.png" alt = "pelicans" onClick={() => setSelectedImg2("NOP")}/>
                    <img src = "/img/newyork_knicks.png" alt = "knicks" onClick={() => setSelectedImg2("NYK")}/>
                    <img src = "/img/okc_thunder.png" alt = "thunder" onClick={() => setSelectedImg2("OKC")}/>
                    <img src = "/img/orlando_magic.png" alt = "magic" onClick={() => setSelectedImg2("ORL")}/>
                    <img src = "/img/philidelphia_76ers.png" alt = "76ers" onClick={() => setSelectedImg2("PHI")}/>
                    <img src = "/img/phoenix_suns.png" alt = "suns" onClick={() => setSelectedImg2("PHX")}/>
                    <img src = "/img/portland_trailblazers.png" alt = "trailblazers" onClick={() => setSelectedImg2("POR")}/>
                    <img src = "/img/sacramento_kings.png" alt = "kings" onClick={() => setSelectedImg2("SAC")}/>
                    <img src = "/img/sanantonio_spurs.png" alt = "spurs" onClick={() => setSelectedImg2("SAS")}/>
                    <img src = "/img/toronto_raptors.png" alt = "raptors" onClick={() => setSelectedImg2("TOR")}/>
                    <img src = "/img/utah_jazz.png" alt = "jazz" onClick={() => setSelectedImg2("UTA")}/>
                    <img src = "/img/washington_wizards.png" alt = "wizards" onClick={() => setSelectedImg2("WAS")}/>
            </div>
            </div>
        </div>
    )
}
export default ImageGrid;