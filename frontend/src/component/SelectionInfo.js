import React from 'react';
var IDList1 = ["hawks1", "celtics1", "nets1", "hornets1", "bulls1", "cavs1", "mavs1", "nuggets1", "pistons1", "warriors1", "rockets1", "pacers1", "clippers1", "lakers1", "grizzlies1", "heat1", "bucks1", "wolves1", "pelicans1", "knicks1", "thunder1", "magic1", "sixers1", "suns1", "blazers1", "kings1", "spurs1", "raptors1", "jazz1", "wizards1"];
var IDList2 = ["hawks2", "celtics2", "nets2", "hornets2", "bulls2", "cavs2", "mavs2", "nuggets2", "pistons2", "warriors2", "rockets2", "pacers2", "clippers2", "lakers2", "grizzlies2", "heat2", "bucks2", "wolves2", "pelicans2", "knicks2", "thunder2", "magic2", "sixers2", "suns2", "blazers2", "kings2", "spurs2", "raptors2", "jazz2", "wizards2"];


const SelectionInfo = ({selectedImg, selectedImg2, selectedImgID, selectedImgID2}) => {
    if (selectedImgID != null){
    checkSelected();
    }
    return (        // shows selected teams block below the team images 
        <div className = "maindiv">
           <div className = "teamchoice">
                {selectedImg}
           </div>
           <div className = "teamchoice">

           </div>
           <div className = "teamchoice">
                 {selectedImg2}
           </div>
        </div> 
    )
    
    
    function checkSelected(){
        try {
            for (var i = 0; i < IDList1.length; i++){       // sets selected images borders to become highlighted, then also resets the rest to default colors 
                if (IDList1[i] === selectedImgID){
                    document.getElementById(selectedImgID).style.cssText = 'border-width: 6px; border-color:rgb(46, 197, 46);';
             }
             else {
                    document.getElementById(IDList1[i]).style.cssText = 'border-width: 4px; border-color: red;';
             }
        }
        for (var j = 0; j < IDList2.length; j++){
            if (IDList2[j] === selectedImgID2){
                document.getElementById(selectedImgID2).style.cssText = 'border-width: 6px; border-color: magenta;';
         }
         else {
                document.getElementById(IDList2[j]).style.cssText = 'border-width: 4px; border-color: rgb(54, 106, 250);';
         }
    }
        } catch (error) {
            console.log("Early execution, null values");       
        }


    }
}

export default SelectionInfo;


