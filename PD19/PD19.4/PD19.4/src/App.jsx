import { useState } from "react";

const users = [
  { firstName: "Toyota", id: 1 },
  { firstName: "BMW", id: 2 },
  { firstName: "Mercedes-Benz", id: 3 },
  { firstName: "Volkswagen", id: 4 },
  { firstName: "Nissan", id: 5 },
  { firstName: "Honda", id: 6 },
  { firstName: "Audi", id: 7 },
  { firstName: "Chevrolet", id: 8 },
  { firstName: "Hyundai", id: 9 },
  { firstName: "Lexus", id: 10 },
];

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
