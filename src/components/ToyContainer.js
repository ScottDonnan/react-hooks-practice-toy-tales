import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleDelete, handleLikes}) {
  return (
    <div id="toy-collection">
      {toyList.map(toy => <ToyCard key={toy.id} handleDelete={handleDelete} handleLikes={handleLikes} {...toy} />)}
    </div>
  );
}

export default ToyContainer;
