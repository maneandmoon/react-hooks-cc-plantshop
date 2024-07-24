import React, { useState } from "react";

//2. I can add a new plant to the page by submitting the form.

function NewPlantForm({ addPlant, url }) {
  // const [name, setName] = useState ("");
  // const [image, setImage] = useState ("");
  // const [price, setPrice] = useState ("");

  //  "price": number

  const [form, setForm] = useState({
    name: '',
    image: '',
    price: ''

  });

  // const [price, setPrice] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch("http://localhost:6001/plants", {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json',},
  //     body: JSON.stringify(form),
  //   })
  //   .then(res => {
  //     if(res.ok){
  //       return res.json()
  //     } else {
  //       throw Error('post went wrong')
  //     }
  //   })
  //   .then(data => {
  //     addPlant(data)
  //     setForm({
  //       name: '',
  //       image: '',
  //       price: ''
  //     })
  //   })
  //   .catch(err => console.error('couldnt reach server'))
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch (url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form),
      })
    
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        throw Error('post went wrong')
      }
    })
    //on successful POST invoke addPlant to add new plant to page
    .then((newPlant) => addPlant(newPlant)) 
    .catch(err => console.error('couldnt reach server'))
  }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
        <form onSubmit={handleSubmit}>
          {/* //onSubmit={handleSubmit} will be a cb fxn */}
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        // value={name} 
        // onChange={(e) => setName(e.target.value)}
        value={form.name}
        onChange={e => handleChange(e)}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        // value={image}
        // onChange={(e) => setImage(e.target.value)}
        value={(form.image)}
        onChange={e => handleChange(e)} 
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        // value={price}
        // onChange={(e) => setPrice(parseFloat(e.target.value))}
        value={form.price}
        onChange={e => handleChange(e)} 


        // value={(form.price)}
        // onChange={(e) => handleChange(e)}
        //parseFloat((e.target.value))) for price be a number and not a string 
        //parseFloat and maybe .num.toFixed(2) for 2 places after the decimal? 
        // setPrice(parseFloat(e.target.value).toFixed(2)) - get NaN cannot be parsed or is out of range  var result = parseFloat("100.334445").toFixed(2); result 100.33
        //parseInt
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
