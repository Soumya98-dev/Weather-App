import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, Geo_DB_Cities_URL } from "../../api.js";

function SearchBar({ search, setSearch, onSearchChange }) {
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // *** loadOptions take current value of the search input as the first parameter
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${Geo_DB_Cities_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoAPIOptions
      );
      const response_1 = await response.json();
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`, //getting lat & long from the data
            label: `${city.name}, ${city.country}`, //this is what the user can see
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default SearchBar;
