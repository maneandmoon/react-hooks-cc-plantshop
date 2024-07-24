import React from "react";

//4. I can search for plants by their name and see a filtered list of plants.

function Search({ searchPlants, updateSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlants}
        onChange={(e) => updateSearch(e.target.value)}
        
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
