import React, { useState } from "react";

function PlantCard({ plant, deletePlant, url  }) {
  const [inStock, setInStock] = useState(true);
  
  function toggleStock () {
    setInStock(prev => !prev);
  }

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
