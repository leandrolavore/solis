import { useState, useEffect } from "react";
import users from "../data/users.json";
import "./App.css";
import { sortList, calculateAvgNameLength } from "./helpers";
import { SortDropdown, UserFilter, UserCard } from "./components";
import { PulseLoader } from "react-spinners";

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
        <>
          <div>Loading your users...</div>
          <PulseLoader />
        </>
      ) : error ? (
        <div>There was an error loading your users</div>
      ) : (
        <div className="my-8 mx-8 border-cyan-600 border-2 flex flex-col">
          <UserFilter value={filter} onChange={setFilter} />
          <SortDropdown value={sortOption} onChange={setSortOption} />
          <div className="p-4 mx-4 lg:mx-24 my-8 border-cyan-600 border-2">
            <p>Number of filtered users: {filteredList.length}</p>
          </div>
          <div className="p-4 mx-4 lg:mx-24 my-8 border-cyan-600 border-2">
            <p>
              Average username length: {calculateAvgNameLength(filteredList)}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4">
            {filteredList?.map((user) => (
              <UserCard {...user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
