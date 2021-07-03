import React from 'react';
import { Form } from 'react-bootstrap';
const option = [           // List of options for our seasons dropdown menu
    {label: "2020-21", value: "2020-21"},
    {label: "2019-20", value: "2019-20"},
    {label: "2018-19", value: "2018-19"},
    {label: "2017-18", value: "2017-18"},
    {label: "2016-17", value: "2016-17"},
    {label: "2015-16", value: "2015-16"},
    {label: "2014-15", value: "2014-15"},
    {label: "2013-14", value: "2013-14"},
    {label: "2012-13", value: "2012-13"},
    {label: "2011-12", value: "2011-12"},
    {label: "2010-11", value: "2010-11"},
    {label: "2009-10", value: "2009-10"},
    {label: "2008-09", value: "2008-09"},
    {label: "2007-08", value: "2007-08"},
    {label: "2006-07", value: "2006-07"},
    {label: "2005-06", value: "2005-06"},
    {label: "2004-05", value: "2004-05"},
    {label: "2003-04", value: "2003-04"},
    {label: "2002-03", value: "2002-03"},
    {label: "2001-02", value: "2001-02"},
    {label: "2000-01", value: "2000-01"},
    {label: "1999-00", value: "1999-00"},
    {label: "1998-99", value: "1998-99"},
    {label: "1997-98", value: "1997-98"},
    {label: "1996-97", value: "1996-97"},
    {label: "1995-96", value: "1995-96"},
    {label: "1994-95", value: "1994-95"},
    {label: "1993-94", value: "1993-94"},
    {label: "1992-93", value: "1992-93"},
    {label: "1991-92", value: "1991-92"},
    {label: "1990-91", value: "1990-91"},
    {label: "1989-90", value: "1989-90"},
    {label: "1988-89", value: "1988-89"},
    {label: "1987-88", value: "1987-88"},
    {label: "1986-87", value: "1986-87"},
    {label: "1985-86", value: "1985-86"},
    {label: "1984-85", value: "1984-85"},
    {label: "1983-84", value: "1983-84"},
    {label: "1982-83", value: "1982-83"},
    {label: "1981-82", value: "1981-82"},
    {label: "1980-81", value: "1980-81"},
    {label: "1979-80", value: "1979-80"},
    {label: "1978-79", value: "1978-79"},
    {label: "1977-78", value: "1977-78"},
    {label: "1976-77", value: "1976-77"},
    {label: "1975-76", value: "1975-76"},
    {label: "1974-75", value: "1974-75"},
    {label: "1973-74", value: "1973-74"},
    {label: "1972-73", value: "1972-73"},
    {label: "1971-72", value: "1971-72"},
    {label: "1970-71", value: "1970-71"},
    {label: "1969-70", value: "1969-70"},
    {label: "1968-69", value: "1968-69"},
    {label: "1967-68", value: "1967-68"},
    {label: "1966-67", value: "1966-67"},
    {label: "1965-66", value: "1965-66"},
    {label: "1964-65", value: "1964-65"},
    {label: "1963-64", value: "1963-64"},
    {label: "1962-63", value: "1962-63"},
    {label: "1961-62", value: "1961-62"},
   {label: "1960-61", value: "1960-61"},
]
const seasonOption = [      // List of options for our seasonType dropdown menu
    {label: "Regular Season", value: "Regular Season"},
    {label: "Playoffs", value: "Playoffs"},
]

const ImageGrid = ({setSelectedImg, setSelectedImg2, setSelectedImgID, setSelectedImgID2, setSelectedSeason, setSeasonStatus}) => { // everytime ImageGrid is called our results are shared across our components
    class ImgApp extends React.Component {
        constructor() {
          super();
          this.state = {
            season: "2020-21",      // default values
            seasonStatus: "Regular Season",     
          };
      
          this.handleChange = this.handleChange.bind(this);     // calls to functions to initiate values 
          this.handleStatus = this.handleStatus.bind(this);
        }
      
        handleChange(e) {
          setSelectedSeason(e.target.value);
        }
        handleStatus(e) {
            setSeasonStatus(e.target.value);
          }
    };      
    var PickedImg = new ImgApp();
    return (
        <div>
            <div className = "team-container">
                <div className = "img-grid-1">  {/*in these image grids we call our set selected functions to later pass as parameters and highlight image containers */}
                    <img src = "/img/atlanta_hawks.png" id = "hawks1" alt = "hawks" onClick={() => (setSelectedImg("ATL") & setSelectedImgID("hawks1"))}/>
                    <img src = "/img/boston_celtics.png" id = "celtics1" alt = "celtics" onClick={() => (setSelectedImg("BOS") & setSelectedImgID("celtics1"))} />
                    <img src = "/img/brooklyn_nets.png" id = "nets1" alt = "nets" onClick={() => (setSelectedImg("BKN") & setSelectedImgID("nets1"))} />
                    <img src = "/img/charlotte_hornets.png" id = "hornets1" alt = "hornets" onClick={() => (setSelectedImg("CHA") & setSelectedImgID("hornets1"))}/>
                    <img src = "/img/chicago_bulls.png" id = "bulls1" alt = "bulls" onClick={() => (setSelectedImg("CHI") & setSelectedImgID("bulls1"))} />
                    <img src = "/img/cleveland_cavaliers.png" id = "cavs1" alt = "cavaliers" onClick={() => (setSelectedImg("CLE") & setSelectedImgID("cavs1"))}/>
                    <img src = "/img/dallas_mavericks.png" id = "mavs1" alt = "mavericks" onClick={() => (setSelectedImg("DAL") & setSelectedImgID("mavs1"))}/>
                    <img src = "/img/denver_nuggets.png" id = "nuggets1" alt = "nuggets" onClick={() => (setSelectedImg("DEN") & setSelectedImgID("nuggets1"))}/>
                    <img src = "/img/detroit_pistons.png" id = "pistons1" alt = "pistons" onClick={() => (setSelectedImg("DET") & setSelectedImgID("pistons1"))}/>
                    <img src = "/img/goldenstate_warriors.png" id = "warriors1" alt = "warriors" onClick={() => (setSelectedImg("GSW") & setSelectedImgID("warriors1"))}/>
                    <img src = "/img/houston_rockets.png" id = "rockets1" alt = "rockets" onClick={() => (setSelectedImg("HOU") & setSelectedImgID("rockets1"))}/>
                    <img src = "/img/indiana_pacers.png" id = "pacers1" alt = "pacers" onClick={() => (setSelectedImg("IND") & setSelectedImgID("pacers1"))}/>
                    <img src = "/img/la_clippers.png" id = "clippers1" alt = "clippers" onClick={() => (setSelectedImg("LAC") & setSelectedImgID("clippers1"))}/>
                    <img src = "/img/la_lakers.png" id = "lakers1" alt = "lakers" onClick={() => (setSelectedImg("LAL") & setSelectedImgID("lakers1"))}/>
                    <img src = "/img/memphis_grizzlies.png" id = "grizzlies1" alt = "grizzlies" onClick={() => (setSelectedImg("MEM") & setSelectedImgID("grizzlies1"))}/>
                    <img src = "/img/miami_heat.png" id = "heat1" alt = "heat" onClick={() => (setSelectedImg("MIA") & setSelectedImgID("heat1"))}/>
                    <img src = "/img/milwaukee_bucks.png" id = "bucks1" alt = "bucks" onClick={() => (setSelectedImg("MIL") & setSelectedImgID("bucks1"))}/>
                    <img src = "/img/minnesota_timberwolves.png" id = "wolves1" alt = "timberwolves" onClick={() => (setSelectedImg("MIN") & setSelectedImgID("wolves1"))}/>
                    <img src = "/img/neworleans_pelicans.png" id = "pelicans1" alt = "pelicans" onClick={() => (setSelectedImg("NOP") & setSelectedImgID("pelicans1"))}/>
                    <img src = "/img/newyork_knicks.png" id = "knicks1" alt = "knicks" onClick={() => (setSelectedImg("NYK") & setSelectedImgID("knicks1"))}/>
                    <img src = "/img/okc_thunder.png" id = "thunder1" alt = "thunder" onClick={() => (setSelectedImg("OKC") & setSelectedImgID("thunder1"))}/>
                    <img src = "/img/orlando_magic.png" id = "magic1" alt = "magic" onClick={() => (setSelectedImg("ORL") & setSelectedImgID("magic1"))}/>
                    <img src = "/img/philidelphia_76ers.png" id = "sixers1" alt = "76ers" onClick={() => (setSelectedImg("PHI") & setSelectedImgID("sixers1"))}/>
                    <img src = "/img/phoenix_suns.png" id = "suns1" alt = "suns" onClick={() => (setSelectedImg("PHX") & setSelectedImgID("suns1"))}/>
                    <img src = "/img/portland_trailblazers.png" id = "blazers1" alt = "trailblazers" onClick={() => (setSelectedImg("POR") & setSelectedImgID("blazers1"))}/>
                    <img src = "/img/sacramento_kings.png" id = "kings1" alt = "kings" onClick={() => (setSelectedImg("SAC") & setSelectedImgID("kings1"))}/>
                    <img src = "/img/sanantonio_spurs.png" id = "spurs1" alt = "spurs" onClick={() => (setSelectedImg("SAS") & setSelectedImgID("spurs1"))}/>
                    <img src = "/img/toronto_raptors.png" id = "raptors1" alt = "raptors" onClick={() => (setSelectedImg("TOR") & setSelectedImgID("raptors1"))}/>
                    <img src = "/img/utah_jazz.png" id = "jazz1" alt = "jazz" onClick={() => (setSelectedImg("UTA") & setSelectedImgID("jazz1"))}/>
                    <img src = "/img/washington_wizards.png" id = "wizards1" alt = "wizards" onClick={() => (setSelectedImg("WAS") & setSelectedImgID("wizards1"))}/>
                 </div>
                 <div className = "settings">
                    <Form.Label column = "lg">Season</Form.Label>
                        <Form.Control  as="select" size="lg" value = {PickedImg.season} onChange = {PickedImg.handleChange}> 
                            {option.map((option) => ( // Form is a bootstrap component for styling, our values from the above declared options array of seasons 
                               <option key = {option.value}>{option.label}</option> 
                            ))}
                        </Form.Control>
                        <div className = "block-seperator">
                            <img src = "/img/vs.jpeg" id = "vsimg" alt = "vs"/>
                        </div>
                    <Form.Label column = "lg">Season Type</Form.Label>   
                    <Form.Control as="select" size="lg" value = {PickedImg.seasonStatus} onChange = {PickedImg.handleStatus}>
                            {seasonOption.map((seasonOption) => (// Form is a bootstrap component for styling, our values and changes are handled based off list we declared earlier
                               <option key = {seasonOption.value}>{seasonOption.label}</option> 
                            ))}
                        </Form.Control> 
                 </div>
                 <div className = 'img-grid-2'>  {/*in these image grids we call our set selected functions to later pass as parameters and highlight image containers */}
                 <img src = "/img/atlanta_hawks.png" id = "hawks2" alt = "hawks" onClick={() => (setSelectedImg2("ATL") & setSelectedImgID2("hawks2"))}/>
                    <img src = "/img/boston_celtics.png" id = "celtics2" alt = "celtics" onClick={() => (setSelectedImg2("BOS") & setSelectedImgID2("celtics2"))} />
                    <img src = "/img/brooklyn_nets.png" id = "nets2" alt = "nets" onClick={() => (setSelectedImg2("BKN") & setSelectedImgID2("nets2"))} />
                    <img src = "/img/charlotte_hornets.png" id = "hornets2" alt = "hornets" onClick={() => (setSelectedImg2("CHA") & setSelectedImgID2("hornets2"))}/>
                    <img src = "/img/chicago_bulls.png" id = "bulls2" alt = "bulls" onClick={() => (setSelectedImg2("CHI") & setSelectedImgID2("bulls2"))} />
                    <img src = "/img/cleveland_cavaliers.png" id = "cavs2" alt = "cavaliers" onClick={() => (setSelectedImg2("CLE") & setSelectedImgID2("cavs2"))}/>
                    <img src = "/img/dallas_mavericks.png" id = "mavs2" alt = "mavericks" onClick={() => (setSelectedImg2("DAL") & setSelectedImgID2("mavs2"))}/>
                    <img src = "/img/denver_nuggets.png" id = "nuggets2" alt = "nuggets" onClick={() => (setSelectedImg2("DEN") & setSelectedImgID2("nuggets2"))}/>
                    <img src = "/img/detroit_pistons.png" id = "pistons2" alt = "pistons" onClick={() => (setSelectedImg2("DET") & setSelectedImgID2("pistons2"))}/>
                    <img src = "/img/goldenstate_warriors.png" id = "warriors2" alt = "warriors" onClick={() => (setSelectedImg2("GSW") & setSelectedImgID2("warriors2"))}/>
                    <img src = "/img/houston_rockets.png" id = "rockets2" alt = "rockets" onClick={() => (setSelectedImg2("HOU") & setSelectedImgID2("rockets2"))}/>
                    <img src = "/img/indiana_pacers.png" id = "pacers2" alt = "pacers" onClick={() => (setSelectedImg2("IND") & setSelectedImgID2("pacers2"))}/>
                    <img src = "/img/la_clippers.png" id = "clippers2" alt = "clippers" onClick={() => (setSelectedImg2("LAC") & setSelectedImgID2("clippers2"))}/>
                    <img src = "/img/la_lakers.png" id = "lakers2" alt = "lakers" onClick={() => (setSelectedImg2("LAL") & setSelectedImgID2("lakers2"))}/>
                    <img src = "/img/memphis_grizzlies.png" id = "grizzlies2" alt = "grizzlies" onClick={() => (setSelectedImg2("MEM") & setSelectedImgID2("grizzlies2"))}/>
                    <img src = "/img/miami_heat.png" id = "heat2" alt = "heat" onClick={() => (setSelectedImg2("MIA") & setSelectedImgID2("heat2"))}/>
                    <img src = "/img/milwaukee_bucks.png" id = "bucks2" alt = "bucks" onClick={() => (setSelectedImg2("MIL") & setSelectedImgID2("bucks2"))}/>
                    <img src = "/img/minnesota_timberwolves.png" id = "wolves2" alt = "timberwolves" onClick={() => (setSelectedImg2("MIN") & setSelectedImgID2("wolves2"))}/>
                    <img src = "/img/neworleans_pelicans.png" id = "pelicans2" alt = "pelicans" onClick={() => (setSelectedImg2("NOP") & setSelectedImgID2("pelicans2"))}/>
                    <img src = "/img/newyork_knicks.png" id = "knicks2" alt = "knicks" onClick={() => (setSelectedImg2("NYK") & setSelectedImgID2("knicks2"))}/>
                    <img src = "/img/okc_thunder.png" id = "thunder2" alt = "thunder" onClick={() => (setSelectedImg2("OKC") & setSelectedImgID2("thunder2"))}/>
                    <img src = "/img/orlando_magic.png" id = "magic2" alt = "magic" onClick={() => (setSelectedImg2("ORL") & setSelectedImgID2("magic2"))}/>
                    <img src = "/img/philidelphia_76ers.png" id = "sixers2" alt = "76ers" onClick={() => (setSelectedImg2("PHI") & setSelectedImgID2("sixers2"))}/>
                    <img src = "/img/phoenix_suns.png" id = "suns2" alt = "suns" onClick={() => (setSelectedImg2("PHX") & setSelectedImgID2("suns2"))}/>
                    <img src = "/img/portland_trailblazers.png" id = "blazers2" alt = "trailblazers" onClick={() => (setSelectedImg2("POR") & setSelectedImgID2("blazers2"))}/>
                    <img src = "/img/sacramento_kings.png" id = "kings2" alt = "kings" onClick={() => (setSelectedImg2("SAC") & setSelectedImgID2("kings2"))}/>
                    <img src = "/img/sanantonio_spurs.png" id = "spurs2" alt = "spurs" onClick={() => (setSelectedImg2("SAS") & setSelectedImgID2("spurs2"))}/>
                    <img src = "/img/toronto_raptors.png" id = "raptors2" alt = "raptors" onClick={() => (setSelectedImg2("TOR") & setSelectedImgID2("raptors2"))}/>
                    <img src = "/img/utah_jazz.png" id = "jazz2" alt = "jazz" onClick={() => (setSelectedImg2("UTA") & setSelectedImgID2("jazz2"))}/>
                    <img src = "/img/washington_wizards.png" id = "wizards2" alt = "wizards" onClick={() => (setSelectedImg2("WAS") & setSelectedImgID2("wizards2"))}/>
            </div>
            </div>
        </div>
    )
}
export default ImageGrid;