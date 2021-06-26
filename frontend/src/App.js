import React, { useState } from "react";
import Header from "./component/Header";
import ImageGrid from "./component/ImageGrid";
import SelectionInfo from "./component/SelectionInfo";
import FinalResults from "./component/ResultLoader";
// export default class App extends Component {
//   state = {
      
//   };
//   componentDidMount = () => {
//     axios.get('getGameData').then(response => {
//       console.log(response.data);
//     });
//   }

function App() {
  const[selectedImg, setSelectedImg] = useState("LAL");
  const[selectedImg2, setSelectedImg2] = useState("BOS");
  const[selectedImgID, setSelectedImgID] = useState("lakers1");
  const[selectedImgID2, setSelectedImgID2] = useState("celtics2");
  const[selectedSeason, setSelectedSeason] = useState("2020-21");
  const[selectedSeasonStatus, setSeasonStatus] = useState("Regular Season");


  return (
    <div className="App">
        <Header />
        <ImageGrid setSelectedImg = {setSelectedImg} setSelectedImg2 =  {setSelectedImg2} 
        setSelectedImgID = {setSelectedImgID} setSelectedImgID2 = {setSelectedImgID2}
        setSelectedSeason = {setSelectedSeason} setSeasonStatus = {setSeasonStatus}
        />
        <SelectionInfo selectedImg={selectedImg} selectedImg2={selectedImg2} 
        selectedImgID={selectedImgID} selectedImgID2={selectedImgID2}
        selectedSeason = {selectedSeason} selectedSeasonStatus = {selectedSeasonStatus}
        />
        <FinalResults />

    </div>
     );
  }

export default App;
