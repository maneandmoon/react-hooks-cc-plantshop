import React, { useState } from "react";
import PlantList from "./PlantList";
//1. When the app starts, I can see all plants.
//3. I can mark a plant as "sold out". out of stock

function PlantCard({ plant, deletePlant, url  }) {
  const [inStock, setInStock] = useState(true);
  
  function toggleStock () {
    setInStock(prev => !prev);
  }
// const toggleFavorite = () => {
    //set favorite to its opposite value 
    //need previous version of state to know what to change it to
  //   setFavorite(prev => !prev)
  // }

  // 2. I can delete a plant and it is still gone when I refresh the page.
  //pass prop deletePlant down from plant page to plant list, to plant card

  const handleDelete = () => {
    fetch(`${url}/${plant.id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if(res.ok){
        deletePlant(plant.id)
      } else {
        throw Error('delete went wrong')
      }
    })
    .catch(err => console.error('couldnt reach server'))
  }


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
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
