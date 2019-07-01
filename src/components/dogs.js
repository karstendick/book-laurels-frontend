import React from 'react'

const Dogs = ({ dogs }) => {
  return (
    <div>
      <center><h1>Dog List</h1></center>
      {dogs.map((dog) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{dog.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{dog.num}</h6>
            <p class="card-text">{dog.updated_at}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Dogs;
