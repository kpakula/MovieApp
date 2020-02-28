import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import {apiUrl} from "./utils/Api"
function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const search = (e) => {
    if (e.key === "Enter") {
      
    }
  }

  const handleInput = (event) => {
    const currentSearch = event.target.value;

    setState(prevState => {
      return {...prevState, search: currentSearch}
    });

    console.log(state.search);
  }




  return (
    <div className="App">
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput}/>
      </main>
    </div>
  );
}

export default App;
