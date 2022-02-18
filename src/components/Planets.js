import React, { useState } from "react";
import { useQuery } from "react-query";
import SinglePlanet from "./SinglePlanet";

const fetchPlanets = async (page) => {
  // const [_key, page] = queryKey;
  const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Planents = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planets", page], () =>
    fetchPlanets(page)
  );
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {/* pagination  */}
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

      {status === "pending" && <div>Loading Data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => {
            return <SinglePlanet key={planet.name} planet={planet} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Planents;
