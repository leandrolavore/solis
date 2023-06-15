import React from "react";

export const UserCard = ({
  UserId,
  firstname,
  lastname,
  Username,
  PhoneNumber,
  DateOfBirth,
  Email,
}) => {
  return (
    <div key={UserId}>
      <h2>User: </h2>
      <p>{UserId}</p>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{Username}</p>
      <p>{PhoneNumber}</p>
      <p>{DateOfBirth}</p>
      <p>{Email}</p>
    </div>
  );
};
