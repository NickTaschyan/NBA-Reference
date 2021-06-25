import React, { useState } from "react";
import Header from "./component/Header";
import ImageGrid from "./component/ImageGrid";
import SelectionInfo from "./component/SelectionInfo";
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

  return (
    <div className="App">
        <Header />
        <ImageGrid setSelectedImg = {setSelectedImg} setSelectedImg2 =  {setSelectedImg2}/>
        <SelectionInfo selectedImg={selectedImg} selectedImg2={selectedImg2}/>
    </div>
     );
  }

export default App;
