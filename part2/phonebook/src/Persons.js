const Person = ({ name, number }) => (
  <p key={name}>
    {name} {number}
  </p>
);

const Persons = ({ persons, searchText }) => {
  return (
    <div>
      {persons
        .filter((p) => p.name.toLowerCase().includes(searchText))
        .map((p) => (
          <Person name={p.name} number={p.number} />
        ))}
    </div>
  );
};

export default Persons;
