import React from "react";

const SinglePlanet = ({ planet }) => {
  const { name, population, terrain } = planet;
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {terrain}</p>
    </div>
  );
};

export default SinglePlanet;
