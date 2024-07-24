import React, { useState } from "react";
import PlantList from "./PlantList";
//1. When the app starts, I can see all plants.
//3. I can mark a plant as "sold out". out of stock

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);
  
  function toggleStock () {
    setInStock(prev => !prev);
  }

  
  // const toggleFavorite = () => {
    //set favorite to its opposite value 
    //need previous version of state to know what to change it to
  //   setFavorite(prev => !prev)
  // }



  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
