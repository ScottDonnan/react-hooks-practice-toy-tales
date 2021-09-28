import React, {useState} from "react";

function ToyCard({name, image, likes, id, handleDelete, handleLikes}) {

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name + 'image'}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes(likes, id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
