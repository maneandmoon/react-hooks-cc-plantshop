import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants";
  //1. When the app starts, I can see all plants.
  
  const [plants, setPlants] = useState([]);
  
  //2. I can add a new plant to the page by submitting the form.

  const [searchPlants, setSearchPlants] = useState("");

  useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPlants(data));
	}, []);
 
//2. I can add a new plant to the page by submitting the form.
  
function addPlant(newPlant){
  setPlants([...plants, newPlant]);
}

//4. I can search for plants by their name and see a filtered list of plants. 

const updateSearch = (newSearch) => {
  setSearchPlants(newSearch)
}
// const filteredListings = listings.filter(el => {
//   //compare search with el.description
//   //make sure to lowercase everything
//   //check if el.description contains search
//   if(el.description.toLowerCase().includes(search.toLowerCase())){
//     return true 
//   }
//   return false
// })

const filteredPlants = plants.filter(plant => {
  if (plant.name.toLowerCase().includes(searchPlants.toLowerCase())){
    return true
  }
  return false
})

  return (
    <main>
      <NewPlantForm addPlant={addPlant} url={url} />
      <Search searchPlants={searchPlants} updateSearch={setSearchPlants} />
      <PlantList plants={filteredPlants} />

      {/* change plants={plants} to plants={filteredPlants}  */}
    </main>
  );
}

export default PlantPage;
