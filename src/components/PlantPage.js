import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants";
  const [plants, setPlants] = useState([]);
  const [searchPlants, setSearchPlants] = useState("");

  useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPlants(data));
	}, []);
  
function addPlant(newPlant){
  setPlants([...plants, newPlant]);
}

const updateSearch = (newSearch) => {
  setSearchPlants(newSearch)
}

const filteredPlants = plants.filter(plant => {
  if (plant.name.toLowerCase().includes(searchPlants.toLowerCase())){
    return true
  }
  return false
})

const deletePlant = (id) => {
  setPlants(
    plants.filter((plant) => {
      if (plant.id === id) {
        return false;
      }
      return true;
    })
  );
};

  return (
    <main>
      <NewPlantForm addPlant={addPlant} url={url} />
      <Search searchPlants={searchPlants} updateSearch={setSearchPlants} />
      <PlantList plants={filteredPlants} url={url} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
