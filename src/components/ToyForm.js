import React, {useState} from "react";

function ToyForm({handleSubmit}) {
  
  const [name, setName] = useState ('')
  const [input, setInput] = useState ('')

  function test(e){
    e.preventDefault()
    handleSubmit(name, input)
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={test}>
        <h3>Create a toy!</h3>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input
          onChange={e => setInput(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={input}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
