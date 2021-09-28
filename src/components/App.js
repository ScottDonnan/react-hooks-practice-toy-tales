import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToyList(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleSubmit(name, image) {
    const newToy = {name: name, image: image, likes: 0}
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(toy => {
      setToyList([...toyList, toy])
    })
  }

  function handleDelete(id){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const newToyList = toyList.filter(nlToy => nlToy.id !== id)
      setToyList(newToyList)
    })
  }

  function handleLikes(likes, id){
    likes++
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({'likes': likes})
    })
    .then(r => r.json())
    .then(updatedToy => {
      const updatedToyList = toyList.map(toy => {
        if (toy.id === id) {
          return updatedToy
        } else {
          return toy
        }
      })
      setToyList(updatedToyList)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} handleDelete={handleDelete} handleLikes={handleLikes}/>
    </>
  );
}

export default App;
