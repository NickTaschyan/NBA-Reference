import './App.css';
function App() {
  return (
    <div className="App">
      <header>
    <h1>NBA Matchup Reference</h1>
    <h2>A Simple React App that utilizes the NBA API</h2>
      </header>
    <select class="image-picker show-html">
  <option data-img-src="/img/la_lakers.png" data-img-class="first" data-img-alt="Page 1" value="1">  Page 1  </option>
  <option data-img-src="img/02.png" data-img-alt="Page 2" value="2">  Page 2  </option>
  <option data-img-src="img/03.png" data-img-alt="Page 3" value="3">  Page 3  </option>
  <option data-img-src="img/04.png" data-img-alt="Page 4" value="4">  Page 4  </option>
  <option data-img-src="img/05.png" data-img-alt="Page 5" value="5">  Page 5  </option>
  <option data-img-src="img/06.png" data-img-alt="Page 6" value="6">  Page 6  </option>
  <option data-img-src="img/07.png" data-img-alt="Page 7" value="7">  Page 7  </option>
  <option data-img-src="img/08.png" data-img-alt="Page 8" value="8">  Page 8  </option>
  <option data-img-src="img/09.png" data-img-alt="Page 9" value="9">  Page 9  </option>
  <option data-img-src="img/10.png" data-img-alt="Page 10" value="10"> Page 10 </option>
  <option data-img-src="img/11.png" data-img-alt="Page 11" value="11"> Page 11 </option>
  <option data-img-src="img/12.png" data-img-alt="Page 12" data-img-class="last" value="12"> Page 12 </option>
    </select>
      </div>
  );
}

export default App;
