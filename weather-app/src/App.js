import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
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
    </div>
  );
}

export default App;
