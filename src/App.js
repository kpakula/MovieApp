import axios from 'axios';
import React, { useState } from 'react';

import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import { apiUrl } from './utils/Api';
import Connection from './components/Connection';

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const search = e => {
    if (e.key === "Enter") {

      axios(apiUrl + "&s=" + state.search)
        .then(data => {
          setState(prevState => {
            return { ...prevState, results: data.data.Search };
          });
        })
        .catch(error => {});
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
        <Movies movies={state.results} />
        <Connection />
      </main>
    </div>
  );
}

export default App;
