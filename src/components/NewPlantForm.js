import React, { useState } from "react";

function NewPlantForm({ addPlant, url }) {
  const [name, setName] = useState ("");
  const [image, setImage] = useState ("");
  const [price, setPrice] = useState ("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch (url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      })
    })
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        throw Error('post went wrong')
      }
    })
    .then((newPlant) => addPlant(newPlant)) 
    .catch(err => console.error('couldnt reach server'))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
    
        //when using "enter" button the price is 2 numbers after decimal; when clicking on add plant, 
        //there is no limit on # after the decimal point. Using.toFixed(2) limit the user from typing 
        //in the # "Please enter a valid value" but get error.  step="0.01"Review later.
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
