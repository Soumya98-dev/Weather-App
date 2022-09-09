import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";

function App() {
  // *** INITIALIZING STATE FOR THE SEARCH INPUT
  const [search, setSearch] = React.useState(null);

  const onSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearchChange={onSearchChange}
      />
      <CurrentWeather />
    </div>
  );
}

export default App;
