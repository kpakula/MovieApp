import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { apiUrl } from "./utils/Api";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const search = e => {
    if (e.key === "Enter") {
      console.log(apiUrl + "&s=" + state.search);

      axios(apiUrl + "&s=" + state.search).then(data => {
        setState(prevState => {
          return { ...prevState, results: data.data.Search };
        });
      });

    }
  };

  const handleInput = event => {
    const currentSearch = event.target.value;

    setState(prevState => {
      return { ...prevState, search: currentSearch };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
