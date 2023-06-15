import { useState, useEffect } from "react";
import users from "../data/users.json";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  //simulate API call
  useEffect(() => {
    if (loading) return;

    setLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setUsersList(users);
        resolve();
      }, 2000);
    })
      .catch((err) => {
        setError(err?.message || "There was an error loading your users");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredList(users);
  }, [users]);

  useEffect(() => {
    if (!filter) return;

    const regex = new RegExp(filter, "i");
    filter &&
      setFilteredList(usersList.filter((user) => user.Username.match(regex)));
  }, [filter]);

  useEffect(() => {
    if (!sortOption) return;

    setFilteredList(sortList(sortOption));
  }, [sortOption]);

  const sortList = (sortOption) => {
    let sortedUsers;

    switch (sortOption) {
      case "id-asc":
        sortedUsers = [...filteredList].sort((a, b) => a.UserId - b.UserId);
        break;
      case "id-desc":
        sortedUsers = [...filteredList].sort((a, b) => b.UserId - a.UserId);
        break;
      case "username-asc":
        sortedUsers = [...filteredList].sort((a, b) =>
          a.Username.localeCompare(b.Username)
        );
        break;
      case "username-desc":
        sortedUsers = [...filteredList].sort((a, b) =>
          b.Username.localeCompare(a.Username)
        );
        break;
      default:
        sortedUsers = [...filteredList];
    }

    return sortedUsers;
  };

  const calculateAvgNameLength = (list) => {
    if (!list?.length) return 0;

    const userNamesLength = list.reduce((acc, { Username }) => {
      return acc + Username?.length;
    }, 0);

    return Math.floor(userNamesLength / list.length);
  };

  return (
    <div>
      {loading ? (
        <div>Loading your users...</div>
      ) : error ? (
        <div>There was an error loading your users</div>
      ) : (
        <div>
          <label htmlFor="username-filter">
            Filter users
            <input
              id="username-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </label>
          <label htmlFor="sort-dropdown">
            <select
              id="sort"
              name="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="id-asc">ID Ascending</option>
              <option value="id-desc">ID Descending</option>
              <option value="username-asc">Username Ascending</option>
              <option value="username-desc">Username Descending</option>
            </select>
          </label>
          <div>
            <p>Number of filtered users: {filteredList.length}</p>
          </div>
          <div>
            <p>
              Average username length: {calculateAvgNameLength(filteredList)}
            </p>
          </div>
          {filteredList?.map(({ UserId, firstname, lastname, Username }) => (
            <div key={UserId}>
              <h2>Users: </h2>
              <p>{UserId}</p>
              <p>{firstname}</p>
              <p>{lastname}</p>
              <p>{Username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
