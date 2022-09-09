import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, Geo_DB_Cities_URL } from "../../api.js";

function SearchBar({ search, setSearch, onSearchChange }) {
  // *** FIRED WHEN WE TYPE SOMETHING IN OUR INPUT FIELD('AsyncPaginate')
  const handleOnChange = (searchData) => {
    setSearch(searchData); //SETTING THE SEARCH DATA IN THE 'App.js' 'search' STATE
    onSearchChange(searchData); //SETTING THE VALUE OF 'onSearchChange' VALUE IN THE 'App.js'
  };

  // *** WE CAN USE 'fetch' OUTSIDE OF 'useEffect()' HOOK BECAUSE THE COMPONENT IS NOT LOADING WHEN THE PAGE LOADS
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
            value: `${city.latitude} ${city.longitude}`, //GETTING THE LAT & LONG FROM THE DATA
            label: `${city.name}, ${city.countryCode}`, //THIS IS WHAT IS VISIBLE TO THE END USER
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    // *** FROM OUR ASYNC-PAGINATE NPM REACT MODULE
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions} //INBUILT ATTRIBUTE OF THE MODULE
    />
  );
}

export default SearchBar;
