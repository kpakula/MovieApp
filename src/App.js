import axios from "axios";
import React, { useState } from "react";

import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";
import { apiUrl } from "./utils/Api";
import Connection from "./components/Info/Connection";
import Exist from "./components/Info/Exist";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const [isConnection, setConnection] = useState(false);
  const [isMovieNotExists, setMovieNotExists] = useState(false);


  const search = e => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.search)
        .then(data => {
          setConnection(false);

          if (data.data.Search) {
            setMovieNotExists(false)
            setState(prevState => {
              return { ...prevState, results: data.data.Search };
            });
          } else {
              setMovieNotExists(true)
          }
        })
        .catch(error => {
          setConnection(true);
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
        <Movies movies={state.results} />
        {isConnection && <Connection />}
        {isMovieNotExists && <Exist/>}
      </main>
    </div>
  );
}

export default App;
