import React from "react";

export const UserFilter = ({ value, onChange }) => {
  return (
    <label htmlFor="username-filter">
      Filter users
      <input
        id="username-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
