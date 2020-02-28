import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import {apiUrl} from "./utils/Api"
import axios from "axios";
import { apiKey } from './utils/ApiKey';

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + apiKey + "&s=" + state.search)
      .then ((data) => {
        console.log(data)
      })
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
        <SearchBar handleInput={handleInput} search={search}/>
      </main>
    </div>
  );
}

export default App;
