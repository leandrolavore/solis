import React from "react";

export const SortDropdown = ({ value, onChange }) => {
  return (
    <label htmlFor="sort-dropdown">
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
  );
};
