import React from "react";
import PlantCard from "./PlantCard";

//1. When the app starts, I can see all plants.

function PlantList({ plants }) {
  return (
    <ul className="cards">{
      plants.map(plant => <PlantCard 
        key={plant.id}
        plant={plant} />)
    }</ul>
  );
}

export default PlantList;
