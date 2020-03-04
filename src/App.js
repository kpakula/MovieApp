import axios from "axios";
import React, { useState } from "react";

import Movies from "./components/movies/Movies";
import SearchBar from "./components/SearchBar";
import { apiUrl } from "./utils/Api";
import Connection from "./components/Info/Connection";
import Exist from "./components/Info/Exist";
import Popup from "./components/Popup/Popup";
import MovieIcon from "@material-ui/icons/Movie";
import LoadingScreen from "./components/loading/LoadingScreen";
// import Loading from "react-loading";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  const [isConnection, setConnection] = useState(false);
  const [isMovieNotExists, setMovieNotExists] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const TITLE = "Movies";

  const search = e => {
    if (e.key === "Enter") {
      flushMovies();
      setLoading(true)
      const currentSearch = changeSpaceBySignPlus();
      setTimeout(() => {
        getMoviesRequest(currentSearch);
      }, 1200);
    }
  };

  const changeSpaceBySignPlus = () => {
    return state.search.split(" ").join("+");
  };

  const flushMovies = () => {
    setState(prevState => {
      return { ...prevState, results: [] };
    });
  };

  const handleInput = (event) => {
    const currentSearch = event.target.value;

    setState(prevState => {
      return { ...prevState, search: currentSearch };
    });
  };

  const openPopup = id => {
    axios.get(apiUrl + "&i=" + id).then(({ data }) => {
      let current = data;
      console.log(current);

      setState(prevState => {
        return { ...prevState, selected: current };
      });
    });
  };

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>
          <MovieIcon fontSize="large" color="primary" /> {TITLE}{" "}
          <MovieIcon fontSize="large" color="primary" />
        </h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search} />

        {/* Loading screen */}
        {isLoading && <LoadingScreen/>}
        <Movies movies={state.results} openPopup={openPopup} />

        {/* If problem with connection*/}
        {isConnection && <Connection />}
        {isMovieNotExists && <Exist />}

        {/* Popup on click the movie */}
        {typeof state.selected.Title != "undefined" ? (
          <Popup current={state.selected} close={closePopup} />
        ) : null}
      </main>
    </div>
  );

  function getMoviesRequest(currentSearch) {
    axios(apiUrl + "&s=" + currentSearch)
      .then(data => {
        const movies = data.data.Search;
        setConnection(false);
        checkMoviesExist(movies);
      })
      .catch(error => {
        setLoading(false)
        setConnection(true);
        console.error(error);
        setTimeout(() => setConnection(false), 3500);
      });
  }

  function checkMoviesExist(movies) {
    if (movies) {
      setMovieNotExists(false);
      setLoading(false);
      setState(prevState => {
        return { ...prevState, results: movies };
      });
    } else {
      setLoading(false);
      setMovieNotExists(true);
      setTimeout(() => setMovieNotExists(false), 3500);
    }
  }
}

export default App;
