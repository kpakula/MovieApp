import axios from "axios";
import React, { useState } from "react";

import Movies from "./components/movies/Movies";
import SearchBar from "./components/SearchBar";
import { apiUrl } from "./utils/Api";
import Connection from "./components/Info/Connection";
import Exist from "./components/Info/Exist";
import Loading from "./components/loading/Loading";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const [isConnection, setConnection] = useState(false);
  const [isMovieNotExists, setMovieNotExists] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(undefined);

  const search = e => {
    if (e.key === "Enter") {
      flushMovies();
      setLoadingStatus(true);
      const currentSearch = splitSearchCurrentState();

      setTimeout(() => {
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
              setTimeout(() => setMovieNotExists(false), 5000);
            }
          })
          .catch(error => {
            setConnection(true);
            setTimeout(() => setConnection(false), 5000);
          })
          .then(() => {
            setLoadingStatus(true);
          });
      }, 1200);
    }
  };

  function splitSearchCurrentState() {
    return state.search.split(" ").join("+");
  }

  function flushMovies() {
    setState(prevState => {
      return { ...prevState, results: [] };
    });
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
        {/* <Loading
          status={loadingStatus}
          movies={state.results}
        /> */}
      </main>
    </div>
  );
}

export default App;
