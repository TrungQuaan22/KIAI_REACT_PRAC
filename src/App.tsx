import React from "react";
import { people, Person } from "./data";
import { getImageUrl } from "./utils";

export default function App() {
  const chemistPerson = people.filter(
    (person: Person) => person.profession === "chemist"
  );
  const otherPerson = people.filter(
    (person: Person) => person.profession !== "chemist"
  );

  const listChemistPerson = chemistPerson.map((person: Person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const listOtherPerson = otherPerson.map((person: Person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <div className="card">
        <h2>Scientists</h2>
        <ul>{listChemistPerson}</ul>
      </div>
      <div className="card">
        <h2>Other</h2>
        <ul>{listOtherPerson}</ul>
      </div>

    </article>
  );
}
