import React from "react";

export const UserFilter = ({ value, onChange }) => {
  return (
    <div className="p-4 mx-4 lg:mx-24 my-8 border-cyan-600 border-2">
      <label
        className="flex flex-col lg:flex-row justify-between"
        htmlFor="username-filter"
      >
        Filter users
        <input
          className="border-cyan-800 border-2"
          id="username-filter"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};
