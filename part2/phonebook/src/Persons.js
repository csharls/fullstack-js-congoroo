const Person = ({ name, number }) => (
  <span>
    {name} {number}
  </span>
);

const Persons = ({ persons, searchText, handler }) => {
  return (
    <div>
      {persons
        .filter((p) => p.name.toLowerCase().includes(searchText))
        .map((p) => (
          <p key={p.id}>
          <Person  name={p.name} number={p.number} />
          <button onClick={handler} value={p.id}>delete</button>
          </p>
        ))}
    </div>
  );
};

export default Persons;
