import React from "react";

export const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="p-4 mx-4 lg:mx-24 my-8 border-cyan-600 border-2">
      <label
        className="flex flex-col lg:flex-row justify-between"
        htmlFor="sort-dropdown"
      >
        Sort:
        <select
          id="sort"
          name="sort"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="id-asc">ID Ascending</option>
          <option value="id-desc">ID Descending</option>
          <option value="username-asc">Username Ascending</option>
          <option value="username-desc">Username Descending</option>
        </select>
      </label>
    </div>
  );
};
