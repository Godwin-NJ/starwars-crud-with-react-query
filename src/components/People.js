import React from "react";
import { useQuery } from "react-query";
import SinglePerson from "./SinglePerson";

const fetchPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  return response.json();
};

const People = () => {
  const { data, status, error } = useQuery("people", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>People</h2>
      {status === "pending" && <div>Loading Data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => {
            // console.log(people);
            return <SinglePerson key={person.name} person={person} />;
          })}
        </div>
      )}
    </div>
  );
};

export default People;
