import { useState, useEffect } from "react";
import users from "../data/users.json";
import "./App.css";
import { sortList, calculateAvgNameLength } from "./helpers";
import { SortDropdown, UserFilter, UserCard } from "./components";

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

    setFilteredList(sortList(sortOption, [...filteredList]));
  }, [sortOption]);

  return (
    <div>
      {loading ? (
        <div>Loading your users...</div>
      ) : error ? (
        <div>There was an error loading your users</div>
      ) : (
        <div>
          <UserFilter value={filter} onChange={setFilter} />
          <SortDropdown value={sortOption} onChange={setSortOption} />
          <div>
            <p>Number of filtered users: {filteredList.length}</p>
          </div>
          <div>
            <p>
              Average username length: {calculateAvgNameLength(filteredList)}
            </p>
          </div>
          {filteredList?.map((user) => (
            <UserCard {...user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
