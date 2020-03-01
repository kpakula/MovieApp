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
      const currentSearch = splitSearchCurrentState();

      axios(apiUrl + "&s=" + currentSearch)
        .then(data => {
          const movies = data.data.Search;

          setConnection(false);
          if (movies) {
            setMovieNotExists(false);

            setState(prevState => {
              return { ...prevState, results: movies };
            });
          } else {
            setMovieNotExists(true);
          }
        })
        .catch(error => {
          setConnection(true);
        });
    }
  };

  function splitSearchCurrentState() {
    return state.search.split(' ').join('+')
  }



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
        {isMovieNotExists && <Exist />}
      </main>
    </div>
  );
}

export default App;
