import React from "react";
import PlantCard from "./PlantCard";

//1. When the app starts, I can see all plants.

function PlantList({ plants, deletePlant, url }) {
  return (
    <ul className="cards">{
      plants.map(plant => <PlantCard 
        key={plant.id}
        plant={plant}
        deletePlant={deletePlant}
        url={url} />)
    }</ul>
  );
}

export default PlantList;
