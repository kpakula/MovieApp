import React from 'react';
import SearchBar from './components/SearchBar';
import {apiUrl} from "./utils/Api"
function App() {
  return (
    <div className="App">
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        {/* {apiUrl} */}
        <SearchBar/>
      </main>
    </div>
  );
}

export default App;
